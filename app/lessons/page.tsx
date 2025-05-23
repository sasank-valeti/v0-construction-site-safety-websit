import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { HardHat, Search, BookOpen, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react"

// Mock data for lessons
const lessonCategories = [
  {
    id: "ppe",
    name: "Personal Protective Equipment",
    description: "Learn about the proper use and importance of PPE on construction sites",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 5,
    level: 1,
  },
  {
    id: "hazard-identification",
    name: "Hazard Identification",
    description: "Techniques for identifying and assessing workplace hazards",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 4,
    level: 1,
  },
  {
    id: "emergency-procedures",
    name: "Emergency Procedures",
    description: "Protocols for handling emergencies on construction sites",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 3,
    level: 1,
  },
  {
    id: "fall-protection",
    name: "Fall Protection",
    description: "Systems and procedures to prevent falls from heights",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 6,
    level: 2,
  },
  {
    id: "equipment-safety",
    name: "Equipment Safety",
    description: "Safe operation of common construction equipment",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 7,
    level: 2,
  },
  {
    id: "confined-spaces",
    name: "Confined Spaces",
    description: "Safety procedures for working in confined spaces",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 4,
    level: 2,
  },
  {
    id: "safety-management",
    name: "Safety Management Systems",
    description: "Implementing and maintaining effective safety management systems",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 5,
    level: 3,
  },
  {
    id: "incident-investigation",
    name: "Incident Investigation",
    description: "Procedures for investigating workplace incidents and near-misses",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 4,
    level: 3,
  },
  {
    id: "regulatory-compliance",
    name: "Regulatory Compliance",
    description: "Understanding and complying with safety regulations and standards",
    image: "/placeholder.svg?height=200&width=300",
    lessonCount: 6,
    level: 3,
  },
]

// Featured lessons
const featuredLessons = [
  {
    id: "ppe-basics",
    title: "PPE Basics: What Every Worker Needs to Know",
    category: "Personal Protective Equipment",
    duration: "15 min",
    level: 1,
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: "fall-protection-101",
    title: "Fall Protection 101: Preventing the Leading Cause of Construction Fatalities",
    category: "Fall Protection",
    duration: "20 min",
    level: 2,
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: "emergency-response",
    title: "Emergency Response Planning for Construction Sites",
    category: "Emergency Procedures",
    duration: "18 min",
    level: 1,
    image: "/placeholder.svg?height=150&width=250",
  },
]

// Recent lessons
const recentLessons = [
  {
    id: "scaffold-safety",
    title: "Scaffold Safety: Setup and Inspection",
    category: "Equipment Safety",
    duration: "22 min",
    level: 2,
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "chemical-hazards",
    title: "Chemical Hazards in Construction",
    category: "Hazard Identification",
    duration: "17 min",
    level: 1,
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "incident-reporting",
    title: "Effective Incident Reporting and Documentation",
    category: "Incident Investigation",
    duration: "25 min",
    level: 3,
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "trenching-safety",
    title: "Trenching and Excavation Safety",
    category: "Hazard Identification",
    duration: "20 min",
    level: 2,
    image: "/placeholder.svg?height=120&width=200",
  },
]

export default function LessonsPage() {
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
        {/* Hero Section */}
        <section className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Construction Safety <span className="text-yellow-500">Lessons</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Comprehensive safety training materials to help you prepare for certification and stay safe on the job.
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for lessons..."
                  className="pl-10 py-6 bg-gray-800 border-gray-700 text-white rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Lessons */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Lessons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredLessons.map((lesson) => (
                <Card key={lesson.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
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
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    <CardDescription>{lesson.category}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {lesson.duration}
                    </div>
                    <Link href={`/lessons/${lesson.id}`}>
                      <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400">
                        Start Lesson
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lesson Categories */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Lesson Categories</h2>
            <Tabs defaultValue="level1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="level1"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                >
                  Level 1: Basic
                </TabsTrigger>
                <TabsTrigger
                  value="level2"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                >
                  Level 2: Intermediate
                </TabsTrigger>
                <TabsTrigger
                  value="level3"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                >
                  Level 3: Advanced
                </TabsTrigger>
              </TabsList>

              <TabsContent value="level1">
                <div className="grid md:grid-cols-3 gap-6">
                  {lessonCategories
                    .filter((category) => category.level === 1)
                    .map((category) => (
                      <Card key={category.id} className="hover:shadow-md transition-shadow">
                        <div className="relative h-40">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center text-sm text-gray-500">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {category.lessonCount} lessons
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/lessons/categories/${category.id}`} className="w-full">
                            <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                              View Lessons
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="level2">
                <div className="grid md:grid-cols-3 gap-6">
                  {lessonCategories
                    .filter((category) => category.level === 2)
                    .map((category) => (
                      <Card key={category.id} className="hover:shadow-md transition-shadow">
                        <div className="relative h-40">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center text-sm text-gray-500">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {category.lessonCount} lessons
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/lessons/categories/${category.id}`} className="w-full">
                            <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                              View Lessons
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="level3">
                <div className="grid md:grid-cols-3 gap-6">
                  {lessonCategories
                    .filter((category) => category.level === 3)
                    .map((category) => (
                      <Card key={category.id} className="hover:shadow-md transition-shadow">
                        <div className="relative h-40">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center text-sm text-gray-500">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {category.lessonCount} lessons
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/lessons/categories/${category.id}`} className="w-full">
                            <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                              View Lessons
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Recently Added Lessons */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recently Added</h2>
              <Link href="/lessons/all" className="text-yellow-600 hover:text-yellow-800 flex items-center">
                View all lessons <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {recentLessons.map((lesson) => (
                <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                  <div className="relative h-32">
                    <Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
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
                  <CardHeader className="py-3">
                    <CardTitle className="text-base">{lesson.title}</CardTitle>
                    <CardDescription className="text-xs">{lesson.category}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0 pb-3 flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {lesson.duration}
                    </div>
                    <Link href={`/lessons/${lesson.id}`}>
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        Start
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Your Learning Path</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Path line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

                {/* Level 1 */}
                <div className="relative z-10 mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto">
                    <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                      <div className="flex justify-between items-start">
                        <CardTitle>Level 1: Basic Safety</CardTitle>
                        <Shield className="h-6 w-6 text-yellow-600" />
                      </div>
                      <CardDescription>Foundation safety knowledge</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 mb-4">
                        Start your safety journey with fundamental concepts every construction worker should know.
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Personal Protective Equipment</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Hazard Identification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Emergency Procedures</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/lessons?level=1" className="w-full">
                        <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                          Start Level 1 Lessons
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                {/* Level 2 */}
                <div className="relative z-10 mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gray-300 text-gray-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto border-gray-200">
                    <CardHeader className="bg-gray-50 border-b border-gray-100">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-gray-500">Level 2: Intermediate Safety</CardTitle>
                        <Shield className="h-6 w-6 text-gray-400" />
                      </div>
                      <CardDescription className="text-gray-400">Specialized safety knowledge</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-400 mb-4">
                        Advance your knowledge with specialized safety topics for specific construction scenarios.
                      </p>
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>Fall Protection</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>Equipment Safety</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>Confined Spaces</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button disabled className="w-full bg-gray-200 text-gray-500 cursor-not-allowed">
                        Complete Level 1 to Unlock
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Level 3 */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gray-300 text-gray-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto border-gray-200">
                    <CardHeader className="bg-gray-50 border-b border-gray-100">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-gray-500">Level 3: Advanced Safety</CardTitle>
                        <Shield className="h-6 w-6 text-gray-400" />
                      </div>
                      <CardDescription className="text-gray-400">Safety management expertise</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-400 mb-4">
                        Master advanced safety management concepts for leadership roles in construction safety.
                      </p>
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>Safety Management Systems</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>Incident Investigation</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-5 w-5" />
                        <span>Regulatory Compliance</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button disabled className="w-full bg-gray-200 text-gray-500 cursor-not-allowed">
                        Complete Level 2 to Unlock
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
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
            <div className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-yellow-500">
                Home
              </Link>
              <Link href="/lessons" className="text-gray-400 hover:text-yellow-500">
                Lessons
              </Link>
              <Link href="/exams" className="text-gray-400 hover:text-yellow-500">
                Exams
              </Link>
              <Link href="/resources" className="text-gray-400 hover:text-yellow-500">
                Resources
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-yellow-500">
                About
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} SafetyFirst. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
