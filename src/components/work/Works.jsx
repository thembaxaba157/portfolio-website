import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import WorkModal from "./WorkModal"; // Import modal

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null); // NEW

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems
            item={item}
            key={item.id}
            onView={() => setSelectedProject(item)} // NEW
          />
        ))}
      </div>

      {selectedProject && (
        <WorkModal
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Works;
