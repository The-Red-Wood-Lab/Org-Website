import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <Link href="/about" className="block retro-link">
            ABOUT US
          </Link>
          <a href="mailto:theredwoodlabs@gmail.com" className="block retro-link">
            Contact US
          </a>
          <Link href="/faq" className="block retro-link">
            FAQ
          </Link>
          <a href="https://www.apache.org/licenses/LICENSE-2.0.html" className="block retro-link">
            License
          </a>
        </div>
        <div className="space-y-2">
          <a
            href="https://github.com/The-Red-Wood-Lab"
            target="_blank"
            rel="noopener noreferrer"
            className="block retro-link"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/company/the-red-wood-lab/"
            target="_blank"
            rel="noopener noreferrer"
            className="block retro-link"
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className="mt-8 text-center retro-text">
        © 2025 RED WOOD LABS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
