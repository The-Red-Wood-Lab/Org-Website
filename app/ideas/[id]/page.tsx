import { notFound } from "next/navigation";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  overview: string;
  keyFeatures: string[];
  expectedOutcomes: string[];
  techStack: string[];
  difficulty: string;
  timeline: string;
  mentors: { name: string; role: string; github: string }[];
};

const projects: Record<string, Project> = {
  "misinformation-shield": {
    title: "Misinformation Shield: AI Toolkit for Social Media Fact-Checking",
    overview:
      "Social media is a double-edged sword—while it connects us, it also floods our feeds with hate, sarcasm, and negativity. Misinformation Shield is our answer to this challenge. By blending NLP, reinforcement learning, and attention mechanisms (including bi-directional LSTM), this toolkit digs deep into social media content to distinguish genuine hate from sarcasm and plain negativity. The goal is to empower users with a clearer understanding of online discourse.",
    keyFeatures: [
      "Data Acquisition: Web scraping to collect relevant social media data.",
      "Data Preprocessing: Robust cleaning and normalization of textual data.",
      "Advanced Classification: Transformer-based models to accurately differentiate between factual and misleading content.",
      "Explainability: Utilization of explainability techniques (e.g., SHAP values) to provide insights into model decisions.",
    ],
    expectedOutcomes: [
      "A modular, Python-based toolkit for misinformation detection.",
      "Pretrained models ready for deployment.",
      "A comprehensive API and documentation for community engagement and further development.",
    ],
    techStack: [
      "Programming Language: Python",
      "Libraries/Frameworks: Transformers, spaCy, scikit-learn",
      "Additional Tools: Web scraping frameworks (Selenium or Beautiful Soup) and API development libraries",
      "Web Development Tools: React.js/Next.js, HTML, CSS, JavaScript",
    ],
    difficulty: "Medium to Hard",
    timeline: "175 to 350 hours (depending on feature scope and complexity)",
    mentors: [
        {
        name: "Abhiman Panwar",
        role: "PROJECT ADMIN",
        github: "https://github.com/Kroszborg",
      },
      {
        name: "Abhinav Singh",
        role: "BACKEND",
        github: "https://github.com/Abhinavexists",
      },
      {
        name: "Rohit Sharma",
        role: "FRONTEND",
        github: "https://github.com/rohitsharma2610",
      },
    ],
  },
  "speaker-diarization": {
    title: "Speaker Diarization with NLP",
    overview:
      "Imagine a tool that listens to a group conversation and effortlessly tells you who said what—almost like having a personal moderator. Our speaker diarization project aims to do just that. By integrating advanced NLP and voice recognition, it transforms raw audio into well-organized transcripts, ensuring every speaker is accurately identified. This makes meetings, legal proceedings, and conference calls much easier to review.",
    keyFeatures: [
      "Advanced speaker recognition and voice profiling",
      "Real-time transcription with speaker identification",
      "Integration with popular meeting platforms",
      "Export capabilities for various formats",
    ],
    expectedOutcomes: [
      "A robust speaker diarization system",
      "API for integration with other platforms",
      "Comprehensive documentation and examples",
    ],
    techStack: [
      "PyAnnotate",
      "NVIDIA NeMo",
      "Advanced NLP libraries",
      "Audio processing frameworks",
    ],
    difficulty: "Medium to Hard",
    timeline: "Approximately 175 hours",
    mentors: [
      {
        name: "Abhinav Singh",
        role: "BACKEND",
        github: "https://github.com/Abhinavexists",
      },
      {
        name: "Rohit Sharma",
        role: "FRONTEND",
        github: "https://github.com/rohitsharma2610",
      },
    ],
  },
  "ai-virtual-assistant": {
    title: "AI Virtual Assistant for Organization Website",
    overview:
      "Picture a friendly guide waiting on your organization's website—ready to answer questions, provide information, and help visitors navigate effortlessly. Our AI Virtual Assistant is designed to offer personalized and timely details about the organization, enhancing user experience with natural, conversational interactions.",
    keyFeatures: [
      "Natural language understanding and generation",
      "Context-aware responses",
      "Integration with website content",
      "Customizable personality and responses",
    ],
    expectedOutcomes: [
      "Fully functional AI assistant",
      "Admin dashboard for customization",
      "Analytics and reporting system",
    ],
    techStack: [
      "Frontend: React.js, Next.js",
      "Backend: Python, Langchain",
      "AI: Gemini",
    ],
    difficulty: "Easy",
    timeline: "Around 90 hours",
    mentors: [
      {
        name: "Eeshan Bablani",
        role: "PROJECT ADMIN",
        github: "https://github.com/eeshan15",
      },
      {
        name: "Abhiman Panwar",
        role: "PROJECT ADMIN",
        github: "https://github.com/Kroszborg",
      },
        {
        name: "Abhinav Singh",
        role: "BACKEND",
        github: "github.com/Abhinavexists",
      },
      {
        name: "Rohit Sharma",
        role: "FRONTEND",
        github: "https://github.com/rohitsharma2610",
      },
    ],
  },
  "visual-transformer": {
    title:
      "Reinforcement Learning-Based Visual Transformer for Adaptive Patch Sampling",
    overview:
      "What if a computer could learn to look at an image like a human—focusing only on the parts that truly matter? Our project does exactly that by merging a visual transformer with adaptive patch sampling. Instead of processing every pixel equally, the model zeroes in on key areas. An RL agent refines these choices over time, making the system increasingly efficient at recognizing and understanding complex scenes.",
    keyFeatures: [
      "Visual transformer architecture with adaptive sampling",
      "Reinforcement learning for patch selection optimization",
      "Efficient image understanding and processing",
      "Real-time performance optimization",
    ],
    expectedOutcomes: [
      "Efficient visual transformer implementation",
      "Adaptive patch sampling mechanism",
      "Performance benchmarks and comparisons",
      "Documentation and example applications",
    ],
    techStack: [
      "PyTorch for deep learning model development",
      "Reinforcement Learning Libraries (Stable Baselines3 or RLlib)",
      "Image Processing: OpenCV, PIL",
      "Visualization & Monitoring: TensorBoard, Matplotlib",
      "Experiment Tracking: Weights & Biases (W&B) or MLflow",
      "Data Manipulation: NumPy, Pandas",
    ],
    difficulty: "Hard",
    timeline: "Approximately 375 hours",
    mentors: [
      {
        name: "Eeshan Bablani",
        role: "PROJECT ADMIN",
        github: "https://github.com/eeshan15",
      },
       {
        name: "Abhiman Panwar",
        role: "PROJECT ADMIN",
        github: "https://github.com/Kroszborg",
      },
      {
        name: "Abhinav Singh",
        role: "BACKEND",
        github: "https://github.com/Abhinavexists",
      },     
      {
        name: "Rohit Sharma",
        role: "FRONTEND",
        github: "https://github.com/rohitsharma2610",
      },
    ],
  },
  "color-bot": {
    title: "Reinforcement Learning-Based Color Bot for Adaptive Fabric Design",
    overview:
      "Imagine a digital assistant for fabric designers that truly understands the art of color. Instead of offering generic palettes, our Color Bot dives into the details of fabric patterns and evolving trends. It combines the precision of Spiking Neural Networks with the adaptability of reinforcement learning and the sequential insights of LSTM models. The result? Personalized, dynamic color recommendations that keep up with the latest fashion trends and design nuances.",
    keyFeatures: [
      "Spiking Neural Networks for color processing",
      "LSTM models for trend analysis",
      "Reinforcement learning for adaptive recommendations",
      "Pattern-aware color suggestion system",
    ],
    expectedOutcomes: [
      "Color recommendation engine",
      "Trend analysis system",
      "Pattern recognition module",
      "Interactive design interface",
    ],
    techStack: [
      "PyTorch for SNNs, LSTMs, and RL agents",
      "Reinforcement Learning Libraries (Stable Baselines3/RLlib)",
      "Neuromorphic Computing Frameworks (Nengo, BindsNET, SpykeTorch)",
      "Image Processing: OpenCV, PIL",
      "Visualization & Monitoring: TensorBoard, Matplotlib",
      "Experiment Tracking: W&B or MLflow",
      "Data Manipulation: NumPy, Pandas",
    ],
    difficulty: "Hard",
    timeline: "Approximately 375 hours",
    mentors: [
      {
        name: "Eeshan Bablani",
        role: "PROJECT ADMIN",
        github: "https://github.com/eeshan15",
      },
      {
        name: "Abhinav Singh",
        role: "BACKEND",
        github: "https://github.com/Abhinavexists",
      },
      {
        name: "Rohit Sharma",
        role: "FRONTEND",
        github: "https://github.com/rohitsharma2610",
      },
    ],
  },
  dagflow: {
    title: "DAGFlow: A Lightweight DAG-Based Workflow Orchestration System",
    overview:
      "Think of DAGFlow as your personal conductor for orchestrating complex workflows. It uses a directed acyclic graph (DAG) approach to manage tasks in data pipelines, ML processes, and CI/CD operations. Unlike bulky orchestration tools, DAGFlow is built to be lightweight and scalable—helping you define, execute, and monitor tasks effortlessly while keeping the process smooth and intuitive.",
    keyFeatures: [
      "DAG-based workflow management",
      "Lightweight orchestration engine",
      "Scalable task execution",
      "Real-time monitoring",
    ],
    expectedOutcomes: [
      "DAG Execution Engine",
      "Pipeline Definition API",
      "Failure Handling and Logging",
      "Basic Web UI",
      "Documentation and Tutorials",
    ],
    techStack: [
      "Python for orchestration engine",
      "Flask/FastAPI for API development",
      "Celery/RQ for task scheduling",
      "Graph Algorithms for DAG scheduling",
      "PostgreSQL/MongoDB for metadata storage",
      "Docker & Kubernetes for distribution",
      "React.js/Vue.js for dashboard",
      "TensorBoard/Matplotlib for visualization",
    ],
    difficulty: "Medium to Hard",
    timeline: "175-350 hours (basic engine to advanced features)",
    mentors: [
      {
        name: "Sujal Rajput",
        role: "BACKEND",
        github: "https://github.com/SujalRajpt",
      },
    ],
  },
  animax: {
    title: "AniMax: A Conversational Multi-Modal Animal Information Assistant",
    overview:
      "Our current animal info chatbot is pretty one-dimensional—it just fetches data from images without really talking back or remembering previous chats. AniMax is set to change that by turning it into a full-fledged conversational assistant. By combining advanced NLP with the existing image model and adding chat history, AniMax offers rich, interactive, and context-aware animal information. It's like having a knowledgeable friend who can show you visuals and explain details in a friendly conversation.",
    keyFeatures: [
      "Multi-modal information processing",
      "Context-aware conversations",
      "Chat history management",
      "Interactive visual explanations",
    ],
    expectedOutcomes: [
      "Conversational Engine",
      "Chat History Management",
      "Multi-Modal Integration",
      "API and Web Interface",
      "Documentation and Tutorials",
    ],
    techStack: [
      "Python for backend services",
      "Flask/FastAPI for RESTful APIs",
      "Transformer-based NLP Models (GPT, BERT)",
      "Image Processing Libraries (OpenCV, PIL)",
      "PostgreSQL/MongoDB for chat history",
      "React.js/Vue.js for frontend",
      "Optional: Rasa or Dialogflow",
    ],
    difficulty: "Medium to Hard",
    timeline: "250-375 hours",
    mentors: [
      {
        name: "Eeshan Bablani",
        role: "PROJECT ADMIN",
        github: "https://github.com/eeshan15",
      },
       {
        name: "Abhiman Panwar",
        role: "PROJECT ADMIN",
        github: "https://github.com/Kroszborg",
      },
      {
        name: "Abhinav Singh",
        role: "BACKEND",
        github: "https://github.com/Abhinavexists",
      },
      {
        name: "Rohit Sharma",
        role: "FRONTEND",
        github: "https://github.com/rohitsharma2610",
      },
    ],
  },
  chaosops: {
    title: "ChaosOps: Automated Chaos Engineering Platform",
    overview:
      "Imagine having a tool that purposely shakes up your system to reveal its hidden weaknesses—before they become real problems. ChaosOps does exactly that by automatically injecting controlled failures into production-like environments. Using a blend of chaos engineering techniques and reinforcement learning, it smartly schedules these experiments based on live system feedback. The outcome is a platform that not only identifies vulnerabilities but also learns to optimize its testing strategy over time, keeping your systems robust and resilient with minimal manual effort.",
    keyFeatures: [
      "Automated chaos experiments",
      "RL-based scheduling",
      "Real-time monitoring",
      "Failure injection control",
    ],
    expectedOutcomes: [
      "Chaos Experiment Engine",
      "RL-Driven Scheduling Module",
      "Monitoring Dashboard",
      "API Services",
      "Documentation and Tutorials",
    ],
    techStack: [
      "Python for chaos experiments",
      "Flask/FastAPI for APIs",
      "Kubernetes & Docker for isolation",
      "Chaos Monkey/LitmusChaos integration",
      "Reinforcement Learning Libraries",
      "PostgreSQL/MongoDB for logging",
      "Prometheus and Grafana for monitoring",
    ],
    difficulty: "Hard",
    timeline: "350-400 hours",
    mentors: [
      {
        name: "Sujal Rajput",
        role: "BACKEND",
        github: "https://github.com/SujalRajpt",
      },
    ],
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects[params.id];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <Link href="/ideas" className="retro-button flex items-center mb-8">
            <ArrowLeft className="w-6 h-6 mr-2" /> Back to Ideas
          </Link>

          <h1 className="retro-title">{project.title}</h1>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Overview</h2>
            <p className="retro-text">{project.overview}</p>
          </div>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Key Features</h2>
            <ul className="list-disc pl-6">
              {project.keyFeatures.map((feature: string, index: number) => (
                <li key={index} className="retro-text mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Expected Outcomes</h2>
            <ul className="list-disc pl-6">
              {project.expectedOutcomes.map(
                (outcome: string, index: number) => (
                  <li key={index} className="retro-text mb-2">
                    {outcome}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Technology Stack</h2>
            <ul className="list-disc pl-6">
              {project.techStack.map((tech: string, index: number) => (
                <li key={index} className="retro-text mb-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Project Details</h2>
            <p className="retro-text mb-2">
              <strong>Difficulty:</strong> {project.difficulty}
            </p>
            <p className="retro-text">
              <strong>Estimated Timeline:</strong> {project.timeline}
            </p>
          </div>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Mentors</h2>
            {project.mentors.map(
              (
                mentor: { name: string; role: string; github: string },
                index: number
              ) => (
                <div key={index} className="mb-4">
                  <p className="retro-text mb-1">
                    <strong>{mentor.name}</strong> - {mentor.role}
                  </p>
                  <a
                    href={mentor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-link flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" /> GitHub Profile
                  </a>
                </div>
              )
            )}
          </div>

          <a
            href="https://github.com/The-Red-Wood-Lab/GSOC2025-IDEAS"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button flex items-center"
          >
            <ExternalLink className="w-6 h-6 mr-2" /> View on GitHub
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
