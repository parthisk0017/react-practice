import React, { useRef } from 'react'

const About = () => {

    let vdo = useRef()

    let playvdo =()=>{
        vdo.current.play()
    }
    let pausevdo =()=>{
        vdo.current.pause()
    }
  return (
    <div className='about'>

        <div className="left">
            <h1>Video play and pause</h1>
        </div>
        
        <div className="right">
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={vdo}></video>
                <div className="buttons">
                    <button onClick={playvdo}>play</button>
                    <button onClick={pausevdo}>pause</button>
                </div>
        </div>
        
    </div>
  )
}

export default About