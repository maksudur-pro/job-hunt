import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";
import Feature from "./Feature";

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div>
      <div className="lg:flex justify-center items-center my-container">
        <div>
          <h2 className="text-7xl font-bold">
            One Step <br /> Closer To Your{" "}
            <span className="text-violet-500">Dream Job</span>
          </h2>
          <p className="text-slate-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <br />
          <button className="btn border-none bg-violet-500 hover:bg-violet-700">
            Get Started
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/H7s5rnR/P3-OLGJ1-copy-1.png" alt="" />
        </div>
      </div>
      {/* JOB CATEGORY */}
      <div className="text-center mt-6 mb-6">
        <h1 className="text-5xl font-bold">Job Category List</h1>
        <br />
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="lg:flex justify-between items-center my-container">
        {categories.map((category) => (
          <JobCategory category={category} key={category.id} />
        ))}
      </div>
      {/* Featured Jobs */}
      <div className="text-center mt-6 mb-6">
        <h1 className="text-5xl font-bold">Featured Jobs</h1>
        <br />
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 my-container">
        {features.slice(0, data ? data.length : 4).map((feature) => (
          <Feature feature={feature} key={feature.id} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => setData(!data)}
          className={`${
            data
              ? "hidden"
              : "btn mb-7 border-none bg-violet-500 hover:bg-violet-700"
          }`}>
          see more
        </button>
      </div>
    </div>
  );
};

export default Home;
