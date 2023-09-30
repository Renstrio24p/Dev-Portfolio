import './Contact.scss'
import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimationLetters from '../../Animate/Animation'
import emailjs from 'emailjs-com'
import MapGL from './Map/Map'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
  const form = useRef()
  const emailJstoken = process.env.REACT_APP_EMAILJS_TOKEN
  const emailJsService = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const emailJsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault() // Prevent the default form submission
    setIsLoading(true)

    emailjs
      .sendForm(emailJsService, emailJsTemplate, form.current, emailJstoken)
      .then(
        (response) => {
          console.log('EmailJS Success:', response)
          setIsLoading(false)
          setIsSuccess(true)
        },
        (error) => {
          console.error('EmailJS Error:', error)
          setIsLoading(false)
          setIsError(true)
        }
      )
  }

  return (
    <>
      <div className="container contactpage">
        <div className="text-zone">
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in freelance opportunities to learn everything from
            basic to large schematic projects. If you have any questions, don't
            hesitate to contact me by filling out the form below.
          </p>
          <div className="contact-form">
            {isSuccess ? (
              <p>Message successfully sent!</p>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value="SEND"
                      disabled={isLoading}
                    />
                  </li>
                </ul>
              </form>
            )}
          </div>
          <MapGL />
        </div>
      </div>
      {isLoading && <Loader type="ball-clip-rotate-multiple" />}
      {isError && <p>Failed to send the message, please try again</p>}
    </>
  )
}
