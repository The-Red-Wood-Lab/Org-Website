import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-black text-white p-4 border-b border-gray-800">
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
          <Link href="/" className="hover:text-purple-500 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-purple-500 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-purple-500 transition-colors">About Us</Link>
          <a href="mailto:abhimanpanwar6@gmail.com" className="hover:text-purple-500 transition-colors">Contact</a>
          <Link href="/faq" className="hover:text-purple-500 transition-colors">FAQ</Link>
          <Link href="/join-us" className="hover:text-purple-500 transition-colors">Join Us</Link>
        </div>
      </div>
    </nav>
  )
}

