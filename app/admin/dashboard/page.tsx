"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  HardHat,
  Users,
  FileText,
  Settings,
  LogOut,
  Search,
  UserPlus,
  Download,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Shield,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    company: "ABC Construction",
    role: "Worker",
    certifications: ["Level 1"],
    registeredDate: "2023-05-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    company: "XYZ Builders",
    role: "Safety Manager",
    certifications: ["Level 1", "Level 2", "Level 3"],
    registeredDate: "2023-04-22",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    company: "123 Construction Co.",
    role: "Site Supervisor",
    certifications: ["Level 1", "Level 2"],
    registeredDate: "2023-06-10",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    company: "BuildRight Inc.",
    role: "Equipment Operator",
    certifications: ["Level 1", "Level 2"],
    registeredDate: "2023-05-30",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.b@example.com",
    company: "Construct Pro",
    role: "Worker",
    certifications: ["Level 1"],
    registeredDate: "2023-07-05",
  },
]

// Mock data for exams
const mockExams = [
  {
    id: 1,
    user: "John Doe",
    email: "john.doe@example.com",
    examType: "Level 1: Basic Safety",
    score: 85,
    passed: true,
    date: "2023-06-15",
  },
  {
    id: 2,
    user: "Jane Smith",
    email: "jane.smith@example.com",
    examType: "Level 3: Advanced Safety",
    score: 92,
    passed: true,
    date: "2023-05-22",
  },
  {
    id: 3,
    user: "Robert Johnson",
    email: "robert.j@example.com",
    examType: "Level 2: Intermediate Safety",
    score: 78,
    passed: true,
    date: "2023-07-10",
  },
  {
    id: 4,
    user: "Sarah Williams",
    email: "sarah.w@example.com",
    examType: "Level 2: Intermediate Safety",
    score: 65,
    passed: false,
    date: "2023-06-30",
  },
  {
    id: 5,
    user: "Michael Brown",
    email: "michael.b@example.com",
    examType: "Level 1: Basic Safety",
    score: 72,
    passed: true,
    date: "2023-07-25",
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter users based on search term
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter exams based on search term
  const filteredExams = mockExams.filter(
    (exam) =>
      exam.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.examType.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
          <div className="flex items-center gap-4">
            <span className="font-medium text-black">Admin Dashboard</span>
            <Link href="/auth/sign-in">
              <Button className="bg-black text-yellow-500 hover:bg-gray-800 flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-full md:w-64 flex-shrink-0">
          <nav className="p-4">
            <div className="space-y-1">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-md bg-yellow-500 text-black font-medium"
              >
                <Users className="h-5 w-5" />
                <span>Users</span>
              </Link>
              <Link href="/admin/exams" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800">
                <FileText className="h-5 w-5" />
                <span>Exams</span>
              </Link>
              <Link
                href="/admin/certifications"
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800"
              >
                <Shield className="h-5 w-5" />
                <span>Certifications</span>
              </Link>
              <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, exams, and certifications</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-green-600">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Exams Taken</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,872</div>
                <p className="text-xs text-green-600">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pass Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-red-600">-2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,156</div>
                <p className="text-xs text-green-600">+15% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Card className="border-gray-200">
            <CardHeader className="bg-white border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Management Console</CardTitle>
                  <CardDescription>Manage users, exams, and certifications</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-8 w-[250px]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Add User
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="users" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                  <TabsTrigger
                    value="users"
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Users
                  </TabsTrigger>
                  <TabsTrigger
                    value="exams"
                    className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Exam Results
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="users" className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Certifications</TableHead>
                        <TableHead>Registered</TableHead>
                        <TableHead className="w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.company}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {user.certifications.map((cert, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                                  >
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>{user.registeredDate}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View details</DropdownMenuItem>
                                  <DropdownMenuItem>Edit user</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete user</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                            No users found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="exams" className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Exam Type</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredExams.length > 0 ? (
                        filteredExams.map((exam) => (
                          <TableRow key={exam.id}>
                            <TableCell className="font-medium">{exam.user}</TableCell>
                            <TableCell>{exam.email}</TableCell>
                            <TableCell>{exam.examType}</TableCell>
                            <TableCell>{exam.score}%</TableCell>
                            <TableCell>
                              {exam.passed ? (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle className="h-3 w-3" /> Passed
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  <XCircle className="h-3 w-3" /> Failed
                                </span>
                              )}
                            </TableCell>
                            <TableCell>{exam.date}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View details</DropdownMenuItem>
                                  <DropdownMenuItem>Download certificate</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete record</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                            No exam results found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>

      <footer className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-yellow-500 rounded-lg p-1.5">
                  <HardHat className="h-4 w-4 text-black" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 bg-black rounded-full w-2.5 h-2.5 flex items-center justify-center">
                  <Shield className="h-1.5 w-1.5 text-yellow-500" />
                </div>
              </div>
              <div>
                <span className="font-bold text-sm text-yellow-500">SafetyFirst Admin</span>
                <div className="text-xs text-gray-400 font-medium">CONSTRUCTION SAFETY</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} SafetyFirst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
