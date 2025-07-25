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
import { optionalMathematicsQuestions } from '@/data/questions/optionalMathematicsQuestions';

// Combined questions from all subjects
const sampleQuestions = {
  objective: [
    // Mathematics questions
    ...mathematicsQuestions.objective,
    // Science questions
    ...scienceQuestions.objective,
    // Optional Mathematics questions
    ...optionalMathematicsQuestions.objective,
  ],
  subjective: [
    // Mathematics questions
    ...mathematicsQuestions.subjective,
    // Science questions
    ...scienceQuestions.subjective,
    // Optional Mathematics questions
    ...optionalMathematicsQuestions.subjective,
  ]
};

// Function to get questions filtered by subject, topic, and difficulty
const getFilteredQuestions = (subject, topicId, type, difficulty) => {
  let questions = [];
  
  // Get all questions of the specified type
  const allQuestions = sampleQuestions[type] || [];
  
  // Filter by subject if needed (for better organization)
  let subjectQuestions = allQuestions;
  if (subject) {
    // You can add subject-specific filtering here if questions have subject metadata
    // For now, we'll use topic-based filtering which is more granular
  }
  
  // Filter by topic
  if (topicId) {
    subjectQuestions = subjectQuestions.filter(q => q.topic === topicId);
  }
  
  // Filter by difficulty
  if (difficulty && difficulty !== 'all') {
    subjectQuestions = subjectQuestions.filter(q => q.difficulty === difficulty);
  }
  
  return subjectQuestions;
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

  // Get filtered questions based on subject, topic, and difficulty
  const questions = getFilteredQuestions(subject, topicId, type, difficulty);
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isCurrentQuestionSubmitted = submittedQuestions.has(currentQuestion?.id);
  const isCurrentQuestionChecked = checkedQuestions.has(currentQuestion?.id);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isSubmitted]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle answer changes
  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles({
        ...uploadedFiles,
        [currentQuestion.id]: file
      });
    }
  };

  // Submit current question
  const handleSubmitQuestion = () => {
    const hasAnswer = type === 'objective' 
      ? answers[currentQuestion.id] !== undefined
      : answers[currentQuestion.id] || uploadedFiles[currentQuestion.id];

    if (!hasAnswer) {
      alert('Please provide an answer before submitting.');
      return;
    }

    setSubmittedQuestions(new Set([...submittedQuestions, currentQuestion.id]));
  };

  // Check objective answer
  const checkObjectiveAnswer = (selectedAnswer, question) => {
    const isCorrect = selectedAnswer === question.correctAnswer;
    return {
      isCorrect,
      message: isCorrect ? 'Correct! Well done.' : 'Incorrect. Try to understand the concept better.',
      score: isCorrect ? 100 : 0
    };
  };

  // Check subjective answer (basic keyword matching)
  const checkSubjectiveAnswer = (userAnswer, question) => {
    if (!userAnswer || !question.keyWords) {
      return {
        isCorrect: false,
        message: 'Please provide an answer.',
        score: 0,
        feedback: 'No answer provided.'
      };
    }

    const keyWords = question.keyWords || [];
    const userText = userAnswer.toLowerCase();
    const foundKeywords = keyWords.filter(keyword => 
      userText.includes(keyword.toLowerCase())
    );

    const score = Math.round((foundKeywords.length / keyWords.length) * 100);
    
    let feedback;
    if (score >= 80) {
      feedback = "Excellent! Your answer covers most key concepts.";
    } else if (score >= 60) {
      feedback = "Good answer! Consider including more details.";
    } else if (score >= 40) {
      feedback = "Partial answer. You're on the right track but missing some key points.";
    } else {
      feedback = "Your answer needs more work. Review the key concepts.";
    }

    return { score, feedback, foundKeywords, totalKeywords: keyWords.length };
  };

  // Check answer function
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

  // Show/hide hint
  const handleShowHint = () => {
    setShowHint({
      ...showHint,
      [currentQuestion.id]: true
    });
  };

  // Show/hide explanation
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

  // Navigation functions
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

  // Submit entire practice
  const handleSubmitPractice = () => {
    setIsSubmitted(true);
    // Show explanations for all questions
    const allExplanations = {};
    questions.forEach(q => {
      allExplanations[q.id] = true;
    });
    setShowExplanation(allExplanations);
  };

  // Get answered questions count
  const getAnsweredCount = () => {
    return submittedQuestions.size;
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Get subject display name
  const getSubjectDisplayName = (subjectKey) => {
    const subjectNames = {
      'mathematics': 'Mathematics',
      'optional-mathematics': 'Optional Mathematics',
      'science': 'Science',
      'english': 'English'
    };
    return subjectNames[subjectKey] || subjectKey;
  };

  // Handle case when no questions are available
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-4">No Questions Available</h2>
                <p className="text-gray-600 mb-4">
                  Questions for this topic and difficulty level are not available yet.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Subject: {getSubjectDisplayName(subject)} | Topic: {topicId} | Type: {type} | Difficulty: {difficulty}
                </p>
                <Button asChild>
                  <Link href={`/courses/grade-10/${subject}`}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Concept Map
                  </Link>
                </Button>
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
      
      <main className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link href={`/practice/${subject}/${topicId}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Practice Session
                </h1>
                <p className="text-gray-600">
                  {getSubjectDisplayName(subject)} • {type.charAt(0).toUpperCase() + type.slice(1)} Questions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className={timeLeft < 300 ? 'text-red-600 font-semibold' : 'text-gray-600'}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <Badge variant="outline">
                {currentQuestionIndex + 1} / {questions.length}
              </Badge>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-500">
                {getAnsweredCount()} of {questions.length} submitted
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  Question {currentQuestionIndex + 1}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant={currentQuestion.difficulty === 'easy' ? 'default' : 
                                 currentQuestion.difficulty === 'medium' ? 'secondary' : 'destructive'}>
                    {currentQuestion.difficulty}
                  </Badge>
                  {isCurrentQuestionSubmitted && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Submitted
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Question Text */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800 leading-relaxed">
                  {currentQuestion.question}
                </p>
              </div>

              {/* Answer Section */}
              {type === 'objective' ? (
                // Objective Question
                <div className="space-y-3">
                  <RadioGroup
                    value={answers[currentQuestion.id]?.toString() || ''}
                    onValueChange={(value) => handleAnswerChange(parseInt(value))}
                    disabled={isCurrentQuestionSubmitted}
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ) : (
                // Subjective Question
                <div className="space-y-4">
                  <Textarea
                    placeholder="Write your answer here..."
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    disabled={isCurrentQuestionSubmitted}
                    rows={6}
                    className="resize-none"
                  />
                  
                  {/* File Upload */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        id="file-upload"
                        accept="image/*,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        disabled={isCurrentQuestionSubmitted}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById('file-upload').click()}
                        disabled={isCurrentQuestionSubmitted}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={isCurrentQuestionSubmitted}
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                      </Button>
                    </div>
                    {uploadedFiles[currentQuestion.id] && (
                      <span className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        File uploaded: {uploadedFiles[currentQuestion.id].name}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t">
                {!isCurrentQuestionSubmitted && (
                  <Button onClick={handleSubmitQuestion}>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Answer
                  </Button>
                )}
                
                {isCurrentQuestionSubmitted && !isCurrentQuestionChecked && (
                  <Button onClick={handleCheckAnswer} variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Check Answer
                  </Button>
                )}

                <Button
                  variant="outline"
                  onClick={handleShowHint}
                  disabled={showHint[currentQuestion.id]}
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  {showHint[currentQuestion.id] ? 'Hint Shown' : 'Show Hint'}
                </Button>

                <Button
                  variant="outline"
                  onClick={showExplanation[currentQuestion.id] ? handleHideExplanation : handleShowExplanation}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {showExplanation[currentQuestion.id] ? 'Hide Explanation' : 'Show Explanation'}
                </Button>
              </div>

              {/* Hint */}
              {showHint[currentQuestion.id] && (
                <Alert>
                  <Lightbulb className="w-4 h-4" />
                  <AlertDescription>
                    <strong>Hint:</strong> {currentQuestion.hint}
                  </AlertDescription>
                </Alert>
              )}

              {/* Answer Check Result */}
              {showAnswerCheck[currentQuestion.id] && answerResults[currentQuestion.id] && (
                <Alert className={answerResults[currentQuestion.id].isCorrect || answerResults[currentQuestion.id].score >= 60 ? 
                  'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                  <div className="flex items-start gap-2">
                    {answerResults[currentQuestion.id].isCorrect || answerResults[currentQuestion.id].score >= 60 ? 
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> : 
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5" />
                    }
                    <div>
                      <AlertDescription>
                        <strong>Result:</strong> {answerResults[currentQuestion.id].message || answerResults[currentQuestion.id].feedback}
                        {answerResults[currentQuestion.id].score !== undefined && (
                          <div className="mt-1">
                            <strong>Score:</strong> {answerResults[currentQuestion.id].score}%
                            {answerResults[currentQuestion.id].foundKeywords && (
                              <span className="text-sm text-gray-600 ml-2">
                                ({answerResults[currentQuestion.id].foundKeywords.length}/{answerResults[currentQuestion.id].totalKeywords} key concepts found)
                              </span>
                            )}
                          </div>
                        )}
                      </AlertDescription>
                    </div>
                  </div>
                </Alert>
              )}

              {/* Explanation */}
              {showExplanation[currentQuestion.id] && (
                <Alert className="border-blue-200 bg-blue-50">
                  <BookOpen className="w-4 h-4" />
                  <AlertDescription>
                    <strong>Explanation:</strong> {currentQuestion.explanation}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstQuestion}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmitPractice}
                disabled={isSubmitted}
                className="bg-red-600 hover:bg-red-700"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {isSubmitted ? 'Practice Completed' : 'Finish Practice'}
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

          {/* Summary at the end */}
          {isSubmitted && (
            <Card className="mt-8 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">
                  Practice Session Completed! 🎉
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-700">
                      {getAnsweredCount()}
                    </div>
                    <div className="text-sm text-green-600">Questions Submitted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-700">
                      {formatTime(1200 - timeLeft)}
                    </div>
                    <div className="text-sm text-blue-600">Time Spent</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-700">
                      {Math.round((getAnsweredCount() / questions.length) * 100)}%
                    </div>
                    <div className="text-sm text-purple-600">Completion Rate</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 justify-center">
                  <Button asChild>
                    <Link href={`/courses/grade-10/${subject}`}>
                      Back to Concept Map
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/practice/${subject}/${topicId}`}>
                      Practice Again
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}