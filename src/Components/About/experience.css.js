import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/esm/CardText";

export const ProjCards = styled(Card)`
  position: relative;
  width: 100%;
  background-color: #343a40;
  overflow: hidden;
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 20rem;
  filter: brightness(20%);
  @media (max-width: 600px) {
    height: 30rem;
  }
`;

export const ProjContent = styled(CardText)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Ensure it covers the full area */
  color: white;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const CompanyName = styled(CardText)`
  margin: 0;
  font-size: 1.25rem; /* Responsive font size */
  color: white;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const CompanyDesc = styled(CardText)`
  margin: 0;
  font-size: 1rem; /* Responsive font size */
  color: white;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;
