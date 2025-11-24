import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/images/home_portrait.webp";
import Particle from "../../components/Particle";
import Home2 from "./Home2";
import "./Home.css";

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
                alt="Chris Wise - Computing and Cyber Professional"
                className="main-profile-img"
                style={{ maxHeight: "450px" }}
                width={450 / 1.6}
                height="450"
                fetchpriority="high"
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