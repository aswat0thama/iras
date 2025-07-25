// Optional Mathematics questions for Grade 10 SEE Board
export const optionalMathematicsQuestions = {
  objective: [
    // Sets and Functions
    {
      id: 'opt-math-obj-1',
      question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?",
      options: ["{1, 2, 3, 4}", "{2, 3}", "{1}", "{4}"],
      correctAnswer: 1,
      hint: "Intersection contains elements common to both sets.",
      explanation: "A ∩ B contains elements that are in both A and B: {2, 3}",
      topic: '1',
      difficulty: 'easy'
    },
    {
      id: 'opt-math-obj-2',
      question: "What is the range of the function f(x) = x² + 1?",
      options: ["(-∞, ∞)", "[1, ∞)", "[0, ∞)", "(-∞, 1]"],
      correctAnswer: 1,
      hint: "Consider the minimum value of x².",
      explanation: "Since x² ≥ 0 for all real x, f(x) = x² + 1 ≥ 1. Range is [1, ∞)",
      topic: '1',
      difficulty: 'medium'
    },

    // Matrices and Determinants
    {
      id: 'opt-math-obj-3',
      question: "What is the determinant of the matrix [[2, 1], [3, 4]]?",
      options: ["5", "8", "11", "14"],
      correctAnswer: 0,
      hint: "For a 2×2 matrix [[a,b],[c,d]], determinant = ad - bc",
      explanation: "det = (2)(4) - (1)(3) = 8 - 3 = 5",
      topic: '3',
      difficulty: 'easy'
    },
    {
      id: 'opt-math-obj-4',
      question: "If A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 3]], what is AB?",
      options: ["[[4, 6], [10, 12]]", "[[4, 6], [11, 12]]", "[[3, 6], [10, 12]]", "[[4, 5], [10, 12]]"],
      correctAnswer: 0,
      hint: "Use matrix multiplication rule: (AB)ᵢⱼ = Σ AᵢₖBₖⱼ",
      explanation: "AB = [[1×2+2×1, 1×0+2×3], [3×2+4×1, 3×0+4×3]] = [[4, 6], [10, 12]]",
      topic: '3',
      difficulty: 'medium'
    },

    // Complex Numbers
    {
      id: 'opt-math-obj-5',
      question: "What is (2 + 3i) + (1 - 2i)?",
      options: ["3 + i", "3 - i", "1 + 5i", "3 + 5i"],
      correctAnswer: 0,
      hint: "Add real parts and imaginary parts separately.",
      explanation: "(2 + 3i) + (1 - 2i) = (2 + 1) + (3i - 2i) = 3 + i",
      topic: '4',
      difficulty: 'easy'
    },
    {
      id: 'opt-math-obj-6',
      question: "What is the modulus of the complex number 3 - 4i?",
      options: ["5", "7", "1", "25"],
      correctAnswer: 0,
      hint: "Modulus |a + bi| = √(a² + b²)",
      explanation: "|3 - 4i| = √(3² + (-4)²) = √(9 + 16) = √25 = 5",
      topic: '4',
      difficulty: 'medium'
    },

    // Vectors
    {
      id: 'opt-math-obj-7',
      question: "If a⃗ = (2, 3) and b⃗ = (1, 4), what is a⃗ + b⃗?",
      options: ["(3, 7)", "(1, 1)", "(2, 12)", "(3, 1)"],
      correctAnswer: 0,
      hint: "Add corresponding components.",
      explanation: "a⃗ + b⃗ = (2 + 1, 3 + 4) = (3, 7)",
      topic: '6',
      difficulty: 'easy'
    },
    {
      id: 'opt-math-obj-8',
      question: "What is the dot product of vectors a⃗ = (2, 3) and b⃗ = (4, 1)?",
      options: ["11", "8", "5", "14"],
      correctAnswer: 0,
      hint: "Dot product: a⃗·b⃗ = a₁b₁ + a₂b₂",
      explanation: "a⃗·b⃗ = (2)(4) + (3)(1) = 8 + 3 = 11",
      topic: '6',
      difficulty: 'medium'
    },

    // Calculus
    {
      id: 'opt-math-obj-9',
      question: "What is lim(x→2) (x² - 4)/(x - 2)?",
      options: ["4", "2", "0", "undefined"],
      correctAnswer: 0,
      hint: "Factor the numerator and simplify.",
      explanation: "lim(x→2) (x² - 4)/(x - 2) = lim(x→2) (x + 2)(x - 2)/(x - 2) = lim(x→2) (x + 2) = 4",
      topic: '8',
      difficulty: 'medium'
    },
    {
      id: 'opt-math-obj-10',
      question: "What is the derivative of f(x) = 3x² + 2x - 1?",
      options: ["6x + 2", "6x - 2", "3x + 2", "6x² + 2x"],
      correctAnswer: 0,
      hint: "Use the power rule: d/dx(xⁿ) = nxⁿ⁻¹",
      explanation: "f'(x) = d/dx(3x²) + d/dx(2x) + d/dx(-1) = 6x + 2 + 0 = 6x + 2",
      topic: '9',
      difficulty: 'medium'
    },

    // Trigonometry
    {
      id: 'opt-math-obj-11',
      question: "What is the value of sin(π/6)?",
      options: ["1/2", "√3/2", "1", "√2/2"],
      correctAnswer: 0,
      hint: "π/6 radians = 30 degrees",
      explanation: "sin(π/6) = sin(30°) = 1/2",
      topic: '11',
      difficulty: 'easy'
    },
    {
      id: 'opt-math-obj-12',
      question: "If sin(θ) = 3/5 and θ is in the first quadrant, what is cos(θ)?",
      options: ["4/5", "3/4", "5/4", "5/3"],
      correctAnswer: 0,
      hint: "Use the Pythagorean identity: sin²θ + cos²θ = 1",
      explanation: "cos²θ = 1 - sin²θ = 1 - (3/5)² = 1 - 9/25 = 16/25, so cos θ = 4/5",
      topic: '11',
      difficulty: 'medium'
    }
  ],

  subjective: [
    // Sets and Functions
    {
      id: 'opt-math-subj-1',
      question: "Define a function and explain the difference between domain and range with examples.",
      expectedAnswer: "A function is a relation where each input has exactly one output. Domain is the set of all possible input values, range is the set of all possible output values.",
      hint: "Think about the relationship between input and output values.",
      explanation: "A function f: A → B assigns to each element in set A exactly one element in set B. Domain is the set A (input values), range is the subset of B (actual output values). Example: f(x) = x², domain = ℝ, range = [0, ∞).",
      keyWords: ["function", "domain", "range", "input", "output", "relation", "one-to-one"],
      topic: '1',
      difficulty: 'medium'
    },

    // Matrices and Determinants
    {
      id: 'opt-math-subj-2',
      question: "Find the inverse of the matrix A = [[3, 1], [2, 1]] and verify your answer.",
      expectedAnswer: "A⁻¹ = [[1, -1], [-2, 3]], verification shows AA⁻¹ = I",
      hint: "Use the formula A⁻¹ = (1/det(A)) × adj(A)",
      explanation: "det(A) = 3×1 - 1×2 = 1. adj(A) = [[1, -1], [-2, 3]]. So A⁻¹ = [[1, -1], [-2, 3]]. Verification: AA⁻¹ = [[1, 0], [0, 1]] = I",
      keyWords: ["inverse matrix", "determinant", "adjugate", "identity matrix", "verification"],
      topic: '3',
      difficulty: 'hard'
    },

    // Complex Numbers
    {
      id: 'opt-math-subj-3',
      question: "Express the complex number (2 + 3i)/(1 - i) in the form a + bi.",
      expectedAnswer: "The result is -1/2 + 5i/2",
      hint: "Multiply numerator and denominator by the conjugate of the denominator.",
      explanation: "(2 + 3i)/(1 - i) × (1 + i)/(1 + i) = [(2 + 3i)(1 + i)]/[(1 - i)(1 + i)] = [2 + 2i + 3i - 3]/[1 + 1] = [-1 + 5i]/2 = -1/2 + 5i/2",
      keyWords: ["complex division", "conjugate", "rationalize", "standard form"],
      topic: '4',
      difficulty: 'hard'
    },

    // Polynomials
    {
      id: 'opt-math-subj-4',
      question: "Find all the roots of the polynomial P(x) = x³ - 6x² + 11x - 6 and factorize it completely.",
      expectedAnswer: "Roots are x = 1, 2, 3. Factorization: P(x) = (x - 1)(x - 2)(x - 3)",
      hint: "Try to find one root by substitution, then use polynomial division.",
      explanation: "Testing x = 1: P(1) = 1 - 6 + 11 - 6 = 0. So (x - 1) is a factor. Using polynomial division: P(x) = (x - 1)(x² - 5x + 6) = (x - 1)(x - 2)(x - 3). Roots: x = 1, 2, 3",
      keyWords: ["polynomial roots", "factorization", "polynomial division", "factor theorem"],
      topic: '5',
      difficulty: 'hard'
    },

    // Vectors
    {
      id: 'opt-math-subj-5',
      question: "Given vectors a⃗ = (3, 4) and b⃗ = (1, 2), find the angle between them.",
      expectedAnswer: "The angle between the vectors is arccos(11/√130) ≈ 15.26°",
      hint: "Use the formula cos θ = (a⃗·b⃗)/(|a⃗||b⃗|)",
      explanation: "a⃗·b⃗ = 3×1 + 4×2 = 11, |a⃗| = √(9+16) = 5, |b⃗| = √(1+4) = √5. cos θ = 11/(5√5) = 11/√125 = 11/(5√5) = 11/√125. θ = arccos(11/√125) ≈ 15.26°",
      keyWords: ["vector angle", "dot product", "magnitude", "cosine formula"],
      topic: '6',
      difficulty: 'hard'
    },

    // Coordinate Geometry
    {
      id: 'opt-math-subj-6',
      question: "Find the equation of the circle passing through points A(1, 1), B(2, 4), and C(5, 3).",
      expectedAnswer: "The equation is x² + y² - 6x - 2y + 5 = 0",
      hint: "Use the general form x² + y² + Dx + Ey + F = 0 and substitute the three points.",
      explanation: "Substituting the three points into x² + y² + Dx + Ey + F = 0 gives three equations: 2 + D + E + F = 0, 20 + 2D + 4E + F = 0, 34 + 5D + 3E + F = 0. Solving: D = -6, E = -2, F = 5. Circle equation: x² + y² - 6x - 2y + 5 = 0",
      keyWords: ["circle equation", "three points", "general form", "system of equations"],
      topic: '7',
      difficulty: 'hard'
    },

    // Limits and Continuity
    {
      id: 'opt-math-subj-7',
      question: "Evaluate lim(x→0) (sin x)/x and explain why this limit is important in calculus.",
      expectedAnswer: "The limit equals 1 and is fundamental for finding the derivative of sin x.",
      hint: "This is a standard limit that requires special techniques or L'Hôpital's rule.",
      explanation: "lim(x→0) (sin x)/x = 1. This limit is crucial because it's used to derive that d/dx(sin x) = cos x. It's one of the fundamental limits in calculus and demonstrates the relationship between trigonometric functions and their rates of change.",
      keyWords: ["standard limit", "sine function", "derivative", "fundamental limit", "trigonometric"],
      topic: '8',
      difficulty: 'hard'
    },

    // Derivatives
    {
      id: 'opt-math-subj-8',
      question: "Find the derivative of f(x) = x²sin(x) using the product rule and simplify.",
      expectedAnswer: "f'(x) = 2x sin(x) + x² cos(x)",
      hint: "Product rule: (uv)' = u'v + uv'",
      explanation: "Let u = x² and v = sin(x). Then u' = 2x and v' = cos(x). Using product rule: f'(x) = (2x)(sin x) + (x²)(cos x) = 2x sin(x) + x² cos(x)",
      keyWords: ["product rule", "derivative", "trigonometric functions", "differentiation"],
      topic: '9',
      difficulty: 'medium'
    },

    // Integration
    {
      id: 'opt-math-subj-9',
      question: "Evaluate the definite integral ∫₀¹ (2x + 1) dx and interpret its geometric meaning.",
      expectedAnswer: "The integral equals 2, representing the area under the curve from x = 0 to x = 1.",
      hint: "Find the antiderivative first, then apply the fundamental theorem of calculus.",
      explanation: "∫(2x + 1)dx = x² + x + C. Using FTC: ∫₀¹(2x + 1)dx = [x² + x]₀¹ = (1² + 1) - (0² + 0) = 2. Geometrically, this represents the area under the line y = 2x + 1 from x = 0 to x = 1.",
      keyWords: ["definite integral", "antiderivative", "fundamental theorem", "area under curve"],
      topic: '10',
      difficulty: 'medium'
    },

    // Statistics and Probability
    {
      id: 'opt-math-subj-10',
      question: "A bag contains 5 red balls and 3 blue balls. If two balls are drawn without replacement, find the probability that both are red.",
      expectedAnswer: "The probability is 5/14",
      hint: "Use the multiplication rule for dependent events.",
      explanation: "P(both red) = P(1st red) × P(2nd red | 1st red) = (5/8) × (4/7) = 20/56 = 5/14. After drawing the first red ball, there are 4 red balls left out of 7 total balls.",
      keyWords: ["probability", "without replacement", "dependent events", "conditional probability"],
      topic: '12',
      difficulty: 'medium'
    }
  ]
};