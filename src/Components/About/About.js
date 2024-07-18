import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {
  HomeContainer,
  AboutHeading,
  AboutParagraph,
  GraduationStyledCard,
  ImageWrapper,
  ContentWrapper,
  YearLabel,
  CollegeName,
  CardBody,
  Degree,
  AboutSideHeadings,
} from "../../styles/App.css.js";
import { aboutParagraph1 } from "../../constants.js";
import { College } from "../../data.js";
import graduation from "../../Images/graduation.png";
import "../../index.css";
import Experience from "./Experience.js";
import Skills from "./skills.js";
const About = () => {
  return (
    <HomeContainer>
      <AnimatedOnScroll
        animationIn="fadeInDownBig"
        style={{
          marginTop: "40px",
        }}
      >
        <AboutHeading className="home-container">Hi, there!</AboutHeading>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        animationIn="bounceInUp"
        delay={0.1 * 1000}
        style={{
          marginTop: "20px",
        }}
      >
        <AboutParagraph className="home-container">
          {aboutParagraph1}
        </AboutParagraph>
      </AnimatedOnScroll>
      <Experience />
      <Skills />
      <AnimatedOnScroll animationIn="bounceInUp">
        <AboutSideHeadings className="home-container">
          Education:
        </AboutSideHeadings>
      </AnimatedOnScroll>

      {College.map((college) => {
        return (
          <div style={{ marginTop: "1rem" }}>
            <AnimatedOnScroll animationIn="bounceInUp">
              <GraduationStyledCard className="education-cards">
                <ImageWrapper>
                  <img src={graduation} alt="graduation" />
                </ImageWrapper>

                <ContentWrapper>
                  <Degree>
                    {college.Descripton}
                    <CardBody>
                      <CollegeName className="college-name">
                        {college.Name}
                      </CollegeName>
                      <YearLabel>{college.year}</YearLabel>
                    </CardBody>
                  </Degree>
                </ContentWrapper>
              </GraduationStyledCard>
            </AnimatedOnScroll>
          </div>
        );
      })}
    </HomeContainer>
  );
};

export default About;
