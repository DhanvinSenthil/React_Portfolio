import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardText from "react-bootstrap/esm/CardText";
import Card from "react-bootstrap/Card";
import CardSubtitle from "react-bootstrap/esm/CardSubtitle";
export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  justify-content: flex-start;
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: palevioletred;
  }
`;
export const Resume = styled.a`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  text-underline-offset: unset;

  cursor: pointer;
  &.active {
    color: palevioletred;
    @media screen and (min-width: 479px) {
      display: flex;
      position: absolute;
      right: 10%;
    }
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 470px) {
    display: block;
    position: absolute;
    top: 0;
    z-index: 103;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
export const Close = styled(IoMdClose)`
  display: none;
  color: white;
  @media screen and (max-width: 470px) {
    display: block;
    position: absolute;
    top: 0;
    z-index: 103;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  color: white;
  align-items: center;
  margin-right: -24px;
  margin-right: 24px;
  width: 100%;
  white-space: nowrap;
  @media screen and (max-width: 470px) {
    ${(props) =>
      props.isOpen
        ? `position:absolute;
       z-index:100;
       width:100%;
       height: -webkit-fill-available;       
       display:flex;
       background-color:grey;
       flex-direction:column;
       align-items: center;
       justify-content: center;
       padding-top:300px;
       padding-bottom:300px;
       a{
       color:white;
       ::active{
       }
       }`
        : `display:none`};
  }
  @media screen and (max-width: 415px) {
    ${(props) =>
      props.isOpen
        ? `position:absolute;
       z-index:100;
       width:100%;
       height: -webkit-fill-available;       
       display:flex;
       background-color:grey;
       flex-direction:column;
       align-items: center;
       justify-content: center;
       padding-top:200px;
       padding-bottom:200px;
       a{
       color:white;
       ::active{
       }
       }`
        : `display:none`};
  }
  @media screen and (max-width: 320px) {
    ${(props) =>
      props.isOpen
        ? `position:absolute;
       z-index:100;
       width:100%;
       height: -webkit-fill-available;       
       display:flex;
       background-color:grey;
       flex-direction:column;
       align-items: center;
       justify-content: center;
       padding-top:100px;
       padding-bottom:100px;
       a{
       color:white;
       ::active{
       }
       }`
        : `display:none`};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
export const HomeContainer = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
`;
export const AboutHeading = styled.div`
  font-size: 3rem;
  color: #264e74;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const AboutParagraph = styled.div`
  font-size: 1.5rem;
  margin-left: 40px;
  margin-right: 40px;
  margin-right: 40px;
  color: #264e74;
  text-align: center;
  @media (max-width: 920px) {
    font-size: 0.7rem;
  }
`;
export const NavMobile = styled.div`
  .h1 {
    display: inline-block;
    font-size: 3rem;
  }
`;
export const MyImage = styled.img`
  width: 22rem;
  height: 22rem;
  margin-right: 3rem;
  border-radius: 15rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 10rem;
    border-radius: 8rem;
    margin-right: 0px;
  }
`;

export const AboutContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
  }
`;
export const VericalLine = styled.div`
  border-left: 3px solid grey;
  height: 400px;
  left: 50%;
  justify-content: center;
  top: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Name = styled.div`
  font-size: 2rem;
  margin-left: 40px;
  margin-right: 40px;
  color: #264e74;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const Designation = styled.div`
  font-size: 1.4rem;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;
  color: #264e74;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const Contactinfo = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  width: 15rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 395px) {
    margin-left: 40px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 40px;
  }
`;
export const NameContainer = styled.div`
  padding: 0;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
export const ImageContainer = styled.div`
  padding: 0;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
export const ContactContainer = styled.div`
  display: grid;
  place-items: center;
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 3rem;
    gap: 1rem;
    width: 100%;
    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      border: 1px solid #fff;
      font-weight: 400;
    }
  }
  textarea {
    height: 20rem;
  }
  @media screen and (max-width: 768px) {
    width: -webkit-fill-available;
    form {
      width: -webkit-fill-available;
      padding-left: 7%;
      padding-right: 7%;

      input,
      textarea {
        width: -webkit-fill-available;
      }
    }
  }
