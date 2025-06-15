import "./UniversityDetails.css";
import "../../styles/global.css";
import Navbar from "../../components/NAVBAR/Navbar.jsx";
import Footer from "../../components/FOOTER/Footer.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUniversityDetailsById } from "../../services/api.js";
import { FcNext } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";

export default function UniversityDetails(){
  const {id} = useParams();
  const [universityDetails, setUniversityDetails] = useState(null);

  useEffect(() => {
    const getUniversityDetails = async() => {
        try{
         const data = await fetchUniversityDetailsById(id);
         setUniversityDetails(data);
        } catch(error){
          console.log("Failed to fetch the details", error);
        }
    };
    getUniversityDetails();
  }, [id]);



if(!universityDetails){
    return <div>Loading....</div>
}

    return (
        <>
        <Navbar/>

        <div className="main-container-university">
        <div className="background-image backgroundStyle">
               <img src={universityDetails.imageUrl} alt="university-image"  className="university-image"/>
               <img src={universityDetails.logo} alt="university-logo" className="university-logo" />
            </div>
      
            <div className="university-details">
            <h2>{universityDetails.universityName}</h2>
            <a><FaLocationDot /><strong>Location:</strong> {universityDetails.location }</a>
            <p><strong>Fees:</strong> {universityDetails.fees}</p>
            <p>{universityDetails.acceptanceRate}</p>
            <p><strong>Type:</strong> {universityDetails.uniType}</p>
            <br />
            <h4>Programs</h4>
            {universityDetails.PG.map((program, index) => (
                <div key={index} className="program-name">
                 <h5>{program.courseName} ({program.degree})</h5>
                  <div className="d-flex">
                  <p><strong>Duration:</strong> {program.duration}</p> &nbsp;
                  <p><strong>Price:</strong> ₹{program.price.toLocaleString()}</p>
                  </div>

                    <h5>Exams</h5>
                    <ul className="d-flex">
                        {program.exams.map((exam, i) => (
                            <li key={i}>{exam.examName}&nbsp;</li> 
                        ))}
                    </ul>
                    <h5>Intakes</h5>
                    <ul>
                        {program.intakes.map((intake, j) => (
                            <li key={j}>{intake.intakeName} - {intake.intakeDate} </li>
                        ))}
                    </ul>
                </div>
            ))}
                 <img src={universityDetails.image2} alt="university-image"  className=""/>
                 <img src={universityDetails.image3} alt="university-image"  className=""/>
                 <img src={universityDetails.image4} alt="university-image"  className=""/>
            </div>


        </div>
        <Footer/>

        </>
    )
}