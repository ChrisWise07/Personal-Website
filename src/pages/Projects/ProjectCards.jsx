import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card
      className={`project-card-view ${props.inProgress ? 'project-card-view-in-progress' : ''}`}
    >
      <div className="project-card-img-container">
        <Card.Img
          src={props.imgPath}
          alt="card-img"
          style={{ height: props.imgHeight, width: props.imgWidth, maxHeight: "100%" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title} {props.inProgress && <span style={{ color: "var(--warning_orange)" }}>(In Progress)</span>}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px"
        }}
        >
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              GitHub
            </Button>
          )}
          {props.arxivLink && (
            <Button
              variant="primary"
              href={props.arxivLink}
              target="_blank"
              style={{
              }}
            >
              <CgWebsite /> &nbsp;
              arXiv
            </Button>
          )}
          {props.pdfLink && (
            <Button
              variant="primary"
              href={props.pdfLink}
              target="_blank"
              style={{
              }}
            >
              <AiOutlineFilePdf /> &nbsp;
              PDF
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgPath: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  ghLink: PropTypes.string,
  arxivLink: PropTypes.string,
  pdfLink: PropTypes.string,
  inProgress: PropTypes.bool
};

export default ProjectCards;