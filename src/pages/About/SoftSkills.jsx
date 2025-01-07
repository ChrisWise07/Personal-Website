import { Col, Row } from "react-bootstrap";
import FlipCard from "../../components/FlipCard/FlipCard";
import { FaTasks, FaUsers, FaCompass, FaPuzzlePiece, FaFlag, FaLock, FaBrain } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

function SoftSkills() {
  return (
    <Row
      xs={3}
      sm={3}
      md={4}
      style={{ paddingBottom: "50px", justifyContent: "center" }}
    >
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaFlag />} text="Leadership" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaBrain />} text="Analytical Thinking" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaTasks />} text="Management" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaUsers />} text="Teamwork" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<GiWeightLiftingUp />} text="Discipline" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaCompass />} text="Self-Direction" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaLock />} text="Security Minded" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaPuzzlePiece />} text="Problem-Solving" />
      </Col>
    </Row>
  );
}

export default SoftSkills;