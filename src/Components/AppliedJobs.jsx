import React, { useState } from "react";
import { getStoredCart } from "./utilities/FakeDb";
import { useLoaderData } from "react-router-dom";
import SingleAppliedJobs from "./SingleAppliedJobs";

const AppliedJobs = () => {
  const applies = useLoaderData();
  let appJob = [];
  const data = getStoredCart();
  for (const id in data) {
    const foundApplied = applies.find((ap) => +ap.id === +id);
    if (foundApplied) {
      appJob.push(foundApplied);
    }
  }
  const [filters, setFilter] = useState("all");
  const filterData = appJob.filter((job) => {
    if (filters === "all") {
      return true;
    } else if (filters === "Remote") {
      return job.type === "Remote";
    } else {
      return job.type === "Onsite";
    }
  });
  return (
    <div className="my-container">
      <div className="text-end">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn border-none bg-violet-500 hover:bg-violet-700">
            Sort By{" "}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button
                onClick={() => setFilter("all")}
                className="hover:bg-violet-700 hover:text-white">
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("Onsite")}
                className="hover:bg-violet-700 hover:text-white">
                Onsite
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("Remote")}
                className="hover:bg-violet-700 hover:text-white">
                Remote
              </button>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-2xl text-center font-bold mb-10">Applied Jobs</h1>
      {filterData.map((ap) => (
        <SingleAppliedJobs ap={ap} key={ap.id}></SingleAppliedJobs>
      ))}
    </div>
  );
};

export default AppliedJobs;
