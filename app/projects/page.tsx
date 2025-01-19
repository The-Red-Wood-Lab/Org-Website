"use client";

import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Code, Rocket, Users, Database, Cloud, Lock, Github, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: "1",
    title: "Open Source Library",
    description: "A powerful library for data processing and visualization.",
    icon: <Code className="w-6 h-6 text-purple-500" />,
    githubLink: "https://github.com/yourusername/open-source-library",
    liveLink: "https://open-source-library-demo.com",
  },
  {
    id: "2",
    title: "AI-Powered Analytics",
    description: "Machine learning model for predictive analytics in business.",
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    githubLink: "https://github.com/yourusername/ai-powered-analytics",
    liveLink: "https://ai-analytics-demo.com",
  },
  {
    id: "3",
    title: "Community Forum",
    description: "A platform for developers to connect, share, and learn.",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    githubLink: "https://github.com/yourusername/community-forum",
    liveLink: "https://community-forum-demo.com",
  },
  {
    id: "4",
    title: "Data Pipeline Framework",
    description: "Scalable data processing and ETL solution for big data.",
    icon: <Database className="w-6 h-6 text-purple-500" />,
    githubLink: "https://github.com/yourusername/data-pipeline-framework",
    liveLink: "https://data-pipeline-demo.com",
  },
  {
    id: "5",
    title: "Cloud Infrastructure Manager",
    description: "Automated cloud resource provisioning and management tool.",
    icon: <Cloud className="w-6 h-6 text-purple-500" />,
    githubLink: "https://github.com/yourusername/cloud-infrastructure-manager",
    liveLink: "https://cloud-manager-demo.com",
  },
  {
    id: "6",
    title: "Secure Authentication Service",
    description: "Robust, multi-factor authentication system for web applications.",
    icon: <Lock className="w-6 h-6 text-purple-500" />,
    githubLink: "https://github.com/yourusername/secure-auth-service",
    liveLink: "https://secure-auth-demo.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">Our Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h2 className="text-xl font-semibold ml-2">{project.title}</h2>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-col space-y-2 mt-4">
                  <Link href={`/projects/${project.id}`} className="text-purple-500 hover:text-purple-400 transition-colors">
                    Learn More →
                  </Link>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-gray-800 hover:bg-gray-700"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Repo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-gray-800 hover:bg-gray-700"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

