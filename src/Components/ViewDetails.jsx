import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "./utilities/FakeDb";

const ViewDetails = () => {
  const params = useParams();
  const loader = useLoaderData();
  const findData = loader.find((company) => +company.id === +params.id);
  const {
    responsibility,
    requirements,
    description,
    salary,
    title,
    experiences,
    contact,
    location,
    id,
  } = findData;
  const handleAdd = (id) => {
    addToDb(id);
  };
  return (
    <div className="my-container ">
      <h1 className="text-2xl font-bold mb-20 text-center">Job Details</h1>
      <div className="lg:flex justify-around">
        <div className="card lg:w-3/4 h-96 justify-between">
          <p>
            <span className="text-2xl font-bold">Job Description: </span>
            {description}
          </p>
          <p>
            <span className="text-2xl font-bold">Job Responsibility: </span>
            {responsibility}
          </p>
          <p className="text-2xl font-bold">Educational Requirements:</p>
          <p>{requirements}</p>
          <p className="text-2xl font-bold">Experiences:</p>
          <p>{experiences}</p>
        </div>
        <div className="card lg:w-1/4 h-96 justify-evenly">
          <p className="text-2xl font-bold">Job Details</p>
          <hr />
          <p>
            <span className="text-xl font-bold">Salary : </span>
            {salary}
          </p>
          <p>
            <span className="text-xl font-bold">Job Title : </span>
            {title}
          </p>
          <p className="text-2xl font-bold">Contact Information</p>
          <hr />
          <p>
            <span className="text-xl font-bold">Phone : </span>
            {contact.phone}
          </p>
          <p>
            <span className="text-xl font-bold">Email : </span>
            {contact.email}
          </p>
          <p>
            <span className="text-xl font-bold">Address : </span>
            {location}
          </p>
          <button
            onClick={() => handleAdd(id)}
            className="btn w-full bg-violet-500">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
