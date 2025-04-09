import React from "react";
import "./VisaSteps.css";
import {
  FaUserCheck,
  FaWpforms,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserTie,
  FaSearchLocation,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Know Your Visa Type",
    description: "Understand which type of visa you need.",
    icon: <FaUserCheck />,
    link: "/visa-type",
  },
  {
    id: 2,
    title: "Complete Your Application",
    description: "Fill out the DS-160 form accurately.",
    icon: <FaWpforms />,
  },
  {
    id: 3,
    title: "Pay Your Visa Fees",
    description: "Submit the required visa application fees.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 4,
    title: "Schedule Your Appointment",
    description: "Book your visa interview at the U.S. Embassy.",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    title: "Attend Your Interview",
    description: "Meet with a consular officer for your interview.",
    icon: <FaUserTie />,
  },
  {
    id: 6,
    title: "Track Your Passport",
    description: "Monitor your passport's status after the interview.",
    icon: <FaSearchLocation />,
  },
];

export default function VisaSteps() {
  return (
    <div className="visa-steps-container">
      <h2 className="visa-heading">How to Apply for Your U.S. Visa</h2>
      <div className="steps-list">
        {steps.map((step) => (
          <Link key={step.id} to={step.link || "#"} className="step-link">
            <div className="step-item">
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
