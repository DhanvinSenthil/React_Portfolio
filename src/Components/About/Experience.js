import React from "react";
import { Projects } from "../../data"; // Import data from data.js
import {
  CardImage,
  CompanyDesc,
  CompanyName,
  ProjCards,
  ProjContent,
} from "./experience.css";
import Card from "react-bootstrap/Card";

const Experience = () => {
  return (
    <div className="card-container">
      {Projects.map((company) => (
        <ProjCards class="card text-bg-dark">
          <CardImage src={company.logo} class="card-img" alt="..." />
          <ProjContent class="card-img-overlay">
            <Card.Body>
              <CompanyName class="card-title">{company.Name}</CompanyName>
              <CompanyDesc class="card-text">{company.Descripton}</CompanyDesc>
            </Card.Body>
          </ProjContent>
        </ProjCards>
      ))}
    </div>
  );
};

export default Experience;
