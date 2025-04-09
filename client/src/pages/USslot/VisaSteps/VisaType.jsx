import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../../components/NAVBAR/Navbar";
import Footer from "../../../components/FOOTER/Footer";
import "./VisaType.css";

export default function VisaType() {
  const [visaTypes] = useState([
    {
      id: 1,
      name: "Tourist Visa (B1/B2)",
      description: "Visitor visas are nonimmigrant visas for persons who want to enter the United States temporarily for business (visa category B-1), for tourism (visa category B-2), or for a combination of both purposes (B-1/B-2).",
      image: "https://visalab.pk/wp-content/uploads/2024/07/Tourist-Visa.jpg",
      VisaType: "B",
      Fee: "$185 USD",
      link: "/tourist-visa",
    },
    {
      id: 2,
      name: "Student Visa (F1)",
      description: "You must have a student visa to study in the United States. Your course of study and the type of school you plan to attend determine whether you need an F visa or an M visa.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGdxUs6m7B7Bg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725267383873?e=2147483647&v=beta&t=x8K4beLF8uqIXskxC25AOLWULxEzM8RMd2W4zBnghkk",
      VisaType: " ",
      Fee: "$  USD",
      link: "/student-visa",
    },
    {
      id: 3,
      name: "Work Visa (H1B, L1)",
      description: "Temporary worker visas are for persons who want to enter the United States for employment lasting a fixed period of time, and are not considered permanent or indefinite. Each of these visas requires the prospective employer to first file a petition with U.S. Citizenship and Immigration Services (USCIS). An approved petition is required to apply for a work visa.",
      image: "https://images.ctfassets.net/uwf0n1j71a7j/5sPtHfvxD9zByosAIrnOKf/86121c5008eeec2b0a67c9d3e4bb9e31/h1b-visa.png",
      VisaType: " ",
      Fee: "$  USD",
      link: "/work-visa",
    },
    {
      id: 4,
      name: "Business Visa",
      description: "For business professionals.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/3/IE/XF/WH/112977754/business-visa-services-500x500.jpeg",
      VisaType: " ",
      Fee: "$  USD",
      link: "/business-visa",
    },
    {
      id: 5,
      name: "Dependent Visa (H4, L2)",
      description: "For dependents of visa holders.",
      image: "https://h1b.techfetch.com/wp-content/uploads/2022/03/blog-10.jpg",
      VisaType: " ",
      Fee: "$  USD",
      link: "/dependent-visa",
    },
    {
      id: 6,
      name: "Transit Visa (C1/D)",
      description: "Transit (C) visas are nonimmigrant visas for persons traveling in immediate and continuous transit through the United States en route to another country, with few exceptions. Crewmember (D) visas are nonimmigrant visas for persons working on board commercial sea vessels or international airlines in the United States.",
      image: "https://www.usvisa.ae/blog/wp-content/uploads/2022/12/US-Transit-Visa.jpg",
      VisaType: " ",
      Fee: "$  USD",
      link: "/transit-visa",
    },
  ]);

  return (
    <>
      <Navbar />

      
        <div className="visa-type-header">
          <h1>Know your visa type!</h1>
          <p>Most Canadian citizens and many citizens from Visa Waiver Program countries can come to the U.S. <br></br>without a visa if they meet certain requirements, which you can read about here.</p>
        </div>
        <div className="visa-type-container">
        <div className="visa-type-bottom-container">
          {visaTypes.map((visa) => (
            <li key={visa.id} className="visa-type-bottom-container-list">
              <Link to={visa.link} className="visa-type-bottom-card">
                <img
                  src={visa.image}
                  alt={visa.name}
                  className="visa-type-image"
                />
                <div className="card-info">
                  <h4>{visa.name}</h4>
                  <p className="fee">{visa.Fee}</p>
                  <p className="type">{visa.VisaType}</p>
                  <p>{visa.description}</p>
                </div>
              </Link>
              
            </li>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
}
