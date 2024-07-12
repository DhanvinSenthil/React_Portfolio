import Dhanvin from "../../Images/Dhanvin.jpeg";
import Hello from "../../Images/Hello.gif";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import whatsapp from "../../Images/whatsapp.png";
import instagram from "../../Images/instagram.png";

import {
  MyImage,
  AboutContainer,
  VericalLine,
  Name,
  Designation,
  Contactinfo,
  NameContainer,
  ImageContainer,
} from "../../styles/App.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "../../index.css";

const Home = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <AnimatedOnScroll animationIn="bounceInLeft">
          <MyImage src={Dhanvin} alt="Dhanvin" />
        </AnimatedOnScroll>
      </ImageContainer>

      <VericalLine> </VericalLine>

      <NameContainer>
        <AnimatedOnScroll
          animationIn="bounceInRight"
          style={{
            marginTop: "20px",
          }}
        >
          <Name className="home-container">
            Hello <img src={Hello} alt="Hello" width="30px" />, I am Dhanvin S
          </Name>
          <Designation className="home-container">
            Front-End Developer
          </Designation>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="bounceInUp">
          <Contactinfo>
            <a href="https://www.linkedin.com/in/dhanvin-s-0357a521b/">
              <img src={linkedin} alt="Hello" width="30px" height="30px" />
            </a>
            <a href="https://github.com/DhanvinSenthil?tab=repositories">
              <img src={github} alt="Hello" width="30px" height="30px" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919361560831&text=Hello+Dhanvin">
              <img src={whatsapp} alt="Hello" width="30px" height="30px" />
            </a>
            <a href="https://www.instagram.com/broken_soulsymphony?igsh=MXVzamdueDhobWI1eQ==">
              <img src={instagram} alt="Hello" width="30px" height="30px" />
            </a>
          </Contactinfo>
        </AnimatedOnScroll>
      </NameContainer>
    </AboutContainer>
  );
};

export default Home;
