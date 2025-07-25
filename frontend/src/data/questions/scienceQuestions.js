// Science questions for Grade 10 SEE Board
export const scienceQuestions = {
  objective: [
    // Light Chapter Questions
    {
      id: 'light-obj-1',
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁷ m/s"],
      correctAnswer: 0,
      hint: "Light travels fastest in vacuum and this is a fundamental constant.",
      explanation: "The speed of light in vacuum is 3 × 10⁸ m/s (300,000 km/s), which is a universal constant.",
      topic: 'light',
      difficulty: 'easy'
    },
    {
      id: 'light-obj-2',
      question: "Which type of lens is used to correct myopia (short-sightedness)?",
      options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
      correctAnswer: 1,
      hint: "Myopia means you can see near objects clearly but distant objects appear blurred.",
      explanation: "Concave lens is used to correct myopia as it diverges light rays before they enter the eye.",
      topic: 'light',
      difficulty: 'medium'
    },
    
    // Sound Chapter Questions
    {
      id: 'sound-obj-1',
      question: "What is the unit of frequency?",
      options: ["Decibel", "Hertz", "Watt", "Joule"],
      correctAnswer: 1,
      hint: "Frequency measures how many cycles occur per second.",
      explanation: "Hertz (Hz) is the unit of frequency, representing cycles per second.",
      topic: 'sound',
      difficulty: 'easy'
    },
    {
      id: 'sound-obj-2',
      question: "Sound travels fastest in which medium?",
      options: ["Air", "Water", "Steel", "Vacuum"],
      correctAnswer: 2,
      hint: "Sound needs a medium to travel and travels faster in denser materials.",
      explanation: "Sound travels fastest in solids like steel due to tightly packed molecules.",
      topic: 'sound',
      difficulty: 'medium'
    },

    // Electricity Chapter Questions
    {
      id: 'electricity-obj-1',
      question: "Which law states that 'current is directly proportional to voltage'?",
      options: ["Newton's Law", "Ohm's Law", "Coulomb's Law", "Faraday's Law"],
      correctAnswer: 1,
      hint: "This law relates voltage, current, and resistance in electrical circuits.",
      explanation: "Ohm's Law states V = IR, where current (I) is directly proportional to voltage (V).",
      topic: 'electricity',
      difficulty: 'medium'
    },
    {
      id: 'electricity-obj-2',
      question: "What is the unit of electric power?",
      options: ["Volt", "Ampere", "Watt", "Ohm"],
      correctAnswer: 2,
      hint: "Power is the rate of energy consumption.",
      explanation: "Watt (W) is the unit of electric power, representing energy per unit time.",
      topic: 'electricity',
      difficulty: 'easy'
    },

    // Acids and Bases Chapter Questions
    {
      id: 'acids-bases-obj-1',
      question: "What is the pH of pure water at 25°C?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      hint: "Pure water is neither acidic nor basic - it's neutral.",
      explanation: "Pure water has a pH of 7, which is neutral on the pH scale.",
      topic: 'acids-bases',
      difficulty: 'easy'
    },
    {
      id: 'acids-bases-obj-2',
      question: "Which indicator turns red in acidic solution?",
      options: ["Blue litmus", "Red litmus", "Phenolphthalein", "Methyl orange"],
      correctAnswer: 0,
      hint: "Think about the color change of litmus paper in acids.",
      explanation: "Blue litmus paper turns red in acidic solutions.",
      topic: 'acids-bases',
      difficulty: 'easy'
    },

    // Metals and Non-metals Chapter Questions
    {
      id: 'metals-nonmetals-obj-1',
      question: "Which gas is produced when zinc reacts with hydrochloric acid?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      correctAnswer: 2,
      hint: "This reaction is: Zn + 2HCl → ZnCl₂ + ?",
      explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is produced.",
      topic: 'metals-nonmetals',
      difficulty: 'medium'
    },
    {
      id: 'metals-nonmetals-obj-2',
      question: "Which property is common to all metals?",
      options: ["They are magnetic", "They conduct electricity", "They are liquid at room temperature", "They are brittle"],
      correctAnswer: 1,
      hint: "Think about the fundamental properties that define metals.",
      explanation: "All metals conduct electricity due to the presence of free electrons.",
      topic: 'metals-nonmetals',
      difficulty: 'easy'
    },

    // Carbon Compounds Chapter Questions
    {
      id: 'carbon-compounds-obj-1',
      question: "What is the molecular formula of methane?",
      options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
      correctAnswer: 0,
      hint: "Methane is the simplest hydrocarbon with one carbon atom.",
      explanation: "Methane has one carbon atom bonded to four hydrogen atoms: CH₄.",
      topic: 'carbon-compounds',
      difficulty: 'easy'
    },
    {
      id: 'carbon-compounds-obj-2',
      question: "Which process converts ethanol to ethanoic acid?",
      options: ["Reduction", "Oxidation", "Substitution", "Addition"],
      correctAnswer: 1,
      hint: "This process involves addition of oxygen or removal of hydrogen.",
      explanation: "Oxidation of ethanol produces ethanoic acid: C₂H₅OH + O₂ → CH₃COOH + H₂O.",
      topic: 'carbon-compounds',
      difficulty: 'medium'
    },

    // Life Processes Chapter Questions
    {
      id: 'life-processes-obj-1',
      question: "Which gas is released during photosynthesis?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correctAnswer: 1,
      hint: "This gas is essential for most living organisms to breathe.",
      explanation: "Oxygen is released as a byproduct during photosynthesis.",
      topic: 'life-processes',
      difficulty: 'easy'
    },
    {
      id: 'life-processes-obj-2',
      question: "What is the main function of stomata in plants?",
      options: ["Support", "Storage", "Gas exchange", "Reproduction"],
      correctAnswer: 2,
      hint: "Stomata are tiny pores found on the surface of leaves.",
      explanation: "Stomata regulate gas exchange (CO₂ in, O₂ out) and water loss in plants.",
      topic: 'life-processes',
      difficulty: 'medium'
    },

    // Environment Chapter Questions
    {
      id: 'environment-obj-1',
      question: "Which compound is primarily responsible for ozone layer depletion?",
      options: ["Carbon dioxide", "Methane", "CFCs", "Nitrogen oxides"],
      correctAnswer: 2,
      hint: "These compounds were commonly used in refrigerators and aerosols.",
      explanation: "Chlorofluorocarbons (CFCs) are the main cause of ozone layer depletion.",
      topic: 'environment',
      difficulty: 'medium'
    },
    {
      id: 'environment-obj-2',
      question: "What is biodegradable waste?",
      options: ["Plastic bottles", "Food scraps", "Electronic devices", "Glass containers"],
      correctAnswer: 1,
      hint: "Think about materials that can be broken down by natural processes.",
      explanation: "Biodegradable waste like food scraps can be decomposed by microorganisms.",
      topic: 'environment',
      difficulty: 'easy'
    }
  ],

  subjective: [
    // Light Chapter Questions
    {
      id: 'light-subj-1',
      question: "Explain the difference between real and virtual images. Give two examples of each.",
      expectedAnswer: "Real images can be projected on screen, virtual images cannot. Examples: Real - cinema screen, camera film; Virtual - mirror image, magnifying glass image",
      hint: "Think about whether you can catch the image on a screen or not.",
      explanation: "Real images are formed when light rays actually converge and can be projected on a screen (like in cameras, projectors). Virtual images are formed when light rays appear to converge but don't actually meet (like in plane mirrors, magnifying glasses).",
      keyWords: ["real image", "virtual image", "screen", "converge", "mirror", "camera", "projector"],
      topic: 'light',
      difficulty: 'medium'
    },
    {
      id: 'light-subj-2',
      question: "Describe the structure and function of the human eye. How does it form images?",
      expectedAnswer: "Eye has cornea, lens, retina. Light enters through cornea, lens focuses it on retina where image forms. Brain interprets signals.",
      hint: "Think about the parts of the eye and how light travels through them.",
      explanation: "The eye works like a camera. Light enters through the cornea, passes through the pupil, is focused by the lens onto the retina. The retina converts light into electrical signals sent to the brain.",
      keyWords: ["cornea", "lens", "retina", "pupil", "focus", "electrical signals", "brain"],
      topic: 'light',
      difficulty: 'hard'
    },

    // Electricity Chapter Questions
    {
      id: 'electricity-subj-1',
      question: "State and explain Ohm's law. Draw a circuit diagram to verify it.",
      expectedAnswer: "Ohm's law states that current through a conductor is directly proportional to voltage across it, provided temperature remains constant. V = IR",
      hint: "Remember the relationship between voltage, current, and resistance.",
      explanation: "Ohm's law: V = IR, where V is voltage, I is current, and R is resistance. The circuit should include a battery, resistor, ammeter, and voltmeter.",
      keyWords: ["ohm's law", "current", "voltage", "resistance", "V = IR", "ammeter", "voltmeter"],
      topic: 'electricity',
      difficulty: 'medium'
    },
    {
      id: 'electricity-subj-2',
      question: "Explain the heating effect of electric current and give three practical applications.",
      expectedAnswer: "When current flows through resistance, electrical energy converts to heat. Applications: electric heater, electric iron, electric bulb.",
      hint: "Think about appliances that produce heat when electricity flows through them.",
      explanation: "According to Joule's law, H = I²Rt, where heat produced is proportional to square of current, resistance, and time. Used in heaters, irons, bulbs, etc.",
      keyWords: ["heating effect", "joule's law", "resistance", "electric heater", "electric iron", "bulb"],
      topic: 'electricity',
      difficulty: 'medium'
    },

    // Acids and Bases Chapter Questions
    {
      id: 'acids-bases-subj-1',
      question: "What are acids and bases? Explain their properties with examples.",
      expectedAnswer: "Acids release H+ ions in water, taste sour, turn blue litmus red. Bases release OH- ions, taste bitter, turn red litmus blue. Examples: HCl (acid), NaOH (base)",
      hint: "Think about what happens when acids and bases dissolve in water.",
      explanation: "Acids are substances that release hydrogen ions (H+) in aqueous solution. They taste sour, turn blue litmus red, and have pH < 7. Bases release hydroxide ions (OH-), taste bitter, turn red litmus blue, and have pH > 7.",
      keyWords: ["acids", "bases", "H+", "OH-", "litmus", "sour", "bitter", "pH"],
      topic: 'acids-bases',
      difficulty: 'easy'
    },
    {
      id: 'acids-bases-subj-2',
      question: "Explain neutralization reaction with examples. Write the general equation.",
      expectedAnswer: "Neutralization is reaction between acid and base to form salt and water. Example: HCl + NaOH → NaCl + H2O. General: Acid + Base → Salt + Water",
      hint: "Think about what happens when you mix an acid with a base.",
      explanation: "Neutralization occurs when H+ ions from acid combine with OH- ions from base to form water, while the remaining ions form salt. The pH moves toward 7 (neutral).",
      keyWords: ["neutralization", "acid", "base", "salt", "water", "H+", "OH-", "pH 7"],
      topic: 'acids-bases',
      difficulty: 'medium'
    },

    // Metals and Non-metals Chapter Questions
    {
      id: 'metals-nonmetals-subj-1',
      question: "Explain the process of corrosion of iron. How can it be prevented?",
      expectedAnswer: "Iron reacts with oxygen and moisture to form rust (Fe2O3). Prevention: painting, galvanizing, oiling, alloying.",
      hint: "Think about what causes iron to rust and how we protect iron objects.",
      explanation: "Corrosion is oxidation of iron in presence of oxygen and water: 4Fe + 3O2 + 6H2O → 2Fe2O3.3H2O (rust). Prevention methods include barrier coatings (paint, oil), galvanizing (zinc coating), and making alloys.",
      keyWords: ["corrosion", "rust", "oxidation", "oxygen", "water", "painting", "galvanizing", "alloys"],
      topic: 'metals-nonmetals',
      difficulty: 'medium'
    },
    {
      id: 'metals-nonmetals-subj-2',
      question: "Compare the properties of metals and non-metals with examples.",
      expectedAnswer: "Metals: lustrous, malleable, ductile, conduct heat/electricity. Examples: Iron, copper. Non-metals: dull, brittle, insulators. Examples: Sulfur, carbon.",
      hint: "Think about physical and chemical properties that distinguish metals from non-metals.",
      explanation: "Metals have metallic luster, are malleable and ductile, conduct heat and electricity due to free electrons. Non-metals are generally dull, brittle, and act as insulators.",
      keyWords: ["metals", "non-metals", "lustrous", "malleable", "ductile", "conduct", "brittle", "insulators"],
      topic: 'metals-nonmetals',
      difficulty: 'easy'
    },

    // Life Processes Chapter Questions
    {
      id: 'life-processes-subj-1',
      question: "Explain the process of photosynthesis. Write the chemical equation.",
      expectedAnswer: "Plants make glucose using CO2, water, and sunlight with chlorophyll. 6CO2 + 6H2O + light energy → C6H12O6 + 6O2",
      hint: "Think about what plants need to make their own food.",
      explanation: "Photosynthesis is the process where plants convert carbon dioxide and water into glucose using light energy in the presence of chlorophyll. Oxygen is released as a byproduct.",
      keyWords: ["photosynthesis", "glucose", "CO2", "water", "sunlight", "chlorophyll", "oxygen"],
      topic: 'life-processes',
      difficulty: 'medium'
    },
    {
      id: 'life-processes-subj-2',
      question: "Describe the process of respiration in humans. Differentiate between breathing and respiration.",
      expectedAnswer: "Breathing is physical gas exchange. Respiration is cellular process breaking down glucose for energy. Breathing supplies O2 for respiration.",
      hint: "Think about the difference between taking in air and using oxygen at cellular level.",
      explanation: "Breathing is the mechanical process of inhaling oxygen and exhaling carbon dioxide. Respiration is the biochemical process where cells use oxygen to break down glucose and release energy (ATP).",
      keyWords: ["breathing", "respiration", "gas exchange", "cellular", "glucose", "energy", "ATP", "oxygen"],
      topic: 'life-processes',
      difficulty: 'hard'
    },

    // Environment Chapter Questions
    {
      id: 'environment-subj-1',
      question: "What is greenhouse effect? Explain its causes and consequences.",
      expectedAnswer: "Greenhouse gases trap heat in atmosphere. Caused by CO2, methane from human activities. Leads to global warming, climate change.",
      hint: "Think about how certain gases in the atmosphere affect Earth's temperature.",
      explanation: "Greenhouse effect occurs when greenhouse gases (CO2, CH4, etc.) trap heat from the sun in Earth's atmosphere. While natural greenhouse effect is essential for life, enhanced greenhouse effect due to human activities causes global warming.",
      keyWords: ["greenhouse effect", "greenhouse gases", "CO2", "methane", "global warming", "climate change", "atmosphere"],
      topic: 'environment',
      difficulty: 'medium'
    },
    {
      id: 'environment-subj-2',
      question: "Explain waste management and its importance. Suggest methods for proper waste disposal.",
      expectedAnswer: "Waste management involves collection, treatment, disposal of waste to protect environment and health. Methods: reduce, reuse, recycle, composting, proper landfills.",
      hint: "Think about the 3 R's and other methods to handle waste properly.",
      explanation: "Proper waste management prevents pollution, protects health, and conserves resources. Methods include reduction at source, reusing materials, recycling, composting organic waste, and safe disposal of hazardous materials.",
      keyWords: ["waste management", "collection", "treatment", "disposal", "reduce", "reuse", "recycle", "composting"],
      topic: 'environment',
      difficulty: 'medium'
    }
  ]
};