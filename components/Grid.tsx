
import Image from "next/image"
import grid1 from "@/app/assets/images/grid1.png"
import grid2 from "@/app/assets/images/grid2.png"
import grid3 from "@/app/assets/images/grid3.svg"
import grid4 from "@/app/assets/images/grid4.svg"
import grid6 from "@/app/assets/images/grid6.png"

import or from "@/app/assets/images/or.svg"

import { GridCard } from "./GridCard"

export function Grid() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-32">
        {/* AI-powered productivity */}
        <div className="gridgr text-white p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">AI-powered productivity</h3>
          <p className="mb-4">Get work done faster with the only AI-powered assistant tailored to your role.</p>
            
          <Image src={grid1}  alt="AI productivity features" className="  " />
          </div>

        {/* View work your way */}
        <div className="w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">View work your way</h2>
        <p className="text-sm mb-4">
          Instantly switch between 15
          <br /> views including list, board, gantt,
          <br /> and more.
        </p>
        
      </div>
      <div className="relative h-[100%] ">
        <Image
          src={grid2}
          alt="Task management interface"
          layout="fill"
          className="rounded-tl-xl object-fill  shadow-md"
        />
      </div>
    </div>

        {/* Customize in a click */}
        {/* <div > */}

            <GridCard />
        {/* </div> */}

        {/* Plays well with others */}
        

        <div className="gridgr3  flex text-white  relatives rounded-xl md:col-span-2">

          
  <div className=" flex gap-3 items-center w-full">
    <div className="flex  items-center">

    <div className=" flex flex-col items-center pt-5 pl-4">
      <h3 className="text-xl font-bold mb-2">Plays well with others</h3>
      <p className="mb-4 w-[60%]">Easily integrates with the tools you already use.</p>
      <Image src={grid3} alt="Plays well with others" className="w-fit" />
    </div>

    {/* Center Image */}
    <Image 
      src={or} // Replace with your center image source
      alt="Center Image" 
      className="h-full w-auto pr-8" // Adjust height as needed
    />
    </div>

    <div className=" flex flex-col items-center pt-5 pr-5">
      <h3 className="text-xl font-bold mb-2">Plays well with others</h3>
      <p className="mb-4 w-1/2">Easily integrates with the tools you already use.</p>
      <Image src={grid4} alt="Plays well with others" className="w-fit" />
    </div>
  </div>
</div>

       

        {/* Search everything */}
        


        <div className="w-full max-w-md overflow-hidden rounded-xl bg-[#18181b] text-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Search everything</h2>
        <p className="text-sm mb-4">
        Find any file in ClickUp, a connected app, or 
          <br /> your local drive, from one place.
          
        </p>
        
      </div>
      <div className="relative bottom-20 w-full left-5 h-[100%] ">
        <Image
          src={grid6}
          alt="Task management interface"
          layout="fill"
          className="rounded-tl-xl  object-contain shadow-md"
        />
      </div>
    </div>


        {/* Stay ahead of what's next */}
        <div className="bg-[#ec4899] text-white p-6 rounded-xl lg:row-span-3 md:col-span-1">
          <h3 className="text-xl font-bold mb-2">Stay ahead of what's next</h3>
          <p className="mb-4">Organize your work, reminders, and calendar events all from your personalized Home.</p>
          <Image src="/placeholder.svg?height=150&width=600" height={150} width={600} alt="Personalized home view" className="w-full" />
        </div>
      
      <div className="bg-[#0C1947] text-white p-6 rounded-xl md:row-span-3 md:col-span-2">
          <h3 className="text-xl font-bold mb-2">Stay ahead of what's next</h3>
          <p className="mb-4">Organize your work, reminders, and calendar events all from your personalized Home.</p>
          <Image src="/placeholder.svg?height=150&width=600" height={150} width={600} alt="Personalized home view" className="w-full" />
        </div>
      </div>
      </div>
    // </div>
  )
}