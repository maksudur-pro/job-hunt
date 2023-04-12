import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "./utilities/FakeDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

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
            <span className="text-xl font-bold">
              <FontAwesomeIcon icon={faDollar} className="text-violet-500" />{" "}
              Salary :{" "}
            </span>
            {salary}
          </p>
          <p>
            <span className="text-xl font-bold">
              <FontAwesomeIcon icon={faBriefcase} className="text-violet-500" />{" "}
              Job Title :{" "}
            </span>
            {title}
          </p>
          <p className="text-2xl font-bold">Contact Information</p>
          <hr />
          <p>
            <span className="text-xl font-bold">
              <FontAwesomeIcon icon={faPhone} className="text-violet-500" />{" "}
              Phone :{" "}
            </span>
            {contact.phone}
          </p>
          <p>
            <span className="text-xl font-bold">
              <FontAwesomeIcon icon={faEnvelope} className="text-violet-500" />{" "}
              Email :{" "}
            </span>
            {contact.email}
          </p>
          <p>
            <span className="text-xl font-bold">
              <FontAwesomeIcon icon={faLocation} className="text-violet-500" />{" "}
              Address :{" "}
            </span>
            {location}
          </p>
          <button
            onClick={() => handleAdd(id)}
            className="btn w-full border-none bg-violet-500 hover:bg-violet-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
