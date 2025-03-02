"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

const WaitlistForm = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    // Reset the form
    setEmail("")
    // You might want to show a success message to the user
    alert("Thanks for joining our waitlist!")
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-sm w-[200px] h-[50px] flex flex-row justify-between items-center p-2">
        Join Waitlist
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  )
}

export default WaitlistForm

