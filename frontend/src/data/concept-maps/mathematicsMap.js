// Mathematics concept map data for Grade 10 SEE Board
export const mathematicsNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Number Systems', 
      progress: 85, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 25,
      completedQuestions: 21,
      subject: 'mathematics'
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 200, y: 150 },
    data: { 
      label: 'Algebra', 
      progress: 65, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 30,
      completedQuestions: 19,
      subject: 'mathematics'
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 600, y: 150 },
    data: { 
      label: 'Geometry', 
      progress: 40, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 28,
      completedQuestions: 11,
      subject: 'mathematics'
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { 
      label: 'Linear Equations', 
      progress: 90, 
      status: 'completed',
      difficulty: 'easy',
      questionsCount: 20,
      completedQuestions: 18,
      subject: 'mathematics'
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 300, y: 300 },
    data: { 
      label: 'Quadratic Equations', 
      progress: 25, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 22,
      completedQuestions: 5,
      subject: 'mathematics'
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 500, y: 300 },
    data: { 
      label: 'Triangles', 
      progress: 70, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 26,
      completedQuestions: 18,
      subject: 'mathematics'
    },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 700, y: 300 },
    data: { 
      label: 'Circles', 
      progress: 15, 
      status: 'not-started',
      difficulty: 'medium',
      questionsCount: 24,
      completedQuestions: 3,
      subject: 'mathematics'
    },
  },
  {
    id: '8',
    type: 'custom',
    position: { x: 200, y: 450 },
    data: { 
      label: 'Trigonometry', 
      progress: 55, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 32,
      completedQuestions: 17,
      subject: 'mathematics'
    },
  },
  {
    id: '9',
    type: 'custom',
    position: { x: 600, y: 450 },
    data: { 
      label: 'Statistics', 
      progress: 80, 
      status: 'completed',
      difficulty: 'easy',
      questionsCount: 18,
      completedQuestions: 14,
      subject: 'mathematics'
    },
  },
  {
    id: '10',
    type: 'custom',
    position: { x: 400, y: 550 },
    data: { 
      label: 'Probability', 
      progress: 35, 
      status: 'weak',
      difficulty: 'medium',
      questionsCount: 20,
      completedQuestions: 7,
      subject: 'mathematics'
    },
  },
];

export const mathematicsEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep' },
  { id: 'e3-7', source: '3', target: '7', type: 'smoothstep' },
  { id: 'e6-8', source: '6', target: '8', type: 'smoothstep' },
  { id: 'e3-9', source: '3', target: '9', type: 'smoothstep' },
  { id: 'e9-10', source: '9', target: '10', type: 'smoothstep' },
];