"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { HardHat, AlertCircle, Shield } from "lucide-react"

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    experience: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, this would call an API to register the user
    console.log("Registration data:", formData)

    // Redirect to success page
    router.push("/auth/registration-success")
    setIsLoading(false)
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
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-yellow-200">
            <CardHeader className="bg-yellow-50 border-b border-yellow-100">
              <CardTitle className="text-2xl">Register Account</CardTitle>
              <CardDescription>Create your SafetyFirst certification account</CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="pt-6 space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-start gap-2 text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Construction Experience</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => handleSelectChange("experience", value)}
                  >
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <Link href="/terms" className="text-yellow-600 hover:text-yellow-800">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-yellow-600 hover:text-yellow-800">
                      privacy policy
                    </Link>
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
                <p className="text-sm text-center text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/sign-in" className="text-yellow-600 hover:text-yellow-800 font-medium">
                    Sign In
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
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
