import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaGithub } from "react-icons/fa6";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {
  AboutHeading,
  AboutParagraph,
  CardsContainer,
  StyleCards,
  StyleModalbody,
  StyleModal,
  CardsStyleTitle,
  CardsDescription,
  CardsStyleSubtitle,
  CardsGitLink,
  ModalGitButton,
  Project4GitLive,
  StyleModalTitle,
} from "../../styles/App.css";
import {
  projectSummary,
  Proj1Title,
  Proj1desc,
  Proj1Technologies,
  Proj1Git,
  Proj1ExtendDesc,
  Proj1Features,
  Proj2desc,
  Proj2ExtendDesc,
  Proj2Features,
  Proj2Title,
  Proj4desc,
  Proj4Extenddesc,
  Proj4Title,
  Proj4Live,
  Proj2Technologies,
  Proj4Features,
  Proj4Technologies,
  Proj3Title,
  Proj3desc,
  Proj3Extenddesc,
  Proj3Technologies,
  Proj3Features,
  Proj2Git,
  Proj3Git,
  Proj4Git,
} from "../../constants";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../../index.css";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <>
      <AnimatedOnScroll animationIn="bounceInUp">
        <AboutHeading className="home-container">Projects</AboutHeading>
        <AboutParagraph className="home-container">
          {projectSummary}
        </AboutParagraph>
      </AnimatedOnScroll>

      <CardsContainer>
        <AnimatedOnScroll animationIn="flipInX">
          <StyleCards onClick={() => setShow(true)}>
            <Card.Body>
              <CardsStyleTitle style={{}}>
                {Proj1Title}
                <CardsGitLink href={Proj1Git} target="_blank" rel="noreferrer">
                  <FaGithub color="#e747ee" />
                </CardsGitLink>
              </CardsStyleTitle>

              <CardsDescription>
                {Proj1desc}
                <a
                  href
                  onClick={() => setShow(true)}
                  style={{
                    paddingLeft: "5px",
                    color: "#f6ba5e",
                    cursor: "pointer",
                  }}
                >
                  ....more
                </a>
              </CardsDescription>
            </Card.Body>
          </StyleCards>
          <StyleModal
            style={{ alignItems: "center" }}
            show={show}
            onHide={() => setShow(false)}
            className="modal-dialog modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <StyleModalTitle closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {Proj1Title}
              </Modal.Title>
            </StyleModalTitle>
            <StyleModalbody>
              {Proj1ExtendDesc}{" "}
              <CardsStyleSubtitle>
                <span>Key-features: </span>
                {Proj1Features}
              </CardsStyleSubtitle>
              <CardsStyleSubtitle>
                <span>Technology Used: </span>
                {Proj1Technologies}
              </CardsStyleSubtitle>
              <ModalGitButton>
                <a href={Proj1Git} target="_blank" rel="noreferrer">
                  <button>
                    <FiGithub size={"30px"} /> Github
                  </button>
                </a>
              </ModalGitButton>
            </StyleModalbody>
          </StyleModal>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="flipInX">
          <StyleCards onClick={() => setShow2(true)}>
            <Card.Body>
              <CardsStyleTitle style={{}}>
                {Proj2Title}
                <CardsGitLink href={Proj2Git} target="_blank" rel="noreferrer">
                  <FaGithub color="#e747ee" />
                </CardsGitLink>
              </CardsStyleTitle>

              <CardsDescription>
                {Proj2desc}
                <a
                  href
                  onClick={() => setShow2(true)}
                  style={{
                    paddingLeft: "5px",
                    color: "#f6ba5e",
                    cursor: "pointer",
                  }}
                >
                  ....more
                </a>
              </CardsDescription>
            </Card.Body>
          </StyleCards>
          <StyleModal
            style={{ alignItems: "center" }}
            show={show2}
            onHide={() => setShow2(false)}
            className="modal-dialog modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <StyleModalTitle closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {Proj2Title}
              </Modal.Title>
            </StyleModalTitle>
            <StyleModalbody>
              {Proj2ExtendDesc}{" "}
              <CardsStyleSubtitle>
                <span>Keyfeatures: </span>
                {Proj2Features}
              </CardsStyleSubtitle>
              <CardsStyleSubtitle>
                <span>Technology Used: </span>
                {Proj2Technologies}
              </CardsStyleSubtitle>
              <ModalGitButton>
                <a href={Proj2Git} target="_blank" rel="noreferrer">
                  <button>
                    <FiGithub size={"30px"} /> Github
                  </button>
                </a>
              </ModalGitButton>
            </StyleModalbody>
          </StyleModal>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="flipInX">
          <StyleCards onClick={() => setShow3(true)}>
            <Card.Body>
              <CardsStyleTitle style={{}}>
                {Proj3Title}
                <CardsGitLink href={Proj3Git} target="_blank" rel="noreferrer">
                  <FaGithub color="#e747ee" />
                </CardsGitLink>
              </CardsStyleTitle>

              <CardsDescription>
                {Proj3desc}
                <a
                  href
                  onClick={() => setShow3(true)}
                  style={{
                    paddingLeft: "5px",
                    color: "#f6ba5e",
                    cursor: "pointer",
                  }}
                >
                  ....more
                </a>
              </CardsDescription>
            </Card.Body>
          </StyleCards>
          <StyleModal
            style={{ alignItems: "center" }}
            show={show3}
            onHide={() => setShow3(false)}
            className="modal-dialog modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <StyleModalTitle closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {Proj3Title}
              </Modal.Title>
            </StyleModalTitle>
            <StyleModalbody>
              {Proj3Extenddesc}
              <CardsStyleSubtitle>
                <span>Keyfeatures: </span>
                {Proj3Features}
              </CardsStyleSubtitle>
              <CardsStyleSubtitle>
                <span>Technology Used: </span>
                {Proj3Technologies}
              </CardsStyleSubtitle>
              <ModalGitButton>
                <a href={Proj3Git} target="_blank" rel="noreferrer">
                  <button>
                    <FiGithub size={"30px"} /> Github
                  </button>
                </a>
              </ModalGitButton>
            </StyleModalbody>
          </StyleModal>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="flipInX">
          <StyleCards onClick={() => setShow4(true)}>
            <Card.Body>
              <CardsStyleTitle style={{}}>
                {Proj4Title}
                <CardsGitLink href={Proj4Git} target="_blank" rel="noreferrer">
                  <FaGithub color="#e747ee" />
                </CardsGitLink>
                <a href={Proj4Live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt color="#e747ee" />
                </a>
              </CardsStyleTitle>

              <CardsDescription>
                {Proj4desc}
                <a
                  href
                  onClick={() => setShow4(true)}
                  style={{
                    paddingLeft: "5px",
                    color: "#f6ba5e",
                    cursor: "pointer",
                  }}
                >
                  ....more
                </a>
              </CardsDescription>
            </Card.Body>
          </StyleCards>
          <StyleModal
            style={{ alignItems: "center" }}
            show={show4}
            onHide={() => setShow4(false)}
            className="modal-dialog modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <StyleModalTitle closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {Proj4Title}
              </Modal.Title>
            </StyleModalTitle>
            <StyleModalbody>
              {Proj4Extenddesc}
              <CardsStyleSubtitle>
                <span>Keyfeatures: </span>
                {Proj4Features}
              </CardsStyleSubtitle>
              <CardsStyleSubtitle>
                <span>Technology Used: </span>
                {Proj4Technologies}
              </CardsStyleSubtitle>
              <Project4GitLive>
                <a href={Proj4Git} target="_blank" rel="noreferrer">
                  <button>
                    <FiGithub size={"30px"} /> Github
                  </button>
                </a>
                <a href={Proj4Live} target="_blank" rel="noreferrer">
                  <button>
                    <FaExternalLinkAlt size={"20px"} /> Live Demo
                  </button>
                </a>
              </Project4GitLive>
            </StyleModalbody>
          </StyleModal>
        </AnimatedOnScroll>
      </CardsContainer>
    </>
  );
};

export default Projects;
