import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from "@/components/retro-decorations";
import { Github, Share2, Mail } from "lucide-react";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">JOIN US</h1>

          <div className="retro-box mb-8">
            <h2 className="retro-subtitle mb-4">BECOME A RETRO CODER</h2>
            <p className="retro-text mb-4">
              Join the Red Wood Labs community and help us build amazing
              open-source projects with a retro twist!
            </p>
            <p className="retro-text mb-4">
              Whether you&apos;re a seasoned developer, a design enthusiast, or
              just passionate about retro computing, there&apos;s a place for
              you in our pixelated world.
            </p>
          </div>

          <h2 className="retro-subtitle text-center mb-6">
            HOW TO GET INVOLVED
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="retro-box">
              <div className="flex items-center mb-4">
                <Github className="w-8 h-8 mr-4" />
                <h3 className="retro-subtitle">CONTRIBUTE CODE</h3>
              </div>
              <p className="retro-text mb-4">
                Fork our repositories, submit pull requests, and help us build
                the future with retro style.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://github.com/The-Red-Wood-Lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="retro-button">VISIT GITHUB</button>
                </a>
              </div>
            </div>
            <div className="retro-box">
              <div className="flex items-center mb-4">
                <Share2 className="w-8 h-8 mr-4" />
                <h3 className="retro-subtitle">SPREAD THE WORD</h3>
              </div>
              <p className="retro-text mb-4">
                Help us grow by sharing our projects and mission with your
                network of fellow developers.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/company/the-red-wood-lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="retro-button">SHARE ON Linkedin</button>
                </a>
              </div>
            </div>
          </div>

          <div className="retro-box">
            <h2 className="retro-subtitle mb-4">LEVEL UP YOUR SKILLS</h2>
            <p className="retro-text mb-4">
              At Red Wood Labs, we believe in continuous learning. Here&apos;s
              how you can improve your retro coding skills:
            </p>
            <ul className="retro-text list-disc list-inside mb-4">
              <li>Participate in our monthly retro coding challenges</li>
              <li>
                Attend our &quot;Back to the Future of Coding&quot; webinar
                series
              </li>
              <li>
                Contribute to our open-source projects and receive mentorship
              </li>
              <li>
                Join our &quot;Retro Code Review&quot; sessions every Friday
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="https://github.com/The-Red-Wood-Lab" target="_blank">
                <button className="retro-button">
                  EXPLORE LEARNING RESOURCES
                </button>
              </Link>
            </div>
          </div>

          <div className="retro-box mt-8">
            <div className="flex items-center mb-4">
              <Mail className="w-8 h-8 mr-4" />
              <h2 className="retro-subtitle">GET IN TOUCH</h2>
            </div>
            <p className="retro-text mb-4">
              Have questions or ideas? We&apos;d love to hear from you! Drop us
              a message and join the retro revolution.
            </p>
            <div className="flex justify-center">
              <Link  href="mailto:theredwoodlabs@gmail.com">
                <button className="retro-button">CONTACT US</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
