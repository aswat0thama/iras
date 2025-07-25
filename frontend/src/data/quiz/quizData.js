// Sample quiz questions data
export const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
    correctAnswer: 0,
    subject: "Geography",
    difficulty: "Easy",
    explanation: "Kathmandu is the capital and largest city of Nepal, located in the Kathmandu Valley."
  },
  {
    id: 2,
    question: "Which of the following is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: 1,
    subject: "Science",
    difficulty: "Easy",
    explanation: "Jupiter is the largest planet in our solar system, with a mass greater than all other planets combined."
  },
  {
    id: 3,
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    subject: "Mathematics",
    difficulty: "Medium",
    explanation: "15% of 200 = (15/100) × 200 = 0.15 × 200 = 30"
  },
  {
    id: 4,
    question: "Who wrote the famous novel 'Pride and Prejudice'?",
    options: ["Charlotte Bronte", "Jane Austen", "Emily Dickinson", "Virginia Woolf"],
    correctAnswer: 1,
    subject: "English",
    difficulty: "Medium",
    explanation: "Jane Austen wrote 'Pride and Prejudice', published in 1813, which is one of her most famous works."
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    subject: "Chemistry",
    difficulty: "Medium",
    explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
  },
  {
    id: 6,
    question: "In which year did Nepal become a federal republic?",
    options: ["2006", "2007", "2008", "2009"],
    correctAnswer: 2,
    subject: "History",
    difficulty: "Hard",
    explanation: "Nepal became a federal republic in 2008 after the abolition of the monarchy."
  },
  {
    id: 7,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    subject: "Mathematics",
    difficulty: "Easy",
    explanation: "√144 = 12, because 12 × 12 = 144"
  },
  {
    id: 8,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    subject: "Science",
    difficulty: "Medium",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere, making it the most abundant gas."
  },
  {
    id: 9,
    question: "What is the past tense of 'run'?",
    options: ["Runned", "Ran", "Running", "Runs"],
    correctAnswer: 1,
    subject: "English",
    difficulty: "Easy",
    explanation: "'Ran' is the correct past tense of the irregular verb 'run'."
  },
  {
    id: 10,
    question: "Which mountain range contains Mount Everest?",
    options: ["Andes", "Alps", "Himalayas", "Rockies"],
    correctAnswer: 2,
    subject: "Geography",
    difficulty: "Easy",
    explanation: "Mount Everest is located in the Himalayas on the border between Nepal and Tibet."
  },
  {
    id: 11,
    question: "What is the value of π (pi) approximately?",
    options: ["3.14", "2.71", "1.41", "1.73"],
    correctAnswer: 0,
    subject: "Mathematics",
    difficulty: "Easy",
    explanation: "π (pi) is approximately 3.14159, commonly rounded to 3.14 for basic calculations."
  },
  {
    id: 12,
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Kidney", "Pancreas", "Heart"],
    correctAnswer: 2,
    subject: "Biology",
    difficulty: "Medium",
    explanation: "The pancreas produces insulin, which helps regulate blood sugar levels in the body."
  },
  {
    id: 13,
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "Italian"],
    correctAnswer: 1,
    subject: "Geography",
    difficulty: "Medium",
    explanation: "Portuguese is the official and most widely spoken language in Brazil."
  },
  {
    id: 14,
    question: "Which of these is NOT a primary color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: 2,
    subject: "Art",
    difficulty: "Easy",
    explanation: "Green is a secondary color made by mixing blue and yellow. The primary colors are red, blue, and yellow."
  },
  {
    id: 15,
    question: "What is the formula for calculating the area of a circle?",
    options: ["πr²", "2πr", "πd", "r²"],
    correctAnswer: 0,
    subject: "Mathematics",
    difficulty: "Medium",
    explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius."
  },
  {
    id: 16,
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    subject: "Science",
    difficulty: "Easy",
    explanation: "Mars is called the 'Red Planet' due to iron oxide (rust) on its surface giving it a reddish appearance."
  },
  {
    id: 17,
    question: "What is the smallest unit of matter?",
    options: ["Molecule", "Atom", "Electron", "Proton"],
    correctAnswer: 1,
    subject: "Chemistry",
    difficulty: "Medium",
    explanation: "An atom is the smallest unit of matter that retains the properties of an element."
  },
  {
    id: 18,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    subject: "Art",
    difficulty: "Medium",
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
  },
  {
    id: 19,
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "60"],
    correctAnswer: 1,
    subject: "Mathematics",
    difficulty: "Easy",
    explanation: "7 × 8 = 56"
  },
  {
    id: 20,
    question: "Which continent is the largest by land area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: 1,
    subject: "Geography",
    difficulty: "Medium",
    explanation: "Asia is the largest continent by both land area and population, covering about 30% of Earth's land area."
  }
];

// Sample leaderboard data
export const leaderboardData = [
  { id: 1, name: "Arjun Sharma", score: 950, avatar: "AS", rank: 1, questionsAnswered: 95, accuracy: 89 },
  { id: 2, name: "Priya Thapa", score: 920, avatar: "PT", rank: 2, questionsAnswered: 87, accuracy: 92 },
  { id: 3, name: "Bikash KC", score: 890, avatar: "BK", rank: 3, questionsAnswered: 89, accuracy: 85 },
  { id: 4, name: "Sita Rai", score: 870, avatar: "SR", rank: 4, questionsAnswered: 82, accuracy: 88 },
  { id: 5, name: "Ravi Poudel", score: 850, avatar: "RP", rank: 5, questionsAnswered: 78, accuracy: 91 },
  { id: 6, name: "Maya Gurung", score: 820, avatar: "MG", rank: 6, questionsAnswered: 75, accuracy: 87 },
  { id: 7, name: "Suresh Tamang", score: 800, avatar: "ST", rank: 7, questionsAnswered: 73, accuracy: 84 },
  { id: 8, name: "Anita Shrestha", score: 780, avatar: "AS", rank: 8, questionsAnswered: 71, accuracy: 86 }
];