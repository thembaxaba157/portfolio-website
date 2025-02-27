import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">TZxne</h1>

            <ul className="footer__list">

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

            </ul>
            <div className="footer__social">
            <a href="https://instagram.com"
                    className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/themba-xaba-3740a9261/"
                    className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://x.com/"
                className="footer__social-link" target="_blank">
                <i className="bx bxl-twitter"></i>
            </a>

            </div>
            <span className="footer__copy">&#169; Themba Xaba. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer