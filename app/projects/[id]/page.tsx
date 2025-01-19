"use client";

import { notFound } from 'next/navigation'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { Code, Rocket, Users, Database, Cloud, Lock, Github, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: "1",
    title: "Open Source Library",
    description: "A powerful library for data processing and visualization.",
    icon: <Code className="w-12 h-12 text-purple-500" />,
    fullDescription: "Our Open Source Library is a comprehensive toolkit designed for efficient data processing and stunning visualizations. Built with performance and ease-of-use in mind, it empowers developers to transform complex datasets into meaningful insights with minimal effort. The library supports a wide range of data formats and offers customizable visualization components that can be easily integrated into any project.",
    features: [
      "High-performance data processing algorithms",
      "Extensive collection of customizable charts and graphs",
      "Support for real-time data streaming",
      "Cross-platform compatibility",
      "Comprehensive documentation and examples"
    ],
    technologies: ["JavaScript", "D3.js", "WebGL", "Node.js"],
    githubLink: "https://github.com/yourusername/open-source-library",
    liveLink: "https://open-source-library-demo.com",
  },
  {
    id: "2",
    title: "AI-Powered Analytics",
    description: "Machine learning model for predictive analytics in business.",
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    fullDescription: "Our AI-Powered Analytics platform leverages cutting-edge machine learning algorithms to provide businesses with accurate predictive insights. By analyzing historical data and identifying patterns, the system can forecast trends, predict customer behavior, and optimize business processes. This powerful tool enables data-driven decision-making, helping organizations stay ahead in today's competitive landscape.",
    features: [
      "Advanced machine learning models for accurate predictions",
      "Intuitive dashboard for easy data visualization",
      "Automated report generation",
      "Integration with popular business intelligence tools",
      "Scalable architecture to handle large datasets"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Docker"],
    githubLink: "https://github.com/yourusername/ai-powered-analytics",
    liveLink: "https://ai-analytics-demo.com",
  },
  {
    id: "3",
    title: "Community Forum",
    description: "A platform for developers to connect, share, and learn.",
    icon: <Users className="w-12 h-12 text-purple-500" />,
    fullDescription: "Our Community Forum is a vibrant platform designed to foster collaboration and knowledge sharing among developers. With features like topic-based discussions, code sharing, and mentorship programs, it creates an environment where developers of all skill levels can learn, grow, and connect with like-minded individuals. The platform also includes gamification elements to encourage active participation and recognize valuable contributions.",
    features: [
      "Topic-based discussion boards",
      "Code snippet sharing with syntax highlighting",
      "User profiles and reputation system",
      "Integrated code editor for live demonstrations",
      "Mentorship matching program"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redis"],
    githubLink: "https://github.com/yourusername/community-forum",
    liveLink: "https://community-forum-demo.com",
  },
  {
    id: "4",
    title: "Data Pipeline Framework",
    description: "Scalable data processing and ETL solution for big data.",
    icon: <Database className="w-12 h-12 text-purple-500" />,
    fullDescription: "Our Data Pipeline Framework is a robust solution for building scalable and efficient data processing workflows. It simplifies the process of extracting, transforming, and loading (ETL) large volumes of data from various sources. With support for both batch and stream processing, the framework enables organizations to handle big data with ease, ensuring data integrity and timely insights.",
    features: [
      "Modular architecture for customizable data flows",
      "Support for both batch and stream processing",
      "Built-in connectors for popular data sources and sinks",
      "Fault-tolerance and data recovery mechanisms",
      "Monitoring and alerting system for pipeline health"
    ],
    technologies: ["Apache Kafka", "Apache Flink", "Hadoop", "Scala", "Akka"],
    githubLink: "https://github.com/yourusername/data-pipeline-framework",
    liveLink: "https://data-pipeline-demo.com",
  },
  {
    id: "5",
    title: "Cloud Infrastructure Manager",
    description: "Automated cloud resource provisioning and management tool.",
    icon: <Cloud className="w-12 h-12 text-purple-500" />,
    fullDescription: "Our Cloud Infrastructure Manager is a comprehensive tool for automating the provisioning and management of cloud resources across multiple providers. It offers a unified interface for deploying, scaling, and monitoring cloud infrastructure, enabling organizations to optimize their cloud operations and reduce costs. With features like infrastructure-as-code and policy enforcement, it ensures consistency and compliance in cloud environments.",
    features: [
      "Multi-cloud support (AWS, Azure, Google Cloud)",
      "Infrastructure-as-Code templates",
      "Automated scaling and load balancing",
      "Cost optimization recommendations",
      "Compliance and security policy enforcement"
    ],
    technologies: ["Terraform", "Ansible", "Kubernetes", "Go", "Prometheus"],
    githubLink: "https://github.com/yourusername/cloud-infrastructure-manager",
    liveLink: "https://cloud-manager-demo.com",
  },
  {
    id: "6",
    title: "Secure Authentication Service",
    description: "Robust, multi-factor authentication system for web applications.",
    icon: <Lock className="w-12 h-12 text-purple-500" />,
    fullDescription: "Our Secure Authentication Service provides a robust, multi-factor authentication system designed to enhance the security of web applications. It offers a range of authentication methods, from traditional password-based login to biometric verification and hardware tokens. With features like risk-based authentication and anomaly detection, it helps organizations protect their users' accounts from unauthorized access and potential security breaches.",
    features: [
      "Multiple authentication factors (password, biometrics, hardware tokens)",
      "Risk-based authentication",
      "Single Sign-On (SSO) capabilities",
      "User activity monitoring and anomaly detection",
      "Integration with popular identity providers"
    ],
    technologies: ["OAuth 2.0", "OpenID Connect", "FIDO2", "Node.js", "Redis"],
    githubLink: "https://github.com/yourusername/secure-auth-service",
    liveLink: "https://secure-auth-demo.com",
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const project = projects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8 flex items-center justify-center">
            {project.icon}
            <h1 className="text-4xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">{project.title}</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 text-center">{project.description}</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-800 hover:bg-gray-700"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View Repository
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-800 hover:bg-gray-700"
              onClick={() => window.open(project.liveLink, '_blank')}
            >
              <Globe className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Project Overview</h2>
            <p className="text-gray-300 mb-6">{project.fullDescription}</p>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Key Features</h3>
            <ul className="list-disc list-inside mb-6 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/projects" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

