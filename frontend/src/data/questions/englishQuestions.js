// English questions for Grade 10 SEE Board
export const englishQuestions = {
  objective: [
    // Grammar Questions
    {
      id: 'grammar-obj-1',
      question: "Choose the correct form of the verb: 'She _____ to school every day.'",
      options: ["go", "goes", "going", "gone"],
      correctAnswer: 1,
      hint: "The subject 'She' is third person singular.",
      explanation: "With third person singular subjects (he, she, it), we add 's' to the base form of the verb in simple present tense.",
      topic: 'grammar',
      difficulty: 'easy'
    },
    {
      id: 'grammar-obj-2',
      question: "Which sentence is in passive voice?",
      options: ["John wrote the letter.", "The letter was written by John.", "John is writing the letter.", "John will write the letter."],
      correctAnswer: 1,
      hint: "In passive voice, the object becomes the subject and uses 'be + past participle'.",
      explanation: "The passive voice structure is 'subject + be + past participle + by + agent'.",
      topic: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'grammar-obj-3',
      question: "Choose the correct article: '___ honest man is respected by all.'",
      options: ["A", "An", "The", "No article"],
      correctAnswer: 1,
      hint: "Consider the sound that follows the article.",
      explanation: "We use 'an' before words that begin with a vowel sound. 'Honest' starts with a silent 'h', so it begins with a vowel sound.",
      topic: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'grammar-obj-4',
      question: "What type of sentence is this: 'What a beautiful day!'",
      options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
      correctAnswer: 3,
      hint: "Look at the punctuation and the emotion expressed.",
      explanation: "Exclamatory sentences express strong emotion and end with an exclamation mark.",
      topic: 'grammar',
      difficulty: 'easy'
    },

    // Literature Questions
    {
      id: 'literature-obj-1',
      question: "What is the main theme of the poem 'The Road Not Taken' by Robert Frost?",
      options: ["Nature's beauty", "Choice and its consequences", "Childhood memories", "Love and loss"],
      correctAnswer: 1,
      hint: "Think about the speaker's decision at the fork in the road.",
      explanation: "The poem explores the theme of choices in life and how they shape our destiny.",
      topic: 'literature',
      difficulty: 'medium'
    },
    {
      id: 'literature-obj-2',
      question: "Who is the author of 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: 1,
      hint: "This playwright is known as the Bard of Avon.",
      explanation: "William Shakespeare wrote 'Romeo and Juliet', one of his most famous tragedies.",
      topic: 'literature',
      difficulty: 'easy'
    },
    {
      id: 'literature-obj-3',
      question: "What literary device is used in 'The wind whispered through the trees'?",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      correctAnswer: 2,
      hint: "The wind is given human qualities.",
      explanation: "Personification gives human characteristics to non-human things. Here, the wind is said to 'whisper'.",
      topic: 'literature',
      difficulty: 'medium'
    },

    // Reading Comprehension Questions
    {
      id: 'reading-obj-1',
      question: "What is the purpose of a topic sentence in a paragraph?",
      options: ["To conclude the paragraph", "To provide examples", "To introduce the main idea", "To add details"],
      correctAnswer: 2,
      hint: "Think about what comes first in a well-structured paragraph.",
      explanation: "A topic sentence introduces the main idea that the paragraph will develop and support.",
      topic: 'reading-comprehension',
      difficulty: 'easy'
    },
    {
      id: 'reading-obj-2',
      question: "Which reading strategy helps you understand unfamiliar words?",
      options: ["Skipping them", "Using context clues", "Reading faster", "Memorizing definitions"],
      correctAnswer: 1,
      hint: "Look at the words and sentences around the unfamiliar word.",
      explanation: "Context clues from surrounding text help readers infer the meaning of unfamiliar words.",
      topic: 'reading-comprehension',
      difficulty: 'medium'
    },

    // Writing Skills Questions
    {
      id: 'writing-obj-1',
      question: "What is the correct order for a basic essay structure?",
      options: ["Body, Introduction, Conclusion", "Introduction, Conclusion, Body", "Introduction, Body, Conclusion", "Conclusion, Body, Introduction"],
      correctAnswer: 2,
      hint: "Think about the logical flow of presenting ideas.",
      explanation: "A basic essay follows the structure: Introduction (presents the topic), Body (develops ideas), Conclusion (summarizes).",
      topic: 'writing-skills',
      difficulty: 'easy'
    },
    {
      id: 'writing-obj-2',
      question: "Which transitional word shows contrast?",
      options: ["Furthermore", "However", "Therefore", "Similarly"],
      correctAnswer: 1,
      hint: "Look for a word that introduces an opposing idea.",
      explanation: "'However' is a transitional word that introduces a contrasting or opposing idea.",
      topic: 'writing-skills',
      difficulty: 'easy'
    },

    // Vocabulary Questions
    {
      id: 'vocabulary-obj-1',
      question: "What does the prefix 'un-' mean in 'unhappy'?",
      options: ["Very", "Not", "Again", "Before"],
      correctAnswer: 1,
      hint: "Think about how the meaning changes from 'happy' to 'unhappy'.",
      explanation: "The prefix 'un-' means 'not' or indicates the opposite of the base word.",
      topic: 'vocabulary',
      difficulty: 'easy'
    },
    {
      id: 'vocabulary-obj-2',
      question: "Which word is a synonym for 'difficult'?",
      options: ["Easy", "Challenging", "Simple", "Clear"],
      correctAnswer: 1,
      hint: "Look for a word with similar meaning.",
      explanation: "'Challenging' is a synonym for 'difficult' as both mean requiring effort or skill.",
      topic: 'vocabulary',
      difficulty: 'easy'
    }
  ],

  subjective: [
    // Grammar Questions
    {
      id: 'grammar-subj-1',
      question: "Explain the difference between active and passive voice. Convert this sentence to passive voice: 'The teacher explained the lesson.'",
      expectedAnswer: "Active voice: subject performs action. Passive voice: subject receives action. Passive: 'The lesson was explained by the teacher.'",
      hint: "Focus on who is performing the action versus who is receiving it.",
      explanation: "In active voice, the subject performs the action (Teacher explained). In passive voice, the subject receives the action (Lesson was explained). The structure changes from Subject + Verb + Object to Object + be + past participle + by + Subject.",
      keyWords: ["active voice", "passive voice", "subject", "action", "was explained", "by"],
      topic: 'grammar',
      difficulty: 'medium'
    },
    {
      id: 'grammar-subj-2',
      question: "What are the different types of sentences? Give one example of each type.",
      expectedAnswer: "Declarative (statement), Interrogative (question), Imperative (command), Exclamatory (exclamation). Examples: 'I like books.' 'Do you like books?' 'Read this book.' 'What a great book!'",
      hint: "Think about the different purposes sentences serve in communication.",
      explanation: "There are four types: Declarative sentences make statements, Interrogative sentences ask questions, Imperative sentences give commands, and Exclamatory sentences express strong emotions.",
      keyWords: ["declarative", "interrogative", "imperative", "exclamatory", "statement", "question", "command"],
      topic: 'grammar',
      difficulty: 'medium'
    },

    // Literature Questions
    {
      id: 'literature-subj-1',
      question: "Analyze the character of Romeo in Shakespeare's 'Romeo and Juliet'. Discuss his personality traits with examples.",
      expectedAnswer: "Romeo is passionate, impulsive, romantic, and young. He falls in love quickly (first Rosaline, then Juliet), acts without thinking (kills Tybalt), and is driven by emotions.",
      hint: "Consider Romeo's actions and decisions throughout the play.",
      explanation: "Romeo exhibits youthful passion and impulsiveness. His quick shift from loving Rosaline to Juliet shows his romantic but fickle nature. His killing of Tybalt in anger demonstrates his impulsive behavior driven by emotion rather than reason.",
      keyWords: ["passionate", "impulsive", "romantic", "emotional", "Rosaline", "Juliet", "Tybalt"],
      topic: 'literature',
      difficulty: 'hard'
    },
    {
      id: 'literature-subj-2',
      question: "What is the central message of Robert Frost's poem 'The Road Not Taken'? Support your answer with evidence from the poem.",
      expectedAnswer: "The poem explores choices in life and their consequences. The speaker chooses the 'less traveled' road, which 'made all the difference,' suggesting individual choice shapes destiny.",
      hint: "Focus on the metaphor of the two roads and what they represent.",
      explanation: "The poem uses the metaphor of choosing between two roads to represent life's choices. The speaker's choice of the 'road less traveled by' symbolizes taking unconventional paths, and the final line suggests this choice significantly impacted his life.",
      keyWords: ["choices", "roads", "less traveled", "difference", "metaphor", "unconventional", "destiny"],
      topic: 'literature',
      difficulty: 'hard'
    },

    // Reading Comprehension Questions
    {
      id: 'reading-subj-1',
      question: "Explain the importance of reading comprehension skills. List and describe three strategies to improve reading comprehension.",
      expectedAnswer: "Reading comprehension is crucial for academic success and lifelong learning. Strategies: 1) Preview text 2) Use context clues 3) Summarize main ideas",
      hint: "Think about what helps you understand and remember what you read.",
      explanation: "Reading comprehension enables students to understand, analyze, and apply information. Key strategies include: previewing text to set expectations, using context clues to understand vocabulary, and summarizing to consolidate understanding.",
      keyWords: ["comprehension", "preview", "context clues", "summarize", "main ideas", "understanding"],
      topic: 'reading-comprehension',
      difficulty: 'medium'
    },
    {
      id: 'reading-subj-2',
      question: "How do you identify the main idea and supporting details in a passage? Explain with an example.",
      expectedAnswer: "Main idea is the central point; supporting details provide evidence. Example: Main idea - 'Exercise is beneficial.' Supporting details - improves health, reduces stress, builds strength.",
      hint: "Think about what the passage is primarily about versus what evidence supports that point.",
      explanation: "The main idea is the central message or point of a passage, often stated in the topic sentence. Supporting details are facts, examples, or explanations that elaborate on and prove the main idea.",
      keyWords: ["main idea", "supporting details", "central point", "evidence", "topic sentence", "examples"],
      topic: 'reading-comprehension',
      difficulty: 'medium'
    },

    // Writing Skills Questions
    {
      id: 'writing-subj-1',
      question: "Write a paragraph about your favorite season. Include a topic sentence, supporting details, and a concluding sentence.",
      expectedAnswer: "Topic sentence about favorite season, 2-3 supporting details with examples, concluding sentence that reinforces the main idea.",
      hint: "Start with a clear statement about which season you prefer and why.",
      explanation: "A well-structured paragraph begins with a topic sentence stating the main idea, develops it with supporting details and examples, and ends with a conclusion that reinforces the main point.",
      keyWords: ["topic sentence", "supporting details", "examples", "concluding sentence", "paragraph structure"],
      topic: 'writing-skills',
      difficulty: 'medium'
    },
    {
      id: 'writing-subj-2',
      question: "Explain the writing process. What are the main stages a writer goes through when creating a piece of writing?",
      expectedAnswer: "The writing process includes: 1) Prewriting (brainstorming, planning) 2) Drafting (first version) 3) Revising (improving content) 4) Editing (correcting errors) 5) Publishing (final version)",
      hint: "Think about the steps from having an idea to the final polished piece.",
      explanation: "The writing process is recursive and includes prewriting (generating ideas), drafting (getting ideas down), revising (improving content and organization), editing (correcting grammar and mechanics), and publishing (sharing the final product).",
      keyWords: ["prewriting", "drafting", "revising", "editing", "publishing", "brainstorming", "process"],
      topic: 'writing-skills',
      difficulty: 'medium'
    },

    // Vocabulary Questions
    {
      id: 'vocabulary-subj-1',
      question: "Explain how context clues help in understanding unfamiliar words. Give an example of how you would use context clues to determine word meaning.",
      expectedAnswer: "Context clues are hints in surrounding text that help determine word meaning. Example: 'The teacher was irate when students were talking during the test' - 'irate' means angry based on the situation described.",
      hint: "Think about how the words and sentences around an unfamiliar word provide hints about its meaning.",
      explanation: "Context clues are words, phrases, or sentences around an unfamiliar word that provide hints about its meaning. Types include definition, example, contrast, and inference clues.",
      keyWords: ["context clues", "surrounding text", "hints", "meaning", "definition", "example", "inference"],
      topic: 'vocabulary',
      difficulty: 'medium'
    },
    {
      id: 'vocabulary-subj-2',
      question: "What are prefixes and suffixes? Explain how understanding them helps in vocabulary building. Give three examples each.",
      expectedAnswer: "Prefixes are word parts added before root words; suffixes are added after. They change meaning. Prefixes: un- (not), re- (again), pre- (before). Suffixes: -ful (full of), -less (without), -tion (action).",
      hint: "Think about word parts that change the meaning of base words.",
      explanation: "Prefixes and suffixes are morphemes that attach to root words to create new meanings. Understanding them helps decode unfamiliar words and build vocabulary systematically.",
      keyWords: ["prefixes", "suffixes", "root words", "morphemes", "meaning", "vocabulary building"],
      topic: 'vocabulary',
      difficulty: 'medium'
    }
  ]
};