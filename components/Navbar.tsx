"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from "next/image";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import clickup from "@/app/assets/images/clickup.svg"

const NavItem: React.FC<{ href: string; children: React.ReactNode; hasDropdown?: boolean; onClick?: () => void }> = ({ href, children, hasDropdown = false, onClick = () => {} }) => (
  <Link 
    href={href} 
    className={cn(
      "text-sm font-medium text-gray-700 hover:text-gray-900",
      hasDropdown && "flex items-center gap-0.5"
    )}
    onClick={onClick}
  >
    {children}
    {hasDropdown && <ChevronDown className="h-3 w-3 mt-0.5" />}
  </Link>
)

export default function ClickUpNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white mt-6 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className='flex gap-2 flex-shrink items-center'>

          <div className="flex items-center ">
            <div className="flex-shrink-0 flex items-center shadow-sm justify-center gap-2 border-2 rounded-xl w-fit h-14 py-2">
              <Image src={clickup} alt="clickup" className='h-24 w-24'  />
              <div className="border-l-2 border-black h-8"></div>
              <p className='text-[#5f5e5e] font-medium w-1/3 text-[11px] '>The everything app for work</p>
              
            </div>
          </div>
          <div className="hidden lg:flex md:items-center shadow-sm font-semibold text-[#7e7d7d] md:space-x-6 border-2 rounded-xl px-4 h-14">
            <Link href="#" >Product</Link>
            <Link href="#" >Solutions</Link>
            <Link href="#" >Resources</Link>
            <Link href="#">Pricing</Link>
            <Link className='hidden lg:block' href="#">Enterprise</Link>
          </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <Button variant="ghost" className="text-[17px] font-semibold shadow-sm text-[#7e7d7d] hover:bg-transparent hover:text-gray-900  border-2 rounded-2xl px-7  h-14">Contact Sales</Button>
            <div className='border-2 rounded-2xl  h-14 flex items-center '>

            <Button variant="ghost" className="text-sm lg:text-[17px] font-semibold text-[#7e7d7d] hover:bg-transparent hover:text-gray-900 ">Log In</Button>
            <Button className=" lg:text-[17px]  bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white  h-8 py-6   border-2 rounded-xl text-sm">Sign Up</Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="#" hasDropdown onClick={toggleMenu}>Product</NavItem>
            <NavItem href="#" hasDropdown onClick={toggleMenu}>Solutions</NavItem>
            <NavItem href="#" hasDropdown onClick={toggleMenu}>Resources</NavItem>
            <NavItem href="#" onClick={toggleMenu}>Pricing</NavItem>
            <NavItem href="#" onClick={toggleMenu}>Enterprise</NavItem>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:bg-transparent hover:text-gray-900 w-full justify-start" onClick={toggleMenu}>Contact Sales</Button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:bg-transparent hover:text-gray-900 w-full justify-start" onClick={toggleMenu}>Log In</Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full text-sm w-full" onClick={toggleMenu}>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}