import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoTitle, Signature, WarenDevImg } from '../Image/Image'
import './Home.scss'
import AnimationLetters from '../../Animate/Animation'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'

export default function HomePage() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['W', 'a', 'r', 'e', 'n']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.',]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
    <div className="container homepage">
      <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
           <br /> 
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _12`}>'m,</span>
          <img src={LogoTitle} alt="developer" />
          <AnimationLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimationLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / Typescript Expert / Template Maker Webpack</h2>
        <Link to="/contact" className="flat-button">
          REACH ME
        </Link>
      </div>
        <img src={Signature} alt="my signature" className='signature' />
        <Logo />
      <img className="profile" src={WarenDevImg} alt="My Profile Image" />
    </div>
    <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}
