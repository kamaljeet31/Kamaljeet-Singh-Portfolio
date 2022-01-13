import React, { useRef } from 'react'
import Brand from './Brand'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'

const Contact = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_eglrtra',
        'template_0gzbfek',
        formRef.current,
        'user_yhxapZ1HeGYATCn1F21Sl'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <Brand />
      <Navbar />
      <br />

      <div className='container'>
        {/* Contact-Form */}
        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                Contact
                <strong>me</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <img
                  src='../img/meeting.jpeg'
                  alt='contactImg'
                  className='col-12 col-lg-12 col-md-12 col-sm-12  p-0'
                />
              </div>
              <div className='col-lg-6 contact-right '>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className='row '>
                    <div className='form-group col-lg-12 '>
                      <label>Name</label>
                      <input
                        type='text'
                        name='user_name'
                        className='form-control'
                      />
                    </div>
                    <div className='form-group col-lg-12'>
                      <label>Email Address</label>
                      <input
                        type='email'
                        name='user_email'
                        className='form-control'
                      />
                    </div>
                    <div className='form-group col-lg-12'>
                      <label>Subject</label>
                      <input
                        type='text'
                        name='user_subject'
                        className='form-control'
                      />
                    </div>
                    <div className='clearfix'></div>
                    <div className='form-group col-lg-12'>
                      <label>Message</label>
                      <textarea
                        className='form-control'
                        name='message'
                        rows='4'
                      ></textarea>
                    </div>

                    <div className='text-center '>
                      <Button
                        variant='outline-secondary'
                        size='lg'
                        className='form-btn'
                        type='submit'
                        value='send'
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
