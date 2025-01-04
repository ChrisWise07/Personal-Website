import { Col, Row } from "react-bootstrap";
import FlipCard from "./FlipCard";
import { FaTasks, FaUsers, FaCompass, FaPuzzlePiece, FaFlag, FaLock, FaBrain } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

function SoftSkills() {
  return (
    <Row xs={4} sm={4} md={5} className="flip-card-row" style={{ paddingBottom: "50px" }}>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaFlag />} text="Leadership" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaBrain />} text="Analytical Thinking" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaTasks />} text="Management" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaUsers />} text="Teamwork" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<GiWeightLiftingUp />} text="Discipline" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaCompass />} text="Self-Direction" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaLock />} text="Security Minded" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaPuzzlePiece />} text="Problem-Solving" />
      </Col>
    </Row>
  );
}

export default SoftSkills;