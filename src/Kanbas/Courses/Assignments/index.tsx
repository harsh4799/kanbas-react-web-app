import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPlus,
  FaChevronDown,
  FaBook,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId,
  );

  const [value, setValue] = useState("");

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="row top-bar">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
            onChange={handleChanges}
          />
        </div>
        <div className="col top-button-bar d-flex justify-content-end">
          <a> Group </a>

          <a className="red">
            <FaPlus /> Assignment{" "}
          </a>

          <a>
            {" "}
            <FaEllipsisV className="me-2 custom" />{" "}
          </a>
        </div>
      </div>

      <hr />

      <ul className="list-group wd-assignments">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <span className="percent-box">40% of total</span>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaBook className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
