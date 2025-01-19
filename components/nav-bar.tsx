import Link from 'next/link'
import Image from 'next/image'


export default function NavBar() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Red Wood Labs"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex gap-6">
          <Link href="/" className="retro-link">HOME</Link>
          <Link href="/projects" className="retro-link">PROJECTS</Link>
          <Link href="/about" className="retro-link">ABOUT</Link>
          <Link href="/join-us" className="retro-link">JOIN US</Link>
        </div>
      </div>
    </nav>
  )
}

