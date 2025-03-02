import type React from "react"
import PhoneMockup from "./phonemockup"
import YearlyApp from "./yearlyapp"

const StackedPhoneMockups: React.FC = () => {
  return (
    <div className="relative w-[340px] h-[700px]">
      <div className="absolute top-0 left-0 z-10 opacity-50">
        <PhoneMockup>
          <YearlyApp />
        </PhoneMockup>
      </div>
      <div className="absolute top-10 left-5 z-20 opacity-75">
        <PhoneMockup>
          <YearlyApp />
        </PhoneMockup>
      </div>
      <div className="absolute top-20 left-10 z-30">
        <PhoneMockup>
          <YearlyApp />
        </PhoneMockup>
      </div>
    </div>
  )
}

export default StackedPhoneMockups

