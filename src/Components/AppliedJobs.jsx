import React from "react";
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
  return (
    <div className="my-container">
      <h1 className="text-2xl text-center font-bold mb-10">Applied Jobs</h1>
      {appJob.map((ap) => (
        <SingleAppliedJobs ap={ap} key={ap.id}></SingleAppliedJobs>
      ))}
    </div>
  );
};

export default AppliedJobs;
