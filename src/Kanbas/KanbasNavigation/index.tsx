import { Link, useLocation } from 'react-router-dom';
import "./index.css";
import { FaUser, FaBook, FaInbox, FaClock } from 'react-icons/fa';
import {
  FaArrowRightFromBracket,
  FaCalendarDays,
  FaCircleQuestion,
  FaGauge,
  FaYoutube,
} from 'react-icons/fa6';

const KanbasNavigation = () => {
    const links = [
        { label: "Account",   icon: <FaUser className="fs-2" style={{ color: 'grey' }} />  },
        { label: "Dashboard", icon: <FaGauge className="fs-2" />  },
        { label: "Courses",   icon: <FaBook className="fs-2" />           },
        { label: "Calendar",  icon: <FaCalendarDays className="fs-2" /> },
        { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
        { label: "History",  icon: <FaClock className="fs-2" /> },
        { label: "Studio",  icon: <FaYoutube className="fs-2" /> },
        { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-2" /> },
        { label: "Help",  icon: <FaCircleQuestion className="fs-2" /> },
      ];

  const { pathname } = useLocation();

  return (
    <>
    <ul className="wd-kanbas-navigation">
      <div className="wd-logo-container">
        <a href="/Kanbas/Dashboard">
          <img
            src="../../images/neu_logo.png"
            className="wd-logo"
            alt="Logo"
          />
        </a>
      </div>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <br/> {link.label} </Link>
        </li>
      ))}
    </ul>
   </> 
  );
};
export default KanbasNavigation;