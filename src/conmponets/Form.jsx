import React, { useState } from 'react'
import '../App.css';

function Form() {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [check, setCheck] = useState(false)
  const [radio, setRadio] = useState("")

  const FormSubmit = (e) => {
    e.preventDefault()
    console.log(name, age, check, radio)
    setName("")
    setAge("")
    setCheck(false)
    setRadio("")
  }

  return (
    <>
      <form onSubmit={FormSubmit}>
        <input
          type="text"
          placeholder=' Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <input
          type="number"
          placeholder=' Enter Age'
          value={age} onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />
        <input
          type="checkbox"
          checked={check}
          id='check'
          onChange={(e) => setCheck(e.target.checked)}
        />
        <label htmlFor="check">Chaeck me !</label>
        <br /><br />
        <input
          type="radio"
          name="gender"
          id='Male'
          value="Male"
          checked={radio === "Male"}
          onChange={(e) => setRadio(e.target.value)}
        />
        <label htmlFor="Male">Male</label>
        <input
          type="radio"
          name="gender"
          id='Female'
          value="Female"
          checked={radio === "Female"}
          onChange={(e) => setRadio(e.target.value)}
        />
        <label htmlFor="Female">Female</label>
        <br /><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form
