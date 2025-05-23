"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HardHat, User, FileText, Shield, LogOut, Save, CheckCircle } from "lucide-react"

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "user@example.com",
    phone: "(555) 123-4567",
    company: "ABC Construction",
    jobTitle: "Safety Coordinator",
    experience: "5-10",
    address: "123 Main Street",
    city: "Construction City",
    state: "CA",
    zipCode: "12345",
    country: "United States",
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setSaveSuccess(false)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, this would call an API to update the user profile
    console.log("Updated profile data:", userData)

    setIsSaving(false)
    setSaveSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
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
          <Link href="/auth/sign-in">
            <Button className="bg-black text-yellow-500 hover:bg-gray-800 flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="border-yellow-200">
                <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                  <CardTitle className="text-xl">Account</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-yellow-50 text-yellow-700"
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/profile/certifications"
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                    >
                      <Shield className="h-5 w-5" />
                      <span>Certifications</span>
                    </Link>
                    <Link
                      href="/profile/exam-history"
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                    >
                      <FileText className="h-5 w-5" />
                      <span>Exam History</span>
                    </Link>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <Card className="border-yellow-200">
                <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                  <CardTitle className="text-xl">Profile Information</CardTitle>
                  <CardDescription>Update your account details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="personal">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="personal">Personal Information</TabsTrigger>
                      <TabsTrigger value="contact">Contact Details</TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal">
                      <form onSubmit={handleSaveProfile}>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input
                                id="lastName"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={userData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={userData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="company">Company</Label>
                              <Input
                                id="company"
                                name="company"
                                value={userData.company}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="jobTitle">Job Title</Label>
                              <Input
                                id="jobTitle"
                                name="jobTitle"
                                value={userData.jobTitle}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="experience">Years of Construction Experience</Label>
                            <Select
                              value={userData.experience}
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

                          <div className="flex justify-end">
                            <Button
                              type="submit"
                              className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-2"
                              disabled={isSaving}
                            >
                              {isSaving ? (
                                "Saving..."
                              ) : (
                                <>
                                  <Save className="h-4 w-4" />
                                  Save Changes
                                </>
                              )}
                            </Button>
                          </div>

                          {saveSuccess && (
                            <div className="bg-green-50 text-green-600 p-3 rounded-md flex items-center gap-2 text-sm">
                              <CheckCircle className="h-5 w-5" />
                              <span>Profile information updated successfully!</span>
                            </div>
                          )}
                        </div>
                      </form>
                    </TabsContent>

                    <TabsContent value="contact">
                      <form onSubmit={handleSaveProfile}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="address">Street Address</Label>
                            <Input
                              id="address"
                              name="address"
                              value={userData.address}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" name="city" value={userData.city} onChange={handleChange} required />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="state">State/Province</Label>
                              <Input id="state" name="state" value={userData.state} onChange={handleChange} required />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="zipCode">Zip/Postal Code</Label>
                              <Input
                                id="zipCode"
                                name="zipCode"
                                value={userData.zipCode}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="country">Country</Label>
                              <Input
                                id="country"
                                name="country"
                                value={userData.country}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button
                              type="submit"
                              className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-2"
                              disabled={isSaving}
                            >
                              {isSaving ? (
                                "Saving..."
                              ) : (
                                <>
                                  <Save className="h-4 w-4" />
                                  Save Changes
                                </>
                              )}
                            </Button>
                          </div>

                          {saveSuccess && (
                            <div className="bg-green-50 text-green-600 p-3 rounded-md flex items-center gap-2 text-sm">
                              <CheckCircle className="h-5 w-5" />
                              <span>Contact information updated successfully!</span>
                            </div>
                          )}
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
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
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="font-medium text-white">Eastpoint College</li>
                <li className="font-medium text-yellow-500">Team Dominator</li>
                <li>Varshini VB</li>
                <li>Prajwal KR</li>
                <li>Sujan BM</li>
                <li>Valeti Sasank</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
