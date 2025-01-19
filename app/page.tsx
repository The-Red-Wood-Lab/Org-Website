"use client";

import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Code, Users, Rocket, Github, Globe, Trophy, Star, GitFork, GitPullRequest, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    id: "1",
    title: "Open Source Library",
    description: "A powerful library for data processing and visualization.",
    icon: <Code className="w-10 h-10 text-purple-500" />,
    githubLink: "https://github.com/redwoodlabs/open-source-library",
    liveLink: "https://open-source-library-demo.redwoodlabs.org",
    tags: ["Data Processing", "Visualization"],
  },
  {
    id: "2",
    title: "AI-Powered Analytics",
    description: "Machine learning model for predictive analytics in business.",
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    githubLink: "https://github.com/redwoodlabs/ai-powered-analytics",
    liveLink: "https://ai-analytics-demo.redwoodlabs.org",
    tags: ["AI", "Analytics", "Machine Learning"],
  },
  {
    id: "3",
    title: "Community Forum",
    description: "A platform for developers to connect, share, and learn.",
    icon: <Users className="w-10 h-10 text-purple-500" />,
    githubLink: "https://github.com/redwoodlabs/community-forum",
    liveLink: "https://community-forum.redwoodlabs.org",
    tags: ["Community", "Forum", "Collaboration"],
  },
]

const stats = [
  {
    icon: <Trophy className="w-8 h-8 text-purple-500" />,
    value: "50+",
    label: "Open Source Projects",
  },
  {
    icon: <Star className="w-8 h-8 text-purple-500" />,
    value: "10,000+",
    label: "GitHub Stars",
  },
  {
    icon: <GitFork className="w-8 h-8 text-purple-500" />,
    value: "2,000+",
    label: "Forks",
  },
  {
    icon: <GitPullRequest className="w-8 h-8 text-purple-500" />,
    value: "5,000+",
    label: "Pull Requests Merged",
  },
]


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Featured Projects Section */}
          <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">Featured Projects</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                <CardHeader className="border-b border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-900/50 border-t border-gray-800 p-4 flex justify-between items-center">
                  <Link href={`/projects/${project.id}`} className="text-purple-500 hover:text-purple-400 transition-colors flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white hover:bg-gray-700 border-gray-700"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Repo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white hover:bg-gray-700 border-gray-700"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="py-16 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16 text-center border-t border-gray-800">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
                Ready to Contribute to Open Source?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join Red Wood Labs in building innovative open-source solutions that push the boundaries of what&apos;s possible in technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold transition-all duration-300 hover:scale-105"
                  >
                    Explore Projects
                  </Button>
                </Link>
                <Link href="/join-us">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-purple-500 text-purple-500 hover:bg-purple-300"
                  >
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
