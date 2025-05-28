"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Heart, Sparkles, Cake, PartyPopper } from "lucide-react"

export default function BirthdayCelebration() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [balloons, setBalloons] = useState<Array<{ id: number; color: string; delay: number }>>([])

  useEffect(() => {
    // Generate random balloons
    const balloonColors = ["bg-red-400", "bg-blue-400", "bg-yellow-400", "bg-green-400", "bg-purple-400", "bg-pink-400"]
    const newBalloons = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      delay: Math.random() * 2,
    }))
    setBalloons(newBalloons)
  }, [])

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 overflow-hidden relative">
      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={`absolute w-8 h-10 ${balloon.color} rounded-full opacity-80 animate-bounce`}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: "3s",
          }}
        >
          <div className="w-1 h-8 bg-gray-600 mx-auto"></div>
        </div>
      ))}

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Sparkles Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            size={16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Main Birthday Message */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce drop-shadow-lg">
            🎉 Happy Birthday 🎉
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-6 animate-pulse drop-shadow-lg">MRUNUU</h2>
          <div className="flex justify-center items-center gap-4 text-4xl mb-8">
            <Cake className="text-pink-200 animate-bounce" size={48} />
            <Heart className="text-red-400 animate-pulse" size={48} />
            <Gift className="text-green-400 animate-bounce" size={48} />
          </div>
        </div>

        {/* Birthday Card */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🎂</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Wishing You Joy & Happiness!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              May your special day be filled with wonderful moments, sweet memories, and all the happiness your heart
              can hold. Here's to another amazing year ahead!
            </p>
            <Button
              onClick={triggerConfetti}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200"
            >
              <PartyPopper className="mr-2" size={20} />
              Celebrate! 🎊
            </Button>
          </CardContent>
        </Card>

        {/* Birthday Wishes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="font-bold text-gray-800 mb-2">Make a Wish</h4>
              <p className="text-sm text-gray-600">Blow out the candles and make your dreams come true!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🎈</div>
              <h4 className="font-bold text-gray-800 mb-2">Party Time</h4>
              <p className="text-sm text-gray-600">Let's celebrate this amazing day with joy and laughter!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💝</div>
              <h4 className="font-bold text-gray-800 mb-2">Special Day</h4>
              <p className="text-sm text-gray-600">Today is all about you and the wonderful person you are!</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg font-semibold drop-shadow-lg">🎵 Happy Birthday to You! 🎵</p>
          <p className="text-white/80 mt-2">Hope your day is as special as you are! 💖</p>
        </div>
      </div>
    </div>
  )
}
