import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import {
  Terminal,
  Cloud,
  TrafficCone,
  Banknote,
  Bolt,
  Archive,
} from "lucide-react";

const projects = [
  {
    id: "1",
    title: "ResumeCraft",
    description:
      "A sleek and intuitive resume builder for crafting professional resumes effortlessly.",
    icon: Terminal,
  },
  {
    id: "2",
    title: "AQI Predictor",
    description:
      "An AI-powered tool for predicting air quality index (AQI) based on environmental data.",
    icon: Cloud,
  },
  {
    id: "3",
    title: "Smart Traffic Flow Analyzer",
    description:
      "An AI-driven tool for analyzing and optimizing traffic flow using real-time data.",
    icon: TrafficCone,
  },
  {
    id: "4",
    title: "Credit Risk Analysis",
    description:
      "A machine learning-based system for assessing and predicting credit risk.",
    icon: Banknote,
  },
  {
    id: "5",
    title: "Micro Gas Turbine Electrical Energy Prediction",
    description:
      "A machine learning model for predicting electrical energy output of micro gas turbines.",
    icon: Bolt,
  },
  {
    id: "6",
    title: "Time Capsule Website",
    description:
      "A web platform that allows users to create and send digital time capsules to be opened in the future.",
    icon: Archive,
  },
];

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
              <div
                key={project.id}
                className="border-4 border-black p-6 relative bg-white"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-black flex items-center justify-center">
                  <project.icon className="text-white w-8 h-8" />
                </div>
                <h2 className="font-['Press_Start_2P'] text-xl mb-6 leading-relaxed">
                  {project.title}
                </h2>
                <p className="font-mono text-lg mb-8">{project.description}</p>
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
            <h2 className="font-['Press_Start_2P'] text-xl mb-4">
              CONTRIBUTE TO OPEN SOURCE
            </h2>
            <p className="font-mono text-lg mb-4">
              All our projects are open source and welcome contributions.
              Whether you&apos;re a seasoned developer or just starting out,
              there&apos;s a place for you in our retro-coding community.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/The-Red-Wood-Lab"
                target="_blank"
                rel="noopener noreferrer"
              >
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
  );
}
