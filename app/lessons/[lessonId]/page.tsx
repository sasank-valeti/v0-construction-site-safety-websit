"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  HardHat,
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Info,
  FileText,
  Download,
  Shield,
} from "lucide-react"
import { Footer } from "@/components/footer"

// This would normally come from a database
const getLessonData = (lessonId: string) => {
  const lessons = {
    "ppe-basics": {
      id: "ppe-basics",
      title: "PPE Basics: What Every Worker Needs to Know",
      category: "Personal Protective Equipment",
      categoryId: "ppe",
      description: "An introduction to personal protective equipment and its importance in construction safety.",
      duration: "15 min",
      level: 1,
      image: "/placeholder.svg?height=400&width=800",
      content: [
        {
          title: "Introduction to PPE",
          text: "Personal Protective Equipment (PPE) is specialized clothing or equipment worn by workers to protect against health and safety hazards. PPE is an essential component of construction site safety and is often the last line of defense against workplace injuries.",
          image: "/placeholder.svg?height=300&width=500",
          imageAlt: "Various types of personal protective equipment",
          keyPoints: [
            "PPE is designed to protect workers from serious workplace injuries or illnesses",
            "PPE should be used when engineering and administrative controls are not feasible",
            "Different types of PPE protect different parts of the body",
            "Proper selection, use, and maintenance of PPE is critical for worker safety",
          ],
        },
        {
          title: "Types of PPE",
          text: "Construction workers need various types of PPE depending on the hazards present at their worksite. Understanding the different types of PPE and when to use them is essential for workplace safety.",
          sections: [
            {
              subtitle: "Head Protection",
              text: "Hard hats protect against impact and penetration hazards as well as electrical shock hazards.",
              image: "/placeholder.svg?height=200&width=300",
              imageAlt: "Construction worker wearing a hard hat",
            },
            {
              subtitle: "Eye and Face Protection",
              text: "Safety glasses, goggles, and face shields protect against flying particles, molten metal, liquid chemicals, acids, chemical gases, and light radiation.",
              image: "/placeholder.svg?height=200&width=300",
              imageAlt: "Construction worker wearing safety glasses",
            },
            {
              subtitle: "Hearing Protection",
              text: "Earplugs and earmuffs protect against hearing damage when noise levels cannot be adequately controlled.",
              image: "/placeholder.svg?height=200&width=300",
              imageAlt: "Construction worker wearing ear protection",
            },
            {
              subtitle: "Hand Protection",
              text: "Gloves protect against cuts, burns, chemical exposure, and other hazards depending on the type of glove material.",
              image: "/placeholder.svg?height=200&width=300",
              imageAlt: "Construction worker wearing safety gloves",
            },
            {
              subtitle: "Foot Protection",
              text: "Safety boots with steel toes protect against falling objects, compression, punctures, and electrical hazards.",
              image: "/placeholder.svg?height=200&width=300",
              imageAlt: "Construction worker wearing safety boots",
            },
          ],
        },
        {
          title: "PPE Selection and Use",
          text: "Selecting the right PPE for the job is crucial. PPE must be appropriate for the hazard, properly fitted, and consistently used to provide protection.",
          alerts: [
            {
              type: "warning",
              title: "Important Safety Note",
              text: "PPE does not eliminate hazards. It only provides a barrier between the worker and the hazard. Always try to eliminate or reduce hazards through engineering controls first.",
            },
            {
              type: "info",
              title: "Regulatory Requirement",
              text: "Employers are required by OSHA to provide appropriate PPE to workers and ensure its proper use and maintenance.",
            },
          ],
          steps: [
            "Identify the hazards present in the workplace",
            "Select PPE that provides adequate protection against those hazards",
            "Ensure PPE fits properly and is comfortable enough to be worn consistently",
            "Train workers on how to properly use, adjust, and maintain their PPE",
            "Regularly inspect PPE for damage and replace as necessary",
          ],
        },
      ],
      quiz: {
        title: "Knowledge Check: PPE Basics",
        questions: [
          {
            question: "What does PPE stand for?",
            options: [
              "Personal Protection Equipment",
              "Personal Protective Equipment",
              "Preventative Protection Equipment",
              "Professional Protection Elements",
            ],
            correctAnswer: "Personal Protective Equipment",
          },
          {
            question: "Which of the following is NOT a type of PPE commonly used on construction sites?",
            options: ["Hard hat", "Safety glasses", "Laptop computer", "Safety boots"],
            correctAnswer: "Laptop computer",
          },
          {
            question: "When should PPE be used in the hierarchy of hazard controls?",
            options: [
              "As the first line of defense",
              "Only when convenient",
              "As the last line of defense after other controls",
              "Only when required by supervisors",
            ],
            correctAnswer: "As the last line of defense after other controls",
          },
          {
            question: "Who is responsible for providing PPE on construction sites?",
            options: [
              "Workers must provide their own PPE",
              "The employer is required to provide appropriate PPE",
              "Only specialized PPE is provided by employers",
              "PPE is optional on most construction sites",
            ],
            correctAnswer: "The employer is required to provide appropriate PPE",
          },
          {
            question: "How often should PPE be inspected for damage?",
            options: ["Once a year", "Only when it breaks", "Regularly before each use", "Only during safety audits"],
            correctAnswer: "Regularly before each use",
          },
        ],
      },
      resources: [
        {
          title: "OSHA PPE Standards",
          type: "document",
          description: "Official OSHA standards for Personal Protective Equipment",
          url: "#",
        },
        {
          title: "PPE Selection Guide",
          type: "pdf",
          description: "Comprehensive guide for selecting appropriate PPE for different hazards",
          url: "#",
        },
        {
          title: "PPE Inspection Checklist",
          type: "pdf",
          description: "Checklist for regular inspection of personal protective equipment",
          url: "#",
        },
      ],
      relatedLessons: ["head-protection", "eye-face-protection", "hand-protection"],
    },
  }

  return (
    lessons[lessonId as keyof typeof lessons] || {
      id: lessonId,
      title: "Lesson Not Found",
      category: "Unknown",
      categoryId: "unknown",
      description: "This lesson does not exist",
      duration: "0 min",
      level: 1,
      image: "/placeholder.svg?height=400&width=800",
      content: [],
      quiz: { title: "", questions: [] },
      resources: [],
      relatedLessons: [],
    }
  )
}

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const lesson = getLessonData(params.lessonId)
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [lessonCompleted, setLessonCompleted] = useState(false)

  const handleNextContent = () => {
    if (currentContentIndex < lesson.content.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
      window.scrollTo(0, 0)
    } else {
      setShowQuiz(true)
      window.scrollTo(0, 0)
    }
  }

  const handlePreviousContent = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleQuizAnswerSelect = (questionIndex: number, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer,
    })
  }

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true)

    // Check if all answers are correct
    const allCorrect = lesson.quiz.questions.every((question, index) => quizAnswers[index] === question.correctAnswer)

    if (allCorrect) {
      setLessonCompleted(true)
    }
  }

  const calculateQuizScore = () => {
    let correctCount = 0
    lesson.quiz.questions.forEach((question, index) => {
      if (quizAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })

    return {
      score: Math.round((correctCount / lesson.quiz.questions.length) * 100),
      correct: correctCount,
      total: lesson.quiz.questions.length,
    }
  }

  const quizScore = calculateQuizScore()
  const passed = quizScore.score >= 80

  const currentContent = lesson.content[currentContentIndex]
  const progress = showQuiz ? 100 : Math.round(((currentContentIndex + 1) / (lesson.content.length + 1)) * 100)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-yellow-500 border-b border-yellow-600">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-black rounded-lg p-2">
                <HardHat className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-3 h-3 flex items-center justify-center">
                <Shield className="h-2 w-2 text-black" />
              </div>
            </div>
            <div>
              <span className="font-bold text-xl text-black">SafetyFirst</span>
              <div className="text-xs text-black/70 font-medium">CONSTRUCTION SAFETY</div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium text-black hover:text-yellow-800">
              Home
            </Link>
            <Link href="/lessons" className="font-medium text-black hover:text-yellow-800 underline">
              Lessons
            </Link>
            <Link href="/exams" className="font-medium text-black hover:text-yellow-800">
              Exams
            </Link>
            <Link href="/resources" className="font-medium text-black hover:text-yellow-800">
              Resources
            </Link>
            <Link href="/about" className="font-medium text-black hover:text-yellow-800">
              About
            </Link>
          </nav>
          <Link href="/auth/sign-in">
            <Button className="bg-black text-yellow-500 hover:bg-gray-800">Sign In</Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        {/* Lesson Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Link
                  href={`/lessons/categories/${lesson.categoryId}`}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to {lesson.category}
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <Badge
                    className={`${
                      lesson.level === 1
                        ? "bg-green-100 text-green-800"
                        : lesson.level === 2
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    Level {lesson.level}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {lesson.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {lesson.content.length} sections
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={progress} className="w-32 h-2" />
                <span className="text-sm text-gray-500">{progress}% complete</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Lesson Contents</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <nav>
                        <ul className="space-y-1">
                          {lesson.content.map((content, index) => (
                            <li key={index}>
                              <button
                                onClick={() => {
                                  setCurrentContentIndex(index)
                                  setShowQuiz(false)
                                }}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                                  currentContentIndex === index && !showQuiz
                                    ? "bg-yellow-50 text-yellow-800 font-medium border-l-4 border-yellow-500"
                                    : "hover:bg-gray-50"
                                }`}
                              >
                                {index < currentContentIndex || (showQuiz && index <= currentContentIndex) ? (
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                ) : (
                                  <span className="h-4 w-4 mr-2 flex items-center justify-center rounded-full bg-gray-200 text-xs">
                                    {index + 1}
                                  </span>
                                )}
                                {content.title}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              onClick={() => setShowQuiz(true)}
                              className={`w-full text-left px-4 py-2 text-sm flex items-center ${
                                showQuiz
                                  ? "bg-yellow-50 text-yellow-800 font-medium border-l-4 border-yellow-500"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              {lessonCompleted ? (
                                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              ) : (
                                <span className="h-4 w-4 mr-2 flex items-center justify-center rounded-full bg-gray-200 text-xs">
                                  {lesson.content.length + 1}
                                </span>
                              )}
                              Knowledge Check
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                      <Link href={`/lessons/categories/${lesson.categoryId}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          All {lesson.category} Lessons
                        </Button>
                      </Link>
                      {lessonCompleted && (
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-2" /> Lesson Completed
                        </Button>
                      )}
                    </CardFooter>
                  </Card>

                  {/* Resources */}
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Resources</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="divide-y">
                        {lesson.resources.map((resource, index) => (
                          <li key={index} className="px-4 py-3">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start hover:text-yellow-600"
                            >
                              {resource.type === "pdf" ? (
                                <FileText className="h-5 w-5 mr-2 text-red-500" />
                              ) : resource.type === "document" ? (
                                <FileText className="h-5 w-5 mr-2 text-blue-500" />
                              ) : (
                                <Download className="h-5 w-5 mr-2 text-gray-500" />
                              )}
                              <div>
                                <div className="font-medium">{resource.title}</div>
                                <div className="text-xs text-gray-500">{resource.description}</div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                {!showQuiz ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>{currentContent.title}</CardTitle>
                      {currentContent.subtitle && <CardDescription>{currentContent.subtitle}</CardDescription>}
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Main content section */}
                      {currentContent.image && (
                        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                          <Image
                            src={currentContent.image || "/placeholder.svg"}
                            alt={currentContent.imageAlt || currentContent.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {currentContent.text && <p className="text-gray-700 leading-relaxed">{currentContent.text}</p>}

                      {/* Key points */}
                      {currentContent.keyPoints && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                          <h3 className="font-bold text-yellow-800 mb-2">Key Points</h3>
                          <ul className="space-y-2">
                            {currentContent.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-yellow-600 shrink-0 mr-2 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Sections */}
                      {currentContent.sections && (
                        <div className="space-y-6">
                          {currentContent.sections.map((section, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden">
                              <div className="bg-gray-50 px-4 py-3 border-b">
                                <h3 className="font-medium">{section.subtitle}</h3>
                              </div>
                              <div className="p-4">
                                <div className="grid md:grid-cols-2 gap-4 items-center">
                                  <div>
                                    <p className="text-gray-700">{section.text}</p>
                                  </div>
                                  {section.image && (
                                    <div className="relative h-40 w-full rounded-lg overflow-hidden">
                                      <Image
                                        src={section.image || "/placeholder.svg"}
                                        alt={section.imageAlt || section.subtitle}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Alerts */}
                      {currentContent.alerts && (
                        <div className="space-y-4">
                          {currentContent.alerts.map((alert, index) => (
                            <Alert
                              key={index}
                              variant={alert.type === "warning" ? "destructive" : "default"}
                              className={
                                alert.type === "warning"
                                  ? "bg-red-50 text-red-800 border-red-200"
                                  : "bg-blue-50 text-blue-800 border-blue-200"
                              }
                            >
                              {alert.type === "warning" ? (
                                <AlertTriangle className="h-5 w-5" />
                              ) : (
                                <Info className="h-5 w-5" />
                              )}
                              <AlertTitle>{alert.title}</AlertTitle>
                              <AlertDescription>{alert.text}</AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      )}

                      {/* Steps */}
                      {currentContent.steps && (
                        <div className="space-y-4">
                          <h3 className="font-bold">Steps to Follow:</h3>
                          <ol className="space-y-3">
                            {currentContent.steps.map((step, index) => (
                              <li key={index} className="flex items-start">
                                <div className="bg-yellow-100 text-yellow-800 rounded-full h-6 w-6 flex items-center justify-center font-bold text-sm mr-3 shrink-0 mt-0.5">
                                  {index + 1}
                                </div>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <Button
                        variant="outline"
                        onClick={handlePreviousContent}
                        disabled={currentContentIndex === 0}
                        className="flex items-center gap-1"
                      >
                        <ArrowLeft className="h-4 w-4" /> Previous
                      </Button>
                      <Button
                        onClick={handleNextContent}
                        className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-1"
                      >
                        {currentContentIndex === lesson.content.length - 1 ? "Take Quiz" : "Next"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                      <CardTitle>{lesson.quiz.title}</CardTitle>
                      <CardDescription>Complete this quiz to test your knowledge and finish the lesson</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {!quizSubmitted ? (
                        <div className="space-y-8">
                          {lesson.quiz.questions.map((question, index) => (
                            <div key={index} className="space-y-4">
                              <h3 className="font-medium">
                                Question {index + 1}: {question.question}
                              </h3>
                              <RadioGroup
                                value={quizAnswers[index] || ""}
                                onValueChange={(value) => handleQuizAnswerSelect(index, value)}
                              >
                                {question.options.map((option, optionIndex) => (
                                  <div
                                    key={optionIndex}
                                    className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50"
                                  >
                                    <RadioGroupItem
                                      value={option}
                                      id={`question-${index}-option-${optionIndex}`}
                                      className="text-yellow-500"
                                    />
                                    <Label
                                      htmlFor={`question-${index}-option-${optionIndex}`}
                                      className="flex-grow cursor-pointer"
                                    >
                                      {option}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-8">
                          <div className="text-center">
                            <div className={`text-5xl font-bold ${passed ? "text-green-600" : "text-red-600"} mb-4`}>
                              {quizScore.score}%
                            </div>
                            <p className="text-gray-600">
                              You answered {quizScore.correct} out of {quizScore.total} questions correctly.
                            </p>
                            <div
                              className={`mt-4 p-4 rounded-lg ${
                                passed ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                              }`}
                            >
                              {passed ? (
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5" />
                                  <span>Congratulations! You've successfully completed this lesson.</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <AlertTriangle className="h-5 w-5" />
                                  <span>
                                    You need to score at least 80% to complete this lesson. Please review the material
                                    and try again.
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Review answers */}
                          <div className="space-y-6">
                            <h3 className="font-bold text-lg">Review Your Answers</h3>
                            {lesson.quiz.questions.map((question, index) => {
                              const isCorrect = quizAnswers[index] === question.correctAnswer
                              return (
                                <div
                                  key={index}
                                  className={`p-4 rounded-lg border ${
                                    isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                                  }`}
                                >
                                  <div className="flex items-start gap-2 mb-2">
                                    {isCorrect ? (
                                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    ) : (
                                      <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    )}
                                    <h4 className="font-medium">
                                      Question {index + 1}: {question.question}
                                    </h4>
                                  </div>
                                  <div className="ml-7 space-y-1">
                                    <p>
                                      <span className="font-medium">Your answer:</span> {quizAnswers[index]}
                                    </p>
                                    {!isCorrect && (
                                      <p>
                                        <span className="font-medium">Correct answer:</span> {question.correctAnswer}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      {!quizSubmitted ? (
                        <>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setShowQuiz(false)
                              setCurrentContentIndex(lesson.content.length - 1)
                            }}
                            className="flex items-center gap-1"
                          >
                            <ArrowLeft className="h-4 w-4" /> Back to Lesson
                          </Button>
                          <Button
                            onClick={handleSubmitQuiz}
                            disabled={Object.keys(quizAnswers).length < lesson.quiz.questions.length}
                            className="bg-yellow-500 text-black hover:bg-yellow-400"
                          >
                            Submit Quiz
                          </Button>
                        </>
                      ) : (
                        <>
                          {!passed ? (
                            <>
                              <Button
                                variant="outline"
                                onClick={() => {
                                  setShowQuiz(false)
                                  setCurrentContentIndex(0)
                                  setQuizSubmitted(false)
                                  setQuizAnswers({})
                                }}
                                className="flex items-center gap-1"
                              >
                                <ArrowLeft className="h-4 w-4" /> Review Lesson
                              </Button>
                              <Button
                                onClick={() => {
                                  setQuizSubmitted(false)
                                  setQuizAnswers({})
                                }}
                                className="bg-yellow-500 text-black hover:bg-yellow-400"
                              >
                                Retry Quiz
                              </Button>
                            </>
                          ) : (
                            <>
                              <Link href={`/lessons/categories/${lesson.categoryId}`}>
                                <Button variant="outline" className="flex items-center gap-1">
                                  <ArrowLeft className="h-4 w-4" /> Back to {lesson.category}
                                </Button>
                              </Link>
                              <Link href="/exams">
                                <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
                                  Continue to Exams
                                </Button>
                              </Link>
                            </>
                          )}
                        </>
                      )}
                    </CardFooter>
                  </Card>
                )}

                {/* Related Lessons */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Related Lessons</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* This would normally fetch related lessons from the database */}
                    <Card className="hover:shadow-md transition-shadow">
                      <div className="relative h-32">
                        <Image
                          src="/placeholder.svg?height=150&width=250"
                          alt="Head Protection"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="py-3">
                        <CardTitle className="text-base">Head Protection: Hard Hats and Safety Helmets</CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-0 pb-3 flex justify-between items-center">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          12 min
                        </div>
                        <Link href="/lessons/head-protection">
                          <Button size="sm" variant="outline" className="h-8 text-xs">
                            View
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <div className="relative h-32">
                        <Image
                          src="/placeholder.svg?height=150&width=250"
                          alt="Eye and Face Protection"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="py-3">
                        <CardTitle className="text-base">Eye and Face Protection</CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-0 pb-3 flex justify-between items-center">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          18 min
                        </div>
                        <Link href="/lessons/eye-face-protection">
                          <Button size="sm" variant="outline" className="h-8 text-xs">
                            View
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <div className="relative h-32">
                        <Image
                          src="/placeholder.svg?height=150&width=250"
                          alt="Hand Protection"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="py-3">
                        <CardTitle className="text-base">Hand Protection: Selecting the Right Gloves</CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-0 pb-3 flex justify-between items-center">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          14 min
                        </div>
                        <Link href="/lessons/hand-protection">
                          <Button size="sm" variant="outline" className="h-8 text-xs">
                            View
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
