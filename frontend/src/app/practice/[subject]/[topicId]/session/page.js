'use client'

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  Clock,
  FileText,
  Lightbulb,
  RotateCcw,
  HelpCircle,
  Send,
  Upload,
  Camera,
  X,
  Check,
  BookOpen,
  Search,
  XCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

// Import question banks
import { mathematicsQuestions } from '@/data/questions/mathematicsQuestions';
import { scienceQuestions } from '@/data/questions/scienceQuestions';
import { englishQuestions } from '@/data/questions/englishQuestions';

// Question bank mapping
const questionBanks = {
  mathematics: mathematicsQuestions,
  science: scienceQuestions,
  english: englishQuestions,
  // Add other subjects as needed
};

export default function PracticeSessionPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { subject, topicId } = params;
  const difficulty = searchParams.get('difficulty');
  const type = searchParams.get('type');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState(new Set());
  const [checkedQuestions, setCheckedQuestions] = useState(new Set());
  const [answerResults, setAnswerResults] = useState({});
  const [showHint, setShowHint] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [showAnswerCheck, setShowAnswerCheck] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  // Function to get filtered questions based on subject, topic, and difficulty
  const getFilteredQuestions = (subject, topicId, type, difficulty) => {
    const subjectQuestions = questionBanks[subject];
    
    if (!subjectQuestions || !subjectQuestions[type]) {
      return [];
    }
    
    const allQuestions = subjectQuestions[type];
    
    // Filter by topic and difficulty
    return allQuestions.filter(question => {
      const topicMatch = question.topic === topicId;
      const difficultyMatch = !difficulty || question.difficulty === difficulty;
      return topicMatch && difficultyMatch;
    });
  };

  // Get filtered questions
  const questions = getFilteredQuestions(subject, topicId, type, difficulty);
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isCurrentQuestionSubmitted = submittedQuestions.has(currentQuestion?.id);
  const isCurrentQuestionChecked = checkedQuestions.has(currentQuestion?.id);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isSubmitted]);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && currentQuestion) {
      setUploadedFiles({
        ...uploadedFiles,
        [currentQuestion.id]: file
      });
    }
  };

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (currentQuestion) {
      setSubmittedQuestions(new Set([...submittedQuestions, currentQuestion.id]));
    }
  };

  // Check objective answer
  const checkObjectiveAnswer = (selectedAnswer, question) => {
    const isCorrect = selectedAnswer === question.correctAnswer;
    return {
      isCorrect,
      score: isCorrect ? 100 : 0,
      feedback: isCorrect ? "Correct! Well done." : "Incorrect. Try again or check the explanation."
    };
  };

  // Check subjective answer (basic keyword matching)
  const checkSubjectiveAnswer = (userAnswer, question) => {
    if (!userAnswer || userAnswer.trim().length < 10) {
      return {
        score: 0,
        feedback: "Answer is too short. Please provide a more detailed response.",
        foundKeywords: [],
        totalKeywords: question.keyWords?.length || 0
      };
    }

    const keyWords = question.keyWords || [];
    const userText = userAnswer.toLowerCase();
    const foundKeywords = keyWords.filter(keyword => 
      userText.includes(keyword.toLowerCase())
    );
    
    const score = (foundKeywords.length / keyWords.length) * 100;
    
    let feedback;
    if (score >= 80) {
      feedback = "Excellent answer! You covered all key concepts.";
    } else if (score >= 70) {
      feedback = "Very good answer! Your answer covers most key concepts.";
    } else if (score >= 60) {
      feedback = "Good answer! Consider including more details.";
    } else if (score >= 40) {
      feedback = "Partial answer. You're on the right track but missing some key points.";
    } else {
      feedback = "Your answer needs more work. Review the key concepts.";
    }

    return { score, feedback, foundKeywords, totalKeywords: keyWords.length };
  };

  const handleCheckAnswer = () => {
    const hasAnswer = type === 'objective' 
      ? answers[currentQuestion.id] !== undefined
      : answers[currentQuestion.id] || uploadedFiles[currentQuestion.id];

    if (!hasAnswer) {
      alert('Please provide an answer before checking.');
      return;
    }

    let result;
    if (type === 'objective') {
      result = checkObjectiveAnswer(answers[currentQuestion.id], currentQuestion);
    } else {
      result = checkSubjectiveAnswer(answers[currentQuestion.id], currentQuestion);
    }

    setAnswerResults({
      ...answerResults,
      [currentQuestion.id]: result
    });

    setCheckedQuestions(new Set([...checkedQuestions, currentQuestion.id]));
    setShowAnswerCheck({
      ...showAnswerCheck,
      [currentQuestion.id]: true
    });
  };

  const handleShowHint = () => {
    setShowHint({
      ...showHint,
      [currentQuestion.id]: true
    });
  };

  const handleShowExplanation = () => {
    setShowExplanation({
      ...showExplanation,
      [currentQuestion.id]: true
    });
  };

  const handleHideExplanation = () => {
    setShowExplanation({
      ...showExplanation,
      [currentQuestion.id]: false
    });
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitPractice = () => {
    setIsSubmitted(true);
    // Show explanations for all questions
    const allExplanations = {};
    questions.forEach(q => {
      allExplanations[q.id] = true;
    });
    setShowExplanation(allExplanations);
  };

  const getAnsweredCount = () => {
    return submittedQuestions.size;
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle case when no questions are available
  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-4">No Questions Available</h2>
                <p className="text-gray-600 mb-4">
                  Questions for <strong>{subject}</strong> - <strong>{topicId}</strong> 
                  {difficulty && ` (${difficulty} difficulty)`} are not available yet.
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <p>Subject: {subject}</p>
                  <p>Topic: {topicId}</p>
                  <p>Type: {type}</p>
                  <p>Difficulty: {difficulty || 'All'}</p>
                </div>
                <Link href={`/practice/${subject}/${topicId}`}>
                  <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Topic Selection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-4">Loading Question...</h2>
                <p className="text-gray-600">Please wait while we load your question.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="p-4 lg:p-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link href={`/practice/${subject}/${topicId}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topic
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </Badge>
              <Badge variant="outline">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
              {difficulty && (
                <Badge variant="outline">
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Badge>
              )}
            </div>
          </div>

          {/* Progress and Timer */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <Progress value={progressPercentage} className="w-48" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span className={timeLeft < 300 ? 'text-red-600 font-medium' : ''}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">
                  {currentQuestion.question}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    {currentQuestion.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {currentQuestion.topic}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Objective Questions */}
              {type === 'objective' && (
                <RadioGroup
                  value={answers[currentQuestion.id]?.toString()}
                  onValueChange={(value) => setAnswers({
                    ...answers,
                    [currentQuestion.id]: parseInt(value)
                  })}
                  disabled={isCurrentQuestionChecked}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                      {isCurrentQuestionChecked && index === currentQuestion.correctAnswer && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      {isCurrentQuestionChecked && 
                       index === answers[currentQuestion.id] && 
                       index !== currentQuestion.correctAnswer && (
                        <X className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              )}

              {/* Subjective Questions */}
              {type === 'subjective' && (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your answer here..."
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => setAnswers({
                      ...answers,
                      [currentQuestion.id]: e.target.value
                    })}
                    disabled={isCurrentQuestionChecked}
                    rows={6}
                  />
                  
                  {/* File Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Upload handwritten solution or diagram
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        disabled={isCurrentQuestionChecked}
                      />
                      <Label htmlFor="file-upload">
                        <Button variant="outline" size="sm" asChild>
                          <span>
                            <Camera className="w-4 h-4 mr-2" />
                            Choose File
                          </span>
                        </Button>
                      </Label>
                      {uploadedFiles[currentQuestion.id] && (
                        <p className="text-sm text-green-600 mt-2">
                          File uploaded: {uploadedFiles[currentQuestion.id].name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Answer Result */}
              {showAnswerCheck[currentQuestion.id] && answerResults[currentQuestion.id] && (
                <Alert className={`mt-4 ${answerResults[currentQuestion.id].isCorrect ? 'border-green-200' : 'border-yellow-200'}`}>
                  <AlertDescription>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">
                        {type === 'objective' ? (
                          answerResults[currentQuestion.id].isCorrect ? 'Correct!' : 'Incorrect'
                        ) : (
                          `Score: ${Math.round(answerResults[currentQuestion.id].score)}%`
                        )}
                      </span>
                    </div>
                    <p>{answerResults[currentQuestion.id].feedback}</p>
                    {type === 'subjective' && answerResults[currentQuestion.id].foundKeywords && (
                      <div className="mt-2 text-sm">
                        <p>Keywords found: {answerResults[currentQuestion.id].foundKeywords.length}/{answerResults[currentQuestion.id].totalKeywords}</p>
                      </div>
                    )}
                  </AlertDescription>
                </Alert>
              )}

              {/* Hint */}
              {showHint[currentQuestion.id] && (
                <Alert className="mt-4 border-blue-200">
                  <Lightbulb className="w-4 h-4" />
                  <AlertDescription>
                    <strong>Hint:</strong> {currentQuestion.hint}
                  </AlertDescription>
                </Alert>
              )}

              {/* Explanation */}
              {showExplanation[currentQuestion.id] && (
                <Alert className="mt-4 border-gray-200">
                  <BookOpen className="w-4 h-4" />
                  <AlertDescription>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <strong>Explanation:</strong>
                        <p className="mt-1">{currentQuestion.explanation}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleHideExplanation}
                        className="ml-2"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
            <div className="flex gap-2">
              {!isCurrentQuestionChecked && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShowHint}
                    disabled={showHint[currentQuestion.id]}
                  >
                    <Lightbulb className="w-4 h-4 mr-1" />
                    Hint
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCheckAnswer}
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Check Answer
                  </Button>
                </>
              )}
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleShowExplanation}
                disabled={showExplanation[currentQuestion.id]}
              >
                <BookOpen className="w-4 h-4 mr-1" />
                Show Explanation
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={isFirstQuestion}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              
              {!isLastQuestion ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmitPractice} disabled={isSubmitted}>
                  <Send className="w-4 h-4 mr-1" />
                  Submit Practice
                </Button>
              )}
            </div>
          </div>

          {/* Practice Summary */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between text-sm">
                <span>Progress: {getAnsweredCount()}/{questions.length} answered</span>
                <span>Topic: {topicId}</span>
                <span>Time remaining: {formatTime(timeLeft)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}