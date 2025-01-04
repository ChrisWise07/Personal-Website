import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiGit, DiJava, DiLinux } from "react-icons/di";
import { SiC, SiGnubash } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import FlipCard from "./FlipCard";
import { DiAtom } from "react-icons/di";
import { FaRobot, FaNetworkWired } from "react-icons/fa";


function LanguageProficiencies() {
  return (
    <Row xs={3} sm={4} md={5} className="flip-card-row" style={{ paddingBottom: "50px" }}>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiPython />} text="Python" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiLinux />} text="Linux CLI" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<SiGnubash />} text="Bash" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiGit />} text="Git" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<AiOutlineConsoleSql />} text="SQL" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiJavascript1 />} text="JavaScript" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiReact />} text="React" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiJava />} text="Java" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<CgCPlusPlus />} text="C++" textSize="70%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<SiC />} text="C" textSize="100%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiAtom />} text="Quantum Computing" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaRobot />} text="AI & ML" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaNetworkWired />} text="Networking" />
      </Col>
    </Row>
  );
}

export default LanguageProficiencies;