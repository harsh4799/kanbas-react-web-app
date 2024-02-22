import "./index.css";

function StatusBar() {
  return (
    <>
      <div className="row side-list">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-sign-in"></i> Import Existing Content
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sign-in"></i> Import From Commons
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-crosshairs"></i> Choose Home Page
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bar-chart"></i> View Course Stream
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa 	fa-microphone"></i> New Announcement
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bar-chart"></i> New Analytics
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bell"></i> View Course Notifications
            </a>
          </li>
        </ul>
      </div>

      <div className="row">
        Coming Up
        <hr></hr>
      </div>

      <div className="row coming-up">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-calendar"></i> Lecture
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-calendar"></i> Lecture
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-calendar"></i> Lecture
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default StatusBar;
