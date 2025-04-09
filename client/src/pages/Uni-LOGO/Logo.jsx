import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import "./Logo.css";
import { Button } from "@mui/material";
import { fetchUniversity } from "../../services/api";

export default function Logo() {
    const [universityData, setUniversityData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const scrollRef = useRef(null);

    useEffect(() => {
        const getUniversity = async () => {
            try {
                const data = await fetchUniversity();
                setUniversityData(data); // Corrected state update
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load universities");
                setLoading(false); // Set loading to false even if there's an error
            }
        };
        getUniversity();
    }, []);



    if (loading) {
        return <div>Loading universities ....</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="main-container">
            <section className="section">
                <div className="universities">
                    <div className="uni-head">
                        <h1>Find Country Vise Universities </h1>
                         {/* <p>Explore your <b>Dream</b> University</p> */}
                    </div>

                    {/* Scrollable list */}
                    <ul className="logo-container" ref={scrollRef}>
                        {universityData
                            .filter((university) => university.logo) // Skip if no logo
                            .map((university, index) => (
                                <Link to="/universities/all" key={index}>
                                    <li className="logo-container">
                                        <div className="logo-card">
                                            <img
                                                src={university.logo}
                                                alt="university-logo"
                                                className="animated-logo" // Apply animated styles
                                            />
                                        </div>
                                    </li>
                                </Link>
                            ))}
                    </ul>

                    <Button className="view-btn"><Link to="/universities/all">View All</Link></Button>
                </div>
            </section>
        </div>
    );
}
