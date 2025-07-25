// Science concept map data for Grade 10 SEE Board
export const scienceNodes = [
  // Physics Topics
  {
    id: 'physics-1',
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
    id: 'physics-2',
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
    id: 'physics-3',
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
    id: 'physics-4',
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
    id: 'physics-5',
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
    id: 'physics-6',
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
    id: 'chemistry-1',
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
    id: 'chemistry-2',
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
    id: 'chemistry-3',
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
    id: 'chemistry-4',
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
    id: 'chemistry-5',
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
    id: 'biology-1',
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
    id: 'biology-2',
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
    id: 'biology-3',
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
    id: 'biology-4',
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
    id: 'biology-5',
    type: 'custom',
    position: { x: 600, y: 650 },
    data: { 
      label: 'Plant Kingdom', 
      progress: 60, 
      status: 'in-progress',
      difficulty: 'easy',
      questionsCount: 20,
      completedQuestions: 12,
      subject: 'science',
      category: 'biology'
    },
  },
];

export const scienceEdges = [
  // Physics connections
  { id: 'e-p1-p2', source: 'physics-1', target: 'physics-2', type: 'smoothstep' },
  { id: 'e-p2-p3', source: 'physics-2', target: 'physics-3', type: 'smoothstep' },
  { id: 'e-p1-p4', source: 'physics-1', target: 'physics-4', type: 'smoothstep' },
  { id: 'e-p4-p5', source: 'physics-4', target: 'physics-5', type: 'smoothstep' },
  { id: 'e-p5-p6', source: 'physics-5', target: 'physics-6', type: 'smoothstep' },

  // Chemistry connections
  { id: 'e-c1-c2', source: 'chemistry-1', target: 'chemistry-2', type: 'smoothstep' },
  { id: 'e-c2-c3', source: 'chemistry-2', target: 'chemistry-3', type: 'smoothstep' },
  { id: 'e-c1-c4', source: 'chemistry-1', target: 'chemistry-4', type: 'smoothstep' },
  { id: 'e-c4-c5', source: 'chemistry-4', target: 'chemistry-5', type: 'smoothstep' },

  // Biology connections
  { id: 'e-b1-b2', source: 'biology-1', target: 'biology-2', type: 'smoothstep' },
  { id: 'e-b2-b3', source: 'biology-2', target: 'biology-3', type: 'smoothstep' },
  { id: 'e-b1-b4', source: 'biology-1', target: 'biology-4', type: 'smoothstep' },
  { id: 'e-b3-b5', source: 'biology-3', target: 'biology-5', type: 'smoothstep' },

  // Inter-subject connections
  { id: 'e-p3-c1', source: 'physics-3', target: 'chemistry-1', type: 'smoothstep' },
  { id: 'e-c3-b1', source: 'chemistry-3', target: 'biology-1', type: 'smoothstep' },
];