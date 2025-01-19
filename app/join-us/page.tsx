"use client";

import Link from 'next/link'
import { Code, Users, Sparkles, BookOpen, Calendar, Terminal } from 'lucide-react'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -top-2 -left-8 animate-float">
                <Code className="w-16 h-16 text-purple-500 opacity-50" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
                Join Our Tech Community
              </h1>
              <div className="absolute -top-10 -right-8 animate-float">
                <Code className="w-16 h-16 text-purple-500 opacity-50" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Be part of a thriving community of developers, innovators, and tech enthusiasts. Build, learn, and grow together as we push the boundaries of what&apos;s possible in technology.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-4">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <span>Why Join Us?</span>
              <Sparkles className="w-8 h-8 text-purple-500" />
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Terminal className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Collaborative Projects</h3>
                    <p className="text-gray-400">Work on real-world projects with experienced developers and contribute to open source</p>
                  </div>
                </div>
              </div>

              <div className="group space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Learning Resources</h3>
                    <p className="text-gray-400">Access exclusive workshops, tutorials, and mentorship opportunities</p>
                  </div>
                </div>
              </div>

              <div className="group space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Calendar className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Tech Events</h3>
                    <p className="text-gray-400">Participate in hackathons, code challenges, and networking events</p>
                  </div>
                </div>
              </div>

              <div className="group space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Community Network</h3>
                    <p className="text-gray-400">Connect with fellow developers, find mentors, and grow your professional network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-400">
              Whether you&apos;re a seasoned developer or just starting your coding journey, our community welcomes all who are passionate about technology and innovation. Join us in building the future of software development.
            </p>
            <Link 
              href="https://forms.gle/your-google-form-url" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="group relative px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(147,51,234,0.3)]">
                <span className="relative z-10">Join Our Community</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

