import React from 'react'

export const RetroBinaryBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-5 overflow-hidden">
    <div className="h-[200%] w-[200%] animate-slide">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="whitespace-nowrap text-[2vw] leading-[1.5em] font-mono text-black">
          {Array.from({ length: 200 }).map((_, j) => (
            <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export const RetroGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
    <div className="h-full w-full bg-transparent" 
         style={{
           backgroundImage: `
             linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
           `,
           backgroundSize: '20px 20px'
         }}>
    </div>
  </div>
)

export const RetroCursor = () => (
  <div className="fixed bottom-4 right-4 w-3 h-5 bg-black animate-blink z-20"></div>
)

export const RetroScanlines = () => (
  <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
    <div className="h-full w-full" 
         style={{
           background: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)'
         }}>
    </div>
  </div>
)

