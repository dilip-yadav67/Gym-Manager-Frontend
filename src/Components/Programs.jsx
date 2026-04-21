import React from 'react'
import pro1 from "../images/pro1.png"
import pro2 from "../images/pro2.png"
import pro3 from "../images/pro3.png"

const Programs = () => {
  return (
    <>
      <div className="pro" id="program">
        <div className="head">
          <h1>Our <span>Programs</span></h1>
        </div>

        <div className="program">
          <div className="proCard">
            <img src={pro1} alt="" />
            <h2>Dance</h2>
          </div>

          <div className="proCard">
            <img src={pro2} alt="" />
            <h2>Cardio</h2>
          </div>

          <div className="proCard">
            <img src={pro3} alt="" />
            <h2>Heavy Workout</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Programs