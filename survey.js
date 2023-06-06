const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define an object to 
const profile = {};

// Define an array of questions like this done so
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

// Recursive function to ask questions and store answers
function askQuestion(index) {
  if (index >= questions.length) {
    // All questions answered, generate the profile and exit
    generateProfile();
    rl.close();
    return;
  }

  rl.question(questions[index] + ' ', (answer) => {
    profile[index + 1] = answer; // Store the answer in the profile object
    askQuestion(index + 1); // Ask the next question recursively
  });
}

// Function to generate the profile based on the user's answers
function generateProfile() {
  const name = profile[1];
  const activity = profile[2];
  const music = profile[3];
  const meal = profile[4];
  const food = profile[5];
  const sport = profile[6];
  const superpower = profile[7];

  // Output the profile paragraph
  console.log(`\n${name} loves ${activity}, listens to ${music} while doing it, enjoys ${meal} for ${food}, is a fan of ${sport}, and is amazing at ${superpower}!\n`);
}

// Start asking questions 
askQuestion(0);
