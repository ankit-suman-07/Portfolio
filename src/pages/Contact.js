import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import "../styles/Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Configure email service credentials
    const serviceId = 'service_thzpw0d';
    const templateId = 'template_xqovgze';
    const userId = '-EysgfTxhwOsUeHnX';

    // Format the email data
    const emailData = {
      to_email: 'ankitsuman07@gmail.com', // Your email address
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    // Send the email
    emailjs.send(serviceId, templateId, emailData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='contact-form' >
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input' >
            <div className='section' >
                <label>Email ID:</label>
                <input type="email" {...register('email', { required: true })} />
                    {errors.email && <span>Email is required.</span>}
            </div>
            <div className='section' >
                <label>Name:</label>
                <input type="text" {...register('name', { required: true })} />
                    {errors.name && <span>Name is required.</span>}
            </div>
            <div className='section' >
                <label>Message:</label>
                <textarea {...register('message', { required: true })} />
                    {errors.message && <span>Message is required.</span>}
            </div>
        </div>
        <button type="submit" className='submit-btn' >Submit</button>
    </form>
    </div>
  );
};

export default Contact;
