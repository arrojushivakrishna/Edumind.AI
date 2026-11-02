import React, { useState } from 'react';
import { 
  Users, MessageSquare, ThumbsUp, ThumbsDown, CheckCircle2, Sparkles, 
  Send, Plus, Filter, Search, Award, ExternalLink, Code2, BarChart2, Shield 
} from 'lucide-react';
import { useCommunity } from '../context/CommunityContext';
import { useAuth } from '../context/AuthContext';

export function CommunityPage({ navigate, onOpenDM }) {
  const { 
    spaces, posts, studyGroups, mentors, leaderboard, 
    votePost, votePoll, createPost, addComment, markBestAnswer, toggleStudyGroup, flagPost 
  } = useCommunity();
  const { user } = useAuth();

  const [activeSpace, setActiveSpace] = useState('all');
  const [activeSort, setActiveSort] = useState('trending'); // 'trending' | 'newest' | 'unanswered'
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'study_groups' | 'mentors' | 'leaderboard'
  const [searchQuery, setSearchQuery] = useState('');

  // New Post Modal
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [postForm, setPostForm] = useState({
    title: '',
    content: '',
    spaceId: 'all',
    category: 'discussion',
    demoUrl: '',
    githubUrl: '',
    pollOptions: ['', '']
  });

  // Comment input per post
  const [commentInputs, setCommentInputs] = useState({});

  const filteredPosts = posts.filter(p => {
    const matchesSpace = activeSpace === 'all' || p.spaceId === activeSpace;
    const matchesSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpace && matchesSearch;
  }).sort((a, b) => {
    if (activeSort === 'trending') return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
    if (activeSort === 'unanswered') return a.comments.length - b.comments.length;
    return b.id.localeCompare(a.id);
  });

  const handleCreatePostSubmit = (e) => {
    e.preventDefault();
    if (!postForm.title.trim() || !postForm.content.trim()) return;

    createPost({
      title: postForm.title,
      content: postForm.content,
      spaceId: postForm.spaceId,
      category: postForm.category,
      projectMeta: postForm.category === 'showcase' ? {
        liveDemo: postForm.demoUrl,
        github: postForm.githubUrl
      } : null,
      pollOptions: postForm.category === 'poll' ? postForm.pollOptions.filter(o => o.trim()) : null
    });

    setIsNewPostOpen(false);
    setPostForm({
      title: '',
      content: '',
      spaceId: 'all',
      category: 'discussion',
      demoUrl: '',
      githubUrl: '',
      pollOptions: ['', '']
    });
  };

  const handleAddComment = (postId) => {
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    addComment(postId, text);
    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              EduMind Developer Community
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Collaborate, share showcased projects, solve peer questions, and join dedicated study cohorts.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setIsNewPostOpen(true)}
              className="btn btn-primary btn-sm"
            >
              <Plus size={16} /> Create Community Post
            </button>
          </div>
        </div>

        {/* Top Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '2rem',
          gap: '0.5rem',
          overflowX: 'auto'
        }}>
          {[
            { key: 'feed', label: 'Discussion Feed & Showcase' },
            { key: 'study_groups', label: `Study Groups (${studyGroups.length})` },
            { key: 'mentors', label: `Mentorship Directory (${mentors.length})` },
            { key: 'leaderboard', label: 'Reputation Leaderboard' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '0.75rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: activeTab === tab.key ? 700 : 500,
                color: activeTab === tab.key ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                borderBottom: activeTab === tab.key ? '2px solid var(--brand-primary-light)' : '2px solid transparent',
                background: 'transparent',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: FEED */}
        {activeTab === 'feed' && (
          <div className="grid grid-cols-1 lg:grid-cols-4" style={{ gap: '2rem' }}>
            {/* Left: Spaces Sidebar (1 Col) */}
            <div>
              <div className="card" style={{ padding: '1rem', position: 'sticky', top: '90px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', padding: '0 0.5rem' }}>
                  Topic Spaces
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {spaces.map(space => (
                    <button
                      key={space.id}
                      onClick={() => setActiveSpace(space.id)}
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        textAlign: 'left',
                        fontSize: '0.8125rem',
                        fontWeight: activeSpace === space.id ? 700 : 500,
                        color: activeSpace === space.id ? 'var(--brand-primary-light)' : 'var(--text-secondary)',
                        background: activeSpace === space.id ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {space.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Posts Feed (3 Cols) */}
            <div style={{ gridColumn: 'span 3' }}>
              {/* Sort & Search Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['trending', 'newest', 'unanswered'].map(s => (
                    <button
                      key={s}
                      onClick={() => setActiveSort(s)}
                      className={`btn btn-sm ${activeSort === s ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ textTransform: 'capitalize', fontSize: '0.75rem' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.4rem 0.75rem'
                }}>
                  <Search size={14} color="var(--text-muted)" />
                  <input
                    type="text"
                    placeholder="Filter posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.8125rem', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              {/* Posts List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {filteredPosts.map(post => {
                  const acceptedAnswer = post.comments.find(c => c.isAcceptedAnswer);

                  return (
                    <div key={post.id} className="card" style={{ padding: '1.5rem' }}>
                      {/* Post Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            style={{ width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer' }}
                            onClick={() => navigate(`u/${post.author.username}`)}
                          />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span 
                                onClick={() => navigate(`u/${post.author.username}`)}
                                style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', cursor: 'pointer' }}
                              >
                                {post.author.name}
                              </span>
                              {(post.author.badges || []).map((b, bIdx) => (
                                <span key={bIdx} className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
                                  {b}
                                </span>
                              ))}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {post.createdAt} • in <strong style={{ color: 'var(--brand-primary-light)' }}>{post.spaceId}</strong>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <span className="badge badge-muted" style={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                            {post.category}
                          </span>
                          <button
                            onClick={() => { flagPost(post.id); alert('Post flagged for admin moderation review.'); }}
                            className="btn btn-ghost btn-sm"
                            style={{ padding: '0.2rem', color: 'var(--text-muted)' }}
                            title="Report post"
                          >
                            <Shield size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Title & Body */}
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                        {post.title}
                      </h3>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, whiteSpace: 'pre-wrap', marginBottom: '1.25rem' }}>
                        {post.content}
                      </p>

                      {/* Project Showcase Meta if category is showcase */}
                      {post.projectMeta && (
                        <div style={{
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1rem',
                          marginBottom: '1.25rem'
                        }}>
                          {post.projectMeta.previewImage && (
                            <img
                              src={post.projectMeta.previewImage}
                              alt="Project Preview"
                              style={{ width: '100%', maxHeight: '240px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem' }}
                            />
                          )}
                          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {post.projectMeta.liveDemo && (
                              <a href={post.projectMeta.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                <ExternalLink size={14} /> Live Project Demo
                              </a>
                            )}
                            {post.projectMeta.github && (
                              <a href={post.projectMeta.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                                <Code2 size={14} /> View GitHub Repository
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Interactive Poll if category is poll */}
                      {post.pollData && (
                        <div style={{
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1.25rem',
                          marginBottom: '1.25rem'
                        }}>
                          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <BarChart2 size={16} /> Community Poll ({post.pollData.totalVotes} Total Votes)
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {post.pollData.options.map(opt => {
                              const pct = post.pollData.totalVotes > 0 ? Math.round((opt.votes / post.pollData.totalVotes) * 100) : 0;
                              const isSelected = post.pollData.userVotedOption === opt.id;

                              return (
                                <div
                                  key={opt.id}
                                  onClick={() => votePoll(post.id, opt.id)}
                                  style={{
                                    padding: '0.75rem 1rem',
                                    background: isSelected ? 'rgba(2, 132, 199, 0.15)' : 'var(--bg-card)',
                                    border: `1px solid ${isSelected ? 'var(--brand-primary-light)' : 'var(--border-subtle)'}`,
                                    borderRadius: 'var(--radius-sm)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {/* Progress bar background fill */}
                                  <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: `${pct}%`,
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    zIndex: 0
                                  }} />
                                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
                                    <span style={{ fontWeight: isSelected ? 700 : 500, color: 'var(--text-primary)' }}>{opt.label}</span>
                                    <span style={{ fontWeight: 700, color: 'var(--brand-primary-light)' }}>{pct}% ({opt.votes})</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Pinned Best Answer if exists */}
                      {acceptedAnswer && (
                        <div style={{
                          background: 'rgba(16, 185, 129, 0.08)',
                          borderLeft: '4px solid var(--accent-emerald)',
                          padding: '1rem 1.25rem',
                          borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                          marginBottom: '1.25rem'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.8125rem', marginBottom: '0.35rem' }}>
                            <CheckCircle2 size={16} /> Best Answer (Marked by Author)
                          </div>
                          <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                            {acceptedAnswer.content}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                            — answered by <strong>{acceptedAnswer.author.name}</strong>
                          </div>
                        </div>
                      )}

                      {/* Vote & Comment Bar */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: '0.875rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button
                            onClick={() => votePost(post.id, 'up')}
                            className={`btn btn-sm ${post.userVote === 'up' ? 'btn-primary' : 'btn-secondary'}`}
                            style={{ padding: '0.3rem 0.65rem' }}
                          >
                            <ThumbsUp size={14} /> <span>{post.upvotes}</span>
                          </button>
                          <button
                            onClick={() => votePost(post.id, 'down')}
                            className={`btn btn-sm ${post.userVote === 'down' ? 'btn-danger' : 'btn-secondary'}`}
                            style={{ padding: '0.3rem 0.65rem' }}
                          >
                            <ThumbsDown size={14} />
                          </button>
                          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                            <MessageSquare size={14} style={{ display: 'inline', marginRight: '4px' }} />
                            {post.comments.length} Comments
                          </span>
                        </div>

                        <button
                          onClick={() => onOpenDM && onOpenDM(post.author.username)}
                          className="btn btn-ghost btn-sm"
                          style={{ fontSize: '0.75rem', color: 'var(--brand-primary-light)' }}
                        >
                          Message Author
                        </button>
                      </div>

                      {/* Comments Thread */}
                      <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                          {post.comments.map(comment => (
                            <div
                              key={comment.id}
                              style={{
                                padding: '0.75rem 1rem',
                                background: 'var(--bg-surface)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-subtle)'
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                  {comment.author.name}
                                </span>
                                {post.category === 'question' && (
                                  <button
                                    onClick={() => markBestAnswer(post.id, comment.id)}
                                    className="btn btn-ghost btn-sm"
                                    style={{ fontSize: '0.7rem', color: comment.isAcceptedAnswer ? 'var(--accent-emerald)' : 'var(--text-muted)', padding: '0.1rem 0.35rem' }}
                                  >
                                    {comment.isAcceptedAnswer ? '✓ Accepted Best Answer' : 'Mark as Best Answer'}
                                  </button>
                                )}
                              </div>
                              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                                {comment.content}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Add Comment Input */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <input
                            type="text"
                            placeholder="Write a helpful response or review..."
                            value={commentInputs[post.id] || ''}
                            onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                            className="form-input"
                            style={{ fontSize: '0.8125rem', padding: '0.4rem 0.75rem' }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleAddComment(post.id); }}
                          />
                          <button
                            onClick={() => handleAddComment(post.id)}
                            className="btn btn-primary btn-sm"
                          >
                            <Send size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STUDY GROUPS */}
        {activeTab === 'study_groups' && (
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.5rem' }}>
            {studyGroups.map(sg => (
              <div key={sg.id} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{sg.name}</h3>
                  <span className="badge badge-primary">{sg.memberCount} Members</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {sg.description}
                </p>
                <div style={{ padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', fontSize: '0.8125rem', color: 'var(--brand-primary-light)', marginBottom: '1.25rem' }}>
                  🗓 Next Live Session: <strong>{sg.nextSession}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => toggleStudyGroup(sg.id)}
                    className={`btn btn-sm ${sg.isMember ? 'btn-emerald' : 'btn-primary'}`}
                  >
                    {sg.isMember ? 'Joined Cohort ✓' : 'Join Study Group'}
                  </button>
                  <button 
                    onClick={() => alert(`Opening ${sg.name} shared study space...`)} 
                    className="btn btn-ghost btn-sm"
                  >
                    Open Group Chat & Calendar →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: MENTORS DIRECTORY */}
        {activeTab === 'mentors' && (
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.5rem' }}>
            {mentors.map(m => (
              <div key={m.id} className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <img
                  src={m.avatar}
                  alt={m.name}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{m.name}</h3>
                      <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary-light)' }}>{m.title}</div>
                    </div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                      ★ {m.rating} ({m.reviews})
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', margin: '0.75rem 0 1rem 0' }}>
                    {m.specialties.map((s, idx) => (
                      <span key={idx} className="badge badge-muted" style={{ fontSize: '0.7rem' }}>{s}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
                      ● {m.availableSlots} 1:1 Slots Open
                    </span>
                    <button
                      onClick={() => onOpenDM && onOpenDM('dr_sarah_chen')}
                      className="btn btn-primary btn-sm"
                    >
                      Request Mentorship
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: LEADERBOARD */}
        {activeTab === 'leaderboard' && (
          <div className="card" style={{ padding: '1.5rem', maxWidth: '750px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Platform Reputation & Top Contributors
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {leaderboard.map(u => (
                <div
                  key={u.rank}
                  style={{
                    padding: '0.875rem 1.25rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: u.rank === 1 ? 'var(--accent-amber)' : 'var(--bg-card-elevated)',
                      color: u.rank === 1 ? '#0F172A' : 'var(--text-primary)',
                      fontWeight: 800,
                      fontSize: '0.8125rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      #{u.rank}
                    </span>
                    <img src={u.avatar} alt={u.name} style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>{u.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>@{u.username} • {u.certs} Certificates</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-primary-light)' }}>
                    ⚡ {u.reputation} pts
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Post Modal */}
        {isNewPostOpen && (
          <div className="modal-overlay" onClick={() => setIsNewPostOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Create Community Post</h3>
                <button onClick={() => setIsNewPostOpen(false)} className="btn btn-ghost btn-sm">✕</button>
              </div>

              <form onSubmit={handleCreatePostSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {[
                        { key: 'discussion', label: 'Discussion' },
                        { key: 'question', label: 'Technical Question' },
                        { key: 'showcase', label: 'Project Showcase' },
                        { key: 'poll', label: 'Community Poll' }
                      ].map(cat => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setPostForm({ ...postForm, category: cat.key })}
                          className={`btn btn-sm ${postForm.category === cat.key ? 'btn-primary' : 'btn-secondary'}`}
                          style={{ fontSize: '0.75rem' }}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Topic Space</label>
                    <select
                      value={postForm.spaceId}
                      onChange={(e) => setPostForm({ ...postForm, spaceId: e.target.value })}
                      className="form-select"
                    >
                      {spaces.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Post Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. How does async worker backpressure work in Python?"
                      value={postForm.title}
                      onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Content (Markdown supported)</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Explain your question, architecture, or benchmark details..."
                      value={postForm.content}
                      onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  {/* If Showcase */}
                  {postForm.category === 'showcase' && (
                    <div className="grid grid-cols-2" style={{ gap: '0.75rem' }}>
                      <div className="form-group">
                        <label className="form-label">Live Demo URL</label>
                        <input
                          type="url"
                          placeholder="https://..."
                          value={postForm.demoUrl}
                          onChange={(e) => setPostForm({ ...postForm, demoUrl: e.target.value })}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">GitHub Repository</label>
                        <input
                          type="url"
                          placeholder="https://github.com/..."
                          value={postForm.githubUrl}
                          onChange={(e) => setPostForm({ ...postForm, githubUrl: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>
                  )}

                  {/* If Poll */}
                  {postForm.category === 'poll' && (
                    <div className="form-group">
                      <label className="form-label">Poll Options</label>
                      <input
                        type="text"
                        placeholder="Option 1"
                        value={postForm.pollOptions[0]}
                        onChange={(e) => setPostForm({ ...postForm, pollOptions: [e.target.value, postForm.pollOptions[1]] })}
                        className="form-input"
                        style={{ marginBottom: '0.5rem' }}
                      />
                      <input
                        type="text"
                        placeholder="Option 2"
                        value={postForm.pollOptions[1]}
                        onChange={(e) => setPostForm({ ...postForm, pollOptions: [postForm.pollOptions[0], e.target.value] })}
                        className="form-input"
                      />
                    </div>
                  )}
                </div>

                <div className="modal-footer">
                  <button type="button" onClick={() => setIsNewPostOpen(false)} className="btn btn-secondary btn-sm">Cancel</button>
                  <button type="submit" className="btn btn-primary btn-sm">Publish Post</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
