import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import { Lightbulb, Code, Cpu, Users, Rocket, ExternalLink } from "lucide-react";

export default function IdeaListPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">IDEA LIST</h1>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">Introduction</h2>
            <p className="retro-text mb-4">
            At The Redwood Labs, we bring together individuals with diverse skills across various tech stacks to collaborate on innovative projects. Our mission is to enhance skills and foster growth through teamwork and real-world applications. By working on collaborative projects, we strive to provide hands-on experience, contribute to the open-source community, and push the boundaries of technology.
            </p>
          </div>

          <h2 className="retro-subtitle mb-4">PROJECtS IN 2025</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Idea 1 */}
            <div className="retro-box flex justify-between items-center">
              <div>
                <Lightbulb className="w-12 h-12 mb-4" />
                <h3 className="retro-subtitle mb-4">Open-Source Misinformation Detection Toolkit</h3>
                <p className="retro-text">
                Develop an open-source toolkit using NLP and ML models to detect and classify misinformation across social media platforms, focusing on multilingual support.
                </p>
              </div>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center">
                <ExternalLink className="w-6 h-6 mr-2" /> View
              </a>
            </div>

            {/* Idea 2 */}
            <div className="retro-box flex justify-between items-center">
              <div>
                <Cpu className="w-12 h-12 mb-4" />
                <h3 className="retro-subtitle mb-4">Automated Bug Fixer</h3>
                <p className="retro-text">
                  A system that identifies bugs in open-source projects and
                  suggests potential fixes using machine learning models trained
                  on past issues.
                </p>
              </div>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center">
                <ExternalLink className="w-6 h-6 mr-2" /> View
              </a>
            </div>

            {/* Idea 3 */}
            <div className="retro-box flex justify-between items-center">
              <div>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="retro-subtitle mb-4">Open-Source Mentorship Platform</h3>
                <p className="retro-text">
                  A platform connecting open-source contributors with mentors,
                  providing resources, project guidance, and discussion forums to
                  encourage learning.
                </p>
              </div>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center">
                <ExternalLink className="w-6 h-6 mr-2" /> View
              </a>
            </div>

            {/* Idea 4 */}
            <div className="retro-box flex justify-between items-center">
              <div>
                <Rocket className="w-12 h-12 mb-4" />
                <h3 className="retro-subtitle mb-4">Next-Gen Developer Portfolio</h3>
                <p className="retro-text">
                  A dynamic and customizable portfolio generator that allows
                  developers to showcase their projects, skills, and GitHub
                  contributions in an interactive manner.
                </p>
              </div>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center">
                <ExternalLink className="w-6 h-6 mr-2" /> View
              </a>
            </div>
          </div>
          <h2 className="retro-subtitle mb-4">Summary</h2>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center">
                <ExternalLink className="w-6 h-6 mr-2" /> List Of ideas
              </a>
              <br />
          <h2 className="retro-subtitle mb-4">Administrators</h2>
          <a href="https://www.linkedin.com/in/eeshan-bablani-07134a251/" className="block retro-link text-xl">
            Eeshan Bablani
          </a>
          <a href="https://www.linkedin.com/in/abhinavkumarsingh1405/" className="block retro-link text-xl">
            Abhinav Kumar Singh
          </a>
          <a href="https://www.linkedin.com/in/rohit-sharma-b90baa263/" className="block retro-link text-xl">
            Rohit Sharma
          </a>
          <br />
          <h2 className="retro-subtitle mb-4">Contact</h2>
          <a href="mailto:theredwoodlabs@gmail.com" className="block retro-link text-xl">
  theredwoodlabs@gmail.com

          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
