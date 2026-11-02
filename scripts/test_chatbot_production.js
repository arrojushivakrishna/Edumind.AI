import { 
  generateAutonomousEducationalResponse, 
  streamAIResponse, 
  AI_PERSONA 
} from '../src/services/aiService.js';

console.log('====================================================');
console.log(`🤖 Testing ${AI_PERSONA.name} Production Chatbot`);
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`✅ [PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`❌ [FAIL] ${testName}: ${details}`);
    failCount++;
  }
}

async function runAllTests() {
  // Test 1: "Hello"
  const r1 = generateAutonomousEducationalResponse("Hello");
  assert(
    r1.includes("Hello") && r1.includes("EduMind") && !r1.includes("processDataPipeline"),
    "Test 1: 'Hello' greeting",
    `Got: ${r1.slice(0, 100)}`
  );

  // Test 2: "What is artificial intelligence?"
  const r2 = generateAutonomousEducationalResponse("What is artificial intelligence?");
  assert(
    r2.includes("Artificial Intelligence") && r2.includes("Narrow AI") && !r2.includes("processDataPipeline"),
    "Test 2: 'What is artificial intelligence?'",
    `Got: ${r2.slice(0, 100)}`
  );

  // Test 3: "Explain machine learning in simple words."
  const r3 = generateAutonomousEducationalResponse("Explain machine learning in simple words.");
  assert(
    r3.includes("Machine Learning") && r3.includes("examples") && !r3.includes("processDataPipeline"),
    "Test 3: 'Explain machine learning in simple words.'",
    `Got: ${r3.slice(0, 100)}`
  );

  // Test 4: "What is photosynthesis?"
  const r4 = generateAutonomousEducationalResponse("What is photosynthesis?");
  assert(
    r4.includes("Photosynthesis") && r4.includes("6CO_2") && r4.includes("Calvin Cycle") && !r4.includes("processDataPipeline"),
    "Test 4: 'What is photosynthesis?'",
    `Got: ${r4.slice(0, 100)}`
  );

  // Test 5: "Solve 2x + 5 = 15."
  const r5 = generateAutonomousEducationalResponse("Solve 2x + 5 = 15.");
  assert(
    r5.includes("x = 5") && r5.includes("Step 1") && r5.includes("Step 2") && !r5.includes("processDataPipeline"),
    "Test 5: 'Solve 2x + 5 = 15.'",
    `Got: ${r5.slice(0, 100)}`
  );

  // Test 6: "Explain inheritance in Python with an example."
  const r6 = generateAutonomousEducationalResponse("Explain inheritance in Python with an example.");
  assert(
    r6.includes("class Animal") && r6.includes("class Dog(Animal)") && r6.includes("super().__init__") && !r6.includes("TelemetryData"),
    "Test 6: 'Explain inheritance in Python with an example.'",
    `Got: ${r6.slice(0, 100)}`
  );

  // Test 7: "Who is the Prime Minister of India?"
  const r7 = generateAutonomousEducationalResponse("Who is the Prime Minister of India?");
  assert(
    r7.includes("Narendra") && r7.includes("Modi") && !r7.includes("processDataPipeline"),
    "Test 7: 'Who is the Prime Minister of India?'",
    `Got: ${r7.slice(0, 100)}`
  );

  // Test 8: "What is the capital of Japan?"
  const r8 = generateAutonomousEducationalResponse("What is the capital of Japan?");
  assert(
    r8.includes("Tokyo") && !r8.includes("processDataPipeline"),
    "Test 8: 'What is the capital of Japan?'",
    `Got: ${r8.slice(0, 100)}`
  );

  // Test 9: "Give me 10 questions for a physics exam."
  const r9 = generateAutonomousEducationalResponse("Give me 10 questions for a physics exam.");
  assert(
    r9.includes("10 Rigorous Physics") && r9.includes("10.") && r9.includes("Kinematics"),
    "Test 9: 'Give me 10 questions for a physics exam.'",
    `Got: ${r9.slice(0, 100)}`
  );

  // Test 10: "Summarize this: Artificial intelligence is transforming the world..."
  const passage = "Artificial intelligence is transforming modern industries through automated reasoning and deep learning systems. Organizations are adopting neural networks to accelerate diagnostic medicine, streamline supply chain operations, and optimize personalized education.";
  const r10 = generateAutonomousEducationalResponse(`Summarize this: ${passage}`);
  assert(
    r10.includes("Summary") && r10.includes("Core Thesis") && r10.includes("Key Point"),
    "Test 10: 'Summarize this: ...'",
    `Got: ${r10.slice(0, 100)}`
  );

  // Test 11: Follow-up question dependent on previous context
  const history11 = [
    { sender: 'user', text: 'Explain inheritance in Python with an example.' },
    { sender: 'assistant', text: r6 }
  ];
  const r11 = generateAutonomousEducationalResponse("Can you explain step 2 in more detail and give another example?", {}, history11);
  assert(
    r11.includes("Following up on our previous discussion") || r11.includes("Detailed Deep Dive"),
    "Test 11: Follow-up question with history",
    `Got: ${r11.slice(0, 100)}`
  );

  // Test 12: Unrelated question immediately after to test context isolation
  const history12 = [
    { sender: 'user', text: 'Explain inheritance in Python with an example.' },
    { sender: 'assistant', text: r6 }
  ];
  const r12 = generateAutonomousEducationalResponse("What is photosynthesis?", {}, history12);
  assert(
    r12.includes("Photosynthesis") && !r12.includes("Animal") && !r12.includes("Dog"),
    "Test 12: Context isolation on unrelated question",
    `Got: ${r12.slice(0, 100)}`
  );

  // Test 13: Empty message rejection
  let streamedEmpty = false;
  const r13 = await streamAIResponse("   ", {}, () => { streamedEmpty = true; });
  assert(
    r13 === "" && streamedEmpty === false,
    "Test 13: Empty / whitespace message rejection",
    `Got: '${r13}'`
  );

  // Test 14: Long multi-paragraph message
  const longPrompt = "I am preparing for an advanced computer science competitive exam. ".repeat(15) + "Can you explain machine learning in simple words?";
  const r14 = generateAutonomousEducationalResponse(longPrompt);
  assert(
    r14.length > 200 && (r14.includes("Machine Learning") || r14.includes("EduMind AI Copilot Breakdown")),
    "Test 14: Long multi-paragraph message handling",
    `Got length: ${r14.length}`
  );

  // Test 15: Simulated API failure handling
  let errorCaught = false;
  try {
    generateAutonomousEducationalResponse("simulated api failure");
  } catch (err) {
    errorCaught = true;
    assert(
      err.message.includes("Simulated API failure"),
      "Test 15: Simulated API failure graceful catch",
      err.message
    );
  }
  if (!errorCaught) {
    assert(false, "Test 15: Simulated API failure should have thrown an error");
  }

  console.log('\n====================================================');
  console.log(`Test Results: ${passCount} Passed, ${failCount} Failed`);
  console.log('====================================================');

  if (failCount > 0) {
    process.exit(1);
  }
}

runAllTests().catch(err => {
  console.error("Test runner crashed:", err);
  process.exit(1);
});
