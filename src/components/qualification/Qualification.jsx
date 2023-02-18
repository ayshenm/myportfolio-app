import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className='section_title'>Qualification</h2>
            <p className="section_subtitle">My personal journey</p>


            <div className="qualification_container container">

                <div className="qualification_tab">
                    <div className={toggleState === 1 ?
                        "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className=' bx bxs-graduation qualification_icon'>Education</i>

                    </div>
                    <div className={toggleState === 2 ?
                        "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className='bx bx-briefcase-alt-2 qualification_icon'>Experience</i>
                    </div>
                </div>

                <div className="qualification_sections">

                    <div className={toggleState === 1 ?
                        "qualification_content qualification_content-active" :
                        "qualification_content"}>

                        <div className="qualification_data">
                            <div>
                                <h3 className='qualification_title'>Computer engineering</h3>
                                <span className="qualification_subtitle">BDRNK</span>
                                <div className="qualification_calendar">
                                    <i className='bx bx-calendar'>2015-2018</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounded"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounded"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className='qualification_title'>Computer engineering</h3>
                                <span className="qualification_subtitle">Sumgait State University</span>
                                <div className="qualification_calendar">
                                    <i className='bx bx-calendar'>2021-Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className='qualification_title'>Help Desk course</h3>
                                <span className="qualification_subtitle">Jalal-I</span>
                                <div className="qualification_calendar">
                                    <i className='bx bx-calendar'>2019</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounded"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounded"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className='qualification_title'>Graphic Design course</h3>
                                <span className="qualification_subtitle">Jalal-I</span>
                                <div className="qualification_calendar">
                                    <i className='bx bx-calendar'>2020</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification_content qualification_content-active" :
                        "qualification_content"}>

                        <div className="qualification_data">
                            <div>
                                <h3 className='qualification_title'>kseroks.az</h3>
                                <span className="qualification_subtitle">Computer operator</span>
                                <div className="qualification_calendar">
                                    <i className='bx bx-calendar'>2019-2020</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounded"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounded"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className='qualification_title'>Tibis</h3>
                                <span className="qualification_subtitle">Frontend web developer</span>
                                <div className="qualification_calendar">
                                    <i className='bx bx-calendar'>2021-Present</i>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Qualification