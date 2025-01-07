import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiGit, DiJava, DiLinux } from "react-icons/di";
import { SiC, SiGnubash } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import FlipCard from "../../components/FlipCard/FlipCard";
import { DiAtom } from "react-icons/di";
import { FaRobot, FaNetworkWired } from "react-icons/fa";


function LanguageProficiencies() {
  return (
    <Row
      xs={3}
      sm={4}
      md={5}
      style={{ paddingBottom: "50px", justifyContent: "center" }}
    >
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiPython />} text="Python" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiLinux />} text="Linux CLI" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<SiGnubash />} text="Bash" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiGit />} text="Git" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<AiOutlineConsoleSql />} text="SQL" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiJavascript1 />} text="JavaScript" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiReact />} text="React" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiJava />} text="Java" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<CgCPlusPlus />} text="C++" textSize="70%" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<SiC />} text="C" textSize="100%" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<DiAtom />} text="Quantum Computing" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaRobot />} text="AI & ML" />
      </Col>
      <Col className="flip-card-column d-flex">
        <FlipCard icon={<FaNetworkWired />} text="Networking" />
      </Col>
    </Row>
  );
}

export default LanguageProficiencies;