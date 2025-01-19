import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { RetroBinaryBackground, RetroGrid, RetroCursor } from '@/components/retro-decorations'
import { Code, Cpu, Globe, Users, Zap } from 'lucide-react'

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
              Red Wood Labs is an open-source organization that combines modern coding practices with retro aesthetics. 
              We believe in the power of nostalgia and the importance of open-source collaboration.
            </p>
            <p className="retro-text">
              Our mission is to create innovative software solutions while paying homage to the golden age of personal computing.
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
                <li>WebAssembly</li>
                <li>Rust</li>
              </ul>
            </div>
            <div className="retro-box">
              <Globe className="w-12 h-12 mb-4" />
              <h3 className="retro-subtitle mb-4">GLOBAL COMMUNITY</h3>
              <p className="retro-text">
                With members from over 50 countries, our diverse community brings together a wealth of experiences and perspectives.
              </p>
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
                  We believe in the power of community-driven development and make all our projects freely available.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Cpu className="w-6 h-6 mr-2" />
                  RETRO AESTHETICS
                </h3>
                <p className="retro-text mb-4">
                  We celebrate the visual and interactive styles of early computing eras in our projects.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  INNOVATION
                </h3>
                <p className="retro-text mb-4">
                  While we love the past, we&apos;re always pushing the boundaries of what&apos;s possible in software.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  COMMUNITY
                </h3>
                <p className="retro-text mb-4">
                  We foster a welcoming community for developers of all skill levels and backgrounds.
                </p>
              </div>
            </div>
          </div>
          
          <div className="retro-box">
            <h2 className="retro-subtitle mb-4">JOIN THE RETRO REVOLUTION</h2>
            <p className="retro-text mb-4">
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place for you at Red Wood Labs. 
              Join us in creating the future of software with a nostalgic twist!
            </p>
            <div className="flex justify-center">
              <a href="https://github.com/redwoodlabs" target="_blank" rel="noopener noreferrer">
                <button className="retro-button">VISIT OUR GITHUB</button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

