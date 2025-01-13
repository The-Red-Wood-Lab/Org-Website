'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#e0e0e0] py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <Link href="/about" className="block font-bold hover:text-gray-700">About Us</Link>
          <Link href="/contact" className="block font-bold hover:text-gray-700">Contact us</Link>
          <Link href="/faq" className="block font-bold hover:text-gray-700">FAQ</Link>
        </div>
        <div className="space-y-2">
          <a href="https://linkedin.com" className="block font-bold hover:text-gray-700">LinkedIn</a>
          <a href="https://instagram.com" className="block font-bold hover:text-gray-700">Instagram</a>
          <a href="https://whatsapp.com" className="block font-bold hover:text-gray-700">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}

