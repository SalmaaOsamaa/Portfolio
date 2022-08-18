import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
  return (
    <AnimatedCursor
    innerSize={30}
    outerSize={20}
    color='193, 173, 245 '
      outerAlpha={0.4}
      innerScale={0.9}
      outerScale={5}
    />

  )
}

export default AnimCursor