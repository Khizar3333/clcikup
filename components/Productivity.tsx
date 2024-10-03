// 'use client'
import axifoma from 'next/font/local'
import Image from 'next/image'
import productivity from "@/app/assets/images/productivity.avif"
export default function Productivity() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white ">
      <div className=" px-4 md:px-6">
      <div className="space-y-2 flex flex-col items-center justify-center">
              <h1 className="text-xl text-center font-black tracking-tighter sm:text-2xl xl:text-3xl/none text-[#1d1e31]">
                Save time and get
                <br />  more done
              </h1>
              <p className="max-w-[600px]  mt-3 text-gray-600 text-md font-medium">
                Supercharge productivity. Streamline work by
                <br />
                <span className='flex justify-center'>

                 doing it, and seeing it, in one place.
                </span>
              </p>
            </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:justify-center lg:pl-48  mt-14">
       
          <div className="flex flex-col justify-center space-y-8">
            
            <div className="space-y-2">
            <h2 className="tracking-tighter font-black sm:text-2xl textgr bg-clip-text text-transparent">
                Improve collaboration
              </h2>
              <p className="max-w-[600px] text-gray-600 ">
                <span className='font-semibold'>
                Get your teams working together more closely, even if they're far apart.
                </span>
                 Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Comments', 'Docs', 'Whiteboards', 'Clips'].map((button) => (
                <button key={button} className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {button}
                </button>
              ))}
            </div>
            <div className="space-y-3 herofont ">
              <h2 className="text-2xl font-extrabold tracking-tighter sm:text-3xl bg-gray-400 bg-clip-text text-transparent">
                Enhance visibility
              </h2>
            {/* </div> */}
            {/* <div className="space-y-2"> */}
              <h2 className="text-2xl font-extrabold tracking-tighter sm:text-3xl  bg-gray-400 bg-clip-text text-transparent">
                Automate work
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Productivity tool interface"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src={productivity}
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}