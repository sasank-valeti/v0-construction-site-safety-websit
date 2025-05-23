"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HardHat, AlertCircle, Shield } from "lucide-react"

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password")
      setIsLoading(false)
      return
    }

    // Mock authentication - in a real app, this would call an API
    if (email === "admin@safetyfirst.com" && password === "admin123") {
      // Admin login
      router.push("/admin/dashboard")
    } else if (email === "user@example.com" && password === "password123") {
      // Regular user login
      router.push("/profile")
    } else {
      setError("Invalid email or password")
    }

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

      <main className="flex-grow bg-gray-50 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md border-yellow-200">
          <CardHeader className="bg-yellow-50 border-b border-yellow-100">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Access your SafetyFirst account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSignIn}>
            <CardContent className="pt-6 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-start gap-2 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-800">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="text-sm text-gray-500">
                <p>Demo credentials:</p>
                <p>Admin: admin@safetyfirst.com / admin123</p>
                <p>User: user@example.com / password123</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-yellow-500 text-black hover:bg-yellow-400"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              <p className="text-sm text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="text-yellow-600 hover:text-yellow-800 font-medium">
                  Register
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
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
