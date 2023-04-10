import React from "react";
import { getStoredCart } from "./utilities/FakeDb";
import { useLoaderData } from "react-router-dom";

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
  console.log(appJob);
  return (
    <div>
      <h1>Applied Jobs</h1>
    </div>
  );
};

export default AppliedJobs;
