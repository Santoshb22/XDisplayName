import React, { useState } from 'react'
import "./XDisplayname.css"
import FullName from '../FullName/FullName';
const XDisplayname = () => {
    const [showFullName, setShowFullName] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setFormData(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setShowFullName(!showFullName);
    }
  return (
    <div className='display-fullname'>
        <h1>Full Name Display</h1>

        <form onSubmit={handleSubmit}>
            <div className="first-name">
            <label htmlFor="firstName">First Name:</label>
            <input onChange={handleChange} value={formData.firstName} type="text" id='firstName' name='firstName' placeholder='Enter your first name' required/>
            </div>

            <div className="lastname">
                <label htmlFor="lastName">last Name:</label>
                <input  onChange={handleChange} value={formData.lastName} type="text" id='lastName' name = "lastName" placeholder='Enter your last name' required/>
            </div>

            <button type='submit'>Submit</button>
        </form>

        {
            showFullName && <FullName data = {formData}/>
        }
    </div>
  )
}

export default XDisplayname