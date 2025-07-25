'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Clock, 
  Users, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  Eye,
  Trophy,
  Medal,
  Award,
  Home
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

// Sample quiz questions - 20 MCQ questions
const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
    correctAnswer: 0,
    subject: "Geography",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which of the following is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: 1,
    subject: "Science",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    subject: "Mathematics",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Who wrote the famous novel 'Pride and Prejudice'?",
    options: ["Charlotte Bronte", "Jane Austen", "Emily Dickinson", "Virginia Woolf"],
    correctAnswer: 1,
    subject: "English",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    subject: "Chemistry",
    difficulty: "Medium"
  },
  {
    id: 6,
    question: "In which year did Nepal become a federal republic?",
    options: ["2006", "2007", "2008", "2009"],
    correctAnswer: 2,
    subject: "History",
    difficulty: "Hard"
  },
  {
    id: 7,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    subject: "Mathematics",
    difficulty: "Easy"
  },
  {
    id: 8,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    subject: "Science",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "What is the past tense of 'run'?",
    options: ["Runned", "Ran", "Running", "Runs"],
    correctAnswer: 1,
    subject: "English",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "Which mountain range contains Mount Everest?",
    options: ["Andes", "Alps", "Himalayas", "Rockies"],
    correctAnswer: 2,
    subject: "Geography",
    difficulty: "Easy"
  },
  {
    id: 11,
    question: "What is the value of π (pi) approximately?",
    options: ["3.14", "2.71", "1.41", "1.73"],
    correctAnswer: 0,
    subject: "Mathematics",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Kidney", "Pancreas", "Heart"],
    correctAnswer: 2,
    subject: "Biology",
    difficulty: "Medium"
  },
  {
    id: 13,
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "Italian"],
    correctAnswer: 1,
    subject: "Geography",
    difficulty: "Medium"
  },
  {
    id: 14,
    question: "Which of these is NOT a primary color?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: 2,
    subject: "Art",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "What is the formula for calculating the area of a circle?",
    options: ["πr²", "2πr", "πd", "r²"],
    correctAnswer: 0,
    subject: "Mathematics",
    difficulty: "Medium"
  },
  {
    id: 16,
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    subject: "Science",
    difficulty: "Easy"
  },
  {
    id: 17,
    question: "What is the smallest unit of matter?",
    options: ["Molecule", "Atom", "Electron", "Proton"],
    correctAnswer: 1,
    subject: "Chemistry",
    difficulty: "Medium"
  },
  {
    id: 18,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    subject: "Art",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "60"],
    correctAnswer: 1,
    subject: "Mathematics",
    difficulty: "Easy"
  },
  {
    id: 20,
    question: "Which continent is the largest by land area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: 1,
    subject: "Geography",
    difficulty: "Medium"
  }
];

