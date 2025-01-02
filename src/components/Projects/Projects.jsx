import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import perception from "../../Assets/Projects/collective_perception.webp";
import patch from "../../Assets/Projects/robust_dpatch_imperceptible_patch_compare.webp";
import QC_circuit_errors from "../../Assets/Projects/QC_circuit_errors.webp";
import GreyBoxArch from "../../Assets/Projects/grey_box_arch.webp";
import QuantumSpace from "../../Assets/Projects/quantum_space.webp";
import TransformerQubitSimDiagram from "../../Assets/Projects/transformer_qubit_sim_diagram.webp";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        <h5 style={{ color: "var(--off-white)" }} >
          Here are some of my completed and current projects.
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TransformerQubitSimDiagram}
              imgWidth="92%"
              title="Transformer-based Qubit Simulator"
              description="
                  An encoder-only transformer is integrated into an open-quantum 
                  system qubit simulator. The model learns to map white noise to 
                  noise present on a quantum computer, where model output is 
                  combined with control pulses to compute observable 
                  expectations. This transformer-based qubit simulator can model 
                  ground truth expectations with 99.97% accuracy. Control pulses
                  are then optimised by back-propagating through the trained
                  transformer noise model. The control pulses achieve 99.89%
                  process fidelity in a noisy environment.
              "
              inProgress={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuantumSpace}
              imgWidth="70%"
              title="Quantum Feature Space of Qubit in Arbitrary Bath"
              description="
                  This work shows that the quantum noise operators may be 
                  directly, accurately, and efficiently inferred using a 
                  regression-based approach compared to more expensive deep
                  learning approaches. This noise operator description admits an 
                  efficient parameterisation; this parametrisation is referred
                  to as the quantum feature space arising from an arbitrary 
                  bath coupled to a qubit. This quantum feature space is shown 
                  to be effective at classifying and characterising the noise
                  processes describing qubit-bath interactions. 
              "
              pdfLink="/assets/Quantum_Feature_Space.pdf"
              inProgress={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GreyBoxArch}
              imgWidth="85%"
              title="Machine Learning for High Fidelity Qubit Control"
              description="
                  My honours thesis extended a mathematical model of 
                  qubit-environment interactions and developed a method to 
                  deduce these interactions from experimental data. In this 
                  work, deep learning architectures that map control pulses to 
                  qubit-environment interactions were investigated. 
                  Gradient-free optimisers were used to optimise control pulses 
                  that achieve over 99% process fidelity in noisy environments. 
              "
              ghLink="https://github.com/ChrisWise07/ML-for-Qubit-Control-Honours-Thesis"
              pdfLink="/assets/ML_for_Qubit_Control.pdf"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QC_circuit_errors}
              imgWidth="70%"
              title="PSO to Infer Quantum Computer Circuit Errors"
              description="
                Quantum computer circuit error parameters were inferred using 
                PSO to optimise a circuit error model. The MSE between the 
                model's simulated data and experimental data was reduced by a 
                magnitude of ten. The PSO algorithm was used to mitigate the 
                effects of circuit errors. The PSO-optimised control parameters 
                reduced the MSE between measured noisy data and ideal data by 
                62%. 
              "
              ghLink="https://github.com/ChrisWise07/ZEIT3191-ML-Quantum-Computing"
              pdfLink="/assets/PSO_for_QC_Errors.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perception}
              imgWidth="60%"
              title="Developing Decentralised Resilience to Malicious Influence"
              description="
                RL was used to optimise agent actions in a collective perception 
                problem. When performing opinion fusion, decentralised resilience 
                was implemented by having agents dynamically weight received 
                opinions. An updated collective perception simulation was 
                developed in Python for this research.
              "
              ghLink="https://github.com/ChrisWise07/ZEIT3190-Swarm-Research"
              arxivLink="https://arxiv.org/abs/2211.03063"
              pdfLink="/assets/Decentralised_Resilience.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patch}
              imgWidth="90%"
              title="Adversarial Patches to Camouflage Military Assets From CNNs"
              description="
                Developed a unique method that produces imperceptible patches 
                capable of camouflaging large military assets from computer 
                vision-enabled technologies. Patches were developed by 
                maximising object detection loss whilst limiting the 
                patch's colour perceptibility.
              "
              ghLink="https://github.com/ChrisWise07/imperceptible-patch-generator"
              arxivLink="https://arxiv.org/abs/2202.08892"
              pdfLink="/assets/Adversarial_Patches.pdf"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;