import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calculator, Target, Microscope, Globe, ArrowLeft, BookOpen, CheckCircle, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function Grade10SubjectsPage() {
  const subjects = [
    {
      id: 'mathematics',
      title: 'Mathematics',
      description: 'Core mathematics including algebra, geometry, trigonometry, and statistics',
      icon: Calculator,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      topics: 10,
      questions: 150,
      progress: 65,
      difficulty: 'Medium',
      estimatedTime: '45 hrs'
    },
    {
      id: 'optional-mathematics',
      title: 'Optional Mathematics',
      description: 'Advanced mathematics with calculus, matrices, vectors, and complex numbers',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      topics: 8,
      questions: 120,
      progress: 30,
      difficulty: 'Hard',
      estimatedTime: '60 hrs'
    },
    {
      id: 'science',
      title: 'Science',
      description: 'Comprehensive science covering physics, chemistry, and biology',
      icon: Microscope,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      topics: 15,
      questions: 180,
      progress: 80,
      difficulty: 'Medium',
      estimatedTime: '50 hrs'
    },
    {
      id: 'english',
      title: 'English',
      description: 'English language skills including grammar, literature, and writing',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      topics: 12,
      questions: 100,
      progress: 45,
      difficulty: 'Easy',
      estimatedTime: '35 hrs'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/courses">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Grade 10 (SEE Board)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a subject to start your learning journey. Each subject has interactive concept maps, 
              practice questions, and personalized progress tracking.
            </p>
          </div>

          {/* Overall Progress */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Your Overall Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">55%</div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">45</div>
                <div className="text-sm text-gray-600">Topics Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">287</div>
                <div className="text-sm text-gray-600">Questions Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              
              return (
                <Link key={subject.id} href={`/courses/grade-10/${subject.id}`}>
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${subject.bgColor} ${subject.borderColor} border-2`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${subject.bgColor}`}>
                          <Icon className={`w-8 h-8 ${subject.color}`} />
                        </div>
                        <Badge className={getDifficultyColor(subject.difficulty)}>
                          {subject.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{subject.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{subject.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-2" />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-gray-500" />
                            <div>
                              <div className="font-semibold text-sm">{subject.topics}</div>
                              <div className="text-xs text-gray-600">Topics</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-gray-500" />
                            <div>
                              <div className="font-semibold text-sm">{subject.questions}</div>
                              <div className="text-xs text-gray-600">Questions</div>
                            </div>
                          </div>
                        </div>

                        {/* Estimated Time */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">Est. Time: {subject.estimatedTime}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full mt-4">
                          Continue Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Study Tips */}
          <div className="mt-16 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Study Tips for SEE Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold mb-1">Daily Practice</h3>
                <p className="text-sm text-gray-600">Solve at least 10 questions daily</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🗺️</div>
                <h3 className="font-semibold mb-1">Use Concept Maps</h3>
                <p className="text-sm text-gray-600">Visual learning helps retention</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">⏰</div>
                <h3 className="font-semibold mb-1">Time Management</h3>
                <p className="text-sm text-gray-600">Practice with time limits</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-semibold mb-1">Track Progress</h3>
                <p className="text-sm text-gray-600">Monitor your weak areas</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}