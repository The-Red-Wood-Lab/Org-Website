import { notFound } from 'next/navigation'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { RetroBinaryBackground, RetroGrid, RetroCursor } from '@/components/retro-decorations'
import { Github, Globe } from 'lucide-react'

const projects = [
  {
    id: "1",
    title: "RETRO CODE EDITOR",
    description: "A code editor with the look and feel of old-school terminals.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription: "Our Retro Code Editor is a powerful tool that combines the nostalgia of old-school terminal interfaces with modern coding features. It's designed to provide a unique and immersive coding experience that harkens back to the early days of programming while offering the functionality developers need in today's world.",
    features: [
      "Authentic retro terminal interface",
      "Syntax highlighting for multiple languages",
      "Customizable color schemes inspired by classic computer systems",
      "Built-in retro-style file browser",
      "Integrated retro-themed debugger"
    ],
    technologies: ["Electron", "React", "Node.js", "Monaco Editor"],
    githubLink: "https://github.com/redwoodlabs/retro-code-editor",
    liveLink: "https://retro-code-editor-demo.redwoodlabs.org",
  },
  {
    id: "2",
    title: "8-BIT DATA VISUALIZER",
    description: "Turn complex data into simple, nostalgic 8-bit graphics.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription: "Our 8-Bit Data Visualizer is a unique tool that transforms complex datasets into charming, nostalgic 8-bit style graphics. It's perfect for making data more approachable and engaging, especially for presentations or educational purposes.",
    features: [
      "Convert various data formats into 8-bit style visualizations",
      "Multiple chart types: bar graphs, pie charts, line graphs",
      "Customizable color palettes inspired by classic 8-bit systems",
      "Export options for images and animated GIFs",
      "API for integration with other data tools"
    ],
    technologies: ["JavaScript", "D3.js", "Canvas API", "Node.js"],
    githubLink: "https://github.com/redwoodlabs/8bit-data-viz",
    liveLink: "https://8bit-data-viz-demo.redwoodlabs.org",
  },
  {
    id: "3",
    title: "SYNTHWAVE CSS FRAMEWORK",
    description: "A CSS framework to give your web projects that 80s synthwave look.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription: "Our Synthwave CSS Framework allows developers to easily create websites with the iconic 80s synthwave aesthetic. It provides a set of pre-designed components and utilities that capture the essence of neon lights, grid landscapes, and retro-futuristic vibes.",
    features: [
      "Ready-to-use UI components with synthwave styling",
      "Customizable color schemes and gradients",
      "Responsive grid system for easy layouts",
      "Animation utilities for creating dynamic effects",
      "Typography styles inspired by 80s digital displays"
    ],
    technologies: ["CSS", "Sass", "PostCSS", "JavaScript"],
    githubLink: "https://github.com/redwoodlabs/synthwave-css",
    liveLink: "https://synthwave-css-demo.redwoodlabs.org",
  },
  {
    id: "4",
    title: "FLOPPY DISK BACKUP TOOL",
    description: "Backup your data to virtual floppy disks, just for fun!",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription: "Our Floppy Disk Backup Tool is a novelty application that allows users to backup their data to virtual floppy disks. It's a fun way to organize and store files while reliving the nostalgia of the floppy disk era.",
    features: [
      "Create and manage virtual floppy disks",
      "Realistic floppy disk UI and sounds",
      "File compression to fit more data on each 'disk'",
      "Disk labeling and cataloging system",
      "Integration with cloud storage for real backups"
    ],
    technologies: ["Electron", "React", "Node.js", "SQLite"],
    githubLink: "https://github.com/redwoodlabs/floppy-backup",
    liveLink: "https://floppy-backup-demo.redwoodlabs.org",
  },
  {
    id: "5",
    title: "ASCII ART GENERATOR",
    description: "Convert images into ASCII art for that true retro feel.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription: "Our ASCII Art Generator is a powerful tool that converts images into beautiful ASCII art. It's perfect for creating unique visual content for text-based interfaces, retro-style websites, or just for fun.",
    features: [
      "Convert images to ASCII art with adjustable resolution",
      "Multiple character sets for different styles",
      "Color and monochrome output options",
      "Ability to generate animated ASCII art from GIFs",
      "Web API for easy integration into other applications"
    ],
    technologies: ["Python", "Pillow", "Flask", "JavaScript"],
    githubLink: "https://github.com/redwoodlabs/ascii-art-gen",
    liveLink: "https://ascii-art-gen-demo.redwoodlabs.org",
  },
  {
    id: "6",
    title: "RETRO GAME ENGINE",
    description: "Build games that look and feel like they're from the 80s and 90s.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription: "Our Retro Game Engine is a comprehensive toolkit for creating games with authentic 8-bit and 16-bit aesthetics. It provides developers with the tools to build games that capture the charm and nostalgia of classic gaming eras.",
    features: [
      "Sprite editor with animation tools",
      "Tile-based level editor",
      "Chiptune music and sound effect creator",
      "Cross-platform export (Web, Desktop, Mobile)",
      "Built-in physics engine with retro-style limitations"
    ],
    technologies: ["C++", "SDL2", "OpenGL", "Lua"],
    githubLink: "https://github.com/redwoodlabs/retro-game-engine",
    liveLink: "https://retro-game-engine-demo.redwoodlabs.org",
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title text-5xl text-center mb-16">{project.title}</h1>

          <div className="space-y-8">
            <div className="retro-box">
              <div className="relative aspect-video mb-8 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="retro-text text-xl mb-8">{project.fullDescription}</p>
              <div className="flex justify-end space-x-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="retro-button flex items-center">
                    <Github className="w-5 h-5 mr-2" />
                    GITHUB
                  </button>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="retro-button flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    LIVE DEMO
                  </button>
                </a>
              </div>
            </div>

            <div className="retro-box">
              <h2 className="retro-subtitle text-2xl mb-6">Features</h2>
              <ul className="retro-text text-xl space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">►</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="retro-box">
              <h2 className="retro-subtitle text-2xl mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="retro-text text-xl bg-black text-white px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/projects">
                <button className="retro-button">
                  BACK TO PROJECTS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

