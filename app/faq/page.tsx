"use client";

import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Users,
  Github,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type React from "react"; // Added import for React

type FAQCategory = {
  title: string;
  icon: React.ElementType;
  questions: {
    question: string;
    answer: string;
  }[];
};

const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: Code,
    questions: [
      {
        question: "What technologies do you specialize in?",
        answer:
          "We specialize in cutting-edge technologies including React, Node.js, Python, WebAssembly, and Rust. Our projects combine modern tech with retro aesthetics to create unique, powerful applications that bridge the gap between classic computing and contemporary development.",
      },
      {
        question: "How can I join Red Wood Labs?",
        answer:
          "Getting started is easy! First, join our Github community and introduce yourself. Then, check out our 'good first issue' tags on GitHub repositories.",
      },
    ],
  },
  {
    title: "Community & Learning",
    icon: Users,
    questions: [
      {
        question: "What mentorship opportunities are available?",
        answer:
          "Our mentors are experienced developers who help you grow while maintaining our retro-modern development philosophy.",
      },
      {
        question: "I'm new to coding. Is there a place for me?",
        answer:
          "We have a dedicated newcomers' track that includes beginner-friendly projects, basic retro computing concepts, and modern development practices. Our community is known for being welcoming and supportive, with regular workshops and resources tailored for beginners.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<{
    category: number;
    question: number;
  } | null>(null);

  const toggleCategory = (categoryIndex: number) => {
    setOpenCategory(openCategory === categoryIndex ? null : categoryIndex);
    setOpenQuestion(null);
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setOpenQuestion(
      openQuestion?.category === categoryIndex &&
        openQuestion?.question === questionIndex
        ? null
        : { category: categoryIndex, question: questionIndex }
    );
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">FREQUENTLY ASKED QUESTIONS</h1>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="retro-box">
                <button
                  className="w-full text-left flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="w-6 h-6" />
                    <h2 className="retro-subtitle">{category.title}</h2>
                  </div>
                  {openCategory === categoryIndex ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
                {openCategory === categoryIndex && (
                  <div className="border-t-2 border-black">
                    {category.questions.map((faq, questionIndex) => (
                      <div
                        key={questionIndex}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          className="w-full text-left flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            toggleQuestion(categoryIndex, questionIndex)
                          }
                        >
                          <h3 className="font-bold text-lg">{faq.question}</h3>
                          {openQuestion?.category === categoryIndex &&
                          openQuestion?.question === questionIndex ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                        {openQuestion?.category === categoryIndex &&
                          openQuestion?.question === questionIndex && (
                            <div className="p-4 bg-gray-50">
                              <p className="retro-text">{faq.answer}</p>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

            <div className="retro-box mt-8">
            <h2 className="retro-subtitle mb-4">CONNECT WITH US</h2>
            <p className="retro-text mb-6">
              Can&apos;t find what you&apos;re looking for? Join our community
              platforms or reach out directly!
            </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
              href="https://github.com/redwoodlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button flex items-center justify-center gap-2"
              >
              <Github className="w-5 h-5" />
              GITHUB
              </a>
              <Link
              href="mailto:theredwoodlabs@gmail.com"
              className="retro-button flex items-center justify-center gap-2"
              >
              <Users className="w-5 h-5" />
              CONTACT US
              </Link>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
