import React, { createContext, useContext, useState, useEffect } from 'react';
import { COMMUNITY_SPACES, INITIAL_POSTS, STUDY_GROUPS, MENTORS_DIRECTORY, LEADERBOARD_USERS } from '../data/communityData';

const CommunityContext = createContext();

export function CommunityProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_posts');
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch {
      return INITIAL_POSTS;
    }
  });

  const [studyGroups, setStudyGroups] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_study_groups');
      return saved ? JSON.parse(saved) : STUDY_GROUPS;
    } catch {
      return STUDY_GROUPS;
    }
  });

  const [mentors, setMentors] = useState(MENTORS_DIRECTORY);
  const [leaderboard, setLeaderboard] = useState(LEADERBOARD_USERS);

  // Direct Messages: { 'dr_sarah_chen': [ { id, sender, text, timestamp } ] }
  const [directMessages, setDirectMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('edumind_dms');
      return saved ? JSON.parse(saved) : {
        'dr_sarah_chen': [
          { id: 'dm-1', sender: 'dr_sarah_chen', text: 'Hi Alex! Loved your questions in Module 1. How is your project going?', timestamp: 'Yesterday 14:30' },
          { id: 'dm-2', sender: 'alexrivera', text: 'Thanks Dr. Sarah! Working on asynchronous worker queues right now.', timestamp: 'Yesterday 15:10' }
        ]
      };
    } catch {
      return {};
    }
  });

  // Flagged posts for admin moderation
  const [flaggedPostIds, setFlaggedPostIds] = useState([]);

  useEffect(() => {
    localStorage.setItem('edumind_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('edumind_study_groups', JSON.stringify(studyGroups));
  }, [studyGroups]);

  useEffect(() => {
    localStorage.setItem('edumind_dms', JSON.stringify(directMessages));
  }, [directMessages]);

  // Vote on post
  const votePost = (postId, direction) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        if (p.userVote === direction) {
          // Undo vote
          return {
            ...p,
            upvotes: direction === 'up' ? p.upvotes - 1 : p.upvotes,
            downvotes: direction === 'down' ? p.downvotes - 1 : p.downvotes,
            userVote: null
          };
        } else {
          // New vote or switch
          const wasUp = p.userVote === 'up';
          const wasDown = p.userVote === 'down';
          return {
            ...p,
            upvotes: direction === 'up' ? (wasDown ? p.upvotes + 1 : p.upvotes + 1) : (wasUp ? p.upvotes - 1 : p.upvotes),
            downvotes: direction === 'down' ? (wasUp ? p.downvotes + 1 : p.downvotes + 1) : (wasDown ? p.downvotes - 1 : p.downvotes),
            userVote: direction
          };
        }
      }
      return p;
    }));
  };

  // Vote on poll
  const votePoll = (postId, optionId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId && p.pollData && !p.pollData.userVotedOption) {
        const updatedOptions = p.pollData.options.map(opt => {
          if (opt.id === optionId) {
            return { ...opt, votes: opt.votes + 1 };
          }
          return opt;
        });
        return {
          ...p,
          pollData: {
            ...p.pollData,
            totalVotes: p.pollData.totalVotes + 1,
            userVotedOption: optionId,
            options: updatedOptions
          }
        };
      }
      return p;
    }));
  };

  // Add a new post
  const createPost = ({ title, content, spaceId = 'all', category = 'discussion', projectMeta = null, pollOptions = null }) => {
    const newPost = {
      id: `post_${Date.now()}`,
      spaceId,
      category,
      title,
      content,
      author: {
        username: 'alexrivera',
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        reputation: 840,
        badges: ['Verified Learner']
      },
      createdAt: 'Just now',
      upvotes: 1,
      downvotes: 0,
      userVote: 'up',
      projectMeta: projectMeta ? {
        liveDemo: projectMeta.liveDemo || '',
        github: projectMeta.github || '',
        previewImage: projectMeta.previewImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
      } : null,
      pollData: pollOptions ? {
        totalVotes: 0,
        userVotedOption: null,
        options: pollOptions.map((opt, i) => ({ id: `opt-${i + 1}`, label: opt, votes: 0 }))
      } : null,
      comments: []
    };

    setPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  // Add a comment to post
  const addComment = (postId, commentContent) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const newComment = {
          id: `c_${Date.now()}`,
          author: {
            username: 'alexrivera',
            name: 'Alex Rivera',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
            reputation: 840,
            badges: ['Verified Learner']
          },
          content: commentContent,
          createdAt: 'Just now',
          upvotes: 0,
          isAcceptedAnswer: false
        };
        return {
          ...p,
          comments: [...p.comments, newComment]
        };
      }
      return p;
    }));
  };

  // Mark Best Answer
  const markBestAnswer = (postId, commentId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: p.comments.map(c => ({
            ...c,
            isAcceptedAnswer: c.id === commentId ? !c.isAcceptedAnswer : false
          }))
        };
      }
      return p;
    }));
  };

  // Send Direct Message
  const sendDirectMessage = (recipientUsername, text) => {
    const newMsg = {
      id: `msg_${Date.now()}`,
      sender: 'alexrivera',
      text,
      timestamp: 'Just now'
    };

    setDirectMessages(prev => ({
      ...prev,
      [recipientUsername]: [...(prev[recipientUsername] || []), newMsg]
    }));

    // Simulate realistic peer reply after short delay
    setTimeout(() => {
      const replyMsg = {
        id: `msg_reply_${Date.now()}`,
        sender: recipientUsername,
        text: `Thanks for reaching out! I checked the codebase — great architecture choices. Let's collaborate during the upcoming Hackathon!`,
        timestamp: 'Just now'
      };
      setDirectMessages(current => ({
        ...current,
        [recipientUsername]: [...(current[recipientUsername] || []), replyMsg]
      }));
    }, 2500);
  };

  // Toggle study group membership
  const toggleStudyGroup = (groupId) => {
    setStudyGroups(prev => prev.map(sg => {
      if (sg.id === groupId) {
        return {
          ...sg,
          isMember: !sg.isMember,
          memberCount: sg.isMember ? sg.memberCount - 1 : sg.memberCount + 1
        };
      }
      return sg;
    }));
  };

  // Flag post for moderation
  const flagPost = (postId) => {
    if (!flaggedPostIds.includes(postId)) {
      setFlaggedPostIds(prev => [...prev, postId]);
    }
  };

  return (
    <CommunityContext.Provider
      value={{
        spaces: COMMUNITY_SPACES,
        posts,
        studyGroups,
        mentors,
        leaderboard,
        directMessages,
        flaggedPostIds,
        votePost,
        votePoll,
        createPost,
        addComment,
        markBestAnswer,
        sendDirectMessage,
        toggleStudyGroup,
        flagPost
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (!context) throw new Error('useCommunity must be used within CommunityProvider');
  return context;
}
