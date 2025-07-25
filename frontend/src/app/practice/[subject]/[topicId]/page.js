'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Clock,
  Target,
  Zap,
  Brain,
  PenTool
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

// Sample topic data (in real app, this would come from API)
const topicData = {
  mathematics: {
    '1': { label: 'Number Systems', progress: 85, status: 'completed', difficulty: 'medium', questionsCount: 25, completedQuestions: 21 },
    '2': { label: 'Algebra', progress: 65, status: 'in-progress', difficulty: 'hard', questionsCount: 30, completedQuestions: 19 },
    '5': { label: 'Quadratic Equations', progress: 25, status: 'weak', difficulty: 'hard', questionsCount: 22, completedQuestions: 5 },
    '10': { label: 'Probability', progress: 35, status: 'weak', difficulty: 'medium', questionsCount: 20, completedQuestions: 7 },
  }
};

export default function PracticeSelectionPage() {
  const params = useParams();
  const { subject, topicId } = params;
  
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const topic = topicData[subject]?.[topicId] || { label: 'Unknown Topic', progress: 0, status: 'not-started' };

  const difficulties = [
    {
      id: 'easy',
      name: 'Easy',
      description: 'Basic concepts and simple problems',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:bg-green-100',
      questions: 8
    },
    {
      id: 'medium',
      name: 'Medium',
      description: 'Moderate difficulty with mixed concepts',
      icon: Target,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      hoverColor: 'hover:bg-yellow-100',
      questions: 12
    },
    {
      id: 'hard',
      name: 'Hard',
      description: 'Advanced problems requiring deep understanding',
      icon: Brain,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      hoverColor: 'hover:bg-red-100',
      questions: 6
    }
  ];

  const questionTypes = [
    {
      id: 'objective',
      name: 'Objective',
      description: 'Multiple choice questions with instant feedback',
      icon: CheckCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:bg-blue-100',
      duration: '15-20 min'
    },
    {
      id: 'subjective',
      name: 'Subjective',
      description: 'Written answers and detailed explanations',
      icon: PenTool,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:bg-purple-100',
      duration: '25-30 min'
    }
  ];

  const canStartPractice = selectedDifficulty && selectedType;

  const handleStartPractice = () => {
    if (canStartPractice) {
      window.location.href = `/practice/${subject}/${topicId}/session?difficulty=${selectedDifficulty}&type=${selectedType}`;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'weak': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href={`/courses/grade-10/${subject}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Concept Map
              </Button>
            </Link>
          </div>

          {/* Topic Overview */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{topic.label}</CardTitle>
                    <p className="text-gray-600">Choose your practice preferences</p>
                  </div>
                  <Badge className={getStatusColor(topic.status)}>
                    {topic.status.replace('-', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="font-medium">{topic.progress}%</span>
                </div>
                <Progress value={topic.progress} className="h-2 mb-4" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Questions Completed: {topic.completedQuestions}/{topic.questionsCount}</span>
                  <span>Subject: {subject.charAt(0).toUpperCase() + subject.slice(1)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Difficulty Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Difficulty Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {difficulties.map((difficulty) => {
                const Icon = difficulty.icon;
                const isSelected = selectedDifficulty === difficulty.id;
                
                return (
                  <Card
                    key={difficulty.id}
                    className={`cursor-pointer transition-all duration-200 ${difficulty.bgColor} ${difficulty.borderColor} border-2 ${
                      isSelected 
                        ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' 
                        : `${difficulty.hoverColor} hover:shadow-md`
                    }`}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-6 h-6 ${difficulty.color}`} />
                        {isSelected && <CheckCircle className="w-5 h-5 text-blue-600" />}
                      </div>
                      <CardTitle className="text-lg">{difficulty.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{difficulty.description}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">~{difficulty.questions} questions</span>
                        <Badge variant="outline" className="text-xs">
                          {difficulty.name}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Question Type Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Question Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questionTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.id;
                
                return (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all duration-200 ${type.bgColor} ${type.borderColor} border-2 ${
                      isSelected 
                        ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' 
                        : `${type.hoverColor} hover:shadow-md`
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-6 h-6 ${type.color}`} />
                        {isSelected && <CheckCircle className="w-5 h-5 text-blue-600" />}
                      </div>
                      <CardTitle className="text-lg">{type.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-500">Est. time: {type.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              disabled={!canStartPractice}
              onClick={handleStartPractice}
              className="px-8 py-3 text-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start Practice Session
            </Button>
            
            {canStartPractice && (
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <FileText className="w-5 h-5 mr-2" />
                Quick Review
              </Button>
            )}
          </div>

          {/* Practice Tips */}
          {canStartPractice && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Practice Session Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Topic:</strong> {topic.label}
                </div>
                <div>
                  <strong>Difficulty:</strong> {difficulties.find(d => d.id === selectedDifficulty)?.name}
                </div>
                <div>
                  <strong>Type:</strong> {questionTypes.find(t => t.id === selectedType)?.name}
                </div>
                <div>
                  <strong>Questions:</strong> ~{difficulties.find(d => d.id === selectedDifficulty)?.questions} questions
                </div>
              </div>
              <div className="mt-4 text-xs text-blue-700">
                💡 <strong>Tip:</strong> Take your time and read each question carefully. You can always review your answers before submitting.
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}