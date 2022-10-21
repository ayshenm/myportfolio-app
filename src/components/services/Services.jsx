import React, { useState } from 'react';
import './services.css';


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="service section" id="services">
            <h2 className='section_title'>Services</h2>
            <span className="section_subtitle">What i offer</span>

            <div className="services_container container grid">

                <div className="services_content">
                    <div className='services_multitype'>
                        <i className='bx bx-code services_icon'></i>
                        <h3 className='services_title'>Web Development</h3>
                        <span className="services_button"
                         onClick={() => toggleTab(1)}>View More
                        <i className='services_button-icon bx bxs-right-arrow-alt'></i></span>
                    </div>

                   

                    <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>

                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} 
                            className='bx bxs-message-square-x services_modal-close'>
                            </i>
                            <h3 className='service_modal-title'>Web page development</h3>
                            <p className="sevices_modal-description">Service with more than 1+ years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className='services_modal-services grid'>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">I develop the user interface.
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">Web page development.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">I create ux element interactions.</p>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div className="services_content">
                    <div className='services_multitype'>
                        <i className='bx bxl-sketch services_icon'></i>
                        <h3 className='services_title'>Web Design</h3>
                        <span className="services_button" 
                        onClick={() => toggleTab(2)}>View More
                        <i className='services_button-icon bx bxs-right-arrow-alt'>
                             </i>
                            </span>

                    </div>

                    

                    <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>

                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)}
                            className='bx bxs-message-square-x services_modal-close'>
                            </i>
                            <h3 className='service_modal-title'>Web Design</h3>
                            <p className="sevices_modal-description">Service with more than 1+ years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className='services_modal-services grid'>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">I position your company brand.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info"> I create ux element interactions.</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div className="services_content">
                    <div className='services_multitype'>
                        <i className='bx bx-search services_icon'></i>
                        <h3 className='services_title'>Seo</h3>
                        <span className="services_button"
                         onClick={() => toggleTab(3)}>View More
                        <i className='services_button-icon bx bxs-right-arrow-alt'>
                        </i>
                        </span>
                    </div>

                    <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>

                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} 
                            className='bx bxs-message-square-x services_modal-close'>
                            </i>
                            <h3 className='service_modal-title'>Seo</h3>
                            <p className="sevices_modal-description">Service with more than 1+ years of experience.
                                Providing quality work to clients and companies.</p>

                            <ul className='services_modal-services grid'>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">
                                        I write codes that search engines will support</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">I care about writing clean code</p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='bx bx-check-circle services_modal-icon'></i>
                                    <p className="services_modal-info">
                                        I do forward-looking support</p>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services