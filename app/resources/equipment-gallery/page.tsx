"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { HardHat, Shield, ArrowRight, Search, Filter, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/footer"

// Define equipment types and categories
const categories = [
  { id: "all", name: "All Equipment" },
  { id: "earthmoving", name: "Earthmoving" },
  { id: "lifting", name: "Lifting & Hoisting" },
  { id: "concrete", name: "Concrete & Masonry" },
  { id: "transport", name: "Transport" },
  { id: "scaffolding", name: "Scaffolding & Access" },
]

// Define equipment data
const equipmentData = [
  {
    id: 1,
    name: "Excavator",
    category: "earthmoving",
    image: "/images/equipment/excavator.png",
    description: "Heavy construction equipment used for digging and material handling.",
    safetyRequirements: [
      "Operator must be certified and trained",
      "Conduct daily equipment inspections",
      "Maintain safe distance from power lines (minimum 20 feet)",
      "Use outriggers when necessary for stability",
      "Never exceed the maximum load capacity",
    ],
    hazards: [
      "Tip-over risk on uneven ground",
      "Striking underground utilities",
      "Electrical hazards from overhead lines",
      "Crushing injuries from swinging boom",
    ],
    ppe: ["Hard hat", "High-visibility vest", "Safety glasses", "Steel-toed boots", "Hearing protection"],
  },
  {
    id: 2,
    name: "Tower Crane",
    category: "lifting",
    image: "/images/equipment/crane.png",
    description: "Fixed crane used for lifting and moving heavy materials on construction sites.",
    safetyRequirements: [
      "Only certified operators may use the crane",
      "Daily inspection of all components and controls",
      "Check weather conditions before operation",
      "Use proper hand signals or radio communication",
      "Never lift loads over workers",
    ],
    hazards: [
      "Structural failure due to overloading",
      "Falling objects from improper rigging",
      "Electrical hazards from power lines",
      "Wind hazards affecting stability",
    ],
    ppe: ["Hard hat", "High-visibility vest", "Gloves", "Steel-toed boots", "Fall protection when climbing"],
  },
  {
    id: 3,
    name: "Bulldozer",
    category: "earthmoving",
    image: "/images/equipment/bulldozer.png",
    description: "Crawler equipped with a blade used for pushing earth and debris.",
    safetyRequirements: [
      "Operator must be properly trained and certified",
      "Conduct pre-operation inspection daily",
      "Always wear seatbelt during operation",
      "Maintain awareness of ground conditions",
      "Never allow riders on equipment",
    ],
    hazards: [
      "Rollover on steep slopes or unstable ground",
      "Limited visibility in certain directions",
      "Noise exposure leading to hearing damage",
      "Dust inhalation in dry conditions",
    ],
    ppe: [
      "Hard hat",
      "High-visibility vest",
      "Safety glasses",
      "Steel-toed boots",
      "Hearing protection",
      "Dust mask when needed",
    ],
  },
  {
    id: 4,
    name: "Forklift",
    category: "transport",
    image: "/images/equipment/forklift.png",
    description: "Powered industrial truck used to lift and transport materials.",
    safetyRequirements: [
      "Operator must have forklift certification",
      "Inspect forklift before each shift",
      "Always wear seatbelt during operation",
      "Drive with load as low as safely possible",
      "Never exceed rated load capacity",
    ],
    hazards: [
      "Tip-over when turning with elevated load",
      "Striking pedestrians in work areas",
      "Load falling from forks if improperly secured",
      "Carbon monoxide exposure from gas-powered units",
    ],
    ppe: ["Hard hat", "High-visibility vest", "Safety glasses", "Steel-toed boots"],
  },
  {
    id: 5,
    name: "Concrete Mixer",
    category: "concrete",
    image: "/images/equipment/concrete-mixer.png",
    description: "Machine used for mixing cement, aggregates, and water to form concrete.",
    safetyRequirements: [
      "Proper training before operation",
      "Regular maintenance of moving parts",
      "Keep guards and safety devices in place",
      "Lock out/tag out during maintenance",
      "Follow proper loading procedures",
    ],
    hazards: [
      "Entanglement in moving parts",
      "Chemical burns from cement contact",
      "Respiratory hazards from cement dust",
      "Electrical hazards from power connections",
    ],
    ppe: ["Hard hat", "Chemical-resistant gloves", "Safety glasses", "Steel-toed boots", "Dust mask or respirator"],
  },
  {
    id: 6,
    name: "Scaffolding",
    category: "scaffolding",
    image: "/images/equipment/scaffolding.png",
    description: "Temporary structure used to support workers and materials during construction.",
    safetyRequirements: [
      "Must be erected by qualified personnel",
      "Inspect before each work shift",
      "Maintain 3-point contact when climbing",
      "Use proper guardrails and toe boards",
      "Never exceed load capacity",
    ],
    hazards: [
      "Falls from heights",
      "Scaffold collapse due to improper assembly",
      "Struck by falling objects",
      "Electrical hazards from overhead power lines",
    ],
    ppe: ["Hard hat", "Fall protection harness", "Safety glasses", "Steel-toed boots", "Gloves"],
  },
]

export default function EquipmentGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(null)

  // Filter equipment based on category and search query
  const filteredEquipment = equipmentData.filter((equipment) => {
    const matchesCategory = activeCategory === "all" || equipment.category === activeCategory
    const matchesSearch =
      equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      equipment.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          <h1 className="text-4xl font-bold mb-4">Construction Equipment Safety Gallery</h1>
          <p className="text-gray-600 max-w3xl">
            Explore our comprehensive guide to construction equipment safety. Learn about different types of equipment,
            their safety requirements, potential hazards, and required personal protective equipment (PPE).
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search equipment..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <span className="text-gray-500">Filter:</span>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Equipment Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((equipment) => (
            <Card key={equipment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={equipment.image || "/placeholder.svg"} alt={equipment.name} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
                    {categories.find((c) => c.id === equipment.category)?.name}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{equipment.name}</CardTitle>
                <CardDescription>{equipment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedEquipment(selectedEquipment === equipment.id ? null : equipment.id)}
                >
                  {selectedEquipment === equipment.id ? "Hide Safety Requirements" : "View Safety Requirements"}
                </Button>

                {selectedEquipment === equipment.id && (
                  <div className="mt-4">
                    <Tabs defaultValue="requirements">
                      <TabsList className="w-full">
                        <TabsTrigger value="requirements" className="flex-1">
                          Requirements
                        </TabsTrigger>
                        <TabsTrigger value="hazards" className="flex-1">
                          Hazards
                        </TabsTrigger>
                        <TabsTrigger value="ppe" className="flex-1">
                          PPE
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="requirements" className="mt-4">
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <CheckCircle2 size={16} className="text-green-600" />
                          Safety Requirements
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {equipment.safetyRequirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="hazards" className="mt-4">
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <AlertTriangle size={16} className="text-red-500" />
                          Potential Hazards
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {equipment.hazards.map((hazard, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                              <span>{hazard}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="ppe" className="mt-4">
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <Shield size={16} className="text-blue-500" />
                          Required PPE
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {equipment.ppe.map((item, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Link href={`/lessons?equipment=${equipment.name.toLowerCase()}`} className="w-full">
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No equipment found matching your search criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Safety Tips Section */}
        <div className="mt-16 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-bold mb-4">General Equipment Safety Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Before Operation</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Always inspect equipment before use</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Verify operator certification and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Check for proper maintenance records</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Ensure all safety features are functioning</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">During Operation</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Always wear required PPE</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Maintain clear communication with ground workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Never exceed equipment load capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Be aware of surroundings and potential hazards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
