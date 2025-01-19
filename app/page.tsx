'use client'

import React, { useState, useEffect } from 'react'
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

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500); // Match the fade-in animation timing

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="image-container">
            <div className="image-top"></div>
            <div className="image-bottom"></div>
          </div>
        </div>
      )}
      <style jsx>{`
        /* Basic styles */
        .preloader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .image-top,
        .image-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 50%;
          background: url('https://th.bing.com/th/id/OIP.9y4sxQ7ih5VKyAcedc37qAHaEK?rs=1&pid=ImgDetMain')
            center/cover no-repeat;
          z-index: 20;
        }

        .image-top {
          top: 0;
          background-position: top center;
          animation: slide-up 2s forwards;
        }

        .image-bottom {
          bottom: 0;
          background-position: bottom center;
          animation: slide-down 2s forwards;
        }

        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes slide-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  )
}

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
      <Preloader />
      <NavBar />
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12">
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
