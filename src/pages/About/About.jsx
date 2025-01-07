import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import AboutPhoto from "../../assets/images/about_photo.webp";
import Toolstack from "./Toolstack";
import SoftSkills from "./SoftSkills"; // Import the SoftSkills component
import "./About.css";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-text-photo-row">
          <Col
            md={7}
            style={{
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "2.0em", paddingBottom: "20px", color: "var(--off-white)" }}>
              Who Am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-section-img-div"
          >
            <img src={AboutPhoto} alt="about" className="img-fluid about-img" />
          </Col>
        </Row>
        <h1 className="about-section-heading">
          Professional Skillset
        </h1>

        <SoftSkills />

        <h1 className="about-section-heading">
          Technical Proficiencies
        </h1>

        <Techstack />

        <h1 className="about-section-heading" style={{ paddingBottom: "0px" }}>
          Tools I use
        </h1>
        <Toolstack />

      </Container>
    </Container >
  );
}

export default About;
