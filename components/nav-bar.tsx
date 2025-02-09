"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Red Wood Labs"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="retro-link">
            HOME
          </Link>
          <Link href="/projects" className="retro-link">
            PROJECTS
          </Link>
          <Link href="/about" className="retro-link">
            ABOUT
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="retro-link focus:outline-none"
            >
              ACTIVITIES
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-black text-white py-2 w-40 rounded shadow-lg">
                <Link
                  href="/ideas"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={handleLinkClick}
                >
                  GSoc 2025
                </Link>
              </div>
            )}
          </div>
          <Link href="/join-us" className="retro-link">
            JOIN US
          </Link>
        </div>
      </div>
    </nav>
  );
}
