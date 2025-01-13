'use client'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including web development, mobile app development, cloud solutions, and AI integration."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise solution could take several months."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a variety of technologies including React, Node.js, Python, AWS, and more. We always choose the best tech stack for each specific project."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

