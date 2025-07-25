// Mathematics questions for Grade 10 SEE Board
export const mathematicsQuestions = {
  objective: [
    // Number Systems Questions
    {
      id: 'number-systems-obj-1',
      question: "Which of the following is a prime number?",
      options: ["15", "21", "23", "27"],
      correctAnswer: 2,
      hint: "A prime number has exactly two factors: 1 and itself.",
      explanation: "23 is prime because it has no divisors other than 1 and itself.",
      topic: 'number-systems',
      difficulty: 'easy'
    },
    {
      id: 'number-systems-obj-2',
      question: "What is the LCM of 12 and 18?",
      options: ["36", "54", "72", "108"],
      correctAnswer: 0,
      hint: "Find the smallest number that both 12 and 18 divide into evenly.",
      explanation: "LCM of 12 and 18 = 36. Using prime factorization: 12 = 2² × 3, 18 = 2 × 3², LCM = 2² × 3² = 36.",
      topic: 'number-systems',
      difficulty: 'medium'
    },
    {
      id: 'number-systems-obj-3',
      question: "Which number is irrational?",
      options: ["0.25", "√16", "√7", "3/4"],
      correctAnswer: 2,
      hint: "Irrational numbers cannot be expressed as simple fractions.",
      explanation: "√7 is irrational because 7 is not a perfect square and cannot be expressed as a fraction.",
      topic: 'number-systems',
      difficulty: 'medium'
    },

    // Algebra Questions
    {
      id: 'algebra-obj-1',
      question: "What is the value of x in the equation 3x - 7 = 14?",
      options: ["x = 5", "x = 6", "x = 7", "x = 8"],
      correctAnswer: 2,
      hint: "Add 7 to both sides first, then divide by 3.",
      explanation: "Solving: 3x - 7 = 14 → 3x = 21 → x = 7",
      topic: 'algebra',
      difficulty: 'easy'
    },
    {
      id: 'algebra-obj-2',
      question: "Simplify: 2x + 3x - x",
      options: ["4x", "5x", "6x", "3x"],
      correctAnswer: 0,
      hint: "Combine like terms by adding and subtracting coefficients.",
      explanation: "2x + 3x - x = (2 + 3 - 1)x = 4x",
      topic: 'algebra',
      difficulty: 'easy'
    },

    // Linear Equations Questions
    {
      id: 'linear-equations-obj-1',
      question: "The slope of line passing through points (2,3) and (4,7) is:",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
      hint: "Use slope formula: m = (y₂-y₁)/(x₂-x₁)",
      explanation: "Slope = (7-3)/(4-2) = 4/2 = 2",
      topic: 'linear-equations',
      difficulty: 'medium'
    },
    {
      id: 'linear-equations-obj-2',
      question: "What is the y-intercept of the line y = 3x + 5?",
      options: ["3", "5", "-5", "0"],
      correctAnswer: 1,
      hint: "In y = mx + c form, c is the y-intercept.",
      explanation: "In the equation y = 3x + 5, the y-intercept is 5.",
      topic: 'linear-equations',
      difficulty: 'easy'
    },

    // Quadratic Equations Questions
    {
      id: 'quadratic-equations-obj-1',
      question: "What are the roots of x² - 5x + 6 = 0?",
      options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 1, 5"],
      correctAnswer: 1,
      hint: "Try factoring the quadratic or use the quadratic formula.",
      explanation: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3.",
      topic: 'quadratic-equations',
      difficulty: 'medium'
    },
    {
      id: 'quadratic-equations-obj-2',
      question: "The discriminant of 2x² + 3x + 1 = 0 is:",
      options: ["1", "5", "9", "17"],
      correctAnswer: 0,
      hint: "Discriminant = b² - 4ac where ax² + bx + c = 0",
      explanation: "For 2x² + 3x + 1 = 0: a=2, b=3, c=1. Discriminant = 3² - 4(2)(1) = 9 - 8 = 1",
      topic: 'quadratic-equations',
      difficulty: 'medium'
    },

    // Triangles Questions
    {
      id: 'triangles-obj-1',
      question: "What is the sum of interior angles of a triangle?",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: 1,
      hint: "This is a fundamental property of triangles.",
      explanation: "The sum of interior angles of any triangle is always 180°.",
      topic: 'triangles',
      difficulty: 'easy'
    },
    {
      id: 'triangles-obj-2',
      question: "In a right triangle with sides 3, 4, and 5, which is the hypotenuse?",
      options: ["3", "4", "5", "Cannot determine"],
      correctAnswer: 2,
      hint: "The hypotenuse is the longest side opposite to the right angle.",
      explanation: "In a right triangle, the hypotenuse is the longest side. Here, 5 is the longest side.",
      topic: 'triangles',
      difficulty: 'easy'
    },
    {
      id: 'triangles-obj-3',
      question: "What type of triangle has all sides equal?",
      options: ["Scalene", "Isosceles", "Equilateral", "Right"],
      correctAnswer: 2,
      hint: "Think about the prefix 'equi' which means equal.",
      explanation: "An equilateral triangle has all three sides equal in length.",
      topic: 'triangles',
      difficulty: 'easy'
    },

    // Circles Questions
    {
      id: 'circles-obj-1',
      question: "What is the area of a circle with radius 7 cm?",
      options: ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
      correctAnswer: 0,
      hint: "Area of circle = πr²",
      explanation: "Area = πr² = π × 7² = 49π cm²",
      topic: 'circles',
      difficulty: 'easy'
    },
    {
      id: 'circles-obj-2',
      question: "What is the circumference of a circle with diameter 14 cm?",
      options: ["14π cm", "28π cm", "7π cm", "21π cm"],
      correctAnswer: 0,
      hint: "Circumference = πd, where d is diameter.",
      explanation: "Circumference = πd = π × 14 = 14π cm",
      topic: 'circles',
      difficulty: 'easy'
    },
    {
      id: 'circles-obj-3',
      question: "A chord that passes through the center of a circle is called:",
      options: ["Radius", "Diameter", "Arc", "Tangent"],
      correctAnswer: 1,
      hint: "This is the longest possible chord in a circle.",
      explanation: "A diameter is a chord that passes through the center of the circle.",
      topic: 'circles',
      difficulty: 'easy'
    },

    // Trigonometry Questions
    {
      id: 'trigonometry-obj-1',
      question: "If sin θ = 3/5, what is cos θ?",
      options: ["3/5", "4/5", "5/3", "5/4"],
      correctAnswer: 1,
      hint: "Use the Pythagorean identity: sin²θ + cos²θ = 1",
      explanation: "Using sin²θ + cos²θ = 1: (3/5)² + cos²θ = 1, so cos²θ = 16/25, therefore cos θ = 4/5",
      topic: 'trigonometry',
      difficulty: 'medium'
    },
    {
      id: 'trigonometry-obj-2',
      question: "What is the value of sin 30°?",
      options: ["1/2", "√3/2", "1", "√2/2"],
      correctAnswer: 0,
      hint: "This is a standard trigonometric ratio.",
      explanation: "sin 30° = 1/2 is a standard trigonometric value.",
      topic: 'trigonometry',
      difficulty: 'easy'
    },
    {
      id: 'trigonometry-obj-3',
      question: "What is tan 45°?",
      options: ["0", "1/2", "1", "√3"],
      correctAnswer: 2,
      hint: "In a 45-45-90 triangle, the opposite and adjacent sides are equal.",
      explanation: "tan 45° = opposite/adjacent = 1/1 = 1",
      topic: 'trigonometry',
      difficulty: 'easy'
    },

    // Coordinate Geometry Questions
    {
      id: 'coordinate-geometry-obj-1',
      question: "What is the distance between points (0,0) and (3,4)?",
      options: ["5", "7", "12", "25"],
      correctAnswer: 0,
      hint: "Use the distance formula: √[(x₂-x₁)² + (y₂-y₁)²]",
      explanation: "Distance = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5",
      topic: 'coordinate-geometry',
      difficulty: 'medium'
    },
    {
      id: 'coordinate-geometry-obj-2',
      question: "The midpoint of line segment joining (2,3) and (6,7) is:",
      options: ["(4,5)", "(8,10)", "(2,2)", "(3,4)"],
      correctAnswer: 0,
      hint: "Midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2)",
      explanation: "Midpoint = ((2+6)/2, (3+7)/2) = (4, 5)",
      topic: 'coordinate-geometry',
      difficulty: 'medium'
    },

    // Statistics Questions
    {
      id: 'statistics-obj-1',
      question: "What is the mean of the numbers: 4, 7, 9, 12, 18?",
      options: ["9", "10", "11", "12"],
      correctAnswer: 1,
      hint: "Mean = sum of all numbers ÷ count of numbers",
      explanation: "Mean = (4 + 7 + 9 + 12 + 18) ÷ 5 = 50 ÷ 5 = 10",
      topic: 'statistics',
      difficulty: 'easy'
    },
    {
      id: 'statistics-obj-2',
      question: "What is the median of: 2, 5, 8, 8, 10?",
      options: ["5", "8", "7", "10"],
      correctAnswer: 1,
      hint: "Median is the middle value when numbers are arranged in order.",
      explanation: "When arranged in order: 2, 5, 8, 8, 10. The middle value is 8.",
      topic: 'statistics',
      difficulty: 'easy'
    },
    {
      id: 'statistics-obj-3',
      question: "What is the mode of: 1, 2, 2, 3, 4, 4, 4, 5?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      hint: "Mode is the value that appears most frequently.",
      explanation: "4 appears 3 times, which is more than any other number.",
      topic: 'statistics',
      difficulty: 'easy'
    },

    // Probability Questions
    {
      id: 'probability-obj-1',
      question: "What is the probability of getting heads when flipping a fair coin?",
      options: ["1/4", "1/3", "1/2", "2/3"],
      correctAnswer: 2,
      hint: "A fair coin has two equally likely outcomes.",
      explanation: "P(heads) = Number of favorable outcomes / Total outcomes = 1/2",
      topic: 'probability',
      difficulty: 'easy'
    },
    {
      id: 'probability-obj-2',
      question: "What is the probability of rolling a 6 on a fair six-sided die?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      correctAnswer: 0,
      hint: "A die has 6 equally likely outcomes.",
      explanation: "P(rolling 6) = 1/6 since there is one favorable outcome out of six possible outcomes.",
      topic: 'probability',
      difficulty: 'easy'
    },
    {
      id: 'probability-obj-3',
      question: "A bag contains 3 red and 2 blue balls. What is the probability of drawing a red ball?",
      options: ["2/5", "3/5", "1/2", "3/2"],
      correctAnswer: 1,
      hint: "Count total balls and favorable outcomes.",
      explanation: "P(red) = Number of red balls / Total balls = 3/5",
      topic: 'probability',
      difficulty: 'medium'
    }
  ],

  subjective: [
    // Number Systems Questions
    {
      id: 'number-systems-subj-1',
      question: "Explain the difference between rational and irrational numbers with examples.",
      expectedAnswer: "Rational numbers can be expressed as fractions, irrational cannot. Examples: Rational: 1/2, 0.75, 3. Irrational: √2, π, e",
      hint: "Think about numbers that can be written as a/b where a and b are integers.",
      explanation: "Rational numbers can be expressed as p/q where p and q are integers and q ≠ 0. Irrational numbers cannot be expressed as fractions and have non-repeating, non-terminating decimal representations.",
      keyWords: ["rational", "irrational", "fractions", "p/q", "integers", "decimal", "non-repeating"],
      topic: 'number-systems',
      difficulty: 'medium'
    },
    {
      id: 'number-systems-subj-2',
      question: "Find the HCF and LCM of 24 and 36 using prime factorization method.",
      expectedAnswer: "24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12, LCM = 2³ × 3² = 72",
      hint: "Break down both numbers into their prime factors first.",
      explanation: "Prime factorization: 24 = 2³ × 3, 36 = 2² × 3². HCF takes lowest powers: 2² × 3 = 12. LCM takes highest powers: 2³ × 3² = 72.",
      keyWords: ["HCF", "LCM", "prime factorization", "lowest powers", "highest powers"],
      topic: 'number-systems',
      difficulty: 'medium'
    },
    {
      id: 'number-systems-subj-3',
      question: "Prove that √2 is an irrational number.",
      expectedAnswer: "Assume √2 = p/q in lowest terms. Then 2q² = p², so p² is even, making p even. This leads to contradiction.",
      hint: "Use proof by contradiction method.",
      explanation: "Assume √2 = p/q where p and q are coprime integers. Then 2q² = p², so p² is even, making p even. Let p = 2k, then 4k² = 2q², so q² = 2k², making q even too. This contradicts our assumption that p and q are coprime.",
      keyWords: ["proof by contradiction", "coprime", "even", "contradiction", "irrational"],
      topic: 'number-systems',
      difficulty: 'hard'
    },

    // Algebra Questions
    {
      id: 'algebra-subj-1',
      question: "Expand and simplify: (x + 3)(x - 2)",
      expectedAnswer: "x² + x - 6",
      hint: "Use FOIL method: First, Outer, Inner, Last",
      explanation: "Using FOIL: (x + 3)(x - 2) = x² - 2x + 3x - 6 = x² + x - 6",
      keyWords: ["FOIL", "expand", "simplify", "x²", "combine like terms"],
      topic: 'algebra',
      difficulty: 'easy'
    },
    {
      id: 'algebra-subj-2',
      question: "Factor completely: x² - 9",
      expectedAnswer: "(x + 3)(x - 3)",
      hint: "This is a difference of squares pattern.",
      explanation: "x² - 9 = x² - 3² = (x + 3)(x - 3) using the difference of squares formula a² - b² = (a + b)(a - b)",
      keyWords: ["factor", "difference of squares", "a² - b²", "(a + b)(a - b)"],
      topic: 'algebra',
      difficulty: 'medium'
    },

    // Linear Equations Questions
    {
      id: 'linear-equations-subj-1',
      question: "Find the equation of a line passing through points (1,2) and (3,8).",
      expectedAnswer: "y = 3x - 1",
      hint: "First find the slope, then use point-slope form.",
      explanation: "Slope m = (8-2)/(3-1) = 6/2 = 3. Using point-slope form with (1,2): y - 2 = 3(x - 1), so y = 3x - 1",
      keyWords: ["slope", "point-slope form", "y = mx + c", "equation of line"],
      topic: 'linear-equations',
      difficulty: 'medium'
    },
    {
      id: 'linear-equations-subj-2',
      question: "Solve the system of equations: 2x + y = 7 and x - y = 2",
      expectedAnswer: "x = 3, y = 1",
      hint: "Try elimination method by adding the equations.",
      explanation: "Adding the equations: (2x + y) + (x - y) = 7 + 2, so 3x = 9, x = 3. Substituting back: 3 - y = 2, so y = 1",
      keyWords: ["system of equations", "elimination method", "substitution", "x = 3", "y = 1"],
      topic: 'linear-equations',
      difficulty: 'medium'
    },

    // Quadratic Equations Questions
    {
      id: 'quadratic-equations-subj-1',
      question: "Solve the quadratic equation x² - 5x + 6 = 0 and verify your answer.",
      expectedAnswer: "x = 2, x = 3",
      hint: "Try factoring the quadratic expression or use the quadratic formula.",
      explanation: "Using factoring: (x-2)(x-3) = 0, so x = 2 or x = 3. Verification: (2)² - 5(2) + 6 = 0 ✓",
      keyWords: ["x = 2", "x = 3", "factoring", "(x-2)(x-3)", "verification"],
      topic: 'quadratic-equations',
      difficulty: 'medium'
    },
    {
      id: 'quadratic-equations-subj-2',
      question: "Derive the quadratic formula from the general quadratic equation ax² + bx + c = 0.",
      expectedAnswer: "Complete the square method gives x = (-b ± √(b²-4ac))/2a",
      hint: "Use the completing the square method on the general form.",
      explanation: "Starting with ax² + bx + c = 0, divide by a, complete the square, and solve to get x = (-b ± √(b²-4ac))/2a.",
      keyWords: ["quadratic formula", "completing square", "ax² + bx + c", "discriminant", "b²-4ac"],
      topic: 'quadratic-equations',
      difficulty: 'hard'
    },
    {
      id: 'quadratic-equations-subj-3',
      question: "Find the nature of roots of 2x² + 3x + 5 = 0 using discriminant.",
      expectedAnswer: "Discriminant = -31 < 0, so roots are complex/imaginary",
      hint: "Calculate b² - 4ac and interpret the result.",
      explanation: "For 2x² + 3x + 5 = 0: a=2, b=3, c=5. Discriminant = 3² - 4(2)(5) = 9 - 40 = -31. Since discriminant < 0, roots are complex.",
      keyWords: ["discriminant", "b² - 4ac", "nature of roots", "complex", "imaginary"],
      topic: 'quadratic-equations',
      difficulty: 'medium'
    },

    // Triangles Questions
    {
      id: 'triangles-subj-1',
      question: "Prove that the sum of angles in a triangle is 180°.",
      expectedAnswer: "Draw a line parallel to one side through the opposite vertex. Use properties of parallel lines and alternate angles.",
      hint: "Think about drawing a line parallel to the base of the triangle.",
      explanation: "Draw triangle ABC and extend line through A parallel to BC. The angles formed are equal to angles B and C due to alternate interior angles, and they sum with angle A to form a straight line (180°).",
      keyWords: ["parallel line", "alternate angles", "straight line", "180°", "interior angles"],
      topic: 'triangles',
      difficulty: 'hard'
    },
    {
      id: 'triangles-subj-2',
      question: "State and prove the Pythagorean theorem with an example.",
      expectedAnswer: "In a right triangle, square of hypotenuse equals sum of squares of other two sides. a² + b² = c²",
      hint: "Think about the relationship between the sides of a right triangle.",
      explanation: "Pythagorean theorem: a² + b² = c² where c is hypotenuse. Example: triangle with sides 3, 4, 5: 3² + 4² = 9 + 16 = 25 = 5².",
      keyWords: ["pythagorean theorem", "right triangle", "hypotenuse", "a² + b² = c²"],
      topic: 'triangles',
      difficulty: 'medium'
    },
    {
      id: 'triangles-subj-3',
      question: "Prove that in an isosceles triangle, the angles opposite to equal sides are equal.",
      expectedAnswer: "Use congruent triangles (SAS) by drawing perpendicular from vertex to base.",
      hint: "Draw a perpendicular from the vertex angle to the base.",
      explanation: "In triangle ABC with AB = AC, draw perpendicular AD to BC. Triangles ABD and ACD are congruent by SAS (AB = AC, AD common, angles ADB = ADC = 90°). Therefore, angle B = angle C.",
      keyWords: ["isosceles triangle", "equal sides", "equal angles", "congruent triangles", "SAS"],
      topic: 'triangles',
      difficulty: 'hard'
    },

    // Circles Questions
    {
      id: 'circles-subj-1',
      question: "Derive the formula for the area of a circle and calculate the area of a circle with radius 10 cm.",
      expectedAnswer: "Area = πr². For r = 10 cm, Area = π × 10² = 100π cm²",
      hint: "Think about dividing the circle into many small triangles or use integration.",
      explanation: "The area formula πr² can be derived by dividing the circle into many thin triangular sectors. For r = 10 cm: Area = π × 10² = 100π ≈ 314.16 cm²",
      keyWords: ["area formula", "πr²", "triangular sectors", "integration", "radius"],
      topic: 'circles',
      difficulty: 'medium'
    },
    {
      id: 'circles-subj-2',
      question: "Explain the relationship between arc length, central angle, and radius of a circle.",
      expectedAnswer: "Arc length = (θ/360°) × 2πr for angle in degrees, or s = rθ for angle in radians",
      hint: "Think about what fraction of the full circumference the arc represents.",
      explanation: "Arc length is proportional to the central angle. For angle θ in degrees: s = (θ/360°) × 2πr. For radians: s = rθ where θ is in radians.",
      keyWords: ["arc length", "central angle", "radius", "circumference", "radians", "degrees"],
      topic: 'circles',
      difficulty: 'hard'
    },
    {
      id: 'circles-subj-3',
      question: "Prove that the angle in a semicircle is a right angle.",
      expectedAnswer: "Use the inscribed angle theorem: angle at circumference is half the central angle.",
      hint: "Consider the central angle subtended by a diameter.",
      explanation: "A diameter subtends a central angle of 180°. By the inscribed angle theorem, the angle at any point on the circumference is half the central angle, so 180°/2 = 90°.",
      keyWords: ["semicircle", "right angle", "inscribed angle theorem", "diameter", "central angle"],
      topic: 'circles',
      difficulty: 'hard'
    },

    // Trigonometry Questions
    {
      id: 'trigonometry-subj-1',
      question: "Define sine, cosine, and tangent ratios in a right triangle. Find all ratios for a triangle with sides 3, 4, 5.",
      expectedAnswer: "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. For 3-4-5 triangle: sin = 3/5, cos = 4/5, tan = 3/4",
      hint: "Remember SOH-CAH-TOA and identify which side is opposite, adjacent, and hypotenuse.",
      explanation: "In a right triangle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. For 3-4-5 triangle (angle opposite to side 3): sin = 3/5, cos = 4/5, tan = 3/4.",
      keyWords: ["sine", "cosine", "tangent", "opposite", "adjacent", "hypotenuse", "SOH-CAH-TOA"],
      topic: 'trigonometry',
      difficulty: 'medium'
    },
    {
      id: 'trigonometry-subj-2',
      question: "Prove the identity sin²θ + cos²θ = 1 using the Pythagorean theorem.",
      expectedAnswer: "In right triangle, if hypotenuse = 1, then opposite² + adjacent² = 1, so sin²θ + cos²θ = 1",
      hint: "Consider a right triangle where the hypotenuse has length 1.",
      explanation: "In a right triangle with hypotenuse = 1, if opposite = sin θ and adjacent = cos θ, then by Pythagorean theorem: sin²θ + cos²θ = 1.",
      keyWords: ["trigonometric identity", "pythagorean theorem", "sin²θ + cos²θ = 1", "unit circle"],
      topic: 'trigonometry',
      difficulty: 'hard'
    },
    {
      id: 'trigonometry-subj-3',
      question: "Find the height of a tower if the angle of elevation from a point 50m away is 30°.",
      expectedAnswer: "Height = 50 × tan(30°) = 50 × (1/√3) = 50/√3 ≈ 28.87 m",
      hint: "Draw a right triangle and use tangent ratio.",
      explanation: "Let height = h. tan(30°) = h/50, so h = 50 × tan(30°) = 50 × (1/√3) = 50/√3 = 50√3/3 ≈ 28.87 m",
      keyWords: ["angle of elevation", "tangent", "height", "tower", "tan(30°)"],
      topic: 'trigonometry',
      difficulty: 'medium'
    },

    // Coordinate Geometry Questions
    {
      id: 'coordinate-geometry-subj-1',
      question: "Find the area of a triangle with vertices at A(2,3), B(5,7), and C(1,6).",
      expectedAnswer: "Area = 6.5 square units",
      hint: "Use the coordinate geometry formula for area of triangle or the shoelace formula.",
      explanation: "Using the formula: Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|2(7-6) + 5(6-3) + 1(3-7)| = ½|2 + 15 - 4| = ½|13| = 6.5 square units",
      keyWords: ["coordinate geometry", "area formula", "vertices", "shoelace formula"],
      topic: 'coordinate-geometry',
      difficulty: 'hard'
    },
    {
      id: 'coordinate-geometry-subj-2',
      question: "Find the distance between points A(1,2) and B(4,6). Also find the midpoint.",
      expectedAnswer: "Distance = 5 units, Midpoint = (2.5, 4)",
      hint: "Use distance formula: √[(x₂-x₁)² + (y₂-y₁)²] and midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2)",
      explanation: "Distance = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5 units. Midpoint = ((1+4)/2, (2+6)/2) = (2.5, 4)",
      keyWords: ["distance formula", "midpoint formula", "coordinates", "√[(x₂-x₁)² + (y₂-y₁)²]"],
      topic: 'coordinate-geometry',
      difficulty: 'medium'
    },
    {
      id: 'coordinate-geometry-subj-3',
      question: "Find the equation of a circle with center (3,4) and radius 5.",
      expectedAnswer: "(x-3)² + (y-4)² = 25",
     hint: "Use the standard form of circle equation: (x-h)² + (y-k)² = r²",
     explanation: "For a circle with center (h,k) = (3,4) and radius r = 5, the equation is (x-3)² + (y-4)² = 5² = 25",
     keyWords: ["circle equation", "center", "radius", "(x-h)² + (y-k)² = r²"],
     topic: 'coordinate-geometry',
     difficulty: 'medium'
   },

   // Statistics Questions
   {
     id: 'statistics-subj-1',
     question: "Explain the difference between mean, median, and mode. Calculate all three for the data: 2, 3, 4, 4, 5, 6, 6, 6, 7.",
     expectedAnswer: "Mean = sum/count = 4.78, Median = middle value = 5, Mode = most frequent = 6",
     hint: "Mean is average, median is middle value, mode is most frequent value.",
     explanation: "Mean = (2+3+4+4+5+6+6+6+7)/9 = 43/9 ≈ 4.78. Median = 5th value when arranged = 5. Mode = 6 (appears 3 times, most frequent).",
     keyWords: ["mean", "median", "mode", "average", "middle value", "most frequent"],
     topic: 'statistics',
     difficulty: 'medium'
   },
   {
     id: 'statistics-subj-2',
     question: "What is standard deviation? Explain its significance in data analysis.",
     expectedAnswer: "Standard deviation measures spread of data from mean. Low SD = data close to mean, High SD = data spread out",
     hint: "Think about how spread out the data points are from the average.",
     explanation: "Standard deviation measures the average distance of data points from the mean. It indicates data variability: σ = √[Σ(x-μ)²/n]. Low SD means data is clustered near mean, high SD means data is widely spread.",
     keyWords: ["standard deviation", "spread", "variability", "mean", "data points", "clustered"],
     topic: 'statistics',
     difficulty: 'hard'
   },
   {
     id: 'statistics-subj-3',
     question: "Create a frequency table for the data: 1, 2, 2, 3, 3, 3, 4, 4, 5. Calculate the mean from the frequency table.",
     expectedAnswer: "Value: 1(1), 2(2), 3(3), 4(2), 5(1). Mean = (1×1 + 2×2 + 3×3 + 4×2 + 5×1)/9 = 27/9 = 3",
     hint: "Count how many times each value appears, then use weighted average.",
     explanation: "Frequency table: 1 appears 1 time, 2 appears 2 times, 3 appears 3 times, 4 appears 2 times, 5 appears 1 time. Mean = Σ(value × frequency)/total = (1×1 + 2×2 + 3×3 + 4×2 + 5×1)/9 = 27/9 = 3",
     keyWords: ["frequency table", "weighted average", "Σ(value × frequency)", "mean from frequency"],
     topic: 'statistics',
     difficulty: 'medium'
   },

   // Probability Questions
   {
     id: 'probability-subj-1',
     question: "What is probability? Calculate the probability of getting a sum of 7 when rolling two dice.",
     expectedAnswer: "Probability is the likelihood of an event occurring. P(sum=7) = 6/36 = 1/6",
     hint: "Count all the ways to get a sum of 7 with two dice.",
     explanation: "Probability = Number of favorable outcomes / Total number of outcomes. Ways to get sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. Total outcomes = 36. So P(sum=7) = 6/36 = 1/6",
     keyWords: ["probability", "favorable outcomes", "total outcomes", "dice", "sum of 7"],
     topic: 'probability',
     difficulty: 'medium'
   },
   {
     id: 'probability-subj-2',
     question: "Explain conditional probability with an example. What is the probability of drawing two aces from a deck without replacement?",
     expectedAnswer: "Conditional probability is probability of event B given event A occurred. P(2 aces) = (4/52) × (3/51) = 12/2652 = 1/221",
     hint: "The second draw depends on what happened in the first draw.",
     explanation: "Conditional probability: P(B|A) = P(A and B)/P(A). For two aces without replacement: First ace = 4/52, Second ace given first was ace = 3/51. Combined: (4/52) × (3/51) = 1/221.",
     keyWords: ["conditional probability", "without replacement", "dependent events", "P(B|A)"],
     topic: 'probability',
     difficulty: 'hard'
   },
   {
     id: 'probability-subj-3',
     question: "A bag contains 5 red, 3 blue, and 2 green balls. Find the probability of drawing a red ball, then a blue ball without replacement.",
     expectedAnswer: "P(red then blue) = (5/10) × (3/9) = 15/90 = 1/6",
     hint: "Calculate the probability of each event and multiply them.",
     explanation: "Total balls = 5+3+2 = 10. P(red first) = 5/10. After drawing red, 9 balls remain with 3 blue. P(blue second|red first) = 3/9. Combined: (5/10) × (3/9) = 1/6",
     keyWords: ["without replacement", "dependent events", "multiply probabilities", "conditional"],
     topic: 'probability',
     difficulty: 'medium'
   }
 ]
};