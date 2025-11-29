"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "23 Months of Love",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;

    const tryPlay = () => {
      audio
        .play()
        .then(() => fadeVolume(audio, 1, 1000))
        .catch(() => {});
    };

    tryPlay();

    const clickAttempt = () => {
      tryPlay();
      window.removeEventListener("click", clickAttempt);
    };

    window.addEventListener("click", clickAttempt);
  }, []);

  const fadeVolume = (audio: HTMLAudioElement, target: number, duration: number) => {
    const step = (target - audio.volume) / (duration / 50);
    const interval = setInterval(() => {
      audio.volume = Math.min(1, Math.max(0, audio.volume + step));
      if ((step > 0 && audio.volume >= target) || (step < 0 && audio.volume <= target)) {
        clearInterval(interval);
      }
    }, 50);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeVolume(audio, 0, 500);
      setTimeout(() => audio.pause(), 500);
    } else {
      audio.play();
      fadeVolume(audio, 1, 500);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <audio ref={audioRef} src="/music.mp3" autoPlay loop />

        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center text-3xl
                     bg-pink-400 hover:bg-pink-500 active:bg-pink-600 transition-all
                     shadow-[0_0_20px_rgba(255,105,180,0.7)]
                     animate-[pulseGlow_2s_ease-in-out_infinite]"
          style={{
            color: "white",
            border: "3px solid rgba(255,182,193,0.8)",
            animation: "pulseGlow 2s infinite",
          }}
        >
          {isPlaying ? "💖" : "💗"}
        </button>

        <style jsx global>{`
          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(255, 105, 180, 0.6), 0 0 40px rgba(255, 182, 193, 0.6);
            }
            50% {
              transform: scale(1.1);
              box-shadow: 0 0 30px rgba(255, 105, 180, 0.9), 0 0 50px rgba(255, 182, 193, 0.9);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(255, 105, 180, 0.6), 0 0 40px rgba(255, 182, 193, 0.6);
            }
          }
        `}</style>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
