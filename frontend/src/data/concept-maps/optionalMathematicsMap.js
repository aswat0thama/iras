// Optional Mathematics concept map data for Grade 10 SEE Board
export const optionalMathematicsNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Sets and Functions', 
      progress: 75, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 25,
      completedQuestions: 19,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 200, y: 150 },
    data: { 
      label: 'Algebra', 
      progress: 60, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 30,
      completedQuestions: 18,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 600, y: 150 },
    data: { 
      label: 'Matrices and Determinants', 
      progress: 45, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 28,
      completedQuestions: 13,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { 
      label: 'Complex Numbers', 
      progress: 35, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 22,
      completedQuestions: 8,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 300, y: 300 },
    data: { 
      label: 'Polynomials', 
      progress: 80, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 24,
      completedQuestions: 19,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 500, y: 300 },
    data: { 
      label: 'Vectors', 
      progress: 25, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 26,
      completedQuestions: 7,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 700, y: 300 },
    data: { 
      label: 'Coordinate Geometry', 
      progress: 70, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 30,
      completedQuestions: 21,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '8',
    type: 'custom',
    position: { x: 200, y: 450 },
    data: { 
      label: 'Limits and Continuity', 
      progress: 15, 
      status: 'not-started',
      difficulty: 'hard',
      questionsCount: 20,
      completedQuestions: 3,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '9',
    type: 'custom',
    position: { x: 400, y: 450 },
    data: { 
      label: 'Derivatives', 
      progress: 10, 
      status: 'not-started',
      difficulty: 'hard',
      questionsCount: 35,
      completedQuestions: 4,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '10',
    type: 'custom',
    position: { x: 600, y: 450 },
    data: { 
      label: 'Integration', 
      progress: 5, 
      status: 'not-started',
      difficulty: 'hard',
      questionsCount: 32,
      completedQuestions: 2,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '11',
    type: 'custom',
    position: { x: 100, y: 600 },
    data: { 
      label: 'Trigonometry', 
      progress: 65, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 28,
      completedQuestions: 18,
      subject: 'optional-mathematics'
    },
  },
  {
    id: '12',
    type: 'custom',
    position: { x: 500, y: 600 },
    data: { 
      label: 'Statistics and Probability', 
      progress: 55, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 25,
      completedQuestions: 14,
      subject: 'optional-mathematics'
    },
  },
];

export const optionalMathematicsEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep' },
  { id: 'e3-7', source: '3', target: '7', type: 'smoothstep' },
  { id: 'e5-8', source: '5', target: '8', type: 'smoothstep' },
  { id: 'e8-9', source: '8', target: '9', type: 'smoothstep' },
  { id: 'e9-10', source: '9', target: '10', type: 'smoothstep' },
  { id: 'e4-11', source: '4', target: '11', type: 'smoothstep' },
  { id: 'e7-12', source: '7', target: '12', type: 'smoothstep' },
  { id: 'e6-7', source: '6', target: '7', type: 'smoothstep' },
  { id: 'e11-12', source: '11', target: '12', type: 'smoothstep' },
];