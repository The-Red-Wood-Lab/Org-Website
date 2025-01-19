import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { RetroBinaryBackground, RetroGrid, RetroCursor } from '@/components/retro-decorations'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <h1 className="retro-title">CONTACT US</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="retro-box">
              <h2 className="retro-subtitle mb-4">GET IN TOUCH</h2>
              <p className="retro-text mb-4">
                Have a question about our projects? Want to contribute? Or just want to chat about retro tech? 
                We&apos;d love to hear from you!
              </p>
              <ul className="retro-text space-y-4">
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>hello@redwoodlabs.org</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+1 (888) RETRO-CODE</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>123 Pixel Street, Retroville, RW 12345</span>
                </li>
              </ul>
            </div>
            <div className="retro-box">
              <h2 className="retro-subtitle mb-4">SEND US A MESSAGE</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block retro-text mb-2">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border-2 border-black retro-box retro-text"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block retro-text mb-2">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border-2 border-black retro-box retro-text"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block retro-text mb-2">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full p-2 border-2 border-black retro-box retro-text"
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="retro-button flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="retro-box">
            <h2 className="retro-subtitle mb-4">CONNECT WITH US</h2>
            <p className="retro-text mb-4">
              Follow us on social media for the latest updates, retro coding tips, and community highlights!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/redwoodlabs" target="_blank" rel="noopener noreferrer" className="retro-button">
                GITHUB
              </a>
              <a href="https://twitter.com/redwoodlabs" target="_blank" rel="noopener noreferrer" className="retro-button">
                TWITTER
              </a>
              <a href="https://discord.gg/redwoodlabs" target="_blank" rel="noopener noreferrer" className="retro-button">
                DISCORD
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

