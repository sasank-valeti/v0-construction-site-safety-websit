"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Footer } from "@/components/footer"
import { HardHat, Shield, Target, Users, BookOpen, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About SafetyFirst</h1>
              <p className="text-xl text-gray-300">
                Empowering construction professionals with knowledge and skills to create safer workplaces
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Our vision is to create a world where every construction site is a safe environment for workers. We
                believe that proper safety training and education can significantly reduce workplace accidents and save
                lives. Through our comprehensive training programs, we aim to empower construction professionals with
                the knowledge and skills they need to identify hazards, implement safety protocols, and foster a culture
                of safety in their workplaces.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-yellow-600" />
                    Safety Excellence
                  </h3>
                  <p className="text-gray-700">
                    We strive for excellence in safety education, providing up-to-date, comprehensive, and practical
                    training materials that meet industry standards and regulatory requirements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-yellow-600" />
                    Accessible Learning
                  </h3>
                  <p className="text-gray-700">
                    We believe safety education should be accessible to all, regardless of language or background. Our
                    multilingual platform ensures that safety knowledge reaches everyone who needs it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Our mission is to provide high-quality, comprehensive safety training and certification for construction
                professionals through our innovative three-level exam system. We are committed to:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1 shrink-0">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Reducing workplace accidents</span> through effective safety
                    training and education
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1 shrink-0">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Promoting a culture of safety</span> in the construction industry
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1 shrink-0">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Ensuring regulatory compliance</span> with industry standards and
                    government regulations
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1 shrink-0">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Advancing careers</span> by providing recognized certifications that
                    enhance job opportunities
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1 shrink-0">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Breaking language barriers</span> by offering training in multiple
                    languages
                  </p>
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Our Commitment</h3>
                <p className="text-gray-700">
                  We are committed to continuous improvement and staying up-to-date with the latest safety standards and
                  best practices. Our team regularly reviews and updates our training materials to ensure they reflect
                  current industry requirements and technological advancements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold">Our Team</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                SafetyFirst is a project developed by Team Dominator from Eastpoint College. Our team is passionate
                about construction safety and committed to creating educational resources that make a difference in the
                industry.
              </p>

              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">Team Dominator</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Varshini VB</span>
                    <span className="text-gray-600">Safety Content Specialist</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Prajwal KR</span>
                    <span className="text-gray-600">Training Program Developer</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Sujan BM</span>
                    <span className="text-gray-600">Certification Expert</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">Valeti Sasank</span>
                    <span className="text-gray-600">Safety Standards Researcher</span>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <HardHat className="h-10 w-10 text-yellow-500" />
                  <h3 className="text-2xl font-bold">Eastpoint College</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Eastpoint College is dedicated to providing quality education and training in various technical
                  fields, with a special focus on workplace safety and professional development. Our institution
                  partners with industry leaders to ensure our programs meet real-world needs.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/construction-safety-meeting.jpeg"
                    alt="Eastpoint College Team"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-black">Join Us in Creating Safer Workplaces</h2>
              <p className="text-lg text-black/80 mb-8">
                Start your safety training journey today and become part of our mission to improve construction site
                safety worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lessons">
                  <Button className="bg-black text-yellow-500 hover:bg-gray-800 px-8 py-6 text-lg">
                    Start Training
                  </Button>
                </Link>
                <Link href="/auth/sign-in">
                  <Button variant="outline" className="border-black text-black hover:bg-black/10 px-8 py-6 text-lg">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
