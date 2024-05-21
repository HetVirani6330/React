// import React, { useState } from 'react'

// function ObjForm() {
//     const [obj, setObj] = useState({
//         name: 'het',
//         age: "17"
//     })

//     const Cheng = () => {
//         setObj({ ...obj, name: "raj" })
//     }
//     return (
//         <>
//             <h1>Obj Form UseState</h1>
//             <h2>{obj.name}</h2>
//             <h2>{obj.age}</h2>
//             <button onClick={Cheng}>sumbit</button>
//         </>
//     )
// }

// export default ObjForm

import React from 'react'

function ObjForm() {
    const [obj, setObj] = React.useState({
        name: "",
        age: "",
        address: "",
    })

    const formChange = (e) => {
        const { name, value } = e.target
        setObj({ ...obj, [name]: value })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        console.log(obj)
        setObj({
            name: "",
            age: "",
            address: ""
        })
    }
    return (
        <>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder='Enter Name' name='name' value={obj.name} onChange={formChange} />
                <input type="number" placeholder='Enter age' name='age' value={obj.age} onChange={formChange} />
                <input type="text" placeholder='Enter address' name='address' value={obj.address} onChange={formChange} />
                <button>Sumbit</button>

            </form>
        </>
    )
}

export default ObjForm
