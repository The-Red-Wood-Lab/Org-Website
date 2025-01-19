"use client";

import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { Code, Users, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">About Us</h1>
        <div className="space-y-8">
          <p className="text-lg text-gray-300">
            We are a cutting-edge tech organization dedicated to innovation and excellence in software development. Our team of experts is committed to delivering high-quality solutions that drive technological advancement.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <Code className="w-8 h-8 text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Expert Developers</h2>
              <p className="text-gray-400">Our team consists of skilled developers with diverse expertise.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <Lightbulb className="w-8 h-8 text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Innovative Solutions</h2>
              <p className="text-gray-400">We create cutting-edge solutions for complex problems.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <Users className="w-8 h-8 text-purple-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Community Driven</h2>
              <p className="text-gray-400">We believe in the power of community and open source.</p>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            Founded in 2010, we have consistently pushed the boundaries of what&apos;s possible in the digital realm. Our projects span various industries, from e-commerce to artificial intelligence, always with a focus on creating intuitive, efficient, and scalable solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

