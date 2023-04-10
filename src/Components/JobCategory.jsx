import React from "react";

const JobCategory = ({ category }) => {
  const { icon, title, subtitle } = category;
  return (
    <div className="card mb-10 ">
      <img className="w-12 self-center rounded-full" src={icon} />

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
