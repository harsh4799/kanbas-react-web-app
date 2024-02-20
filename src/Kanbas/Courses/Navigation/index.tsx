import { useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom Meetings",
        "Assignments",
        "Quizzes",
        "Grades",
        "People",
        "Panopto Video",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaborations",
        "Syllabus",
        "Settings",
    ];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="list-group borderless kanbas-account kanbas-column">
            {links.map((link, index) => {
                const isActive = pathname.includes(link);
                return (
                    <a
                        href={`#/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item ${ isActive ? "kanbas-black" : "kanbas-red" } kanbas-account-border`}
                        key={index}
                    >
                        <div className={isActive ? "kanbas-account-selected" : ""}>{link}</div>
                    </a>
                );
            })}
        </div>
    );
}

export default CourseNavigation;