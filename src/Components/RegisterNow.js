import React, { useState } from 'react';
import '../Styles/RegisterNow.css'


export default function RegisterNow(props) {

   
    const [formData, setFormData] = useState({
      fullName: "",
      email: "" 
    })

    const [errors, setErrors] = useState({})

    const handelChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData, [name]: value
      })
    }
  
  
    const handelSumbit = (e) => {
    e.preventDefault()
    const validationErrors = []
    if (!formData.fullName.trim()) {
      validationErrors.fullName = 'username is required'
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'email is not valid'
    }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully")
    }
  }

  const registerationDiv = () => {

  }
  return (
    <div className='topDiv'>
      <div className="registernowtopHeading">
        <h4>Register Now</h4>
        <p style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>Utilize the Becoders Skill Development Programmed to Learn</p>
      </div>

      <form onSubmit={handelSumbit} className='container-fluid row formOuter'>
        <div className="formdiv col-12 col-lg-5 col-md-5 col-xl-5 col-xxl-5">
          <div className="elements">

            <label htmlFor="name" style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>Name</label>
            <input name='fullName' type="text" placeholder='Enter your full name' autoComplete='off' onChange={handelChange}
            />
            {errors.fullName && <span>{errors.fullName}</span>}
          </div>
          <div className="elements">
            <label htmlFor="email" style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>Email</label>
            <input name='email' type="email" placeholder='Enter your Email'
              onChange={handelChange} />

            {errors.email && <span>{errors.email}</span>}
          </div>
            <div className="elements">
            <label htmlFor="address"     style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}} >Permanent Address</label>
            <input name='address' type="text" placeholder='Enter your Address' />
            </div>

          <div className="elements">
            <label htmlFor="name"     style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>Contact Number</label>
            <input name='contactNumber' type="number" placeholder='Enter your Contact number'
            onChange={handelChange} />
          </div>


          <div className="elementsCourse">
            <h6    style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>What path would you like to pursue?</h6>

            <div className='coursediv'>

              <input type="checkbox" />
              <label htmlFor="webDevelopment"   style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>Web Development</label>
            </div>
            <div className='coursediv'>

              <input type="checkbox" />
              <label htmlFor="appDevelopment"  style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>App Development</label>
            </div>
            <div className='coursediv'>

              <input type="checkbox" />
              <label htmlFor="graphicDesign" style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>Graphic Design</label>
            </div>
            <div className='coursediv'>

              <input type="checkbox" />
              <label htmlFor="uiuxDesign" style={{ color: props.mode === 'light' ? '#242424' : '#ffff'}}>UI/UX Design</label>
            </div>

          </div>
          <button className='regestrationBtn' >Submit</button>
        </div>

        <div className="formImage col-12 col-lg-5 col-md-5 col-xl-5 col-xxl-5">

        </div>
      </form>
    </div>


  )
}
