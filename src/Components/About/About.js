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
import { aboutParagraph1, aboutParagraph2 } from "../../constants.js";
import { College } from "../../data.js";
import graduation from "../../Images/graduation.png";
import "../../index.css";
import Experience from "./Experience.js";
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
        animationIn="bounceInLeft"
        delay={0.1 * 1000}
        style={{
          marginTop: "20px",
        }}
      >
        <AboutParagraph className="home-container">
          {aboutParagraph1}
        </AboutParagraph>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        delay={0.3 * 1000}
        animationIn="bounceInRight"
        style={{
          marginTop: "20px",
        }}
      >
        <AboutParagraph className="home-container">
          {aboutParagraph2}
        </AboutParagraph>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationIn="bounceInLeft">
        <AboutSideHeadings className="home-container">
          Education:
        </AboutSideHeadings>
      </AnimatedOnScroll>

      {College.map((college) => {
        return (
          <div style={{ marginTop: "1rem" }}>
            <AnimatedOnScroll animationIn="bounceInLeft">
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
      <Experience />
    </HomeContainer>
  );
};

export default About;
