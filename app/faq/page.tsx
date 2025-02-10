"use client";

import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { RetroBinaryBackground, RetroGrid, RetroCursor } from '@/components/retro-decorations'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a variety of technologies including React, Node.js, Python, Rust, Open CV, Yolo and Generative AI(LangChain and Lama)."
  },
  {
    question: "How can I join your organization?",
    answer: "Visit our 'Join Us' page to learn about contributing to our open-source projects, participating in discussions, and becoming part of our community. We welcome developers of all skill levels!"
  },
  // {
  //   question: "Do you offer mentorship programs?",
  //   answer: "Yes, we offer mentorship programs for both beginners and experienced developers. Our 'Retro Code Review' sessions and contribution guidelines provide opportunities for learning and growth."
  // },
  // {
  //   question: "How often do you organize coding events?",
  //   answer: "We organize coding events and hackathons quarterly. Additionally, we host monthly retro coding challenges and weekly 'Back to the Future of Coding' webinars. Keep an eye on our website and social media for announcements."
  // },
  // {
  //   question: "What's the philosophy behind combining retro aesthetics with modern tech?",
  //   answer: "We believe that the simplicity and creativity of retro computing can inspire innovative solutions to modern problems. By combining retro aesthetics with cutting-edge technology, we create unique, user-friendly applications that stand out in today's digital landscape."
  // },
  {
    question: "Can I use Red Wood Labs' projects in my own work?",
    answer: "All our projects are open-source and available under permissive licenses. We encourage you to use, modify, and contribute back to our projects. Just make sure to check the specific license for each project."
  },
  {
    question: "How can I stay updated on Red Wood Labs' latest projects and events?",
    answer: "Follow us on GitHub, Twitter, and Mail Us for real-time updates"
  },
  {
    question: "I'm new to coding. Is there a place for me at Red Wood Labs?",
    answer: "Definitely! We welcome coders of all levels. Our community is supportive and always ready to help newcomers. Start by joining our Discord, participating in discussions, and trying out our beginner-friendly projects."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">FAQ</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="retro-box">
                <button
                  className="w-full text-left flex justify-between items-center p-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="retro-subtitle">{faq.question}</h2>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 border-t-2 border-black">
                    <p className="retro-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="retro-box mt-8">
            <h2 className="retro-subtitle mb-4">STILL HAVE QUESTIONS?</h2>
            <p className="retro-text mb-4">
              Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to us directly.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="retro-button">CONTACT US</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

