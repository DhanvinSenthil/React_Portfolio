import React from "react";
import { CardImage, CarouselWrapper, SkillsCard } from "./experience.css";
import Marquee from "react-fast-marquee";
import { SkillsContent } from "../../data";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { AboutSideHeadings } from "../../styles/App.css";

const Skills = () => {
  return (
    <AnimatedOnScroll animationIn="bounceInUp">
      <AboutSideHeadings className="home-container">Skills:</AboutSideHeadings>
      <CarouselWrapper>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {SkillsContent.map((SkillsContent) => (
            <SkillsCard key={SkillsContent.id} className="skills-cards">
              <CardImage
                src={SkillsContent.logo}
                alt={`Card ${SkillsContent.id}`}
              />
              {SkillsContent.Name}
            </SkillsCard>
          ))}
        </Marquee>
      </CarouselWrapper>
    </AnimatedOnScroll>
  );
};

export default Skills;
