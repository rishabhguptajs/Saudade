import { useEffect, useRef } from "react"
import vanillaTilt from "vanilla-tilt"
import "./HeroCard.css"

const Hero3DCard = () => {
  const tiltRef = useRef()

  useEffect(() => {
    vanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 500,
      glare: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 2000,
      "max-glare": 0.3,
      transition: true,
    })
  }, [])

  return (
    <div
      ref={tiltRef}
      className="hero-3d-card data-tilt data-tilt-full-page-listening"
    >
      <h1 className="h1_tilt">
        <span className="h1_tilt-delayed">Delayed?</span>
        <span className="h1_tilt-done">&nbsp; Done :)</span>
      </h1>
      <div className="container">
        
      </div>
    </div>
  )
}

export default Hero3DCard
