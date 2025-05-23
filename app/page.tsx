"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HardHat, Shield, ArrowRight } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "@/hooks/useTranslation"
import { Footer } from "@/components/footer"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
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
              <span className="font-bold text-xl text-black">{t("siteName")}</span>
              <div className="text-xs text-black/70 font-medium">{t("tagline")}</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium text-black hover:text-yellow-800">
              {t("nav.home")}
            </Link>
            <Link href="/lessons" className="font-medium text-black hover:text-yellow-800">
              {t("nav.lessons")}
            </Link>
            <Link href="/exams" className="font-medium text-black hover:text-yellow-800">
              {t("nav.exams")}
            </Link>
            <Link href="/resources" className="font-medium text-black hover:text-yellow-800">
              {t("nav.resources")}
            </Link>
            <Link href="/about" className="font-medium text-black hover:text-yellow-800">
              {t("nav.about")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-black text-yellow-500 hover:bg-gray-800">
              <Link href="/auth/sign-in">{t("nav.signIn")}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {t("home.heroTitle")
                  .split(" ")
                  .map((word, index) =>
                    word === "Safety" ||
                    word === "सुरक्षा" ||
                    word === "பாதுகாப்பு" ||
                    word === "భద్రత" ||
                    word === "ಸುರಕ್ಷತೆ" ? (
                      <span key={index} className="text-yellow-500">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    ),
                  )}
              </h1>
              <p className="text-lg text-gray-300">{t("home.heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/lessons">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-6 text-lg w-full sm:w-auto">
                    {t("home.startTraining")}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-6 py-6 text-lg"
                >
                  {t("home.learnMore")}
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/construction-safety-meeting.jpeg"
                alt="Construction workers in safety meeting wearing hard hats and high-visibility vests discussing safety protocols on site"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                {t("siteName")}
              </div>
            </div>
          </div>
        </section>

        {/* Safety Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("home.whySafetyTitle")}</h2>
                <p className="text-gray-600 mb-8 text-lg">{t("home.whySafetyDesc")}</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("home.preventAccidents")}</h3>
                      <p className="text-gray-600">{t("home.preventAccidentsDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                      <HardHat className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("home.compliance")}</h3>
                      <p className="text-gray-600">{t("home.complianceDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                      <ArrowRight className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("home.careerAdvancement")}</h3>
                      <p className="text-gray-600">{t("home.careerAdvancementDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ppe-infographic.webp"
                  alt="Personal Protective Equipment infographic showing different safety gear including hard hat, hearing protection, eye protection, high visibility clothing, hand protection, fall protection harness, protective pants, and steel-toed boots"
                  fill
                  className="object-contain bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">PPE Guide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Levels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("home.certificationTitle")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t("home.certificationDesc")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Level 1 */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.level1Title")}</h3>
                <p className="text-gray-600 mb-4">{t("home.level1Desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Emergency response coordination</span>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/lessons?level=1">
                    <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                      {t("home.startLessons")}
                    </Button>
                  </Link>
                  <Link href="/exams/level-1">
                    <Button variant="outline" className="w-full">
                      {t("home.takeExam")}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Level 2 */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.level2Title")}</h3>
                <p className="text-gray-600 mb-4">{t("home.level2Desc")}</p>
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
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/lessons?level=2">
                    <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                      {t("home.startLessons")}
                    </Button>
                  </Link>
                  <Link href="/exams/level-2">
                    <Button variant="outline" className="w-full">
                      {t("home.takeExam")}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Level 3 */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.level3Title")}</h3>
                <p className="text-gray-600 mb-4">{t("home.level3Desc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Safety management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Emergency response coordination</span>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/lessons?level=3">
                    <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                      {t("home.startLessons")}
                    </Button>
                  </Link>
                  <Link href="/exams/level-3">
                    <Button variant="outline" className="w-full">
                      {t("home.takeExam")}
                    </Button>
                  </Link>
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
