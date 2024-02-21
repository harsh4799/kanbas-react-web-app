import "./index.css";
import { FaEllipsisVertical, FaPlus, FaRegCircleCheck } from "react-icons/fa6";

function ModuleButtons() {
    const currentUrl = window.location.href;
    return (
        <>
            <a href={currentUrl}>
                <button type="submit" className="btn btn-light float-end">
                    <FaEllipsisVertical className="mb-1 mt-1"/>
                </button>
            </a>
            <a href={currentUrl}>
                <button type="submit" className="btn float-end kanbas-save-profile btn-danger">
                <FaPlus className="mx-1 mb-1"/>
                Module
                </button>
            </a>

            <div className="dropdown float-end me-1">
                <button id="dropdown-1" className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <FaRegCircleCheck className="mb-1 me-1 text-success" />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Action 3</a></li>
                </ul>
            </div>

            <a href={currentUrl}>
                <button type="submit" className="btn btn-light float-end me-1">
                    View Progress
                </button>
            </a>
            <a href={currentUrl}>
                <button type="submit" className="btn btn-light float-end me-1">
                    Collapse All
                </button>
            </a>
        </>
    );
}
export default ModuleButtons;
