"use client"

import { useState } from "react"
import { Search, Minus, Plus, Home, Calendar, BarChart2, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

interface Goal {
  id: number
  name: string
  category: string
  currentValue: number
  targetValue: number
}

const YearlyApp = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, name: "Read books", category: "personal", currentValue: 3, targetValue: 12 },
    { id: 2, name: "Exercise (hours)", category: "health", currentValue: 20, targetValue: 180 },
    { id: 3, name: "Learn new skills", category: "career", currentValue: 1, targetValue: 5 },
    { id: 4, name: "Travel to new places", category: "personal", currentValue: 1, targetValue: 3 },
    { id: 5, name: "Save money ($1000s)", category: "finance", currentValue: 2, targetValue: 10 },
    { id: 6, name: "Volunteer (hours)", category: "community", currentValue: 8, targetValue: 50 },
    { id: 7, name: "Meditate (days)", category: "health", currentValue: 15, targetValue: 365 },
    { id: 8, name: "Write blog posts", category: "career", currentValue: 3, targetValue: 24 },
    { id: 9, name: "Cook new recipes", category: "personal", currentValue: 5, targetValue: 30 },
    { id: 10, name: "Reduce screen time (hours/day)", category: "health", currentValue: 1, targetValue: 4 },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("home")

  const updateGoalValue = (id: number, increment: boolean) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              currentValue: increment
                ? Math.min(goal.currentValue + 1, goal.targetValue)
                : Math.max(goal.currentValue - 1, 0),
            }
          : goal,
      ),
    )
  }

  const filteredGoals = goals.filter((goal) => goal.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const groupedGoals = filteredGoals.reduce(
    (acc, goal) => {
      if (!acc[goal.category]) {
        acc[goal.category] = []
      }
      acc[goal.category].push(goal)
      return acc
    },
    {} as Record<string, Goal[]>,
  )

  const totalProgress =
    (goals.reduce((acc, goal) => acc + goal.currentValue / goal.targetValue, 0) / goals.length) * 100

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="flex-1 overflow-auto px-3 pb-16">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-1">Your Progress</h2>
              <Progress value={totalProgress} max={100} className="mb-1 h-1.5" />
              <p className="text-xs text-gray-600">{`${totalProgress.toFixed(1)}% of yearly goals completed`}</p>
            </div>
            {Object.entries(groupedGoals).map(([category, categoryGoals]) => (
              <div key={category} className="mb-4">
                <h2 className="text-sm font-semibold text-gray-900 mb-2 capitalize">{category}</h2>
                <div className="space-y-2">
                  {categoryGoals.map((goal) => (
                    <div key={goal.id} className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-900 font-medium">{goal.name}</span>
                        <span className="text-xs text-gray-500">{`${goal.currentValue} / ${goal.targetValue}`}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button
                          className="rounded-full w-5 h-5 p-0 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600"
                          onClick={() => updateGoalValue(goal.id, false)}
                          disabled={goal.currentValue === 0}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <div className="flex-1 px-1">
                          <Progress value={(goal.currentValue / goal.targetValue) * 100} max={100} className="h-1.5" />
                        </div>
                        <button
                          className="rounded-full w-5 h-5 p-0 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600"
                          onClick={() => updateGoalValue(goal.id, true)}
                          disabled={goal.currentValue === goal.targetValue}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      case "calendar":
        return <div className="flex-1 flex items-center justify-center text-xs">Calendar View (Coming Soon)</div>
      case "progress":
        return <div className="flex-1 flex items-center justify-center text-xs">Progress View (Coming Soon)</div>
      case "profile":
        return <div className="flex-1 flex items-center justify-center text-xs">Profile View (Coming Soon)</div>
      case "teams":
        return <div className="flex-1 flex items-center justify-center text-xs">Teams View (Coming Soon)</div>
      default:
        return null
    }
  }

  return (
    <div className="h-full flex flex-col bg-gray-50 text-xs">
      {/* Header */}
      <div className="px-3 pt-6 pb-2">
        <h1 className="text-lg font-bold text-center text-gray-900 mb-2">Yearly</h1>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-7 pr-2 py-1 text-xs bg-white border-gray-200 rounded-full text-gray-900 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Main Content */}
      {renderContent()}

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white border-t border-gray-200 flex items-center justify-around px-2">
        <button
          onClick={() => setActiveTab("home")}
          className={`${activeTab === "home" ? "text-blue-500" : "text-gray-400"} hover:text-gray-600`}
        >
          <Home className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`${activeTab === "calendar" ? "text-blue-500" : "text-gray-400"} hover:text-gray-600`}
        >
          <Calendar className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`${activeTab === "progress" ? "text-blue-500" : "text-gray-400"} hover:text-gray-600`}
        >
          <BarChart2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`${activeTab === "profile" ? "text-blue-500" : "text-gray-400"} hover:text-gray-600`}
        >
          <User className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTab("teams")}
          className={`${activeTab === "teams" ? "text-blue-500" : "text-gray-400"} hover:text-gray-600`}
        >
          <Users className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default YearlyApp

