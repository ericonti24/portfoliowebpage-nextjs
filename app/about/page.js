'use client'

import {useState} from 'react'
import { KEYBOARDS } from '../api/data/images/keyboards/keyboardData'
import '../styles.css'

const AboutPage = () => {

  const [keyboards, setKeyboards] = useState(KEYBOARDS)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <>
    <div className='experience-about'>
      <p>
        Working in IT for over 5 years. In between those years went to school for software engineering.
        After schooling I was continuing to build and improve personal projects, as well as to continue to learn different programming languages, frameworks and tools.
      </p>
      <div class="list-container">
        <p>Programming languages, frameworks, and tools studied:</p>
        <ul>
          <li>Languages: Javascript, Ruby</li>
          <li>Frameworks: React, Next.js, jQuery, Rails</li>
          <li>Tools: Postman, Github</li>
        </ul>
      </div>
    </div>
    <div className='other-container'><p>Other hobbies:</p></div>
    <div className='keyboard-heading'>
      <p>
      One thing I also love to do is to build mechanical keyboards. 
      Here are some that I have built, and more to come. 
      Hover over them to see more info.
      </p>
    </div>
    <div className='about-keyboard-container'>
      {keyboards.map((keyboard, index) => (
        <div 
          className='card-container'
          key={keyboard.id}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`front-card ${hoveredIndex === index ? 'hover' : ''}`}
            style={{transform: hoveredIndex === index ? "rotateY(-180deg)" : "rotateY(0deg)"}}
          >
            <img src={keyboard.image} alt={'Keyboard Image'} style={{}}/>
            
          </div>
          <div 
            className={`back-card ${hoveredIndex === index ? 'hover' : ''}`}
            style={{transform: hoveredIndex === index ? "rotateY(0deg)" : "rotateY(180deg)"}}
          >
          KEYBOARD NAME: {keyboard.keyboardName}
          <br/><br/>
          KEYCAPS: {keyboard.keycaps}
          <br/><br/>
          SWITCHES: {keyboard.switches}
          <br/><br/>
          LUBED SWITCHES: {keyboard.lubedSwitches}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default AboutPage
