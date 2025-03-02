import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ className, value, max, ...props }, ref) => {
  const percent = (value / max) * 100

  return (
    <div ref={ref} className={cn("w-full h-2 bg-gray-200 rounded-full overflow-hidden", className)} {...props}>
      <div className="h-full bg-blue-500 transition-all duration-300 ease-in-out" style={{ width: `${percent}%` }} />
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }

