import React from 'react'
import men from "../images/men.png"
import Trainers from './Trainers'
import Slider from './Slider'
import Programs from './Programs'

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="mainText">
          <h1>Start Your Journey <br /> Today</h1>
          <h2>30% Off On Membership</h2>
          <p>
            Expert guidance and premium facilities dedicated to crushing your fitness goals<br />
           Start your transformation today with personalized workouts built for your success
          </p>
          <button id="start">Let's Start</button>
        </div>

        <img src={men} alt="img" />
      </div>

      <Trainers />
      <Slider />
      <Programs />
    </>
  )
}

export default Main