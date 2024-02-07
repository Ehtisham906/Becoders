import React from 'react';
import '../Styles/RegisterNow.css'


export default function RegisterNow(props) {
  return (
  
      <div className="registernowtopHeading">
        <h4>Register Now</h4>
        <p>Utilize the Becoders Skill Development Programmed to Learn</p>
      </div>

      <form action="">
        <div className="formdiv">

          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter your full name' />
          <label htmlFor="name">Email</label>
          <input type="text" placeholder='Enter your Email' />
        </div>
      </form>

    
  )
}
