import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HardHat, Clock, BookOpen, ArrowLeft, Shield } from "lucide-react"
import { Footer } from "@/components/footer"

// This would normally come from a database
const getCategoryData = (categoryId: string) => {
  const categories = {
    ppe: {
      id: "ppe",
      name: "Personal Protective Equipment",
      description: "Learn about the proper use and importance of PPE on construction sites",
      image: "/placeholder.svg?height=300&width=800",
      level: 1,
    },
    "hazard-identification": {
      id: "hazard-identification",
      name: "Hazard Identification",
      description: "Techniques for identifying and assessing workplace hazards",
      image: "/placeholder.svg?height=300&width=800",
      level: 1,
    },
    "fall-protection": {
      id: "fall-protection",
      name: "Fall Protection",
      description: "Systems and procedures to prevent falls from heights",
      image: "/placeholder.svg?height=300&width=800",
      level: 2,
    },
  }

  return (
    categories[categoryId as keyof typeof categories] || {
      id: categoryId,
      name: "Category Not Found",
      description: "This category does not exist",
      image: "/placeholder.svg?height=300&width=800",
      level: 1,
    }
  )
}

// This would normally come from a database
const getLessonsForCategory = (categoryId: string) => {
  const lessonsByCategory = {
    ppe: [
      {
        id: "ppe-basics",
        title: "PPE Basics: What Every Worker Needs to Know",
        description: "An introduction to personal protective equipment and its importance in construction safety.",
        duration: "15 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: true,
      },
      {
        id: "head-protection",
        title: "Head Protection: Hard Hats and Safety Helmets",
        description: "Learn about different types of head protection and when to use them.",
        duration: "12 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "eye-face-protection",
        title: "Eye and Face Protection",
        description: "Safety glasses, goggles, and face shields for different construction tasks.",
        duration: "18 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "hand-protection",
        title: "Hand Protection: Selecting the Right Gloves",
        description: "Different types of safety gloves and their appropriate applications.",
        duration: "14 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "foot-protection",
        title: "Foot Protection: Safety Footwear",
        description: "Safety boots and shoes for construction site hazards.",
        duration: "10 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
    ],
    "hazard-identification": [
      {
        id: "hazard-types",
        title: "Types of Construction Hazards",
        description: "Overview of physical, chemical, biological, and ergonomic hazards on construction sites.",
        duration: "20 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "hazard-assessment",
        title: "Hazard Assessment Techniques",
        description: "Methods for identifying and evaluating workplace hazards.",
        duration: "25 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "job-hazard-analysis",
        title: "Job Hazard Analysis (JHA)",
        description: "Step-by-step process for analyzing tasks to identify potential hazards.",
        duration: "22 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "hazard-controls",
        title: "Hierarchy of Hazard Controls",
        description: "Understanding the most effective ways to control workplace hazards.",
        duration: "18 min",
        level: 1,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
    ],
    "fall-protection": [
      {
        id: "fall-protection-basics",
        title: "Fall Protection Basics",
        description: "Introduction to fall hazards and protection systems in construction.",
        duration: "20 min",
        level: 2,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "guardrail-systems",
        title: "Guardrail Systems",
        description: "Proper installation and use of guardrails to prevent falls.",
        duration: "15 min",
        level: 2,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "personal-fall-arrest",
        title: "Personal Fall Arrest Systems",
        description: "Harnesses, lanyards, and anchor points for fall protection.",
        duration: "25 min",
        level: 2,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "safety-nets",
        title: "Safety Net Systems",
        description: "Installation and use of safety nets for fall protection.",
        duration: "18 min",
        level: 2,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "ladder-safety",
        title: "Ladder Safety",
        description: "Proper selection, inspection, and use of ladders to prevent falls.",
        duration: "22 min",
        level: 2,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
      {
        id: "scaffold-safety",
        title: "Scaffold Safety",
        description: "Safe erection, use, and dismantling of scaffolds.",
        duration: "28 min",
        level: 2,
        image: "/placeholder.svg?height=150&width=250",
        completed: false,
      },
    ],
  }

  return lessonsByCategory[categoryId as keyof typeof lessonsByCategory] || []
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = getCategoryData(params.categoryId)
  const lessons = getLessonsForCategory(params.categoryId)

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
        {/* Category Header */}
        <section className="relative">
          <div className="relative h-64 w-full">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-4">
              <div className="container mx-auto">
                <Link href="/lessons" className="inline-flex items-center text-white mb-4 hover:text-yellow-300">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to Lessons
                </Link>
                <Badge
                  className={`mb-4 ${
                    category.level === 1
                      ? "bg-green-100 text-green-800"
                      : category.level === 2
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  Level {category.level}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
                <p className="text-gray-200 max-w-2xl">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Available Lessons</h2>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="h-4 w-4 mr-1" />
                {lessons.length} lessons
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson, index) => (
                <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />
                    {lesson.completed && (
                      <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-xs">Completed</div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{lesson.title}</CardTitle>
                        <CardDescription>Lesson {index + 1}</CardDescription>
                      </div>
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
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{lesson.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {lesson.duration}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/lessons/${lesson.id}`} className="w-full">
                      <Button
                        className={`w-full ${
                          lesson.completed
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-yellow-500 text-black hover:bg-yellow-400"
                        }`}
                      >
                        {lesson.completed ? "Review Lesson" : "Start Lesson"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Show other categories at the same level */}
              {category.id !== "hazard-identification" && (
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Hazard Identification"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Hazard Identification</CardTitle>
                    <CardDescription>Techniques for identifying and assessing workplace hazards</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />4 lessons
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/lessons/categories/hazard-identification" className="w-full">
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">View Lessons</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}

              {category.id !== "ppe" && (
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Personal Protective Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Personal Protective Equipment</CardTitle>
                    <CardDescription>
                      Learn about the proper use and importance of PPE on construction sites
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />5 lessons
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/lessons/categories/ppe" className="w-full">
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">View Lessons</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}

              {category.id !== "fall-protection" && (
                <Card className="hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Fall Protection"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Fall Protection</CardTitle>
                    <CardDescription>Systems and procedures to prevent falls from heights</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />6 lessons
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/lessons/categories/fall-protection" className="w-full">
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">View Lessons</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
