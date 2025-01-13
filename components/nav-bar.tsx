'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-[#1a1a1a] text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Organization Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/" className="hover:text-gray-300">Join Us</Link>
        </div>
      </div>
    </nav>
  )
}

