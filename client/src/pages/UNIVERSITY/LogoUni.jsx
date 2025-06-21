import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { IoBookmarkOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import { fetchAllUniversity } from "../../services/api";
import "./LogoUni.css";
import { Link } from "react-router-dom";

export default function LogoUni() {
    const [universityData, setUniversityData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUniversity = async () => {
            try {
                const data = await fetchAllUniversity();
                setUniversityData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load universities");
                setLoading(false);
            }
        };
        getUniversity();
    }, []);

    if (loading) {
        return <div>Loading universities...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="main-container">
                <section className="section">
                    <div className="uni-head">
                        <h1>Find Country-Wise Universities</h1>
                    </div>

                    <div className="university-grid productItem">
                        {universityData
                            .filter((university) => university.imageUrl) // Only display cards with images
                            .map((university, index) => (
                                <div className="university-card" key={index}>
                                    <div className="imgWrapper">
                                        <img
                                            src={university.logo}
                                            alt="university"
                                            className="w-100"
                                        />
                                        <div className="actions">
                                            <Button>
                                               <Link to={`/universities/${university._id}`}> <SlSizeFullscreen /></Link>
                                            </Button>
                                            <Button>
                                            <IoBookmarkOutline style={{ fontSize: "20px" }} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <p style={{ color: "#007bff", fontWeight: "600" }}>
                                            {university.universityName}
                                        </p>
                                        <p>Location: {university.location}</p>
                                        <p>Fee: {university.fees}</p>
                                        <p>Type: {university.uniType}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </>
    );
}
