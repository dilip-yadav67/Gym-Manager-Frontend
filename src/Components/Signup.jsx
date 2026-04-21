import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [store, setStore] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  })

  const navigate = useNavigate()

  const handleInput = (event) => {
    const { name, value } = event.target

    setStore({
      ...store,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const send = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(store)
    })

    const jsonData = await send.json()

    event.target.reset()   // ✅ clean reset

    if (send.status === 200) {
      alert(jsonData.message)
      // navigate("/")
    } else {
      alert(jsonData.message)
    }
  }

  return (
    <>
      <h1 className="connect">Connect With Us</h1>

      <form onSubmit={handleSubmit} className="join">
        <h2>Sign Up</h2>

        <input type="text" placeholder="Username" required name="name" onChange={handleInput} /><br />

        <input type="email" placeholder="Email" required name="email" onChange={handleInput} /><br />

        <input type="password" placeholder="Password" required name="password" onChange={handleInput} /><br />

        <input type="number" placeholder="Number" required name="phone" onChange={handleInput} /><br />

        <button id="join">Sign Up</button>
      </form>
    </>
  )
}

export default Signup