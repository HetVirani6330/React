import React, { useState } from 'react'

export default function ArrForm() {
  const [arrForm, setArrForm] = useState([])
  const [checkbox, setCheckbox] = useState(false)
  const [radio, setRadio] = useState("")
  const handelForm = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value

    const obj = {
      name, email, checkbox,radio
    }

    setArrForm([...arrForm,obj])
    console.log(arrForm);

    e.target.reset()
    setCheckbox(false)
    setRadio("")
  }

  const handelCheck = () => {
    setCheckbox(!checkbox)
  }

  const handelRadio=(e)=>{
    setRadio(e.target.value)
  }


  return (
    <>
      <form onSubmit={handelForm}>
        <input type="text" placeholder='Enter Name' name='name' />
        <br /><br />
        <input type="email" placeholder='Enter Email' name='email' />
        <br /><br />
        <input type="checkbox"
          checked={checkbox}
          id='check'
          onChange={handelCheck}
        />
        <label htmlFor="check">Chaeck me !</label>
        <br /><br />
        <input
          type="radio"
          name="gender"
          id='Male'
          value="Male"
          checked={radio === "Male"}
          onChange={handelRadio}
        />
        <label htmlFor="Male">Male</label>
        <input
          type="radio"
          name="gender"
          id='Female'
          value="Female"
          checked={radio === "Female"}
          onChange={handelRadio}
        />
        <label htmlFor="Female">Female</label>
        <br /><br />

        <button type='submit'>
          Sumbit
        </button>
      </form>

      {
        arrForm.map((i,index)=>(
          <div key={index}>
            <p>name : {i.name}</p>
            <p>Email : {i.email}</p>
            <p>Checkbox : {i.checkbox ?"checked" : "Unchecked"}</p>
            <p>Gender : {i.radio}</p>
            <hr />

          </div>
        ))
      }
    </>
  )
}
