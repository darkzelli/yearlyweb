import PhoneMockup from "@/components/phonemockup"
import YearlyApp from "@/components/yearlyapp"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Target, Trophy, Calendar } from "lucide-react"
import WaitlistForm from "@/components/waitlistform"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-24 pb-12 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:max-w-[50%] mb-12 lg:mb-0">
            <div className="mb-6">
              <Badge  className="bg-purple-500/10 text-purple-400">
                Join the Waitlist →
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Yearly
              <span className="block text-3xl md:text-5xl mt-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Make Every Day Count
                </span>
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              Transform your year with actionable tracking and meaningful insights. Built for people who want to make
              the most of their time and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WaitlistForm />
              <button className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Learn more
              </button>
            </div>
          </div>

          {/* Centered Phone Mockup */}
          <div className="lg:max-w-[50%] w-full flex justify-center items-center">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-[100px] -z-10" />
              <PhoneMockup>
                <YearlyApp />
              </PhoneMockup>
            </div>
          </div>
        </div>

        {/* Background Gradient Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/50 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Everything you need to
            <span className="block text-blue-400">make progress every day</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your year?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our waitlist and be the first to experience Yearly when we launch.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">© 2025 Yearly. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
    title: "Track Daily Progress",
    description: "Log your daily activities and achievements with our intuitive tracking system.",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-400" />,
    title: "Set Meaningful Goals",
    description: "Create and track goals that matter to you, with realistic milestones and deadlines.",
  },
  {
    icon: <Target className="w-6 h-6 text-blue-400" />,
    title: "Visual Progress",
    description: "See your progress with beautiful charts and visualizations that keep you motivated.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-blue-400" />,
    title: "Achievement System",
    description: "Earn achievements and rewards as you make progress towards your goals.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    title: "Yearly Overview",
    description: "Get a bird's eye view of your entire year with our comprehensive dashboard.",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-400" />,
    title: "Smart Reminders",
    description: "Never miss an important goal with our intelligent reminder system.",
  },
]

