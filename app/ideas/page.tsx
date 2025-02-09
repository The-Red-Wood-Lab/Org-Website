import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import {
  Lightbulb,
  Code,
  Cpu,
  Users,
  Rocket,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    id: "misinformation-shield",
    title: "Misinformation Shield: AI Toolkit for Social Media Fact-Checking",
    description:
      "Develop an open-source toolkit using NLP and ML models to detect and classify misinformation across social media platforms, focusing on multilingual support.",
    icon: Lightbulb,
  },
  {
    id: "speaker-diarization",
    title: "Speaker Diarization with NLP",
    description:
      "Create a tool that integrates advanced NLP and voice recognition to transform raw audio into well-organized transcripts, ensuring every speaker is accurately identified.",
    icon: Users,
  },
  {
    id: "ai-virtual-assistant",
    title: "AI Virtual Assistant for Organization Website",
    description:
      "Design an AI-powered virtual assistant to offer personalized and timely information about the organization, enhancing user experience with natural, conversational interactions.",
    icon: Rocket,
  },
  {
    id: "visual-transformer",
    title:
      "Reinforcement Learning-Based Visual Transformer for Adaptive Patch Sampling",
    description:
      "Develop a model that merges a visual transformer with adaptive patch sampling, using RL to refine focus areas for efficient image understanding.",
    icon: Cpu,
  },
  {
    id: "color-bot",
    title: "Reinforcement Learning-Based Color Bot for Adaptive Fabric Design",
    description:
      "Create a digital assistant for fabric designers that combines SNNs, RL, and LSTM models to offer personalized, dynamic color recommendations.",
    icon: Code,
  },
  {
    id: "dagflow",
    title: "DAGFlow: A Lightweight DAG-Based Workflow Orchestration System",
    description:
      "Build a lightweight and scalable workflow orchestration system using a directed acyclic graph (DAG) approach for managing tasks in data pipelines, ML processes, and CI/CD operations.",
    icon: Cpu,
  },
  {
    id: "animax",
    title: "AniMax: A Conversational Multi-Modal Animal Information Assistant",
    description:
      "Enhance the existing animal info chatbot into a full-fledged conversational assistant, combining advanced NLP with image processing for rich, interactive, and context-aware animal information.",
    icon: Users,
  },
  {
    id: "chaosops",
    title: "ChaosOps: Automated Chaos Engineering Platform",
    description:
      "Develop an automated platform that injects controlled failures into production-like environments, using chaos engineering techniques and reinforcement learning to identify and mitigate system vulnerabilities.",
    icon: Rocket,
  },
];

export default function IdeaListPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">GSOC 2025 IDEAS</h1>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Introduction</h2>
            <p className="retro-text mb-4">
              At The Red Wood Labs, we bring together individuals with diverse
              skills across various tech stacks to collaborate on innovative
              projects. Our mission is to enhance skills and foster growth
              through teamwork and real-world applications. By working on
              collaborative projects, we strive to provide hands-on experience,
              contribute to the open-source community, and push the boundaries
              of technology.
            </p>
          </div>

          <h2 className="retro-subtitle mb-4">PROJECTS IN 2025</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="retro-box flex flex-col justify-between"
              >
                <div>
                  <project.icon className="w-12 h-12 mb-4" />
                  <h3 className="retro-subtitle mb-4">{project.title}</h3>
                  <p className="retro-text mb-4">{project.description}</p>
                </div>
                <Link
                  href={`/ideas/${project.id}`}
                  className="retro-button flex items-center self-end"
                >
                  <ExternalLink className="w-6 h-6 mr-2" /> View Details
                </Link>
              </div>
            ))}
          </div>

          <h2 className="retro-subtitle mb-4">Summary</h2>
          <a
            href="https://github.com/The-Red-Wood-Lab/GSOC2025-IDEAS"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button flex items-center mb-8"
          >
            <ExternalLink className="w-6 h-6 mr-2" /> Full List of Ideas
          </a>

          <h2 className="retro-subtitle mb-4">Administrators</h2>
          <a
            href="https://www.linkedin.com/in/eeshan-bablani-07134a251/"
            className="block retro-link text-xl mb-2"
          >
            Eeshan Bablani
          </a>
          <a
            href="https://www.linkedin.com/in/abhiman-panwar-272aa7228/"
            className="block retro-link text-xl mb-2"
          >
            Abhiman Panwar
          </a>
          <a
            href="https://www.linkedin.com/in/abhinavkumarsingh1405/"
            className="block retro-link text-xl mb-2"
          >
            Abhinav Kumar Singh
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-sharma-b90baa263/"
            className="block retro-link text-xl mb-2"
          >
            Rohit Sharma
          </a>

          <h2 className="retro-subtitle mb-4 mt-8">Contact</h2>
          <a
            href="mailto:theredwoodlabs@gmail.com"
            className="block retro-link text-xl"
          >
            theredwoodlabs@gmail.com
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
