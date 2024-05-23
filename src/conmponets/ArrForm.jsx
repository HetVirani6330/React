import React, { useState } from 'react'

export default function ArrForm() {
    const [arrForm,setArrForm] = useState([])
    const handelForm =(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        
        const obj ={
            name:name,
            email:email,
        }

        setArrForm([...arrForm,obj])
        console.log(arrForm);
        e.target.reset()
    }

  return (
    <>
      <form onSubmit={handelForm}>
        <input type="text" placeholder='Enter Name' name='name' />
        <br /><br />
        <input type="email" placeholder='Enter Email' name='email' />
        <br /><br />
        <button type='submit   '>
            Sumbit
        </button>
      </form>
    </>
  )
}
