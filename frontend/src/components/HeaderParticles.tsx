import { useEffect, useState } from "react"
import Particles from "@tsparticles/react"

import initParticlesEngine from "@tsparticles/react"

import { loadFull } from "tsparticles"
import type { Container, Engine } from "@tsparticles/engine"

export default function HeaderParticles() {
  const [init, setInit] = useState(false)

  // Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <div className="absolute inset-0 w-full h-[60vh] pointer-events-none z-0">
      <Particles
        id="tsparticles-header"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false }, // Restrict it to this container
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // This pushes particles away from the cursor
              },
            },
            modes: {
              repulse: {
                distance: 120,    // How far away they get pushed
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
              },
            },
          },
          particles: {
            color: {
              value: "#d1d5db", // Light grey/clay color matching your design
            },
            move: {
              direction: "right", // Drift across the screen
              enable: true,
              outModes: {
                default: "out",  // Recycle particles when they exit
              },
              random: true,
              speed: { min: 0.5, max: 2 }, // Organic, non-uniform speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              value: 350, // Dense aggregate stream of particles
            },
            opacity: {
              value: { min: 0.6, max: 0.9 },
            },
            shape: {
              type: "circle", // Clay spheres
            },
            size: {
              value: { min: 3, max: 12 }, // Shifting variance, but smaller than your pic
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}