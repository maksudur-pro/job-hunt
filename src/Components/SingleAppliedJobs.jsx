import React from "react";
import { Link } from "react-router-dom";

const SingleAppliedJobs = ({ ap }) => {
  const { id, logo, title, name, type, location, salary, work } = ap;
  return (
    <div>
      <div className="border bg-slate-100 m-2 rounded p-4 container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex">
              <img
                className="w-36 me-5 rounded-lg shadow-xl"
                src={logo}
                alt=""
              />
            </div>
            <div>
              <p>{title}</p>
              <div>
                <button className="mr-3">{type}</button>
                <button>{work}</button>
              </div>
              <div className="flex">
                <p>{location}</p>
              </div>
              <p>{salary}</p>
            </div>
          </div>
          <Link to={`/details/${id}`}>
            <button className="p-2 mt-2 border-none bg-violet-500 hover:bg-violet-700 rounded text-white font-semibold shadow-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAppliedJobs;
