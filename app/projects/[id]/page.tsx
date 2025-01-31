"use client";

import { notFound } from "next/navigation";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import { Github } from "lucide-react";
import { useParams } from "next/navigation";

const projects = [
  {
    id: "1",
    title: "ResumeCraft",
    description:
      "A sleek and intuitive resume builder for crafting professional resumes effortlessly.",
    fullDescription:
      "ResumeCraft is a powerful resume builder designed to help users create professional and visually appealing resumes with ease. Featuring a user-friendly interface and customizable templates, ResumeCraft simplifies the resume creation process, ensuring that job seekers can present their skills and experience effectively.",
    features: [
      "Customizable resume templates",
      "Live preview of resume formatting",
      "Export resumes in multiple formats (PDF, DOCX, etc.)",
      "Drag-and-drop section customization",
      "AI-powered content suggestions for better resume writing",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/The-Red-Wood-Lab/ResumeCraft",
  },
  {
    id: "2",
    title: "AQI Predictor",
    description:
      "An AI-powered tool for predicting air quality index (AQI) based on environmental data.",
    fullDescription:
      "AQI Predictor is a machine learning-based application designed to forecast air quality index (AQI) using historical and real-time environmental data. By leveraging advanced predictive algorithms, it provides accurate AQI estimations, helping users stay informed about air pollution levels and make better health decisions.",
    features: [
      "Real-time AQI predictions based on environmental factors",
      "Historical data analysis for trend forecasting",
      "Interactive data visualization and heatmaps",
      "Supports multiple data sources for enhanced accuracy",
      "User-friendly dashboard for monitoring air quality",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Matplotlib"],
    githubLink: "https://github.com/The-Red-Wood-Lab/AQI-predictor",
  },
  // ... (other projects)
];

export default function ProjectPage() {
  const params = useParams();
  const projectId = params?.id as string;

  if (!projectId) {
    return notFound();
  }

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title text-5xl text-center mb-16">
            {project.title}
          </h1>

          <div className="space-y-8">
            <div className="retro-box">
              <p className="retro-text text-xl mb-8">
                {project.fullDescription}
              </p>
              <div className="flex justify-end space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="retro-button flex items-center">
                    <Github className="w-5 h-5 mr-2" />
                    GITHUB
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
                  <span
                    key={index}
                    className="retro-text text-xl bg-black text-white px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/projects">
                <button className="retro-button">BACK TO PROJECTS</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
