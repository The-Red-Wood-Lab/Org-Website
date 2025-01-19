import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <Link href="/about" className="block font-bold hover:text-purple-500 transition-colors">About Us</Link>
          <a href="mailto:abhimanpanwar6@gmail.com" className="hover:text-purple-500 transition-colors block font-bold">Contact us</a>
          <Link href="/faq" className="block font-bold hover:text-purple-500 transition-colors">FAQ</Link>
        </div>
        <div className="space-y-2">
          <a href="https://github.com/The-Red-Wood-Lab" className="block font-bold hover:text-purple-500 transition-colors">GitHub</a>
          <a href="https://linkedin.com" className="block font-bold hover:text-purple-500 transition-colors">LinkedIn</a>
          <a href="https://twitter.com" className="block font-bold hover:text-purple-500 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

