import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const ExperienceStyledCard = styled(Card)`
  display: flex;
  border: 1px solid #007bff;
  border-radius: 8px;
  padding: 16px;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-left: 60px;
  margin-right: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
  }
`;
export const ProjectName = styled.div`
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: bold;
  margin-top: 3px;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: 3px;
  }
`;
export const ProjectDescription = styled.div`
  margin-bottom: 4px;
  font-weight: light;
  white-space: pre-line;
  padding-left: 1.2em;
  position: relative;
  margin-top: 1rem;

  p {
    margin: 0 0 4px 0;
    position: relative;
    padding-left: 0.2em;
  }

  p::before {
    content: "•";
    position: absolute;
    left: -1.2em;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.4rem;

    p::before {
      left: -0.8em;
    }
    p {
      padding-left: 1.2em;
    }
  }
`;

export const LogoWrapper = styled.div`
  gap: 0.5rem;
  display: flex;

  img {
    height: 30px;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      padding-bottom: 10px;
    }
  }
`;
export const ProjContentWrapper = styled.div`
  flex-grow: 1;
  @media screen and (max-width: 768px) {
  }
`;
export const ExpParagraph = styled.div`
  font-size: 1rem;
  margin-left: 40px;
  margin-right: 40px;
  color: #264e74;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
export const Company = styled.div`
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 40px;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    display: grid;
    font-size: 0.5rem;
  }
`;
export const ExpYearLabel = styled.div`
  position: absolute;
  right: 46px;
  background-color: #d9fc9b;
  color: black;
  padding: 4px 8px;
  border-radius: 3rem;
  font-size: xx-small;
  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }
`;
export const CompLogoWrapper = styled.img`
  height: 30px;
  width: 30px;
  padding-left: 0.5rem;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;
export const ProjExpSideHeading = styled.div`
  align-items: center;
  font-size: 1rem;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 60px;
  margin-right: 60px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: grid;
    font-size: 0.6rem;
  }
`;
export const Designation = styled.div`
  font-size: 1rem;
  font-weight: light;
  display: flex;
  flex-direction: row;
  gap: 0.3rem;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1450px;
  margin: auto;
  overflow: hidden;
  padding: 20px; /* Add some padding */
  box-sizing: border-box;
  border-radius: 4px;

  @media (max-width: 1400px) {
    max-width: 1000px;
    padding: 15px;
  }

  @media (max-width: 950px) {
    max-width: 800px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    padding: 8px;
  }

  @media (max-width: 576px) {
    max-width: 390px;
    padding: 5px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    padding: 3px;
  }
`;

export const SkillsCard = styled.div`
  background: #fafafa;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 160px;
  height: 160px;
  margin: 1.5rem;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  transition: 300ms ease-in-out;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin: 1.2rem;
    padding: 1.5rem 1rem;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin: 1rem;
    padding: 1rem 0.5rem;
    font-size: 0.75rem;
  }
  @media screen and (max-width: 576px) {
    width: 90px;
    height: 90px;
    margin: 1rem;
    padding: 1rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export const CardImage = styled.img`
  height: 50px;
  pointer-events: none;

  @media screen and (max-width: 768px) {
    height: 40px;
  }

  @media screen and (max-width: 576px) {
    height: 30px;
  }
`;
