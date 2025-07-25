// Science questions for Grade 10 SEE Board
export const scienceQuestions = {
  objective: [
    // Physics Questions
    {
      id: 'physics-obj-1',
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁷ m/s"],
      correctAnswer: 0,
      hint: "Light travels fastest in vacuum and this is a fundamental constant.",
      explanation: "The speed of light in vacuum is 3 × 10⁸ m/s (300,000 km/s), which is a universal constant.",
      topic: 'physics-1',
      difficulty: 'easy'
    },
    {
      id: 'physics-obj-2',
      question: "Which type of lens is used to correct myopia (short-sightedness)?",
      options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
      correctAnswer: 1,
      hint: "Myopia means you can see near objects clearly but distant objects appear blurred.",
      explanation: "Concave lens is used to correct myopia as it diverges light rays before they enter the eye.",
      topic: 'physics-1',
      difficulty: 'medium'
    },
    {
      id: 'physics-obj-3',
      question: "What is the unit of frequency?",
      options: ["Decibel", "Hertz", "Watt", "Joule"],
      correctAnswer: 1,
      hint: "Frequency measures how many cycles occur per second.",
      explanation: "Hertz (Hz) is the unit of frequency, representing cycles per second.",
      topic: 'physics-2',
      difficulty: 'easy'
    },
    {
      id: 'physics-obj-4',
      question: "Which law states that 'current is directly proportional to voltage'?",
      options: ["Newton's Law", "Ohm's Law", "Coulomb's Law", "Faraday's Law"],
      correctAnswer: 1,
      hint: "This law relates voltage, current, and resistance in electrical circuits.",
      explanation: "Ohm's Law states V = IR, where current (I) is directly proportional to voltage (V).",
      topic: 'physics-5',
      difficulty: 'medium'
    },

    // Chemistry Questions
    {
      id: 'chemistry-obj-1',
      question: "What is the pH of pure water at 25°C?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      hint: "Pure water is neither acidic nor basic - it's neutral.",
      explanation: "Pure water has a pH of 7, which is neutral on the pH scale.",
      topic: 'chemistry-1',
      difficulty: 'easy'
    },
    {
      id: 'chemistry-obj-2',
      question: "Which gas is produced when zinc reacts with hydrochloric acid?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      correctAnswer: 2,
      hint: "This reaction is: Zn + 2HCl → ZnCl₂ + ?",
      explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is produced.",
      topic: 'chemistry-2',
      difficulty: 'medium'
    },
    {
      id: 'chemistry-obj-3',
      question: "What is the molecular formula of methane?",
      options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
      correctAnswer: 0,
      hint: "Methane is the simplest hydrocarbon with one carbon atom.",
      explanation: "Methane has one carbon atom bonded to four hydrogen atoms: CH₄.",
      topic: 'chemistry-3',
      difficulty: 'easy'
    },
    {
      id: 'chemistry-obj-4',
      question: "Which element has the atomic number 6?",
      options: ["Nitrogen", "Carbon", "Oxygen", "Boron"],
      correctAnswer: 1,
      hint: "This element is the basis of all organic compounds.",
      explanation: "Carbon has atomic number 6, meaning it has 6 protons in its nucleus.",
      topic: 'chemistry-5',
      difficulty: 'easy'
    },

    // Biology Questions
    {
      id: 'biology-obj-1',
      question: "Which organ is responsible for photosynthesis in plants?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      correctAnswer: 2,
      hint: "This organ contains chlorophyll and is usually green.",
      explanation: "Leaves contain chloroplasts with chlorophyll, making them the primary site of photosynthesis.",
      topic: 'biology-5',
      difficulty: 'easy'
    },
    {
      id: 'biology-obj-2',
      question: "What is the basic unit of heredity?",
      options: ["Chromosome", "Gene", "DNA", "Cell"],
      correctAnswer: 1,
      hint: "This unit carries information from parents to offspring.",
      explanation: "Genes are the basic units of heredity that carry genetic information.",
      topic: 'biology-2',
      difficulty: 'medium'
    },
    {
      id: 'biology-obj-3',
      question: "Which system removes waste products from the human body?",
      options: ["Digestive system", "Circulatory system", "Excretory system", "Respiratory system"],
      correctAnswer: 2,
      hint: "This system includes kidneys, liver, and skin.",
      explanation: "The excretory system removes metabolic waste products from the body.",
      topic: 'biology-4',
      difficulty: 'easy'
    },
    {
      id: 'biology-obj-4',
      question: "What is the main cause of ozone layer depletion?",
      options: ["Carbon dioxide", "Methane", "CFCs", "Nitrogen oxides"],
      correctAnswer: 2,
      hint: "These compounds were commonly used in refrigerators and aerosols.",
      explanation: "Chlorofluorocarbons (CFCs) are the main cause of ozone layer depletion.",
      topic: 'biology-3',
      difficulty: 'medium'
    }
  ],

  subjective: [
    // Physics Questions
    {
      id: 'physics-subj-1',
      question: "Explain the difference between real and virtual images. Give two examples of each.",
      expectedAnswer: "Real images can be projected on screen, virtual images cannot. Examples: Real - cinema screen, camera film; Virtual - mirror image, magnifying glass image",
      hint: "Think about whether you can catch the image on a screen or not.",
      explanation: "Real images are formed when light rays actually converge and can be projected on a screen (like in cameras, projectors). Virtual images are formed when light rays appear to converge but don't actually meet (like in plane mirrors, magnifying glasses).",
      keyWords: ["real image", "virtual image", "screen", "converge", "mirror", "camera", "projector"],
      topic: 'physics-1',
      difficulty: 'medium'
    },
    {
      id: 'physics-subj-2',
      question: "State and explain Ohm's law. Draw a circuit diagram to verify it.",
      expectedAnswer: "Ohm's law states that current through a conductor is directly proportional to voltage across it, provided temperature remains constant. V = IR",
      hint: "Remember the relationship between voltage, current, and resistance.",
      explanation: "Ohm's law: V = IR, where V is voltage, I is current, and R is resistance. The circuit should include a battery, resistor, ammeter, and voltmeter.",
      keyWords: ["ohm's law", "current", "voltage", "resistance", "V = IR", "ammeter", "voltmeter"],
      topic: 'physics-5',
      difficulty: 'medium'
    },

    // Chemistry Questions
    {
      id: 'chemistry-subj-1',
      question: "What are acids and bases? Explain their properties with examples.",
      expectedAnswer: "Acids release H+ ions in water, taste sour, turn blue litmus red. Bases release OH- ions, taste bitter, turn red litmus blue. Examples: HCl (acid), NaOH (base)",
      hint: "Think about what happens when acids and bases dissolve in water.",
      explanation: "Acids are substances that release hydrogen ions (H+) in aqueous solution. They taste sour, turn blue litmus red, and have pH < 7. Bases release hydroxide ions (OH-), taste bitter, turn red litmus blue, and have pH > 7.",
      keyWords: ["acids", "bases", "H+", "OH-", "litmus", "sour", "bitter", "pH"],
      topic: 'chemistry-1',
      difficulty: 'easy'
    },
    {
      id: 'chemistry-subj-2',
      question: "Explain the process of corrosion of iron. How can it be prevented?",
      expectedAnswer: "Iron reacts with oxygen and moisture to form rust (Fe2O3). Prevention: painting, galvanizing, oiling, alloying",
      hint: "Think about what conditions are needed for iron to rust.",
      explanation: "Corrosion of iron occurs when iron reacts with oxygen and water vapor in air to form hydrated iron oxide (rust). Prevention methods include painting, galvanizing, oiling, and making alloys like stainless steel.",
      keyWords: ["corrosion", "rust", "oxygen", "moisture", "painting", "galvanizing", "alloys"],
      topic: 'chemistry-2',
      difficulty: 'medium'
    },

    // Biology Questions
    {
      id: 'biology-subj-1',
      question: "Explain the process of photosynthesis. Write the chemical equation.",
      expectedAnswer: "Plants make glucose using sunlight, CO2, and water in presence of chlorophyll. 6CO2 + 6H2O → C6H12O6 + 6O2",
      hint: "Think about what plants need from the environment to make their food.",
      explanation: "Photosynthesis is the process by which green plants make glucose using carbon dioxide, water, and sunlight in the presence of chlorophyll. Chemical equation: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2 + H2O",
      keyWords: ["photosynthesis", "glucose", "chlorophyll", "sunlight", "CO2", "H2O", "oxygen"],
      topic: 'biology-5',
      difficulty: 'medium'
    },
    {
      id: 'biology-subj-2',
      question: "What is heredity? Explain Mendel's law of inheritance with an example.",
      expectedAnswer: "Heredity is transfer of traits from parents to offspring. Mendel's law: traits are controlled by factors (genes) that exist in pairs",
      hint: "Think about how characteristics pass from parents to children.",
      explanation: "Heredity is the transmission of genetic characteristics from parents to offspring. Mendel's law states that hereditary factors (genes) exist in pairs, and during gamete formation, these pairs separate so each gamete carries only one factor for each trait.",
      keyWords: ["heredity", "traits", "mendel", "genes", "factors", "dominant", "recessive", "gametes"],
      topic: 'biology-2',
      difficulty: 'hard'
    }
  ]
};