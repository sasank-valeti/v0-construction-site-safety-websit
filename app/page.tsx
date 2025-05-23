import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HardHat, Shield, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-yellow-500 border-b border-yellow-600">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HardHat className="h-8 w-8 text-black" />
            <span className="font-bold text-xl text-black">SafetyFirst</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium text-black hover:text-yellow-800">
              Home
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
          <Button className="bg-black text-yellow-500 hover:bg-gray-800">Sign In</Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Construction Site <span className="text-yellow-500">Safety</span> Training
              </h1>
              <p className="text-lg text-gray-300">
                Comprehensive safety training and certification for construction professionals. Our three-level exam
                system ensures workers are properly trained to maintain safety standards on construction sites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-6 text-lg">
                  Start Training
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-6 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Construction workers with safety equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Certification Levels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Three-Level Certification Program</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive certification program is designed to ensure all workers have the knowledge and skills
                needed to maintain safety on construction sites.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Level 1 */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Level 1: Basic Safety</h3>
                <p className="text-gray-600 mb-4">
                  Covers fundamental safety principles, PPE usage, hazard identification, and basic emergency
                  procedures.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Personal protective equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Basic hazard recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Emergency procedures</span>
                  </li>
                </ul>
                <Link href="/exams/level-1">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Start Level 1 Exam</Button>
                </Link>
              </div>

              {/* Level 2 */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Level 2: Intermediate Safety</h3>
                <p className="text-gray-600 mb-4">
                  Focuses on specialized equipment safety, risk assessment, and preventative safety measures for common
                  construction scenarios.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Equipment operation safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Fall protection systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Confined space procedures</span>
                  </li>
                </ul>
                <Link href="/exams/level-2">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Start Level 2 Exam</Button>
                </Link>
              </div>

              {/* Level 3 */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Level 3: Advanced Safety</h3>
                <p className="text-gray-600 mb-4">
                  Advanced safety management, site supervision, regulatory compliance, and emergency response
                  coordination.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Safety management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Incident investigation</span>
                  </li>
                </ul>
                <Link href="/exams/level-3">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Start Level 3 Exam</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
                <p className="text-gray-600">Pass rate for certified workers</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-yellow-500 mb-2">10,000+</div>
                <p className="text-gray-600">Workers certified through our program</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-yellow-500 mb-2">75%</div>
                <p className="text-gray-600">Reduction in workplace incidents</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Construction Professionals Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="italic text-gray-600 mb-4">
                  "The three-level certification program has transformed how we approach safety on our sites. Our team
                  is more confident and aware of potential hazards."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-medium">John Carpenter</p>
                    <p className="text-sm text-gray-500">Site Manager, BuildRight Construction</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="italic text-gray-600 mb-4">
                  "The advanced level exam prepared me for safety management responsibilities I didn't even know I
                  needed. Comprehensive and practical training."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-medium">Sarah Mason</p>
                    <p className="text-sm text-gray-500">Safety Coordinator, Urban Developers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HardHat className="h-8 w-8 text-yellow-500" />
                <span className="font-bold text-xl text-yellow-500">SafetyFirst</span>
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
