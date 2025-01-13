'use client'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-4">
          We are a cutting-edge tech organization dedicated to innovation and excellence in software development. Our team of experts is committed to delivering high-quality solutions that drive business growth and technological advancement.
        </p>
        <p className="mb-4">
          Founded in 2010, we have consistently pushed the boundaries of what&apos;s possible in the digital realm. Our projects span various industries, from e-commerce to artificial intelligence, always with a focus on creating intuitive, efficient, and scalable solutions.
        </p>
        <p>
          At our core, we believe in the power of technology to transform businesses and improve lives. We&apos;re not just building software; we&apos;re shaping the future of digital interaction and business operations.
        </p>
      </main>
      <Footer />
    </div>
  )
}

