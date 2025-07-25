// Mathematics concept map data for Grade 10 SEE Board
export const mathematicsNodes = [
  {
    id: 'number-systems',
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
    id: 'algebra',
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
    id: 'coordinate-geometry',
    type: 'custom',
    position: { x: 600, y: 150 },
    data: { 
      label: 'Coordinate Geometry', 
      progress: 40, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 28,
      completedQuestions: 11,
      subject: 'mathematics'
    },
  },
  {
    id: 'linear-equations',
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
    id: 'quadratic-equations',
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
    id: 'triangles',
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
    id: 'circles',
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
    id: 'trigonometry',
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
    id: 'statistics',
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
    id: 'probability',
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
  { id: 'e1-2', source: 'number-systems', target: 'algebra', type: 'smoothstep' },
  { id: 'e1-3', source: 'number-systems', target: 'coordinate-geometry', type: 'smoothstep' },
  { id: 'e2-4', source: 'algebra', target: 'linear-equations', type: 'smoothstep' },
  { id: 'e2-5', source: 'algebra', target: 'quadratic-equations', type: 'smoothstep' },
  { id: 'e3-6', source: 'coordinate-geometry', target: 'triangles', type: 'smoothstep' },
  { id: 'e3-7', source: 'coordinate-geometry', target: 'circles', type: 'smoothstep' },
  { id: 'e6-8', source: 'triangles', target: 'trigonometry', type: 'smoothstep' },
  { id: 'e3-9', source: 'coordinate-geometry', target: 'statistics', type: 'smoothstep' },
  { id: 'e9-10', source: 'statistics', target: 'probability', type: 'smoothstep' },
];