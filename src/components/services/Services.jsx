import React, { useState } from 'react'
import "./services.css"



const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I offer</span>

    <div className="services__container container grid">
        <div className="services__content">
        <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend <br /> Development</h3>


            <span className="services__button" onClick={() => toggleTab(1)}>
                View More<i
        className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() =>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Frontend <br /> Development</h3>
                <p className="services__modal-description">
                I build beautiful, fast, and user-friendly websites that work on any device.
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Create interactive and engaging web pages with React & JavaScript
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Make websites mobile-friendly and responsive using CSS
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Ensure smooth navigation and fast performance with smart optimizations
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Connect your website to APIs for real-time updates and data fetching
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        📌 This is just a glimpse—contact me to discuss your project!
                        </p>
                    </li>

                </ul>

            </div>
        </div>


        </div>
        
        <div className="services__content">
            <i className="uil uil-setting services__icon"></i>
            <h3 className="services__title">Backend <br /> Development</h3>


            <span className="services__button" onClick={() => toggleTab(2)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>
        
        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
           
            <div className="services__modal-content">
                <i onClick={() =>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Backend <br /> Development</h3>
                <p className="services__modal-description">
                I build the brains behind web apps, ensuring they run smoothly and securely.
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Develop fast & secure servers using Spring Boot3
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Scalable REST API design & development</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Store and manage data using MySQL databases
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Enable real-time features like chat or live updates with WebSockets
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Keep user accounts safe with JWT authentication & security features
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        📌 Need something different? Let’s talk!
                        </p>
                    </li>




                </ul>

            </div>
        </div>


        </div>

        <div className="services__content">
        <i className="uil uil-server services__icon"></i>
            <h3 className="services__title">DevOps & <br /> Deployment</h3>


            <span className="services__button" onClick={() => toggleTab(3)}>
                View More<i
        className="uil uil-arrow-right services__button-icon"></i></span>

    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() =>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">DevOps & <br /> Deployment</h3>
                <p className="services__modal-description">
                I make sure your app is easy to launch, update, and run without issues.
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Package and deploy apps easily using Docker.
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Use Git to manage code and collaborate efficiently</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Set up automated workflows to test and deploy updates seamlessly.
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        Host applications on cloud servers for reliability and scalability
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon">
                        </i>
                        <p className="services__modal-info">
                        📌 Want a hassle-free setup? Let’s chat!
                        </p>
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