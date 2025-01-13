'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  link: string
}

export default function ProjectCard({ id, title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="bg-[#e0e0e0] p-6 rounded-lg grid md:grid-cols-2 gap-6">
      <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700 leading-relaxed line-clamp-4">{description}</p>
        <div className="flex space-x-4">
          <Button
            variant="secondary"
            className="bg-black text-white hover:bg-gray-800 px-8"
            onClick={() => window.open(link, '_blank')}
          >
            LINK
          </Button>
          <Link href={`/projects/${id}`} passHref>
            <Button variant="outline" className="px-8">
              More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

