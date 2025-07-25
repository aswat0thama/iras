// English concept map data for Grade 10 SEE Board
export const englishNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Grammar', 
      progress: 75, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 30,
      completedQuestions: 22,
      subject: 'english'
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 200, y: 150 },
    data: { 
      label: 'Reading Comprehension', 
      progress: 60, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 25,
      completedQuestions: 15,
      subject: 'english'
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 600, y: 150 },
    data: { 
      label: 'Writing Skills', 
      progress: 45, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 20,
      completedQuestions: 9,
      subject: 'english'
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { 
      label: 'Vocabulary', 
      progress: 85, 
      status: 'completed',
      difficulty: 'easy',
      questionsCount: 35,
      completedQuestions: 30,
      subject: 'english'
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 300, y: 300 },
    data: { 
      label: 'Literature', 
      progress: 30, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 28,
      completedQuestions: 8,
      subject: 'english'
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 500, y: 300 },
    data: { 
      label: 'Essay Writing', 
      progress: 50, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 15,
      completedQuestions: 7,
      subject: 'english'
    },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 700, y: 300 },
    data: { 
      label: 'Poetry Analysis', 
      progress: 20, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 18,
      completedQuestions: 3,
      subject: 'english'
    },
  },
  {
    id: '8',
    type: 'custom',
    position: { x: 200, y: 450 },
    data: { 
      label: 'Letter Writing', 
      progress: 90, 
      status: 'completed',
      difficulty: 'easy',
      questionsCount: 12,
      completedQuestions: 11,
      subject: 'english'
    },
  },
  {
    id: '9',
    type: 'custom',
    position: { x: 600, y: 450 },
    data: { 
      label: 'Story Writing', 
      progress: 40, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 10,
      completedQuestions: 4,
      subject: 'english'
    },
  },
  {
    id: '10',
    type: 'custom',
    position: { x: 400, y: 550 },
    data: { 
      label: 'Speaking & Listening', 
      progress: 65, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 22,
      completedQuestions: 14,
      subject: 'english'
    },
  },
];

export const englishEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep' },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep' },
  { id: 'e3-9', source: '3', target: '9', type: 'smoothstep' },
  { id: 'e5-7', source: '5', target: '7', type: 'smoothstep' },
  { id: 'e3-8', source: '3', target: '8', type: 'smoothstep' },
  { id: 'e4-10', source: '4', target: '10', type: 'smoothstep' },
];