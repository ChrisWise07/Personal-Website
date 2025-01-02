import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home_portrait.webp";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> Chris Wise</strong>
              </h1>

              <div className="home-subtitle">
                <h2>
                  Computing and Cyber Professional
                </h2>
              </div>
            </Col>

            <Col md={5} className="home-img-div">
              <img
                src={homeLogo}
                alt="Profile Pic"
                className="main-profile-img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
