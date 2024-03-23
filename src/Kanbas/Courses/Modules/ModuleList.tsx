import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
  FaChevronDown,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  const dispatch = useDispatch();
  // const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="row top-bar">
        <div className="col top-button-bar d-flex justify-content-end">
          <a> Collapse All </a>

          <a> View Progress </a>

          <a>
            {" "}
            <FaCheckCircle className="text-success me-2" /> Publish All{" "}
          </a>

          <a className="red">
            <FaPlus className="me-2" /> Module{" "}
            <FaChevronDown className="ms-2" />
          </a>

          <a>
            {" "}
            <FaEllipsisV className="me-2 custom" />{" "}
          </a>
        </div>
      </div>
      <hr></hr>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <input
            className="me-4"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <br></br>
          <br></br>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <br></br>

          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            className="me-4"
          >
            Add
          </button>
          <button
            className="me-4"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </li>
        {modulesList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <li key={index} className="list-group-item">
                <button
                  className="me-4"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="me-4"
                >
                  Delete
                </button>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              <ul className="list-group">
                {module.lessons?.map(
                  (
                    lesson: {
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | null
                        | undefined;
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
