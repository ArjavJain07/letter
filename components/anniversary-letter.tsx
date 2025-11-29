"use client"

import { useState, useEffect } from "react"
import { AnimatedHeart } from "./animated-heart"

export function AnniversaryLetter() {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    setTextVisible(true)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      
      <div className="relative z-10">

        {/* Page 1: Title and Heart */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-16 opacity-0 animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">23 Months</h1>
              <p className="text-2xl text-muted-foreground">of Endless Love</p>
            </div>

            <div className="flex justify-center mb-16 opacity-0 animate-flip-in" style={{ animationDelay: "0.6s" }}>
              <div className="animate-bounce-subtle">
                <AnimatedHeart />
              </div>
            </div>

            <div className="text-center opacity-0 animate-slide-up" style={{ animationDelay: "1s" }}>
              <p className="text-muted-foreground text-lg">A love letter written in your heart</p>
              <div className="flex justify-center gap-2 mt-8">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-subtle"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-subtle"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-subtle"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: Love Letter - Part 1 */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full">
            <div
              className="bg-white dark:bg-slate-800 rounded-xl p-8 md:p-12 shadow-2xl border-2 border-rose-100 dark:border-rose-900 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Letter header with decorative line */}
              <div className="mb-8 pb-6 border-b-2 border-dashed border-rose-200 dark:border-rose-800">
                <p className="text-sm font-semibold text-primary tracking-widest">A LOVE LETTER</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 animate-pulse-glow">My Dearest,</h2>
              </div>

              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  23 months. It sounds like a long time, but still it feels like yesterday when we first met.
                  Every single day with you has been a precious gift from god that I cherish more than words could ever express.
                </p>

                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  From the first moment I saw your smile to right now, as I write this letter to you, every memory we've
                  created together has made my life more beautiful. You've brought light into my
                  life which I didn't even know existed.
                </p>

                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "1s" }}
                >
                  The way you laugh at my lallu & dumb jokes, how you hold my hand, how you give me hickeys 🤭🤭
                  , the little things you do that make me feel loved every single day - these moments are the true wealth of my life.
                </p>
              </div>

              <div
                className="flex justify-center gap-2 mt-8 opacity-0 animate-slide-up"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="text-primary animate-shimmer">✦</div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3: Love Letter - Part 2 */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full">
            <div
              className="bg-white dark:bg-slate-800 rounded-xl p-8 md:p-12 shadow-2xl border-2 border-rose-100 dark:border-rose-900 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  You're not just my partner... you're my best friend, my safe place, and my greatest companion. Every
                  morning I wake up, I'm reminded of how lucky I am.
                </p>

                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  In a world with infinite choices, you chose me, and I promise to choose you every single day for the
                  rest of my life. That's not just a promise that's my greatest commitment and my deepest desire.
                </p>

                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "1s" }}
                >
                  Thank you for being exactly who you are beautiful, caring, loving, kind, and infinitely patient with me. 
                  Thank you for loving me when I didn't love myself. Thank you for staying, for believing in us, and for 
                  making every day feel like a heaven. Yk what you are the bestesttttt my baby and so much wowwwww umahhhh 😘😘
                </p>

                <p
                  className="text-lg leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-slide-up"
                  style={{ animationDelay: "1.2s" }}
                >
                  Happy 23 Months Meri Jaan and aur bhi abhi bohot saari anniversaries we will celebrate together my babyyyy 🧿🧿😘💕💐.
                  I love you moreeeeeee than anything mere bacche, and
                  I just can't wait to see what plans destiny has for us. Mujhe bs yk puri life aapke saath
                  hi rehna hai bs aur kuch bhi nhi. I LOVE YOUUUUUUU MERE BACCHE 💗🫂🧿🎀😘
                </p>
              </div>

              <div
                className="flex justify-center gap-2 mt-8 opacity-0 animate-slide-up"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="text-primary animate-shimmer">✦</div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: Signature */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full">
            <div
              className="bg-white dark:bg-slate-800 rounded-xl p-8 md:p-12 shadow-2xl border-2 border-rose-100 dark:border-rose-900 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="space-y-8 text-center">
                <p
                  className="text-2xl md:text-3xl leading-relaxed text-foreground dark:text-slate-100 opacity-0 animate-fade-in-down"
                  style={{ animationDelay: "0.6s" }}
                >
                  Forever yours,
                </p>

                <p
                  className="text-xl md:text-2xl font-bold text-primary opacity-0 animate-slide-up"
                  style={{ animationDelay: "1.4s" }}
                >
                  Your Bandaru 🐵
                </p>

                <div
                  className="flex justify-center gap-4 mt-12 opacity-0 animate-slide-up"
                  style={{ animationDelay: "1.6s" }}
                >
                  <div className="text-4xl animate-bounce-subtle" style={{ animationDelay: "0s" }}>
                    💕
                  </div>
                  <div className="text-4xl animate-bounce-subtle" style={{ animationDelay: "0.2s" }}>
                    💕
                  </div>
                  <div className="text-4xl animate-bounce-subtle" style={{ animationDelay: "0.4s" }}>
                    💕
                  </div>
                </div>
              </div>
            </div>

            {/* Final decoration */}
            <div
              className="flex justify-center gap-8 mt-16 opacity-0 animate-slide-up"
              style={{ animationDelay: "1.8s" }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
              <div className="text-2xl text-primary animate-shimmer">✨</div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