// Sample leaderboard data
const leaderboardData = [
  { id: 1, name: "Arjun Sharma", score: 950, avatar: "AS", rank: 1 },
  { id: 2, name: "Priya Thapa", score: 920, avatar: "PT", rank: 2 },
  { id: 3, name: "Bikash KC", score: 890, avatar: "BK", rank: 3 },
  { id: 4, name: "Sita Rai", score: 870, avatar: "SR", rank: 4 },
  { id: 5, name: "Ravi Poudel", score: 850, avatar: "RP", rank: 5 },
  { id: 6, name: "Maya Gurung", score: 820, avatar: "MG", rank: 6 },
  { id: 7, name: "Suresh Tamang", score: 800, avatar: "ST", rank: 7 },
  { id: 8, name: "Anita Shrestha", score: 780, avatar: "AS", rank: 8 }
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Timer effect
  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Calculate score when time runs out
            let correctAnswers = 0;
            quizQuestions.forEach(question => {
              if (selectedAnswers[question.id] === question.correctAnswer) {
                correctAnswers++;
              }
            });
            setScore(correctAnswers);
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizStarted, quizCompleted, timeLeft, selectedAnswers]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuizComplete = () => {
    // Calculate score
    let correctAnswers = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    setQuizCompleted(true);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleReviewAnswers = () => {
    setShowReview(true);
    setCurrentQuestionIndex(0);
  };

  const handleBackToQuiz = () => {
    setShowReview(false);
  };

  const getAnswerStatus = (questionId, answerIndex) => {
    const userAnswer = selectedAnswers[questionId];
    const question = quizQuestions.find(q => q.id === questionId);
    
    if (!showReview) return '';
    
    if (answerIndex === question.correctAnswer) {
      return 'correct';
    } else if (answerIndex === userAnswer && userAnswer !== question.correctAnswer) {
      return 'incorrect';
    }
    return '';
  };

  const getLeaderboardIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="w-4 h-4 text-yellow-500" />;
      case 2: return <Medal className="w-4 h-4 text-gray-400" />;
      case 3: return <Award className="w-4 h-4 text-amber-600" />;
      default: return <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-gray-500">#{rank}</span>;
    }
  };

  // Pre-quiz start screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          {/* Sidebar - Leaderboard */}
          <div className="w-80 bg-white shadow-lg p-6 min-h-screen">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Leaderboard
              </h2>
              <div className="space-y-3">
                {leaderboardData.map((user) => (
                  <div key={user.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0">
                      {getLeaderboardIcon(user.rank)}
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.score} points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Daily Quiz Challenge
                  </CardTitle>
                  <p className="text-gray-600">
                    Test your knowledge with 20 multiple choice questions
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-blue-800">Time Limit</p>
                      <p className="text-blue-600">5 minutes</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="font-medium text-green-800">Questions</p>
                      <p className="text-green-600">20 MCQs</p>
                    </div>
                  </div>
                  
                  <Alert>
                    <AlertDescription>
                      Once you start the quiz, the timer will begin (5 minutes). You can navigate between questions but cannot pause the timer.
                    </AlertDescription>
                  </Alert>

                  <Button 
                    onClick={handleStartQuiz} 
                    size="lg"
                    className="w-full"
                  >
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz completed screen
  if (quizCompleted && !showReview) {
    const percentage = (score / totalQuestions) * 100;
    
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          {/* Sidebar - Leaderboard */}
          <div className="w-80 bg-white shadow-lg p-6 min-h-screen">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Leaderboard
              </h2>
              <div className="space-y-3">
                {leaderboardData.map((user) => (
                  <div key={user.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0">
                      {getLeaderboardIcon(user.rank)}
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.score} points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Quiz Completed!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-600 mb-4">
                      {score}/{totalQuestions}
                    </div>
                    <p className="text-xl text-gray-600 mb-2">
                      Your Score: {percentage.toFixed(1)}%
                    </p>
                    <Badge variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"} className="text-lg px-4 py-2">
                      {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Job!" : "Keep Practicing!"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="font-medium text-green-800">Correct</p>
                      <p className="text-green-600 text-lg font-bold">{score}</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <XCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                      <p className="font-medium text-red-800">Incorrect</p>
                      <p className="text-red-600 text-lg font-bold">{totalQuestions - score}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-blue-800">Time Left</p>
                      <p className="text-blue-600 text-lg font-bold">{formatTime(timeLeft)}</p>
                    </div>
                  </div>

                  <Button 
                    onClick={handleReviewAnswers} 
                    className="w-full"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Review Answers
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main quiz interface
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        {/* Sidebar - Leaderboard */}
        <div className="w-80 bg-white shadow-lg p-6 min-h-screen">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Leaderboard
            </h2>
            <div className="space-y-3">
              {leaderboardData.map((user) => (
                <div key={user.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    {getLeaderboardIcon(user.rank)}
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.score} points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showReview && (
            <div className="mt-6 pt-6 border-t space-y-3">
              <Button 
                onClick={handleBackToQuiz} 
                variant="outline" 
                size="sm"
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Results
              </Button>
              <Button 
                onClick={() => router.push('/')} 
                variant="default" 
                size="sm"
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Home
              </Button>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">
                  {showReview ? 'Review Answers' : 'Daily Quiz'}
                </h1>
                {!showReview && (
                  <div className="flex items-center gap-2 text-lg font-mono">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className={timeLeft < 60 ? 'text-red-600' : 'text-blue-600'}>
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <Progress value={progressPercentage} className="flex-1" />
                <span className="text-sm text-gray-600">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </div>

            {/* Question Card */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    {currentQuestion.question}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{currentQuestion.subject}</Badge>
                    <Badge variant={
                      currentQuestion.difficulty === 'Easy' ? 'default' :
                      currentQuestion.difficulty === 'Medium' ? 'secondary' : 'destructive'
                    }>
                      {currentQuestion.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedAnswers[currentQuestion.id]?.toString()}
                  onValueChange={(value) => !showReview && handleAnswerSelect(parseInt(value))}
                  disabled={showReview}
                >
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                      const status = getAnswerStatus(currentQuestion.id, index);
                      
                      return (
                        <div 
                          key={index} 
                          className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                            status === 'correct' ? 'bg-green-50 border-green-200' :
                            status === 'incorrect' ? 'bg-red-50 border-red-200' :
                            'bg-white hover:bg-gray-50'
                          }`}
                        >
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label 
                            htmlFor={`option-${index}`} 
                            className="flex-1 cursor-pointer"
                          >
                            {option}
                          </Label>
                          {showReview && status === 'correct' && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          {showReview && status === 'incorrect' && (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="flex gap-2">
                <Button
                  onClick={handleQuizComplete}
                  variant="outline"
                >
                  Submit Quiz
                </Button>

                {currentQuestionIndex < totalQuestions - 1 && (
                  <Button onClick={handleNextQuestion}>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}