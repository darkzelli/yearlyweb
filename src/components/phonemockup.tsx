import type React from "react"

const PhoneMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl sm:h-[650px] sm:w-[320px] md:h-[700px] md:w-[350px] lg:h-[750px] lg:w-[380px] overflow-hidden">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:border-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white sm:w-[292px] sm:h-[622px] md:w-[322px] md:h-[672px] lg:w-[352px] lg:h-[722px]">
        <div className="w-[100px] h-[20px] bg-gray-800 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-[1rem] sm:w-[110px] sm:h-[22px] md:w-[120px] md:h-[25px] lg:w-[130px] lg:h-[28px]"></div>
        <div className="w-[40px] h-[4px] bg-gray-800 absolute top-[10px] left-1/2 transform -translate-x-1/2 rounded-full sm:w-[45px] sm:h-[5px] md:w-[50px] md:h-[6px] lg:w-[55px] lg:h-[7px]"></div>
        {children}
      </div>
    </div>
  )
}

export default PhoneMockup

