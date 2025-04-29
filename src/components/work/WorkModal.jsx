import React from "react";
import "./workmodal.css";

const WorkModal = ({ project, closeModal }) => {
  return (
    <div className="services__modal active-modal">
      <div className="services__modal-content">
        <i
          onClick={closeModal}
          className="uil uil-times services__modal-close"
        ></i>

        <h3 className="services__modal-title">{project.title}</h3>
        <img src={project.image} alt={project.title} className="work-modal__img" />
        <p className="services__modal-description">{project.description}</p>
        <h4 className="modal__tech-title">Technologies:</h4>
        <ul className="modal__tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index} className="modal__tech-item">
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.repo}
          className="button button--flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default WorkModal;
