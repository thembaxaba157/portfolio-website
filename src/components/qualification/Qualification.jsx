import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">Journey</h2>
        <span className="section__subtitle">My Personal Tech Journey</span>
    
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? 
                "qualification__button qualification__active button--flex" :
                "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i>{" "}Education
                </div>

                <div className={toggleState === 2 ? 
                "qualification__button qualification__active button--flex" :
                "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt
                     qualification__icon"></i>{" "}Experience
                </div>
            </div>
            
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active":
                    "qualification__content"}>
                    <div className="qualification__data">
                       <div>
                       <h3 className="qualification__title">Systems Development</h3>
                        <span className="qualification__subtitle">WeThinkCode_</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2022 - 2024
                        </div>
                       </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>


                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                       <h3 className="qualification__title">BSc Computer Science{" (Incomplete)"}</h3>
                        <span className="qualification__subtitle">University of Witwatersrand</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2018 - 2021(3rd year)
                        </div>
                       </div>

                    </div>

                    <div className="qualification__data">
                       <div>
                       <h3 className="qualification__title">National Senior Certificate</h3>
                        <span className="qualification__subtitle">Orlando West High</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2014 - 2017
                        </div>
                       </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                    


                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active":
                    "qualification__content"}>
                    <div className="qualification__data">
                       <div>
                       <h3 className="qualification__title">
                       Jnr Software Engineer Intern</h3>
                        <span className="qualification__subtitle">MyDough</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> Feb 2024
                        </div>
                       </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>


                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                       <div>
                       <h3 className="qualification__title">BootCamp Technical Mentor</h3>
                        <span className="qualification__subtitle">WeThinkCode_</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> Apr 2023 - Aug 2023

                        </div>
                       </div>

                    </div>

                    <div className="qualification__data">
                       <div>
                       <h3 className="qualification__title">BootCamp Project Reviewer</h3>
                        <span className="qualification__subtitle">WeThinkCode_</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> Apr 2023 - Aug 2023
                        </div>
                       </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                    


                </div>

            </div>
        </div>
    
    
    </section>
  )
}

export default Qualification