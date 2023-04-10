import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const { id, logo, title, name, type, location, salary, work } = feature;
  return (
    <div className="card w-full mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <img className="w-28 mb-7" src={logo} alt="company logo" />
        <h2 className="card-title">{title}</h2>
        <p>{name}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{type}</div>
          <div className="badge badge-outline">{work}</div>
        </div>
        <div className="card-actions justify-start">
          <div>{location}</div>
          <div>{salary}</div>
        </div>
        <div>
          <Link to={`details/${id}`}>
            <button className="btn bg-violet-500">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
