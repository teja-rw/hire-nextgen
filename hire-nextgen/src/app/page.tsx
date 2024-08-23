'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarIcon, ClockIcon, GraduationCapIcon, RocketIcon, UsersIcon, SparklesIcon } from "lucide-react"
import Confetti from 'react-confetti'

export default function Component() {
  const [email, setEmail] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)

  const handleJoinWaitlist = (e:any) => {
    e.preventDefault()
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
    // Here you would typically send the email to your backend
    console.log("Joined waitlist with email:", email)
    setEmail("")
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {showConfetti && <Confetti />}
      
      <header className="text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">4 Hours a Week</h1>
        <p className="text-xl mb-6">
          Supercharge your portfolio, boost your skills, and earn a stipend!
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
          Learn More <SparklesIcon className="ml-2" />
        </Button>
      </header>

      <Card className="bg-yellow-100">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-yellow-800">Join the Waitlist!</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleJoinWaitlist} className="flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Join Waitlist
            </Button>
          </form>
        </CardContent>
      </Card>

      <section className="grid md:grid-cols-2 gap-6">
        <Card className="bg-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-800">Program Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ClockIcon className="mr-2 h-4 w-4 text-blue-500" />
                4 hours a week for 6 months
              </li>
              <li className="flex items-center">
                <GraduationCapIcon className="mr-2 h-4 w-4 text-blue-500" />
                For 3rd-year students
              </li>
              <li className="flex items-center">
                <UsersIcon className="mr-2 h-4 w-4 text-blue-500" />
                Communication via Discord
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Exciting Domains</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge className="bg-green-500">Web development</Badge>
            <Badge className="bg-green-500">App development</Badge>
            <Badge className="bg-green-500">AI/ML</Badge>
            <Badge className="bg-green-500">AR/VR</Badge>
            <Badge className="bg-green-500">Computer vision</Badge>
            <Badge className="bg-green-500">Latest tech</Badge>
          </CardContent>
        </Card>
      </section>

      <Card className="bg-purple-100">
        <CardHeader>
          <CardTitle className="text-purple-800">Fun Selection Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li className="animate-pulse">Application Submission</li>
            <li className="animate-pulse">Portfolio Review</li>
            <li className="animate-pulse">Problem-Solving Challenge</li>
            <li className="animate-pulse">Interview with Mentors</li>
            <li className="animate-pulse">Final Selection</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="bg-pink-100">
        <CardHeader>
          <CardTitle className="text-pink-800">Awesome Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <RocketIcon className="mr-2 h-4 w-4 text-pink-500" />
              Stipend: 7500 rupees per month
            </li>
            <li className="flex items-center">
              <UsersIcon className="mr-2 h-4 w-4 text-pink-500" />
              Weekly 30-min 1-on-1 mentorship
            </li>
            <li className="flex items-center">
              <GraduationCapIcon className="mr-2 h-4 w-4 text-pink-500" />
              Skill Development
            </li>
            <li className="flex items-center">
              <RocketIcon className="mr-2 h-4 w-4 text-pink-500" />
              Portfolio Boost
            </li>
            <li className="flex items-center">
              <SparklesIcon className="mr-2 h-4 w-4 text-pink-500" />
              Platform to Innovate
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-800">Exciting Program Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              { phase: "Selection Process", date: "September 2024" },
              { phase: "Kickoff Meeting", date: "October 1, 2024" },
              { phase: "Concept Development", date: "October 2024" },
              { phase: "Iterative Development", date: "November - December 2024" },
              { phase: "User Testing", date: "January 2025" },
              { phase: "Refinement", date: "February 2025" },
              { phase: "Project Launch", date: "March 2025" },
              { phase: "Program Conclusion", date: "March 30, 2025" },
            ].map((item, index) => (
              <li key={index} className="flex items-start group">
                <CalendarIcon className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0 text-orange-500 group-hover:animate-spin" />
                <div>
                  <strong>{item.phase}</strong>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:from-purple-500 hover:via-pink-600 hover:to-red-600">
          Show Your Interest
        </Button>
      </div>
    </div>
  )
}