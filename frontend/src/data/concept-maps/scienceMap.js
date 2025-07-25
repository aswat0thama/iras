// Science concept map data for Grade 10 SEE Board
export const scienceNodes = [
  // Physics Topics
  {
    id: 'light',
    type: 'custom',
    position: { x: 200, y: 50 },
    data: { 
      label: 'Light', 
      progress: 75, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 22,
      completedQuestions: 16,
      subject: 'science',
      category: 'physics'
    },
  },
  {
    id: 'sound',
    type: 'custom',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Sound', 
      progress: 60, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 18,
      completedQuestions: 11,
      subject: 'science',
      category: 'physics'
    },
  },
  {
    id: 'heat',
    type: 'custom',
    position: { x: 600, y: 50 },
    data: { 
      label: 'Heat', 
      progress: 45, 
      status: 'in-progress',
      difficulty: 'easy',
      questionsCount: 20,
      completedQuestions: 9,
      subject: 'science',
      category: 'physics'
    },
  },
  {
    id: 'motion-force',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: { 
      label: 'Motion & Force', 
      progress: 30, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 25,
      completedQuestions: 7,
      subject: 'science',
      category: 'physics'
    },
  },
  {
    id: 'electricity',
    type: 'custom',
    position: { x: 300, y: 200 },
    data: { 
      label: 'Electricity', 
      progress: 85, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 28,
      completedQuestions: 24,
      subject: 'science',
      category: 'physics'
    },
  },
  {
    id: 'magnetism',
    type: 'custom',
    position: { x: 500, y: 200 },
    data: { 
      label: 'Magnetism', 
      progress: 20, 
      status: 'weak',
      difficulty: 'medium',
      questionsCount: 15,
      completedQuestions: 3,
      subject: 'science',
      category: 'physics'
    },
  },

  // Chemistry Topics
  {
    id: 'acids-bases',
    type: 'custom',
    position: { x: 200, y: 350 },
    data: { 
      label: 'Acids & Bases', 
      progress: 90, 
      status: 'completed',
      difficulty: 'easy',
      questionsCount: 24,
      completedQuestions: 22,
      subject: 'science',
      category: 'chemistry'
    },
  },
  {
    id: 'metals-nonmetals',
    type: 'custom',
    position: { x: 400, y: 350 },
    data: { 
      label: 'Metals & Non-metals', 
      progress: 65, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 26,
      completedQuestions: 17,
      subject: 'science',
      category: 'chemistry'
    },
  },
  {
    id: 'carbon-compounds',
    type: 'custom',
    position: { x: 600, y: 350 },
    data: { 
      label: 'Carbon Compounds', 
      progress: 40, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 30,
      completedQuestions: 12,
      subject: 'science',
      category: 'chemistry'
    },
  },
  {
    id: 'chemical-reactions',
    type: 'custom',
    position: { x: 100, y: 500 },
    data: { 
      label: 'Chemical Reactions', 
      progress: 55, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 22,
      completedQuestions: 12,
      subject: 'science',
      category: 'chemistry'
    },
  },
  {
    id: 'periodic-table',
    type: 'custom',
    position: { x: 300, y: 500 },
    data: { 
      label: 'Periodic Table', 
      progress: 25, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 20,
      completedQuestions: 5,
      subject: 'science',
      category: 'chemistry'
    },
  },

  // Biology Topics
  {
    id: 'life-processes',
    type: 'custom',
    position: { x: 800, y: 200 },
    data: { 
      label: 'Life Processes', 
      progress: 80, 
      status: 'completed',
      difficulty: 'easy',
      questionsCount: 32,
      completedQuestions: 26,
      subject: 'science',
      category: 'biology'
    },
  },
  {
    id: 'heredity',
    type: 'custom',
    position: { x: 900, y: 350 },
    data: { 
      label: 'Heredity', 
      progress: 50, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 18,
      completedQuestions: 9,
      subject: 'science',
      category: 'biology'
    },
  },
  {
    id: 'environment',
    type: 'custom',
    position: { x: 700, y: 500 },
    data: { 
      label: 'Environment', 
      progress: 70, 
      status: 'in-progress',
      difficulty: 'easy',
      questionsCount: 25,
      completedQuestions: 17,
      subject: 'science',
      category: 'biology'
    },
  },
  {
    id: 'human-body',
    type: 'custom',
    position: { x: 800, y: 650 },
    data: { 
      label: 'Human Body', 
      progress: 35, 
      status: 'weak',
      difficulty: 'medium',
      questionsCount: 28,
      completedQuestions: 10,
      subject: 'science',
      category: 'biology'
    },
  },
  {
    id: 'reproduction',
    type: 'custom',
    position: { x: 600, y: 650 },
    data: { 
      label: 'Reproduction', 
      progress: 60, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 20,
      completedQuestions: 12,
      subject: 'science',
      category: 'biology'
    },
  },
];

export const scienceEdges = [
  // Physics connections
  { id: 'e1-2', source: 'light', target: 'sound', type: 'smoothstep' },
  { id: 'e2-3', source: 'sound', target: 'heat', type: 'smoothstep' },
  { id: 'e1-4', source: 'light', target: 'motion-force', type: 'smoothstep' },
  { id: 'e4-5', source: 'motion-force', target: 'electricity', type: 'smoothstep' },
  { id: 'e5-6', source: 'electricity', target: 'magnetism', type: 'smoothstep' },
  
  // Chemistry connections
  { id: 'e7-8', source: 'acids-bases', target: 'metals-nonmetals', type: 'smoothstep' },
  { id: 'e8-9', source: 'metals-nonmetals', target: 'carbon-compounds', type: 'smoothstep' },
  { id: 'e7-10', source: 'acids-bases', target: 'chemical-reactions', type: 'smoothstep' },
  { id: 'e10-11', source: 'chemical-reactions', target: 'periodic-table', type: 'smoothstep' },
  
  // Biology connections
  { id: 'e12-13', source: 'life-processes', target: 'heredity', type: 'smoothstep' },
  { id: 'e13-14', source: 'heredity', target: 'environment', type: 'smoothstep' },
  { id: 'e14-15', source: 'environment', target: 'human-body', type: 'smoothstep' },
  { id: 'e15-16', source: 'human-body', target: 'reproduction', type: 'smoothstep' },
  { id: 'e12-16', source: 'life-processes', target: 'reproduction', type: 'smoothstep' },
  
  // Inter-category connections
  { id: 'e5-7', source: 'electricity', target: 'acids-bases', type: 'smoothstep' },
  { id: 'e9-12', source: 'carbon-compounds', target: 'life-processes', type: 'smoothstep' },
];