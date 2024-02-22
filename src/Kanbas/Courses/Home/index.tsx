import { Col, Row } from "react-bootstrap";
import ModuleList from "../Modules/ModuleList";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
  FaChevronDown,
} from "react-icons/fa";
import StatusBar from "./StatusBar";

function Home() {
  return (
    <Row>
      <Col xs={10} md={10}>
        <ModuleList />
      </Col>

      <Col xs={2} md={2}>
        <StatusBar />
      </Col>
    </Row>
  );
}

export default Home;
