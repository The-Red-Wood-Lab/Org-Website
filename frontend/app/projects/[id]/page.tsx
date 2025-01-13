'use client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

// This would typically come from a database or API
const projects = [
  {
    id: "1",
    title: "Project Title 1",
    description: "Project Description: This project involves the design and development of a fully functional e-commerce website, aimed at providing an efficient and user-friendly shopping experience for customers. The website will allow users to browse, search, and purchase a wide range of products from various categories, with secure payment options and an intuitive interface. Key features will include:User-Friendly Design: A clean, responsive design ensuring seamless navigation on both desktop and mobile devices.Product Listings: Detailed product pages with high-quality images, descriptions, reviews, and pricing information. Users can filter products by category, price range, brand, and other attributes.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#",
    fullDescription: "This is where you would put a much longer, more detailed description of the project. You can include information about the project's goals, challenges, technologies used, and outcomes. This section can be as long as needed to fully describe the project.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    duration: "3 months",
    client: "Example Client",
    role: "Lead Developer"
  },
  // ... other projects
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <div className="mb-8 aspect-video relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
              <p className="text-gray-700 mb-4">{project.fullDescription}</p>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Client:</strong> {project.client}</p>
              <p><strong>Role:</strong> {project.role}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
              <Button variant="outline">Back to Projects</Button>
            </Link>
            <Button
              variant="secondary"
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => window.open(project.link, '_blank')}
            >
              Visit Project
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

