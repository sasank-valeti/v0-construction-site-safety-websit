"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { HardHat, ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Shield } from "lucide-react"

// Sample questions for Level 2 exam
const questions = [
  {
    id: 1,
    question: "What is the primary purpose of a fall arrest system?",
    options: [
      "To prevent workers from accessing dangerous areas",
      "To stop a fall in progress and minimize injury",
      "To provide a warning when approaching an edge",
      "To reduce the need for guardrails",
    ],
    correctAnswer: "To stop a fall in progress and minimize injury",
  },
  {
    id: 2,
    question: "When working in a confined space, what should always be monitored?",
    options: [
      "Temperature only",
      "Oxygen levels only",
      "Atmospheric conditions (oxygen, toxic gases, flammable gases)",
      "Noise levels",
    ],
    correctAnswer: "Atmospheric conditions (oxygen, toxic gases, flammable gases)",
  },
  {
    id: 3,
    question: "What is the proper procedure before entering a trench deeper than 5 feet?",
    options: [
      "Check that the soil appears stable",
      "Ensure proper shoring, sloping, or shielding is in place",
      "Enter quickly to minimize time exposure",
      "Test the depth with equipment first",
    ],
    correctAnswer: "Ensure proper shoring, sloping, or shielding is in place",
  },
  {
    id: 4,
    question: "What is the maximum sound level considered safe for an 8-hour workday without hearing protection?",
    options: ["50 decibels", "85 decibels", "100 decibels", "120 decibels"],
    correctAnswer: "85 decibels",
  },
  {
    id: 5,
    question: "When operating a forklift, what should you do when your vision is obstructed by the load?",
    options: [
      "Drive faster to reduce time with obstructed vision",
      "Drive in reverse",
      "Honk continuously while moving",
      "Ask a spotter to guide you",
    ],
    correctAnswer: "Drive in reverse",
  },
]

export default function Level2Exam() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [examCompleted, setExamCompleted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(45 * 60) // 45 minutes in seconds

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answer,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setExamCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctCount = 0
    Object.keys(selectedAnswers).forEach((questionId) => {
      const question = questions.find((q) => q.id === Number.parseInt(questionId))
      if (question && selectedAnswers[Number.parseInt(questionId)] === question.correctAnswer) {
        correctCount++
      }
    })
    return {
      score: Math.round((correctCount / questions.length) * 100),
      correct: correctCount,
      total: questions.length,
    }
  }

  const scoreResult = calculateScore()
  const passed = scoreResult.score >= 75

  // Format time remaining as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-yellow-600 text-white px-3 py-1 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
            </div>
            <Link href="/exams">
              <Button variant="outline" className="bg-white border-black text-black hover:bg-gray-100">
                Exit Exam
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {!examCompleted ? (
            <Card className="border-yellow-200 shadow-sm">
              <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                <div className="flex justify-between items-center">
                  <CardTitle>Level 2: Intermediate Safety Exam</CardTitle>
                  <div className="text-sm font-medium">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                </div>
                <CardDescription>Select the best answer for each question</CardDescription>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2 mt-2" />
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="text-lg font-medium">{questions[currentQuestion].question}</div>
                  <RadioGroup
                    value={selectedAnswers[questions[currentQuestion].id] || ""}
                    onValueChange={handleAnswerSelect}
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                        <RadioGroupItem value={option} id={`option-${index}`} className="text-yellow-500" />
                        <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 border-t">
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous
                </Button>
                <Button
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswers[questions[currentQuestion].id]}
                  className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-1"
                >
                  {currentQuestion === questions.length - 1 ? "Submit Exam" : "Next"}
                  {currentQuestion < questions.length - 1 && <ArrowRight className="h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="border-yellow-200 shadow-sm">
              <CardHeader
                className={`${passed ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"} border-b`}
              >
                <div className="flex justify-between items-center">
                  <CardTitle>Exam Results</CardTitle>
                  <div className={`flex items-center gap-2 ${passed ? "text-green-600" : "text-red-600"}`}>
                    {passed ? <CheckCircle className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
                    <span className="font-medium">{passed ? "PASSED" : "NOT PASSED"}</span>
                  </div>
                </div>
                <CardDescription>Level 2: Intermediate Safety Certification</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className={`text-5xl font-bold ${passed ? "text-green-600" : "text-red-600"}`}>
                      {scoreResult.score}%
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600">
                      You answered {scoreResult.correct} out of {scoreResult.total} questions correctly.
                    </p>
                    <p className="text-gray-600 mt-1">
                      {passed
                        ? "Congratulations! You have passed the Level 2 Safety Certification exam."
                        : "You did not meet the minimum passing score of 75%. Please review the material and try again."}
                    </p>
                  </div>

                  {passed && (
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-center">
                      <h3 className="font-medium text-green-800 mb-2">Your Digital Certificate</h3>
                      <p className="text-green-700 text-sm">
                        Your Level 2 Safety Certification is now available in your profile. A physical card will be
                        mailed to your registered address within 7-10 business days.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4 pt-2 border-t">
                <Link href="/exams">
                  <Button variant="outline">Return to Exams</Button>
                </Link>
                {!passed && (
                  <Button
                    onClick={() => {
                      setExamCompleted(false)
                      setCurrentQuestion(0)
                      setSelectedAnswers({})
                      setTimeRemaining(45 * 60)
                    }}
                    className="bg-yellow-500 text-black hover:bg-yellow-400"
                  >
                    Retry Exam
                  </Button>
                )}
                {passed && (
                  <Link href="/exams/level-3">
                    <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Continue to Level 3</Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="relative">
                <div className="bg-yellow-500 rounded-lg p-2">
                  <HardHat className="h-6 w-6 text-black" />
                </div>
                <div className="absolute -top-1 -right-1 bg-black rounded-full w-3 h-3 flex items-center justify-center">
                  <Shield className="h-2 w-2 text-yellow-500" />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-yellow-500">SafetyFirst</span>
                <div className="text-xs text-gray-400 font-medium">CONSTRUCTION SAFETY</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SafetyFirst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
