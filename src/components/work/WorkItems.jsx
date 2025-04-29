import React from "react";

const WorkItems = ({ item, onView }) => {
  return (
    <div className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <span onClick={onView} className="work__button">
        View <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
    </div>
  );
};

export default WorkItems;
