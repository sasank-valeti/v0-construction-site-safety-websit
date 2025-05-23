import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HardHat, Shield, FileText, BookOpen, Hammer, HardDrive, FileCheck, Users } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-500 border-b border-yellow-600">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
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
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium text-black hover:text-yellow-800">
              Home
            </Link>
            <Link href="/lessons" className="font-medium text-black hover:text-yellow-800">
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
          <Button className="bg-black text-yellow-500 hover:bg-gray-800">
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Safety Resources</h1>
          <p className="text-gray-600 max-w-3xl">
            Access our comprehensive collection of construction safety resources, including equipment guides, regulatory
            information, downloadable checklists, and more.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Equipment Gallery */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-2">
                <Hammer className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Equipment Safety Gallery</CardTitle>
              <CardDescription>
                Explore different types of construction equipment and their safety requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our comprehensive gallery includes safety information for excavators, cranes, bulldozers, forklifts, and
                more. Learn about potential hazards and required PPE for each equipment type.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/resources/equipment-gallery" className="w-full">
                <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">View Gallery</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Safety Regulations */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-2">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Safety Regulations</CardTitle>
              <CardDescription>Access current OSHA and industry safety regulations.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Stay up-to-date with the latest construction safety regulations, standards, and compliance requirements.
                Includes OSHA guidelines and industry best practices.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>

          {/* Downloadable Checklists */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-2">
                <FileCheck className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Safety Checklists</CardTitle>
              <CardDescription>Downloadable safety checklists for construction sites.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access printable checklists for daily site inspections, equipment safety checks, hazard assessments, and
                emergency preparedness.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>

          {/* Safety Data Sheets */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-2">
                <HardDrive className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Safety Data Sheets</CardTitle>
              <CardDescription>SDS database for construction materials and chemicals.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Search our database of Safety Data Sheets for common construction materials, chemicals, and products.
                Learn about proper handling, storage, and emergency procedures.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>

          {/* Training Materials */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-2">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Training Materials</CardTitle>
              <CardDescription>Supplementary training resources and materials.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access additional training materials, including presentation slides, handouts, and reference guides to
                supplement our certification courses.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>

          {/* Safety Community */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-yellow-100 p-3 rounded-full w-fit mb-2">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>Safety Community</CardTitle>
              <CardDescription>Connect with other safety professionals.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Join our community forum to connect with other safety professionals, share experiences, ask questions,
                and stay updated on industry trends.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="bg-yellow-500 rounded-lg p-2">
                    <HardHat className="h-6 w-6 text-black" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-black rounded-full w-3 h-3 flex items-center justify-center">
                    <Shield className="h-2 w-2 text-yellow-500" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xl text-yellow-500">SafetyFirst</span>
                  <div className="text-xs text-gray-400 font-medium">CONSTRUCTION SAFETY</div>
                </div>
              </div>
              <p className="text-gray-400">
                Ensuring construction site safety through comprehensive training and certification.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-yellow-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/lessons" className="text-gray-400 hover:text-yellow-500">
                    Lessons
                  </Link>
                </li>
                <li>
                  <Link href="/exams" className="text-gray-400 hover:text-yellow-500">
                    Exams
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-400 hover:text-yellow-500">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-yellow-500">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Safety Street</li>
                <li>Construction City, CS 12345</li>
                <li>info@safetyfirst.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with safety regulations and training opportunities.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 flex-grow"
                />
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} SafetyFirst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
