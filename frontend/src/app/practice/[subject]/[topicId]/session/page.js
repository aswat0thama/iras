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

// Combined questions from all subjects
const sampleQuestions = {
  objective: [
    // Mathematics questions
    ...mathematicsQuestions.objective,
    // Science questions
    ...scienceQuestions.objective,
  ],
  subjective: [
    // Mathematics questions
    ...mathematicsQuestions.subjective,
    // Science questions
    ...scienceQuestions.subjective,
  ]
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

  const questions = sampleQuestions[type] || [];
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isCurrentQuestionSubmitted = submittedQuestions.has(currentQuestion?.id);
  const isCurrentQuestionChecked = checkedQuestions.has(currentQuestion?.id);

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setUploadedFiles({
        ...uploadedFiles,
        [currentQuestion.id]: files
      });
    }
  };

  const removeUploadedFile = (fileIndex) => {
    const currentFiles = uploadedFiles[currentQuestion.id] || [];
    const updatedFiles = currentFiles.filter((_, index) => index !== fileIndex);
    
    if (updatedFiles.length === 0) {
      const newUploadedFiles = { ...uploadedFiles };
      delete newUploadedFiles[currentQuestion.id];
      setUploadedFiles(newUploadedFiles);
    } else {
      setUploadedFiles({
        ...uploadedFiles,
        [currentQuestion.id]: updatedFiles
      });
    }
  };

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

  const checkObjectiveAnswer = (userAnswer, question) => {
    const selectedIndex = parseInt(userAnswer);
    const isCorrect = selectedIndex === question.correctAnswer;
    
    return {
      isCorrect,
      score: isCorrect ? 100 : 0,
      feedback: isCorrect 
        ? "Correct! Well done." 
        : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`,
      selectedOption: question.options[selectedIndex],
      correctOption: question.options[question.correctAnswer]
    };
  };

  const checkSubjectiveAnswer = (userAnswer, question) => {
    if (!userAnswer || !question.keyWords) return { score: 0, feedback: "No answer provided" };

    const answer = userAnswer.toLowerCase();
    const keyWords = question.keyWords.map(word => word.toLowerCase());
    
    let matchedKeywords = 0;
    const foundKeywords = [];
    
    keyWords.forEach(keyword => {
      if (answer.includes(keyword)) {
        matchedKeywords++;
        foundKeywords.push(keyword);
      }
    });

    const score = Math.round((matchedKeywords / keyWords.length) * 100);
    
    let feedback = "";
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
                <Link href={`/practice/${subject}/${topicId}`}>
                  <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Button>
                </Link>
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
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link href={`/practice/${subject}/${topicId}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Practice
              </Button>
            </Link>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                {difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)}
              </Badge>
              <Badge variant="outline">
                {type?.charAt(0).toUpperCase() + type?.slice(1)}
              </Badge>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className={timeLeft < 300 ? 'text-red-600 font-semibold' : ''}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                Submitted: {getAnsweredCount()}/{questions.length}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                      Q{currentQuestionIndex + 1}
                    </span>
                    <span>{currentQuestion.question}</span>
                  </div>
                </CardTitle>
                <div className="flex gap-2">
                  {isCurrentQuestionChecked && (
                    <Badge className="bg-orange-100 text-orange-800">
                      <Search className="w-3 h-3 mr-1" />
                      Checked
                    </Badge>
                  )}
                  {isCurrentQuestionSubmitted && (
                    <Badge className="bg-green-100 text-green-800">
                      <Check className="w-3 h-3 mr-1" />
                      Submitted
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {type === 'objective' ? (
                <RadioGroup
                  value={answers[currentQuestion.id]?.toString() || ''}
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                  disabled={isCurrentQuestionSubmitted}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className={`cursor-pointer flex-1 p-3 rounded border hover:bg-gray-50 ${
                          isCurrentQuestionSubmitted ? 'opacity-60' : ''
                        }`}
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Write your detailed answer here..."
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                    className="min-h-[120px]"
                    disabled={isCurrentQuestionSubmitted}
                  />
                  
                  {/* Photo Upload Section */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        Upload Solution Photos
                      </h3>
                      <p className="text-xs text-gray-500 mb-4">
                        Take photos of your handwritten solution (PNG, JPG up to 5MB each)
                      </p>
                      
                      {!isCurrentQuestionSubmitted && (
                        <div className="flex gap-2 justify-center">
                          <label htmlFor="file-upload" className="cursor-pointer">
                            <Button variant="outline" size="sm" asChild>
                              <span>
                                <Camera className="w-4 h-4 mr-2" />
                                Choose Files
                              </span>
                            </Button>
                          </label>
                          <input
                            id="file-upload"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </div>
                      )}
                    </div>

                    {/* Display uploaded files */}
                    {uploadedFiles[currentQuestion.id] && (
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                        {uploadedFiles[currentQuestion.id].map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-600">{file.name}</span>
                            {!isCurrentQuestionSubmitted && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeUploadedFile(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    💡 Tip: You can provide either a written answer, photos, or both
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6 flex-wrap">
                <Button
                  variant="outline"
                  onClick={handleShowHint}
                  disabled={showHint[currentQuestion.id]}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {showHint[currentQuestion.id] ? 'Hint Shown' : 'Show Hint'}
                </Button>

                <Button
                  variant="outline"
                  onClick={showExplanation[currentQuestion.id] ? handleHideExplanation : handleShowExplanation}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {showExplanation[currentQuestion.id] ? 'Hide Explanation' : 'Show Explanation'}
                </Button>

                {/* Check Answer Button - For All Question Types */}
                <Button
                  variant="outline"
                  onClick={handleCheckAnswer}
                  disabled={isCurrentQuestionChecked}
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {isCurrentQuestionChecked ? 'Answer Checked' : 'Check Answer'}
                </Button>
                
                <Button
                  onClick={handleSubmitQuestion}
                  disabled={isCurrentQuestionSubmitted}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isCurrentQuestionSubmitted ? 'Submitted' : 'Submit Answer'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Hint */}
          {showHint[currentQuestion.id] && (
            <Alert className="mb-6 border-yellow-200 bg-yellow-50">
              <HelpCircle className="w-4 h-4" />
              <AlertDescription className="text-yellow-800">
                <strong>Hint:</strong> {currentQuestion.hint}
              </AlertDescription>
            </Alert>
          )}

          {/* Answer Check Results - For All Question Types */}
          {showAnswerCheck[currentQuestion.id] && answerResults[currentQuestion.id] && (
            <Card className={`mb-6 ${
              type === 'objective' 
                ? answerResults[currentQuestion.id].isCorrect 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-red-200 bg-red-50'
                : 'border-orange-200 bg-orange-50'
            }`}>
              <CardHeader>
                <CardTitle className={`text-lg flex items-center gap-2 ${
                  type === 'objective'
                    ? answerResults[currentQuestion.id].isCorrect
                      ? 'text-green-800'
                      : 'text-red-800'
                    : 'text-orange-800'
                }`}>
                  {type === 'objective' ? (
                    answerResults[currentQuestion.id].isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )
                  ) : (
                    <Search className="w-5 h-5 text-orange-600" />
                  )}
                  Answer Check Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {type === 'objective' ? (
                  <div className="space-y-3">
                    <div className={`text-lg font-semibold ${
                      answerResults[currentQuestion.id].isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {answerResults[currentQuestion.id].feedback}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-blue-100 rounded">
                        <strong>Your Answer:</strong> {answerResults[currentQuestion.id].selectedOption}
                      </div>
                      <div className="p-3 bg-green-100 rounded">
                        <strong>Correct Answer:</strong> {answerResults[currentQuestion.id].correctOption}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold">
                        {answerResults[currentQuestion.id].score}%
                      </div>
                      <div className="flex-1">
                        <Progress value={answerResults[currentQuestion.id].score} className="h-3" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-orange-700">
                        {answerResults[currentQuestion.id].score}%
                      </div>
                      <div className="flex-1">
                        <Progress value={answerResults[currentQuestion.id].score} className="h-3" />
                      </div>
                    </div>
                    
                    <p className="text-orange-800 font-medium">{answerResults[currentQuestion.id].feedback}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Key concepts found:</strong> {answerResults[currentQuestion.id].foundKeywords?.length || 0}
                      </div>
                      <div>
                        <strong>Total key concepts:</strong> {answerResults[currentQuestion.id].totalKeywords}
                      </div>
                    </div>

                    {answerResults[currentQuestion.id].foundKeywords && answerResults[currentQuestion.id].foundKeywords.length > 0 && (
                      <div>
                        <strong className="text-sm">Concepts you included:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {answerResults[currentQuestion.id].foundKeywords.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="bg-green-100 text-green-800 text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className={`text-xs mt-3 p-2 rounded ${
                  type === 'objective' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  💡 This is an automated check. For detailed explanation, use the &quot;Show Explanation&quot; button.
                </div>
              </CardContent>
            </Card>
          )}

          {/* Explanation */}
          {showExplanation[currentQuestion.id] && (
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
                {type === 'objective' && (
                  <div className="mt-3 p-3 bg-green-100 rounded">
                    <strong>Correct Answer:</strong> {currentQuestion.options[currentQuestion.correctAnswer]}
                  </div>
                )}
                {type === 'subjective' && (
                  <div className="mt-3 p-3 bg-blue-100 rounded">
                    <strong>Expected Answer:</strong> {currentQuestion.expectedAnswer}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

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

            <div className="text-sm text-gray-500">
              Use the buttons above for hints, checking answers, and explanations
            </div>

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