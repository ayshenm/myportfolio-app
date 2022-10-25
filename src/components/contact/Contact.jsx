import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
      'service_byhbkbh', 
      'template_nrepzox', 
      form.current,
      'VKXyGbne1zi-25aen'
      )
      e.target.reset()
        
    };
    return (
        <section className="contact section" id="contact">
            <h2 className='section_title'>Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>


            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                        <i className='bx bx-mail-send contact_card-icon'></i>

                            <h3 className="contact_card-title">E-mail</h3>
                            <span className="contact_card-data">ayshen.mirzeyeva.96@inbox.ru</span>

                            <a href="https://mail.ru/" className="contact_button"> Write me
                                <i className='bx bx-right-arrow-alt contact_button-icon'></i></a>
                        </div>

                        <div className="contact_card">
                        <i className='bx bxl-whatsapp contact_card-icon'></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">+994 55 543 49 72</span>

                            <a href="https://web.whatsapp.com/" className="contact_button"> Write me
                                <i className='bx bx-right-arrow-alt contact_button-icon'></i></a>

                        </div>

                        <div className="contact_card">
                        <i className='bx bxl-messenger contact_card-icon'></i>

                            <h3 className="contact_card-title">Messenger</h3>
                            <span className="contact_card-data">Айшен Мирзайева</span>

                            <a href="https://www.facebook.com/melan.xolik.39/" className="contact_button"> Write me
                            <i className='bx bx-right-arrow-alt contact_button-icon'></i>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <div className="contact_form-container">
                            <label className="contact_form-tag">Name</label>
                            <input type="text" name='name'
                                className="contact_form-input"
                                placeholder='Insert your name' />

                        </div>

                        <div className="contact_form-container">
                            <label className="contact_form-tag">E-mail</label>
                            <input type="email" name='email'
                                className="contact_form-input"
                                placeholder='Insert your e-mail' />
                        </div>


                        <div className="contact_form-container contact_form-area">
                            <label className="contact_form-tag">Project</label>
                            <textarea
                                name='project'
                                color='30'
                                rows='10'
                                className="contact_form-input"
                                placeholder='Write your project'>
                            </textarea>
                        </div>
                        <button className='button button--flex'>
                            Send message
                            <i class='bx bx-run contact_card-run'></i>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact