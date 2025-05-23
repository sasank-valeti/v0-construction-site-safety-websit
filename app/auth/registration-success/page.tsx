import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HardHat, CheckCircle, Shield } from "lucide-react"

export default function RegistrationSuccess() {
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
        <Card className="w-full max-w-md border-green-200">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex justify-center mb-2">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-center">Registration Successful!</CardTitle>
            <CardDescription className="text-center">Your SafetyFirst account has been created</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600 mb-4">
              Thank you for registering with SafetyFirst. Your account has been successfully created and you can now
              access all our safety certification exams.
            </p>
            <p className="text-gray-600">
              A confirmation email has been sent to your email address with further instructions.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Link href="/auth/sign-in" className="w-full">
              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Sign In to Your Account</Button>
            </Link>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">
                Return to Home
              </Button>
            </Link>
          </CardFooter>
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