`;

export const StyleToastContainer = styled(ToastContainer)`
  width: max-content;
  @media screen and (max-width: 768px) {
    width: -webkit-fill-available;
  }
`;

export const SubmitButton = styled.button`
  height: 3rem;
  width: 7rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  background-color: #76cf76;
  text-transform: uppercase;
  cursor: pointer;
`;
export const ContactHeading = styled.div`
  font-size: 2rem;
  color: #264e74;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const CardsContainer = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  left: 2rem;
  right: 2rem;
  position: absolute;
  padding-top: 2rem;
  > div {
    flex: 50%;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
export const StyleCards = styled(Card)`
  border-radius: 1rem;
  background-color: #264e74;
  color: white;
  border: none;
  outline: none;
  :hover {
    border-radius: 1rem;
    background-color: lightgray;
    color: black;
    border: none;
    outline: none;
  }
`;
export const StyleModalbody = styled(Modal.Body)`
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const StyleModalTitle = styled(Modal.Header)`
  background-color: #f5f5dc;
`;
export const StyleModal = styled(Modal)`
  margin-top: 100px;
  padding: 0;
  @media screen and (max-width: 768px) {
    height: -webkit-fill-available;
  }
`;

export const CardsStyleTitle = styled(CardTitle)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const CardsStyleSubtitle = styled(CardSubtitle)`
  padding-top: 1rem;
  font-size: medium;
  font-weight: normal;
  span {
    font-size: large;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    span {
      font-size: small;
      font-weight: bold;
    }
  }
`;
export const CardsDescription = styled(CardText)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: row;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const CardsGitLink = styled(Card.Link)`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`;

export const ModalGitButton = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 1rem;
  padding-right: 1rem;
  button {
    border: none;
    outline: none;
    background-color: #264e74;
    border-radius: 1rem;
    width: 8rem;
    height: 3rem;
    color: white;
  }
  :hover {
    background-color: lightgray;
    color: black;
    border-radius: 1rem;
    border: none;
    outline: none;
  }
  @media screen and (max-width: 768px) {
    button {
      border-radius: 1rem;
      width: 6rem;
    }
  }
`;

export const Project4GitLive = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-right: 1rem;
  gap: 1rem;
  button {
    border: none;
    outline: none;
    background-color: #264e74;
    border-radius: 1rem;
    width: 8rem;
    height: 3rem;
    color: white;
  }
  :hover {
    background-color: lightgray;
    color: black;
    border-radius: 1rem;
    border: none;
    outline: none;
  }
  @media screen and (max-width: 768px) {
    button {
      border-radius: 1rem;
      width: 6rem;
    }
  }
`;
export const GraduationStyledCard = styled(Card)`
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

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 16px;

  img {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const YearLabel = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #d9fc9b;
  color: black;
  padding: 4px 8px;
  border-radius: 3rem;
  font-size: xx-small;
  @media screen and (max-width: 768px) {
    font-size: 0.3rem;
  }
`;

export const Degree = styled.div`
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const CardBody = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

export const CollegeName = styled.div`
  margin-bottom: 4px;
  font-weight: lighter;
  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }
`;

export const RightIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: flex-end;
  position: absolute;
  right: 10%;

  @media screen and (max-width: 470px) {
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 1.2rem;
    right: 18%;
  }
`;

export const NavBarIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 3px;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;
export const AboutSideHeadings = styled.div`
  align-items: center;
  font-size: 1.7rem;
  display: flex;
  margin-top: 2rem;
  margin-left: 40px;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    display: grid;
    font-size: 1rem;
  }
`;
export const ThankMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3rem;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 1rem;
  button {
    height: 3rem;
    width: 10rem;
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    background-color: #76cf76;
    text-transform: uppercase;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
