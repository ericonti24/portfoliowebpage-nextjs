'use client'

import {useState} from 'react'
import { KEYBOARDS } from '../api/data/images/keyboards/keyboardData'
import '../styles.css'

const AboutPage = () => {

  // const image = '/_next/static/media/tiger-lite.0c2f20cc.jpg'

  const [keyboards, setKeyboards] = useState(KEYBOARDS)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
      <div className='about-container'>
        {/* <h1>About</h1> */}
        <h2>One thing I love to do is to build mechanical keyboards. Here are some that I have built, and more to come. Hover over them to see more info.</h2>
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
            <img src={keyboard.image} alt={'Keyboard Image${keyboard.id}'} style={{}}/>
            
          </div>
          <div 
            className={`back-card ${hoveredIndex === index ? 'hover' : ''}`}
            style={{transform: hoveredIndex === index ? "rotateY(0deg)" : "rotateY(180deg)"}}
          >
          {/* <h1 id='keyboard-key'>Keyboard Name: </h1>
          <p id='keyboard-value'>{keyboard.keyboardName}</p> */}
          Keyboard Name: {keyboard.keyboardName}
          <br/><br/>
          Keycaps: {keyboard.keycaps}
          <br/><br/>
          Switches: {keyboard.switches}
          <br/><br/>
          Lubed Switches: {keyboard.lubedSwitches}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutPage
