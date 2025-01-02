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
    <Row xs={4} sm={4} md={5} className="flip-card-row" style={{ paddingBottom: "50px" }}>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiPython />} text="Python" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiLinux />} text="Linux CLI" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<SiGnubash />} text="Bash" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiGit />} text="Git" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<AiOutlineConsoleSql />} text="SQL" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiJavascript1 />} text="JavaScript" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiReact />} text="React" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiJava />} text="Java" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<CgCPlusPlus />} text="C++" textSize="70%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<SiC />} text="C" textSize="100%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<DiAtom />} text="Quantum Computing" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaRobot />} text="AI & ML" textSize="45%" />
      </Col>
      <Col className="tech-icons d-flex justify-content-center align-items-center">
        <FlipCard icon={<FaNetworkWired />} text="Networking" textSize="45%" />
      </Col>
    </Row>
  );
}

export default LanguageProficiencies;