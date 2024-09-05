import React from 'react';

import { Boyce } from './Boyce';



const Contact = () => {
  
  return(
   <Boyce className="">
    <h2 className="common-heading">Feel Free To Contact Us</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7779.9403333651!2d77.64236840517074!3d12.845203397048747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b78585f0b37%3A0xb35bf211cad6f064!2sZudio!5e0!3m2!1sen!2sin!4v1687197130818!5m2!1sen!2sin"
     width="100%" 
     height="280px" 
     style={{border:0}}
     allowFullScreen="" 
     loading="lazy" 
     referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
     <div className="contact-form">
      <form action="https://formspree.io/f/mnqyelgr" method="POST" className="contact-inputs">
        <input type='text' name='username' placeholder='username'
        autoComplete='off' 
        required
      />
      <input type='email' 
       name='Email' 
        placeholder='MailID'
        autoComplete='off' 
        required
      />

      <textarea name='message' cols="30" rows="6"
      autoComplete='off' 
      required>
      </textarea>

      <input type='submit' value="send" />
      </form>
     </div>
    </div>
  </Boyce>
  );
};

export default Contact;