'use client'

import { useState } from 'react'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import LoadMoreButton from '@/components/load-more-button'

const allProjects = [
  {
    id: "1",
    title: "Project Title 1",
    description: "Project Description: This project involves the design and development of a fully functional e-commerce website, aimed at providing an efficient and user-friendly shopping experience for customers. The website will allow users to browse, search, and purchase a wide range of products from various categories, with secure payment options and an intuitive interface.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#"
  },
  {
    id: "2",
    title: "Project Title 2",
    description: "Project Description: This project involves the development of a machine learning model for predictive maintenance in manufacturing. The system analyzes sensor data to predict equipment failures before they occur, reducing downtime and maintenance costs.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#"
  },
  {
    id: "3",
    title: "Project Title 3",
    description: "Project Description: This project focuses on creating a mobile app for personalized health tracking. It integrates with various wearable devices and provides AI-driven insights and recommendations for improving overall health and wellness.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#"
  },
  {
    id: "4",
    title: "Project Title 4",
    description: "Project Description: This project involves developing a blockchain-based supply chain management system. It aims to increase transparency, traceability, and efficiency in complex supply chain networks across multiple industries.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#"
  },
  {
    id: "5",
    title: "Project Title 5",
    description: "Project Description: This project focuses on creating an AI-powered virtual assistant for customer service. It uses natural language processing and machine learning to provide instant, accurate responses to customer inquiries across multiple channels.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#"
  },
  {
    id: "6",
    title: "Project Title 6",
    description: "Project Description: This project involves developing a smart city platform that integrates IoT devices, data analytics, and cloud computing to improve urban services and quality of life for citizens.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#"
  }
]

export default function Home() {
  const [displayedProjects, setDisplayedProjects] = useState(3)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreProjects = () => {
    setIsLoading(true)
    setTimeout(() => {
      setDisplayedProjects(prev => Math.min(prev + 3, allProjects.length))
      setIsLoading(false)
    }, 1000) // Simulating a delay for loading more projects
  }

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <section className="hero-section text-center py-20 bg-black text-white">
          <h1 className="text-6xl font-bold mb-4">Welcome to [Org Name]</h1>
          <p className="text-2xl">Embrace the Skeleton/Horror Theme</p>
        </section>
        <section className="overview-section text-center py-12">
          <p className="text-xl mb-4">We specialize in cutting-edge technology with a skeleton-inspired twist!</p>
          <p className="text-lg">Founded in June, 2024, we bring creative tech solutions to life.</p>
        </section>
        <section className="tech-stack-section text-center py-12">
          <h2 className="text-4xl font-bold mb-6">Our Tech Stack</h2>
          <div className="flex justify-center space-x-8">
            <img src="/html5-logo.png" alt="HTML5" className="w-16 h-16" />
            <img src="/css3-logo.png" alt="CSS3" className="w-16 h-16" />
            <img src="/js-logo.png" alt="JavaScript" className="w-16 h-16" />
            <img src="/react-logo.png" alt="React.js" className="w-16 h-16" />
            <img src="/nextjs-logo.png" alt="Next.js" className="w-16 h-16" />
          </div>
        </section>
        <h1 className="text-5xl font-bold text-center mb-12">PROJECTS</h1>
        <div className="space-y-8">
          {allProjects.slice(0, displayedProjects).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        {displayedProjects < allProjects.length && (
          <LoadMoreButton onClick={loadMoreProjects} isLoading={isLoading} />
        )}
      </div>
      <Footer />
    </main>
  )
}
