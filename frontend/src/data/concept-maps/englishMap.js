// English concept map data for Grade 10 SEE Board
export const englishNodes = [
  {
    id: 'grammar',
    type: 'custom',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Grammar', 
      progress: 75, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 30,
      completedQuestions: 22,
      subject: 'english',
      category: 'language-skills'
    },
  },
  {
    id: 'vocabulary',
    type: 'custom',
    position: { x: 200, y: 150 },
    data: { 
      label: 'Vocabulary', 
      progress: 60, 
      status: 'in-progress',
      difficulty: 'easy',
      questionsCount: 25,
      completedQuestions: 15,
      subject: 'english',
      category: 'language-skills'
    },
  },
  {
    id: 'reading-comprehension',
    type: 'custom',
    position: { x: 600, y: 150 },
    data: { 
      label: 'Reading Comprehension', 
      progress: 85, 
      status: 'completed',
      difficulty: 'medium',
      questionsCount: 20,
      completedQuestions: 17,
      subject: 'english',
      category: 'reading-skills'
    },
  },
  {
    id: 'writing-skills',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { 
      label: 'Writing Skills', 
      progress: 45, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 18,
      completedQuestions: 8,
      subject: 'english',
      category: 'writing-skills'
    },
  },
  {
    id: 'literature',
    type: 'custom',
    position: { x: 300, y: 300 },
    data: { 
      label: 'Literature', 
      progress: 70, 
      status: 'in-progress',
      difficulty: 'hard',
      questionsCount: 22,
      completedQuestions: 15,
      subject: 'english',
      category: 'literature'
    },
  },
  {
    id: 'poetry',
    type: 'custom',
    position: { x: 500, y: 300 },
    data: { 
      label: 'Poetry', 
      progress: 55, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 15,
      completedQuestions: 8,
      subject: 'english',
      category: 'literature'
    },
  },
  {
    id: 'prose',
    type: 'custom',
    position: { x: 700, y: 300 },
    data: { 
      label: 'Prose', 
      progress: 65, 
      status: 'in-progress',
      difficulty: 'medium',
      questionsCount: 18,
      completedQuestions: 12,
      subject: 'english',
      category: 'literature'
    },
  },
  {
    id: 'essay-writing',
    type: 'custom',
    position: { x: 200, y: 450 },
    data: { 
      label: 'Essay Writing', 
      progress: 40, 
      status: 'weak',
      difficulty: 'hard',
      questionsCount: 12,
      completedQuestions: 5,
      subject: 'english',
      category: 'writing-skills'
    },
  },
  {
    id: 'formal-letters',
    type: 'custom',
    position: { x: 400, y: 450 },
    data: { 
      label: 'Formal Letters', 
      progress: 30, 
      status: 'weak',
      difficulty: 'medium',
      questionsCount: 10,
      completedQuestions: 3,
      subject: 'english',
      category: 'writing-skills'
    },
  },
  {
    id: 'creative-writing',
    type: 'custom',
    position: { x: 600, y: 450 },
    data: { 
      label: 'Creative Writing', 
      progress: 25, 
      status: 'not-started',
      difficulty: 'hard',
      questionsCount: 15,
      completedQuestions: 4,
      subject: 'english',
      category: 'writing-skills'
    },
  },
];

export const englishEdges = [
  { id: 'e1-2', source: 'grammar', target: 'vocabulary', type: 'smoothstep' },
  { id: 'e1-3', source: 'grammar', target: 'reading-comprehension', type: 'smoothstep' },
  { id: 'e2-4', source: 'vocabulary', target: 'writing-skills', type: 'smoothstep' },
  { id: 'e3-5', source: 'reading-comprehension', target: 'literature', type: 'smoothstep' },
  { id: 'e5-6', source: 'literature', target: 'poetry', type: 'smoothstep' },
  { id: 'e5-7', source: 'literature', target: 'prose', type: 'smoothstep' },
  { id: 'e4-8', source: 'writing-skills', target: 'essay-writing', type: 'smoothstep' },
  { id: 'e4-9', source: 'writing-skills', target: 'formal-letters', type: 'smoothstep' },
  { id: 'e4-10', source: 'writing-skills', target: 'creative-writing', type: 'smoothstep' },
  { id: 'e1-8', source: 'grammar', target: 'essay-writing', type: 'smoothstep' },
];