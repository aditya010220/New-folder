"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function CosmicParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="cosmic-particles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#ffffff", "#c084fc", "#e879f9", "#8b5cf6", "#d8b4fe"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            random: true,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 0.5, max: 3 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 150,
              size: 4,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
