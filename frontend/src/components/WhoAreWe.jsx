import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { data } from '../restApi.json'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const WhoAreWe = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const gradientRef = useRef(null)
  const [counters, setCounters] = useState({
    0: 0, // Restaurants
    1: 0, // Chef In Kitchen
    2: 0, // Years Of Experience
    3: 0  // Food Dishes
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Counter animation function
  const animateCounter = (start, end, duration, callback) => {
    const startTime = performance.now()
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.round(start + (end - start) * easeOut)
      
      callback(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }
    
    requestAnimationFrame(updateCounter)
  }

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const gradient = gradientRef.current

    if (!section || !image || !gradient) return

    // GSAP animations for the food image
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Animate gradient background
    tl.fromTo(gradient, 
      { 
        scale: 0.8, 
        opacity: 0,
        rotation: -10
      }, 
      { 
        scale: 1, 
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out"
      }
    )

    // Animate food image
    tl.fromTo(image, 
      { 
        scale: 0.7, 
        opacity: 0,
        y: 50,
        rotation: 5
      }, 
      { 
        scale: 1, 
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, 
      "-=1"
    )

    // Add floating animation to the food image
    gsap.to(image, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    })

    // Counter animation trigger
    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true)
          
          // Get target numbers from data
          const targets = data[0].who_we_are.map(item => parseInt(item.number))
          
          // Animate each counter
          targets.forEach((target, index) => {
            animateCounter(0, target, 2000 + (index * 200), (value) => {
              setCounters(prev => ({
                ...prev,
                [index]: value
              }))
            })
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [hasAnimated])

  return (
    <>
      <section className='who_are_we' id='who_are_we' ref={sectionRef}>
        <div className="container">
          <div className="text_banner">
            {
              data[0].who_we_are.slice(0,2).map((element, index) => (
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>
                    {counters[index]}
                  </h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img 
              ref={gradientRef}
              className='gradient_bg' 
              src="center.svg" 
              alt="gradientBg" 
            />
            <img 
              ref={imageRef}
              src="whoweare.png" 
              alt="food" 
            />
          </div>
          <div className="text_banner">
            {
              data[0].who_we_are.slice(2).map((element, index) => (
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>
                    {counters[index + 2]}
                  </h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section> 
    </>
  )
}

export default WhoAreWe