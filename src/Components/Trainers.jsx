import React from 'react'
import train1 from "../images/train1.png"
import train2 from "../images/train2.png"
import train3 from "../images/train3.png"

const Trainers = () => {
  return (
    <>
      <div className="crd" id="trainer">
        <div className="head">
          <h1>Train With <span>Top Trainer</span></h1>
        </div>

        <div className="train">
          <div className="card">
            <img src={train1} alt="" />
            <div className="trainText">
              <h2>Learn From the Best</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, eum voluptatum.
              </p>
              <a href="https://www.youtube.com/watch?v=fvFQU6NvJo8">
                Click & Learn
              </a>
            </div>
          </div>

          <div className="card">
            <img src={train2} alt="" />
            <div className="trainText">
              <h2>Learn From the Best</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, eum voluptatum.
              </p>
              <a href="https://www.youtube.com/watch?v=MLQecekYMkQ">
                Click & Learn
              </a>
            </div>
          </div>

          <div className="card">
            <img src={train3} alt="" />
            <div className="trainText">
              <h2>Learn From the Best</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, eum voluptatum.
              </p>
              <a href="https://www.youtube.com/watch?v=9X-4dGjcIcQ">
                Click & Learn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trainers