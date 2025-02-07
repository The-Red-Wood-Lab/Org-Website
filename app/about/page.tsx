import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import { Code, Cpu, Globe, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">ABOUT US</h1>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">OUR MISSION</h2>
            <p className="retro-text mb-4">
             At The Redwood Labs, we bring together individuals with diverse skills across various tech stacks to collaborate on innovative projects. Our mission is to enhance skills and foster growth through teamwork and real-world applications.
            </p>
            <p className="retro-text">
              By working on collaborative projects, we strive to provide hands-on experience, contribute to the open-source community, and push the boundaries of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="retro-box">
              <Cpu className="w-12 h-12 mb-4" />
              <h3 className="retro-subtitle mb-4">TECH STACK</h3>
              <ul className="retro-text list-disc list-inside">
                <li>React & Next.js</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Rust</li>
                <li>Open CV</li>
                <li>Yolo</li>
                <li>Generative AI (LangChain & Lama)</li>
              </ul>
            </div>
            <div className="retro-box">
              <Globe className="w-12 h-12 mb-4" />
              <h3 className="retro-subtitle mb-4">Previous Participation</h3>
             <ul className="retro-text list-disc list-inside">
                <li>Social Winter Summer of Code (SWOC)</li>
                <li>GirlScript Summer of Code (GSSOC)</li>
              </ul>
            </div>
          </div>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">OUR VALUES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  OPEN SOURCE
                </h3>
                <p className="retro-text mb-4">
                  We believe in the power of community-driven development and
                  make all our projects freely available.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Cpu className="w-6 h-6 mr-2" />
                  RETRO AESTHETICS
                </h3>
                <p className="retro-text mb-4">
                  We celebrate the visual and interactive styles of early
                  computing eras in our projects.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  INNOVATION
                </h3>
                <p className="retro-text mb-4">
                  While we love the past, we&apos;re always pushing the
                  boundaries of what&apos;s possible in software.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  COMMUNITY
                </h3>
                <p className="retro-text mb-4">
                  We foster a welcoming community for developers of all skill
                  levels and backgrounds.
                </p>
              </div>
            </div>
          </div>

          <div className="retro-box">
            <h2 className="retro-subtitle mb-4">JOIN THE RETRO REVOLUTION</h2>
            <p className="retro-text mb-4">
              Whether you&apos;re a seasoned developer or just starting out,
              there&apos;s a place for you at Red Wood Labs. Join us in creating
              the future of software with a nostalgic twist!
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/The-Red-Wood-Lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="retro-button">VISIT OUR GITHUB</button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
