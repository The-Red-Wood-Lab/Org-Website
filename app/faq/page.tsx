"use client";

import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a variety of technologies including React, Node.js, Python, AWS, and more. We always choose the best tech stack for each specific project."
  },
  {
    question: "How can I join your organization?",
    answer: "Visit our 'Join Us' page to learn about the benefits of joining our community and to fill out an application form."
  },
  {
    question: "Do you offer mentorship programs?",
    answer: "Yes, we offer mentorship programs for both beginners and experienced developers. Check our 'Join Us' page for more information."
  },
  {
    question: "How often do you organize coding events or hackathons?",
    answer: "We organize coding events and hackathons quarterly. Keep an eye on our website and social media for announcements."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-purple-400">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

