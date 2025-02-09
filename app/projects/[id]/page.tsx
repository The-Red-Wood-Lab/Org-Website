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
import {
  Github,
  Terminal,
  Cloud,
  TrafficCone,
  Banknote,
  Bolt,
  Archive,
} from "lucide-react";
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
    icon: Terminal,
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
    icon: Cloud,
  },
  {
    id: "3",
    title: "Smart Traffic Flow Analyzer",
    description:
      "An AI-driven tool for analyzing and optimizing traffic flow using real-time data.",
    fullDescription:
      "Smart Traffic Flow Analyzer is an innovative solution that uses artificial intelligence to analyze and optimize traffic flow in urban areas. By processing real-time data from various sources, it provides insights and recommendations to improve traffic management and reduce congestion.",
    features: [
      "Real-time traffic flow analysis",
      "Predictive modeling for traffic patterns",
      "Integration with traffic signal systems",
      "Congestion hotspot identification",
      "Automated incident detection and response suggestions",
    ],
    technologies: ["TensorFlow", "OpenCV", "Python", "Kafka", "MongoDB"],
    githubLink:
      "https://github.com/The-Red-Wood-Lab/Smart-Traffic-Flow-Analyzer",
    icon: TrafficCone,
  },
  {
    id: "4",
    title: "Credit Risk Analysis",
    description:
      "A machine learning-based system for assessing and predicting credit risk.",
    fullDescription:
      "Credit Risk Analysis is a sophisticated machine learning system designed to assess and predict credit risk for financial institutions. By analyzing various factors and historical data, it provides accurate risk assessments to aid in decision-making processes for loan approvals and credit management.",
    features: [
      "Multi-factor risk assessment",
      "Real-time credit scoring",
      "Integration with multiple data sources",
      "Customizable risk models",
      "Comprehensive reporting and analytics dashboard",
    ],
    technologies: ["Python", "XGBoost", "SQL", "Flask", "React"],
    githubLink: "https://github.com/The-Red-Wood-Lab/credit-risk-analysis",
    icon: Banknote,
  },
  {
    id: "5",
    title: "Micro Gas Turbine Electrical Energy Prediction",
    description:
      "A machine learning model for predicting electrical energy output of micro gas turbines.",
    fullDescription:
      "This project focuses on developing a machine learning model to accurately predict the electrical energy output of micro gas turbines. By considering various operational parameters and environmental factors, the model helps optimize energy production and improve efficiency in micro gas turbine systems.",
    features: [
      "Accurate energy output prediction",
      "Real-time performance monitoring",
      "Optimization suggestions for turbine operation",
      "Integration with SCADA systems",
      "Historical data analysis for trend identification",
    ],
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Plotly"],
    githubLink:
      "https://github.com/The-Red-Wood-Lab/Micro-Gas-Turbine-electrical-energy-Prediction",
    icon: Bolt,
  },
  {
    id: "6",
    title: "Time Capsule Website",
    description:
      "A web platform that allows users to create and send digital time capsules to be opened in the future.",
    fullDescription:
      "The Time Capsule Website is an innovative platform that enables users to create digital time capsules containing messages, images, and other media to be opened at a specified future date. This project combines web technologies with secure storage solutions to provide a unique way of preserving memories and messages for the future.",
    features: [
      "User-friendly interface for creating time capsules",
      "Secure storage of time capsule contents",
      "Scheduled release of time capsules",
      "Support for various media types (text, images, videos)",
      "Integration with social media for sharing and notifications",
    ],
    technologies: ["Next.js", "React", "MongoDB", "AWS S3", "Node.js"],
    githubLink: "https://github.com/The-Red-Wood-Lab/time-capsule-website",
    icon: Archive,
  },
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
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 mr-4" />
                <h2 className="retro-subtitle text-2xl">{project.title}</h2>
              </div>
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
