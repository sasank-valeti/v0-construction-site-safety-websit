import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HardHat, Shield, CheckCircle, Clock, FileText } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ExamsPage() {
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
            <Link href="/exams" className="font-medium text-black hover:text-yellow-800 underline">
              Exams
            </Link>
            <Link href="/resources" className="font-medium text-black hover:text-yellow-800">
              Resources
            </Link>
            <Link href="/about" className="font-medium text-black hover:text-yellow-800">
              About
            </Link>
          </nav>
          <Button className="bg-black text-yellow-500 hover:bg-gray-800">Sign In</Button>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Construction Safety Certification Exams</h1>
            <p className="text-gray-600">
              Our three-level certification program ensures comprehensive safety knowledge for all construction site
              personnel. Each level builds upon the previous one, creating a complete safety education system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Level 1 Exam Card */}
            <Card className="border-yellow-200 hover:shadow-md transition-shadow">
              <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">Level 1: Basic Safety</CardTitle>
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <CardDescription>Foundation safety knowledge</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">25 Multiple-Choice Questions</p>
                      <p className="text-sm text-gray-500">Covering basic safety principles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">30 Minutes</p>
                      <p className="text-sm text-gray-500">Time to complete the exam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">70% Passing Score</p>
                      <p className="text-sm text-gray-500">Required to obtain certification</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 pt-2">
                <p className="text-sm text-gray-500 w-full">Recommended for all construction site workers</p>
                <Link href="/exams/level-1" className="w-full">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Start Level 1 Exam</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Level 2 Exam Card */}
            <Card className="border-yellow-200 hover:shadow-md transition-shadow">
              <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">Level 2: Intermediate</CardTitle>
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <CardDescription>Specialized safety knowledge</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">40 Multiple-Choice Questions</p>
                      <p className="text-sm text-gray-500">Covering specialized safety areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">45 Minutes</p>
                      <p className="text-sm text-gray-500">Time to complete the exam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">75% Passing Score</p>
                      <p className="text-sm text-gray-500">Required to obtain certification</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 pt-2">
                <p className="text-sm text-gray-500 w-full">For equipment operators and specialized workers</p>
                <Link href="/exams/level-2" className="w-full">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Start Level 2 Exam</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Level 3 Exam Card */}
            <Card className="border-yellow-200 hover:shadow-md transition-shadow">
              <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">Level 3: Advanced</CardTitle>
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <CardDescription>Safety management expertise</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">50 Multiple-Choice Questions</p>
                      <p className="text-sm text-gray-500">Covering advanced safety management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">60 Minutes</p>
                      <p className="text-sm text-gray-500">Time to complete the exam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">80% Passing Score</p>
                      <p className="text-sm text-gray-500">Required to obtain certification</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 pt-2">
                <p className="text-sm text-gray-500 w-full">For supervisors and safety managers</p>
                <Link href="/exams/level-3" className="w-full">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Start Level 3 Exam</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Certification Process</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="bg-yellow-100 text-yellow-700 font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Register and Study</h3>
                  <p className="text-gray-600">
                    Create an account and access study materials for your desired certification level.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-yellow-100 text-yellow-700 font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Take the Exam</h3>
                  <p className="text-gray-600">Complete the multiple-choice exam within the allotted time.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-yellow-100 text-yellow-700 font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Receive Certification</h3>
                  <p className="text-gray-600">
                    Upon passing, receive your digital certificate and physical card by mail.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-yellow-100 text-yellow-700 font-bold rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Maintain Certification</h3>
                  <p className="text-gray-600">
                    Renew your certification every two years with a refresher course and exam.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
