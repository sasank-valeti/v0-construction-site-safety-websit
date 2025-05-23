"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { HardHat, Shield, Clock, BookOpen, Search, Filter, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

// Mock data for PPE lessons
const ppeLessons = [
  {
    id: "ppe-basics",
    title: "PPE Basics: What Every Worker Needs to Know",
    description: "An introduction to personal protective equipment and its importance in construction safety.",
    duration: "15 min",
    level: 1,
    image: "/placeholder.svg?height=200&width=400",
    completed: true,
  },
  {
    id: "head-protection",
    title: "Head Protection: Hard Hats and Safety Helmets",
    description: "Learn about different types of head protection and their proper use on construction sites.",
    duration: "12 min",
    level: 1,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
  {
    id: "eye-face-protection",
    title: "Eye and Face Protection",
    description: "Understanding the importance of protecting your eyes and face from various construction hazards.",
    duration: "18 min",
    level: 1,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
  {
    id: "hearing-protection",
    title: "Hearing Protection on Construction Sites",
    description: "Protecting your hearing from noise hazards in construction environments.",
    duration: "10 min",
    level: 1,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
  {
    id: "hand-protection",
    title: "Hand Protection: Selecting the Right Gloves",
    description: "Guide to choosing and using appropriate hand protection for different construction tasks.",
    duration: "14 min",
    level: 2,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
  {
    id: "foot-protection",
    title: "Foot Protection: Safety Boots and Footwear",
    description: "Understanding the requirements for proper foot protection on construction sites.",
    duration: "13 min",
    level: 1,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
  {
    id: "fall-protection",
    title: "Fall Protection Equipment",
    description: "Comprehensive guide to harnesses, lanyards, and other fall protection systems.",
    duration: "22 min",
    level: 2,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
  {
    id: "high-visibility-clothing",
    title: "High-Visibility Clothing",
    description: "Requirements and standards for high-visibility clothing in different construction environments.",
    duration: "11 min",
    level: 1,
    image: "/placeholder.svg?height=200&width=400",
    completed: false,
  },
]

export default function PPECategoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")

  // Filter lessons based on search query and level filter
  const filteredLessons = ppeLessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = levelFilter === "all" || lesson.level.toString() === levelFilter
    return matchesSearch && matchesLevel
  })

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
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/lessons" className="hover:text-yellow-600">
                Lessons
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-gray-900">Personal Protective Equipment</span>
            </div>
          </div>

          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Personal Protective Equipment (PPE)</h1>
            <p className="text-gray-600 max-w-3xl">
              Personal Protective Equipment is specialized clothing or equipment worn by workers to protect against
              health and safety hazards. Learn about different types of PPE and their proper use on construction sites.
            </p>
          </div>

          {/* PPE Infographic */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">PPE Overview</h2>
            <div className="relative w-full h-[500px] md:h-[600px]">
              <Image
                src="/images/ppe-infographic.webp"
                alt="Personal Protective Equipment Infographic"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search PPE lessons..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <span className="text-gray-500">Level:</span>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
              </select>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />
                  {lesson.completed && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2">
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
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{lesson.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3">{lesson.description}</p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{lesson.duration}</span>
                    <BookOpen className="h-4 w-4 ml-4 mr-1" />
                    <span>Lesson</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/lessons/${lesson.id}`} className="w-full">
                    <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                      {lesson.completed ? "Review Lesson" : "Start Lesson"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No lessons found matching your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setLevelFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
