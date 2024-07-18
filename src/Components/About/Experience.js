import React from "react";
import { Projects } from "../../data";
import {
  Company,
  Designation,
  ExperienceStyledCard,
  ExpParagraph,
  ExpYearLabel,
  LogoWrapper,
  ProjContentWrapper,
  ProjectDescription,
  ProjectName,
  ProjExpSideHeading,
} from "./experience.css";
import "../../index.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { AboutSideHeadings, CardBody } from "../../styles/App.css";
import { CompanyAndDesignation, ExperienceDesc } from "../../constants";

const Experience = () => {
  return (
    <div className="card-container">
      <AnimatedOnScroll animationIn="bounceInUp">
        <AboutSideHeadings className="home-container">
          Work Experience:
        </AboutSideHeadings>
        <Company className="home-container">
          {CompanyAndDesignation} <ExpYearLabel>2022-Present</ExpYearLabel>
        </Company>
        <ExpParagraph className="home-container">{ExperienceDesc}</ExpParagraph>
        <ProjExpSideHeading className="home-container">
          Project Experiences:
        </ProjExpSideHeading>
      </AnimatedOnScroll>

      {Projects.map((company) => (
        <div style={{ marginTop: "1rem" }}>
          <AnimatedOnScroll animationIn="bounceInUp">
            <ExperienceStyledCard className="education-cards">
              <ProjContentWrapper>
                <LogoWrapper>
                  <img src={company.logo} alt="graduation" />
                  <ProjectName>{company.Name}</ProjectName>
                </LogoWrapper>
                <Designation>
                  <span style={{ fontWeight: "bold" }}>Designation: </span>
                  {company.Designation}
                </Designation>
                <CardBody>
                  <ProjectDescription className="project_desc">
                    {company.Description.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </ProjectDescription>
                </CardBody>
              </ProjContentWrapper>
            </ExperienceStyledCard>
          </AnimatedOnScroll>
        </div>
      ))}
    </div>
  );
};

export default Experience;
