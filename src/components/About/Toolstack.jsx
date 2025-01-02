import { Col, Row } from "react-bootstrap";
import {
  SiLinuxmint,
  SiGithub,

} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={4} md={2} className="tool-icons">
        <a href="https://linuxmint.com" target="_blank" rel="noreferrer">
          <SiLinuxmint />
        </a>
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
          <VscVscode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;