import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Medal, 
  Award, 
  Clock, 
  Users, 
  Target,
  CheckCircle,
  XCircle,
  Brain
} from 'lucide-react';

// Leaderboard Component
export function Leaderboard({ leaderboardData, className = "" }) {
  const getLeaderboardIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="w-4 h-4 text-yellow-500" />;
      case 2: return <Medal className="w-4 h-4 text-gray-400" />;
      case 3: return <Award className="w-4 h-4 text-amber-600" />;
      default: return <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-gray-500">#{rank}</span>;
    }
  };

  return (
    <div className={`bg-white shadow-lg p-6 ${className}`}>
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
              <div className="text-right">
                <p className="text-xs text-gray-400">{user.accuracy}% accuracy</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Quiz Statistics Component
export function QuizStats({ score, totalQuestions, timeLeft, percentage }) {
  return (
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
        <p className="text-blue-600 text-lg font-bold">{timeLeft}</p>
      </div>
    </div>
  );
}

// Quiz Performance Badge Component
export function PerformanceBadge({ percentage }) {
  if (percentage >= 90) {
    return <Badge className="text-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600">Outstanding! 🏆</Badge>;
  } else if (percentage >= 80) {
    return <Badge className="text-lg px-4 py-2 bg-green-500 hover:bg-green-600">Excellent! ⭐</Badge>;
  } else if (percentage >= 70) {
    return <Badge variant="secondary" className="text-lg px-4 py-2">Good Job! 👍</Badge>;
  } else if (percentage >= 60) {
    return <Badge variant="secondary" className="text-lg px-4 py-2">Keep Practicing! 📚</Badge>;
  } else {
    return <Badge variant="destructive" className="text-lg px-4 py-2">Need More Practice! 💪</Badge>;
  }
}

// Quiz Progress Component
export function QuizProgress({ currentQuestion, totalQuestions, timeLeft, formatTime }) {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Daily Quiz</h1>
        <div className="flex items-center gap-2 text-lg font-mono">
          <Clock className="w-5 h-5 text-blue-600" />
          <span className={timeLeft < 300 ? 'text-red-600' : 'text-blue-600'}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <Progress value={progressPercentage} className="flex-1" />
        <span className="text-sm text-gray-600">
          {Math.round(progressPercentage)}%
        </span>
      </div>
    </div>
  );
}

// Question Card Component
export function QuestionCard({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  showReview = false,
  userAnswers = {},
  disabled = false 
}) {
  const getAnswerStatus = (answerIndex) => {
    if (!showReview) return '';
    
    const userAnswer = userAnswers[question.id];
    
    if (answerIndex === question.correctAnswer) {
      return 'correct';
    } else if (answerIndex === userAnswer && userAnswer !== question.correctAnswer) {
      return 'incorrect';
    }
    return '';
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            {question.question}
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">{question.subject}</Badge>
            <Badge variant={
              question.difficulty === 'Easy' ? 'default' :
              question.difficulty === 'Medium' ? 'secondary' : 'destructive'
            }>
              {question.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const status = getAnswerStatus(index);
            const isSelected = selectedAnswer === index;
            
            return (
              <div 
                key={index} 
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                  status === 'correct' ? 'bg-green-50 border-green-200' :
                  status === 'incorrect' ? 'bg-red-50 border-red-200' :
                  isSelected ? 'bg-blue-50 border-blue-200' :
                  'bg-white hover:bg-gray-50 border-gray-200'
                } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
                onClick={() => !disabled && onAnswerSelect(index)}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                }`}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="flex-1">{option}</span>
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
        
        {showReview && question.explanation && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-2">
              <Brain className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-800 mb-1">Explanation:</p>
                <p className="text-blue-700 text-sm">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Quiz Summary Component
export function QuizSummary({ 
  score, 
  totalQuestions, 
  timeSpent, 
  subjectBreakdown = {},
  difficultyBreakdown = {} 
}) {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-6xl font-bold text-blue-600 mb-4">
          {score}/{totalQuestions}
        </div>
        <p className="text-xl text-gray-600 mb-2">
          Your Score: {percentage.toFixed(1)}%
        </p>
        <PerformanceBadge percentage={percentage} />
      </div>

      <QuizStats 
        score={score} 
        totalQuestions={totalQuestions} 
        timeLeft={timeSpent}
        percentage={percentage}
      />

      {Object.keys(subjectBreakdown).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(subjectBreakdown).map(([subject, data]) => (
                <div key={subject} className="flex justify-between items-center">
                  <span className="font-medium">{subject}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {data.correct}/{data.total}
                    </span>
                    <Progress 
                      value={(data.correct / data.total) * 100} 
                      className="w-20" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}