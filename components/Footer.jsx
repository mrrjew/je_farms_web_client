"use client"

import { usePathname } from 'next/navigation'

export default function Footer(){
    const pathname = usePathname()

    return (
      <footer className={`text-center py-4 bg-gray-50/50 text-gray-900/70 ${pathname.includes("auth") ? "hidden" : "block"}`}>
      <p>© J.E Farm. All rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">
          Terms and Conditions
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
    )
}