// Mathematics questions for Grade 10 SEE Board
export const mathematicsQuestions = {
  objective: [
    {
      id: 'math-obj-1',
      question: "What is the value of x in the equation 2x + 5 = 13?",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correctAnswer: 1,
      hint: "First, subtract 5 from both sides of the equation.",
      explanation: "Solving: 2x + 5 = 13 → 2x = 8 → x = 4",
      topic: '5',
      difficulty: 'medium'
    },
    {
      id: 'math-obj-2',
      question: "Which of the following is a prime number?",
      options: ["15", "21", "23", "27"],
      correctAnswer: 2,
      hint: "A prime number has exactly two factors: 1 and itself.",
      explanation: "23 is prime because it has no divisors other than 1 and itself.",
      topic: '1',
      difficulty: 'easy'
    },
    {
      id: 'math-obj-3',
      question: "What is the sum of interior angles of a triangle?",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: 1,
      hint: "This is a fundamental property of triangles.",
      explanation: "The sum of interior angles of any triangle is always 180°.",
      topic: '6',
      difficulty: 'easy'
    },
    {
      id: 'math-obj-4',
      question: "If sin θ = 3/5, what is cos θ?",
      options: ["3/5", "4/5", "5/3", "5/4"],
      correctAnswer: 1,
      hint: "Use the Pythagorean identity: sin²θ + cos²θ = 1",
      explanation: "Using sin²θ + cos²θ = 1: (3/5)² + cos²θ = 1, so cos²θ = 16/25, therefore cos θ = 4/5",
      topic: '8',
      difficulty: 'medium'
    },
    {
      id: 'math-obj-5',
      question: "What is the area of a circle with radius 7 cm?",
      options: ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
      correctAnswer: 0,
      hint: "Area of circle = πr²",
      explanation: "Area = πr² = π × 7² = 49π cm²",
      topic: '7',
      difficulty: 'easy'
    },
    {
      id: 'math-obj-6',
      question: "What is the mean of the numbers: 4, 7, 9, 12, 18?",
      options: ["9", "10", "11", "12"],
      correctAnswer: 1,
      hint: "Mean = sum of all numbers ÷ count of numbers",
      explanation: "Mean = (4 + 7 + 9 + 12 + 18) ÷ 5 = 50 ÷ 5 = 10",
      topic: '9',
      difficulty: 'easy'
    }
  ],

  subjective: [
    {
      id: 'math-subj-1',
      question: "Solve the quadratic equation x² - 5x + 6 = 0 and verify your answer.",
      expectedAnswer: "x = 2, x = 3",
      hint: "Try factoring the quadratic expression or use the quadratic formula.",
      explanation: "Using factoring: (x-2)(x-3) = 0, so x = 2 or x = 3. Verification: (2)² - 5(2) + 6 = 0 ✓",
      keyWords: ["x = 2", "x = 3", "factoring", "(x-2)(x-3)", "verification"],
      topic: '5',
      difficulty: 'medium'
    },
    {
      id: 'math-subj-2',
      question: "Prove that the sum of angles in a triangle is 180°.",
      expectedAnswer: "Draw a line parallel to one side through the opposite vertex. Use properties of parallel lines and alternate angles.",
      hint: "Think about drawing a line parallel to the base of the triangle.",
      explanation: "Draw triangle ABC and extend line through A parallel to BC. The angles formed are equal to angles B and C due to alternate interior angles, and they sum with angle A to form a straight line (180°).",
      keyWords: ["parallel line", "alternate angles", "straight line", "180°", "interior angles"],
      topic: '6',
      difficulty: 'hard'
    },
    {
      id: 'math-subj-3',
      question: "Explain the difference between rational and irrational numbers with examples.",
      expectedAnswer: "Rational numbers can be expressed as fractions, irrational cannot. Examples: Rational: 1/2, 0.75, 3. Irrational: √2, π, e",
      hint: "Think about numbers that can be written as a/b where a and b are integers.",
      explanation: "Rational numbers can be expressed as p/q where p and q are integers and q ≠ 0. Irrational numbers cannot be expressed as fractions and have non-repeating, non-terminating decimal representations.",
      keyWords: ["rational", "irrational", "fractions", "p/q", "integers", "decimal", "non-repeating"],
      topic: '1',
      difficulty: 'medium'
    },
    {
      id: 'math-subj-4',
      question: "Find the area of a triangle with vertices at A(2,3), B(5,7), and C(1,6).",
      expectedAnswer: "Area = 6 square units",
      hint: "Use the coordinate geometry formula for area of triangle or the shoelace formula.",
      explanation: "Using the formula: Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|2(7-6) + 5(6-3) + 1(3-7)| = ½|2 + 15 - 4| = ½|13| = 6.5 square units",
      keyWords: ["coordinate geometry", "area formula", "vertices", "shoelace formula"],
      topic: '3',
      difficulty: 'hard'
    },
    {
      id: 'math-subj-5',
      question: "What is probability? Calculate the probability of getting a sum of 7 when rolling two dice.",
      expectedAnswer: "Probability is the likelihood of an event occurring. P(sum=7) = 6/36 = 1/6",
      hint: "Count all the ways to get a sum of 7 with two dice.",
      explanation: "Probability = Number of favorable outcomes / Total number of outcomes. Ways to get sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. Total outcomes = 36. So P(sum=7) = 6/36 = 1/6",
      keyWords: ["probability", "favorable outcomes", "total outcomes", "dice", "sum of 7"],
      topic: '10',
      difficulty: 'medium'
    }
  ]
};