'use client';
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';
import Link from 'next/link';
import {
  RetroBinaryBackground,
  RetroGrid,
  RetroCursor,
} from '@/components/retro-decorations';
import { Code, Cpu, Network, Zap, Users } from 'lucide-react';

// Preloader Component
const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Match the fade-in animation timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="image-container">
            <div className="image-top"></div>
            <div className="image-bottom"></div>
          </div>
        </div>
      )}
      <style jsx>{`
        .preloader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column; /* Stack the image parts vertically */
        }

        .image-top,
        .image-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 50%;
          background: url(/redwood.jpeg)
            center/cover no-repeat;
          z-index: 20;
        }

        .image-top {
          top: 0;
          background-position: top center;
          animation: slide-up 2s forwards;
        }

        .image-bottom {
          bottom: 0;
          background-position: bottom center;
          animation: slide-down 2s forwards;
        }

        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes slide-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
};

// Home Component
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Match the preloader duration
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <RetroBinaryBackground />
      <RetroGrid />
      <RetroCursor />
      <NavBar />
      <main className="flex-grow">
        <div className="retro-container">
          <div className="text-center mb-12">
            <h1 className="retro-title text-6xl mb-4">RED WOOD LABS</h1>
            <p className="retro-text text-2xl mb-8">
              CODING THE FUTURE, INSPIRED BY THE PAST
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/projects">
                <button className="retro-button">EXPLORE PROJECTS</button>
              </Link>
              <Link href="/join-us">
                <button className="retro-button">JOIN US</button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="retro-box">
              <h2 className="retro-subtitle mb-4">FEATURED PROJECT</h2>
              <div className="flex items-start mb-4">
                <Code className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-bold mb-2">RETRO CODE EDITOR</h3>
                  <p className="retro-text">
                    Experience the nostalgia of coding on old-school terminals
                    with modern features.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href="/projects/1">
                  <button className="retro-button">VIEW PROJECT</button>
                </Link>
              </div>
            </div>
            <div className="retro-box">
              <h2 className="retro-subtitle mb-4">LATEST NEWS</h2>
              <ul className="retro-text space-y-2 mb-4">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  <span>New Retro UI Kit Released</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Upcoming Hackathon: 8-bit Challenge</span>
                </li>
                <li className="flex items-center">
                  <Cpu className="w-4 h-4 mr-2" />
                  <span>Community Spotlight: CRT Enthusiasts</span>
                </li>
              </ul>
              <div className="flex justify-end">
                <Link href="/news">
                  <button className="retro-button">READ MORE</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="retro-box mb-12">
            <h2 className="retro-subtitle mb-6">WHY RED WOOD LABS?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Zap className="w-16 h-16 mb-4" />
                <h4 className="font-bold mb-2">INNOVATION</h4>
                <p className="retro-text">
                  Pushing boundaries with retro-inspired tech
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Network className="w-16 h-16 mb-4" />
                <h4 className="font-bold mb-2">COMMUNITY</h4>
                <p className="retro-text">
                  A vibrant network of retro-loving devs
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="w-16 h-16 mb-4" />
                <h4 className="font-bold mb-2">OPEN SOURCE</h4>
                <p className="retro-text">All our projects are free and open</p>
              </div>
            </div>
          </div>

          <div className="retro-box">
            <h2 className="retro-subtitle mb-4">JOIN THE RETRO REVOLUTION</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="retro-text mb-4 md:mb-0 md:mr-4 text-center md:text-left">
                Ready to code like it&apos;s 1999? Join our community and start
                contributing today!
              </p>
              <Link href="/join-us">
                <button className="retro-button">GET INVOLVED</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
