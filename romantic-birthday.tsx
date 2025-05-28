"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Music, Volume2 } from "lucide-react"

export default function RomanticBirthdayCelebration() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [cakeSlices, setCakeSlices] = useState(0)
  const [showLetter, setShowLetter] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate floating hearts
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setHearts(newHearts)
  }, [])

  const cutCake = () => {
    if (cakeSlices < 8) {
      setCakeSlices((prev) => prev + 1)
      setShowConfetti(true)

      // Play birthday song after first cut
      if (cakeSlices === 0) {
        setIsPlaying(true)
      }

      setTimeout(() => setShowConfetti(false), 2000)
    }
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-300 to-purple-400 overflow-hidden relative">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce opacity-70"
          style={{
            left: `${heart.left}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: "4s",
          }}
        >
          <Heart className="text-red-400 fill-red-400" size={24} />
        </div>
      ))}

      {/* Sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            size={20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 animate-ping ${
                ["bg-pink-400", "bg-purple-400", "bg-yellow-400", "bg-red-400", "bg-blue-400"][i % 5]
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Audio Element */}
      {isPlaying && (
        <audio autoPlay loop>
          <source src="/placeholder-audio.mp3" type="audio/mpeg" />
        </audio>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Music Control */}
        <div className="fixed top-4 right-4 z-20">
          <Button onClick={toggleMusic} className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3">
            {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
          </Button>
        </div>

        {/* Main Birthday Message */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse drop-shadow-lg">
            💖 Happy Birthday 💖
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-6 animate-bounce drop-shadow-lg">MRUNUU</h2>
          <div className="flex justify-center items-center gap-4 text-4xl mb-8">
            <span className="animate-bounce">🌹</span>
            <Heart className="text-red-400 animate-pulse fill-red-400" size={48} />
            <span className="animate-bounce">🌹</span>
          </div>
        </div>

        {/* Interactive Cake */}
        <div className="mb-8">
          <div className="relative">
            {/* Cake Base */}
            <div className="w-64 h-48 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg relative shadow-2xl">
              {/* Cake Layers */}
              <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white to-pink-200 rounded-t-lg"></div>
              <div className="absolute top-12 w-full h-16 bg-gradient-to-b from-pink-200 to-pink-300"></div>
              <div className="absolute top-24 w-full h-16 bg-gradient-to-b from-pink-300 to-pink-400"></div>

              {/* Decorative Elements */}
              <div className="absolute top-2 left-4 text-2xl">🌹</div>
              <div className="absolute top-2 right-4 text-2xl">🌹</div>
              <div className="absolute top-20 left-8 text-xl">💖</div>
              <div className="absolute top-20 right-8 text-xl">💖</div>

              {/* Candles */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-6 bg-red-400 rounded"></div>
                  </div>
                ))}
              </div>

              {/* Cake Slices */}
              {Array.from({ length: cakeSlices }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 w-8 h-full bg-gradient-to-b from-yellow-200 to-yellow-300 opacity-80"
                  style={{
                    left: `${i * 32}px`,
                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                    transform: `translateY(${i * 2}px) rotate(${i * 2}deg)`,
                  }}
                ></div>
              ))}
            </div>

            {/* Cut Cake Button */}
            <div className="text-center mt-4">
              <Button
                onClick={cutCake}
                disabled={cakeSlices >= 8}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                {cakeSlices >= 8 ? "🎂 Cake Finished!" : "🔪 Cut the Cake!"}
              </Button>
              <p className="text-white mt-2 text-sm">Slices cut: {cakeSlices}/8</p>
            </div>
          </div>
        </div>

        {/* Letter Button */}
        <Button
          onClick={() => setShowLetter(!showLetter)}
          className="mb-6 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full"
        >
          💌 {showLetter ? "Hide" : "Read"} Love Letter
        </Button>

        {/* Love Letter */}
        {showLetter && (
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-2xl w-full mb-8 border-2 border-pink-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-pink-600 mb-2">💕 For My Dearest Mrunuu 💕</h3>
                <div className="flex justify-center gap-2 text-2xl">
                  <span>🌹</span>
                  <Heart className="text-red-500 fill-red-500" size={24} />
                  <span>🌹</span>
                </div>
              </div>

              <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
                <p>
                  Tuzya jevdya wish hatt tevdya purnn hovde....ashichh hasatt khelat rhaa saglee time Anii n thanks
                  babyyyy saglya sathiiii jeva pasun tuu maze life madhe alis n sagla bharii mastt ekdam bhari chalai r
                  😌❤️
                </p>

                <p>
                  te boltan bhg ka jeva life madhe por yett teva manus badalt tee khara hyy r mi paila yeryan sarka hota
                  kasa pn careless lo rhavachuu pn tuu alis teva pasun jaraa neatt rhavtt😅
                </p>

                <p>
                  Tuchhh has r ji itki mazi kaljii gheee chinta kartt 🥹❤️...tuuu jitka kartas n maze sathi titka hali
                  kon nyy konches sathi nyy kartt r 😌❤️
                </p>

                <p>Kharajj r mii itkaa lucky hyy n mala tuu bhetlis kyy sanguuu jammm mhnje jammmm lucky hyy mii😌💗</p>

                <p>
                  Mi tula jamm irritat kartt n🥲😅...tari tuu kyy bolas nhy r gpp aiktas🥹❤️ Kiti mi tujav nistas pisltt
                  tarii tuu kyy bolas nyy r chup chap aikun ghett😅❤️
                </p>

                <p>
                  Kharajj r tuze tuu jitkaa mala samjhun ghetas kon nyyy ghetttt r 😌❤️ chat madhech tula samjt r maza
                  mood neat hy ka kharab hyy itka kon ny r samjun ghe titki tu ghetas🥹💗
                </p>

                <p>
                  tari babyyy tula mi jamm mhnje jam hurt karrtt n Sorryyyyyyy babyyy 🥺…itka tula hurt kartt mi tari tu
                  ky ny bolas r 🙂…
                </p>

                <p className="text-center font-semibold text-pink-600">
                  babyyy ashich sobatt rhaa ajun jamm birthday karach hat tuz sobat …mi t devala boloi jevde vela maza
                  janm hoil mala tuch bayko mhnun dee😌🩵…
                </p>

                <p className="text-center font-bold text-purple-600 text-lg">
                  babyyyy thanks r kharaj thanks saglyaa sathiii ….ashich hasat kheltt rhaa ❤️❤️…. babyyyyyyy loveeeeeeee
                  youuuuuu soooo muchhhhh💗💗💗💗💗🤗🤗🤗🤗🤗🤗
                </p>
              </div>

              <div className="text-center mt-6">
                <div className="flex justify-center gap-2 text-3xl">
                  <span>💖</span>
                  <span>🌹</span>
                  <span>💖</span>
                  <span>🌹</span>
                  <span>💖</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Birthday Wishes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🌹</div>
              <h4 className="font-bold text-pink-600 mb-2">Forever Love</h4>
              <p className="text-sm text-gray-600">May our love grow stronger with each passing year!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💖</div>
              <h4 className="font-bold text-purple-600 mb-2">Sweet Memories</h4>
              <p className="text-sm text-gray-600">Creating beautiful moments together, today and always!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-rose-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🎂</div>
              <h4 className="font-bold text-rose-600 mb-2">Special Day</h4>
              <p className="text-sm text-gray-600">Today is all about celebrating you, my love!</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-white text-xl font-bold drop-shadow-lg">🎵 Happy Birthday My Love! 🎵</p>
          <p className="text-white/90 mt-2 text-lg">You make every day feel like a celebration! 💕</p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span>💖</span>
            <span>🌹</span>
            <span>💖</span>
            <span>🌹</span>
            <span>💖</span>
          </div>
        </div>
      </div>
    </div>
  )
}
