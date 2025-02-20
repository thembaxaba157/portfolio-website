import 'boxicons/css/boxicons.min.css';
import React from 'react';
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      
      <div className={styles.menu}>
      <i className="bx bx-menu" style={{ fontSize: "30px" }}></i>
        <ul className={styles.menuItems}>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
