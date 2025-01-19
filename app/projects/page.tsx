import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { RetroBinaryBackground, RetroGrid, RetroCursor } from '@/components/retro-decorations'
import { Terminal, Cpu, Globe, Database, Code, Zap } from 'lucide-react'

const projects = [
  {
    id: "1",
    title: "RETRO CODE EDITOR",
    description: "A code editor with the look and feel of old-school terminals.",
    icon: Terminal,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "8-BIT DATA VISUALIZER",
    description: "Turn complex data into simple, nostalgic 8-bit graphics.",
    icon: Cpu,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "SYNTHWAVE CSS FRAMEWORK",
    description: "A CSS framework to give your web projects that 80s synthwave look.",
    icon: Globe,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "FLOPPY DISK BACKUP TOOL",
    description: "Backup your data to virtual floppy disks, just for fun!",
    icon: Database,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "ASCII ART GENERATOR",
    description: "Convert images into ASCII art for that true retro feel.",
    icon: Code,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "RETRO GAME ENGINE",
    description: "Build games that look and feel like they're from the 80s and 90s.",
    icon: Zap,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">PROJECTS</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="border-4 border-black p-6 relative bg-white">
                {/* Icon in top right */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-black flex items-center justify-center">
                  <project.icon className="text-white w-8 h-8" />
                </div>
                
                {/* Project Title */}
                <h2 className="font-['Press_Start_2P'] text-xl mb-6 leading-relaxed">
                  {project.title}
                </h2>
                
                {/* Project Description */}
                <p className="font-mono text-lg mb-8">
                  {project.description}
                </p>
                
                {/* Project ID and View Button */}
                <div className="flex justify-end mt-4">
                  <Link href={`/projects/${project.id}`}>
                    <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors font-['Press_Start_2P'] text-sm">
                      VIEW PROJECT
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 border-4 border-black p-8 bg-white">
            <h2 className="font-['Press_Start_2P'] text-xl mb-4">CONTRIBUTE TO OPEN SOURCE</h2>
            <p className="font-mono text-lg mb-4">
              All our projects are open source and welcome contributions. 
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place for you in our retro-coding community.
            </p>
            <div className="flex justify-center">
              <a href="https://github.com/redwoodlabs" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors font-['Press_Start_2P'] text-sm">
                  VISIT OUR GITHUB
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

