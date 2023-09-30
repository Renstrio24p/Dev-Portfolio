import './About.scss'
import React, { useEffect, useState } from 'react'
import AnimationLetters from '../../Animate/Animation'
import Loader from 'react-loaders'

export default function AboutPage() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const AboutMeArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className="container aboutpage">
      <div className="text-zone">
        <h1>
          <AnimationLetters
            letterClass={letterClass}
            strArray={AboutMeArray}
            idx={15}
          />
        </h1>
        <p>
          I'm very passionate Front-End Developer looking for a role in an I.T
          company with having an opportunity to work on with team using the
          latest stacks on challenging and Innovative projects.
        </p>
        <p>
          I'm silently confident, and naturally curious, and learning new
          thingss to improve my design as well of solving the problem at a time.
        </p>
        <p>
          I'm really love in coding with passion to teach and help everyone to
          learn any stack{' '}
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
          <box-icon type="logo" size='lg' name="react" color="#28a4d9" className='font-icons' />

          </div>
          <div className="face2">
            <box-icon type='logo' size='lg' name='sass' color="pink"  className='font-icons' />
          </div>
          <div className="face3">
            <box-icon type='logo' size='lg' name='html5' color="#f06529"  className='font-icons'/>
          </div>
          <div className="face4">
            <box-icon type='logo' size='lg' name='css3' color="#28a4d9"  className='font-icons'/>
          </div>
          <div className="face5">
            <box-icon type='logo' size='lg' name='javascript' color="#efd81d"  className='font-icons'/>
          </div>
          <div className="face6">
            <box-icon type="logo" size='lg' name="typescript" color="#28a4d9" className='font-icons'></box-icon>
          </div>
          <div className="face7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#8ed6fb"
                d="M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"
              />
              <path
                fill="#1c78c0"
                d="M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"
              />
            </svg>
          </div>
          <div className="face8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#8ed6fb"
                d="M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"
              />
              <path
                fill="#1c78c0"
                d="M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"
              />
            </svg>
          </div>
          <div className="face9">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#8ed6fb"
                d="M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"
              />
              <path
                fill="#1c78c0"
                d="M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"
              />
            </svg>
          </div>
          
        </div>
      </div>
    </div>
    <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
