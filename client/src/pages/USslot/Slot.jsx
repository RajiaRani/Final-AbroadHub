import React, { useState } from "react";
import "./Slot.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../../components/BUTTON/Button.css";
import tourist from "../../assets/IMAGES/Slot/Tourist-Visa.jpg";
import student from "../../assets/IMAGES/Slot/student.png";
import transit from "../../assets/IMAGES/Slot/transit.jpg";
import h1b from "../../assets/IMAGES/Slot/h1b.png";
import h4 from "../../assets/IMAGES/Slot/h4.jpg";
import business from "../../assets/IMAGES/Slot/business.webp";

export default function Slot() {
  const [visaTypes] = useState([
    {
      id: 1,
      name: "Tourist Visa (B1/B2)",
      description: "Travel and explore.",
      image: tourist,
      link: "/tourist-visa",
    },
    {
      id: 2,
      name: "Student Visa (F1)",
      description: "For studying in the US.",
      // image: "https://media.licdn.com/dms/image/v2/D4D12AQGdxUs6m7B7Bg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725267383873?e=2147483647&v=beta&t=x8K4beLF8uqIXskxC25AOLWULxEzM8RMd2W4zBnghkk",
      image:student ,
      link: "/student-visa",
    },
    {
      id: 3,
      name: "Work Visa (H1B, L1)",
      description: "Professional career abroad.",
      // image: "https://images.ctfassets.net/uwf0n1j71a7j/5sPtHfvxD9zByosAIrnOKf/86121c5008eeec2b0a67c9d3e4bb9e31/h1b-visa.png",
      image: h1b,
      link: "/work-visa",
    },
    {
      id: 4,
      name: "Business Visa",
      description: "For business professionals.",
      // image: "https://5.imimg.com/data5/SELLER/Default/2021/3/IE/XF/WH/112977754/business-visa-services-500x500.jpeg",
      image: business,
      link: "/business-visa",
    },
    {
      id: 5,
      name: "Dependent Visa (H4, L2)",
      description: "For dependents of visa holders.",
      // image: "https://h1b.techfetch.com/wp-content/uploads/2022/03/blog-10.jpg",
      image: h4,
      link: "/dependent-visa",
    },
    {
      id: 6,
      name: "Transit Visa (C1/D)",
      description: "For transit through the US.",
      // image: "https://www.usvisa.ae/blog/wp-content/uploads/2022/12/US-Transit-Visa.jpg",
      image: transit,
      link: "/transit-visa",
    },
  ]);

  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? visaTypes : visaTypes.slice(0, 3);

  return (
    <div className="slot-container">
      <div className="main-container">
        <div>
          <h1>Book Your US Visa Slot Easily!</h1>
          <p>We simplify the US visa slot booking process for you.</p>
        </div>
        <div className="visa-carousel">
          <ul className="visa-cards">
            {visibleCards.map((visa) => (
              <li key={visa.id} className="visa-card">
                <Link to={visa.link} className="visa-card-link">
                  <img src={visa.image} alt={visa.name} className="visa-image" />
                  <h4>{visa.name}</h4>
                  <p>{visa.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <br /> <br />
        <Button className="view-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See More"}
        </Button>
      </div>
    </div>
  );
}
