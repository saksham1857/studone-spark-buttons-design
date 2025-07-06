
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, BookOpen, Calculator, FlaskConical, Globe, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const StudOne = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const subjects = [
    { id: "math", name: "Mathematics", icon: Calculator, color: "bg-blue-500" },
    { id: "science", name: "Science", icon: FlaskConical, color: "bg-green-500" },
    { id: "english", name: "English", icon: BookOpen, color: "bg-purple-500" },
    { id: "social", name: "Social Studies", icon: Globe, color: "bg-orange-500" },
  ];

  const handleSubjectToggle = (subjectId: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const startQuiz = () => {
    if (selectedSubjects.length > 0) {
      setShowQuiz(true);
    }
  };

  if (showQuiz) {
    return <QuizComponent subjects={selectedSubjects} onBack={() => setShowQuiz(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">StudOne - Class 10</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              <div>
                <h3 className="font-semibold text-gray-800">Achievement</h3>
                <p className="text-2xl font-bold text-yellow-500">85%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-800">Study Time</h3>
                <p className="text-2xl font-bold text-blue-500">24h</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-800">Rank</h3>
                <p className="text-2xl font-bold text-green-500">#12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Selection */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Subjects for Quiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              const isSelected = selectedSubjects.includes(subject.id);
              
              return (
                <div
                  key={subject.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleSubjectToggle(subject.id)}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleSubjectToggle(subject.id)}
                    />
                    <div className={`p-2 rounded-lg ${subject.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{subject.name}</h3>
                      <p className="text-sm text-gray-600">Practice questions available</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <Button
            onClick={startQuiz}
            disabled={selectedSubjects.length === 0}
            className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
          >
            Start Quiz ({selectedSubjects.length} subjects selected)
          </Button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Calculator className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Mathematics Quiz</span>
              </div>
              <span className="text-green-600 font-semibold">92%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-green-500" />
                <span className="font-medium">Science Practice</span>
              </div>
              <span className="text-green-600 font-semibold">88%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span className="font-medium">English Grammar</span>
              </div>
              <span className="text-yellow-600 font-semibold">76%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuizComponent = ({ subjects, onBack }: { subjects: string[], onBack: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the value of π (pi) approximately?",
      options: ["3.14159", "2.71828", "1.41421", "1.73205"],
      correct: "3.14159",
      subject: "math"
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: "Nitrogen",
      subject: "science"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correct: "William Shakespeare",
      subject: "english"
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
      correct: "Nile",
      subject: "social"
    }
  ];

  const filteredQuestions = questions.filter(q => subjects.includes(q.subject));

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === filteredQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < filteredQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full text-center">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-4xl font-bold text-blue-600 mb-2">{score}/{filteredQuestions.length}</p>
          <p className="text-gray-600 mb-6">
            You scored {Math.round((score / filteredQuestions.length) * 100)}%
          </p>
          <div className="space-y-3">
            <Button onClick={onBack} className="w-full">
              Take Another Quiz
            </Button>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </span>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
              ></div>
            </div>
            
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {filteredQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {filteredQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="w-full py-3 text-lg font-semibold"
          >
            {currentQuestion + 1 === filteredQuestions.length ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudOne;
