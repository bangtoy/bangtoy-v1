import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { TweenMax, Power3 } from 'gsap';

function App() {
  let app = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  const [state, setState] = useState(false)
  const handleExpand = () => {
    TweenMax.to(circleRed, .8, { width: 200, height: 200, ease: Power3.easeOut })
    setState(true)
  }
  const handleShrink = () => {
    TweenMax.to(circleRed, .8, { width: 75, height: 75, ease: Power3.easeOut })
    setState(false)
  }


  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })
    // TweenMax.from(circle, .8, { opacity: 0, x: 40, ease: Power3.easeOut })
    // TweenMax.from(circleRed, .8, { opacity: 0, x: 40, ease: Power3.easeOut, delay: .2 })
    // TweenMax.from(circleBlue, .8, { opacity: 0, x: 40, ease: Power3.easeOut, delay: .4 })
    //or siplify
    TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, { opacity: 0, x: 40, ease: Power3.easeOut }, .2)
  }, [])
  return (
    <div
      ref={el => app = el}
      className="App">
      <header className="App-header">
        <div className="circle-container">
          <div
            ref={el => circle = el}
            className="circle"></div>
          <div
            onClick={state !== true ? handleExpand : handleShrink}
            ref={el => circleRed = el}
            className="circle red"></div>
          <div
            ref={el => circleBlue = el}
            className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
