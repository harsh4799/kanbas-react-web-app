import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignment, addAssignment, updateAssignment } from "../reducer";
import { KanbasState } from "../../../store";
function AssignmentEditor() {
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignments
  );

  const dispatch = useDispatch();
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();
  let assignment = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignment
  );

  if (assignmentId !== "new") {
    assignment = assignmentList.find(
      (assign: { _id: string | undefined }) => assign._id === assignmentId
    );
  }

  const aFrom = assignment.availableFromDate;
  const aUntil = assignment.availableUntilDate;

  const handleSave = () => {
    if (assignmentId === "new") {
      dispatch(
        addAssignment({
          ...assignment,
          course: courseId,
          _id: new Date().getTime().toString(),
        })
      );
    } else {
      dispatch(updateAssignment({ ...assignment, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="me-5">
      <div className="wd-kanbas-green float-end mt-2 ">
        <i
          className="fa fa-check-circle wd-kanbas-green"
          aria-hidden="true"
        ></i>
        Published
        <button type="button" className="btn btn-light">
          <i className="fa fa-ellipsis-v ms-2"></i>
        </button>
      </div>
      <br />
      <br />
      <hr />
      <label htmlFor="input-1" className="form-label">
        {" "}
        Assignment Name{" "}
      </label>
      <input
        value={assignment?.title}
        className="form-control mb-2"
        onChange={(e) => {
          console.log(e);
          return dispatch(
            setAssignment({ ...assignment, title: e.target.value })
          );
        }}
      />
      <br />
      <textarea
        value={assignment.description}
        className="form-control"
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
      ></textarea>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="float-end">Points</div>
          </div>
          <div className="col-8">
            <input
              className="form-control"
              id="input-2"
              value={assignment.points}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, points: e.target.value })
                )
              }
            />
          </div>
          <div className="col-2"></div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-2">
            <div className="float-end">Assign</div>
          </div>
          <div className="col-8">
            <ul className="list-group list-group-item wd-kanbas-edit-section">
              <li className="list-group-item border-0">
                <b>Due</b>
              </li>
              <li className="list-group-item border-0">
                <input
                  type="date"
                  className="form-control"
                  id="input-4"
                  value={assignment.dueDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    )
                  }
                />
              </li>
              <li className="list-group-item border-0">
                <div className="row">
                  <div className="col-6 float-start">
                    <b className="wd-kanbas-width-45">Available from</b>
                  </div>
                  <div className="col-6 wd-float-start">
                    <b className="wd-kanbas-width-45">Until</b>
                  </div>
                </div>
              </li>
              <li className="list-group-item border-0">
                <div className="row">
                  <div className="col-6 float-start">
                    <input
                      type="date"
                      className="form-control float-start wd-kanbas-width-45 me-1"
                      id="input-5"
                      value={aFrom}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            availableFromDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="col-6 float-start">
                    <input
                      type="date"
                      className="form-control float-start wd-kanbas-width-45 ms-1"
                      id="input-6"
                      value={aUntil}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            availableUntilDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <hr />
      <div className="float-start">
        <input className="form-check-input" type="checkbox" id="check-9" />
        <label className="form-check-label" htmlFor="check-9">
          Notify users that this content has changed
        </label>
      </div>
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
