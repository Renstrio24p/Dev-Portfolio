import './Animation.scss'
import React from 'react';

const AnimationLetters = ({ letterClass, strArray, idx }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
    )
  }
  
  export default AnimationLetters;