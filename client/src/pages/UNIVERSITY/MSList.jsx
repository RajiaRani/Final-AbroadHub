
import "./ListCommonStyle.css";
import "../../styles/global.css";
import { useEffect, useState } from "react";
import { fetchUniversity } from "../../services/api";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import CountryFilter from "../../components/Filter/CountryFilter.jsx";
import CourseFilter from "../../components/Filter/CourseFilter";
import FeesFilter from "../../components/Filter/FeesFilter";
import IntakeFilter from "../../components/Filter/IntakeFilter";
import ExamFilter from "../../components/Filter/ExamFilter";
import RankingFilter from "../../components/Filter/RankingFilter";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";

export default function MSList() {
    const [universityData, setUniversityData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const [universities, setUniversities] = useState([]);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [courseFilter, setCourseFilter] = useState('');
    const [rankingFilter, setRankingFilter] = useState({ min: '', max: '' });
    const [feesFilter, setFeesFilter] = useState({ min: '', max: '' });
    const [intakeFilter, setIntakeFilter] = useState('');
    const [examFilter, setExamFilter] = useState('');

    useEffect(() => {
        const fetchUniversities = async () => {
            const response = await axios.get('/api/universities'); // Fetch all universities initially
            setUniversities(response.data);
            setFilteredUniversities(response.data);
        };
        fetchUniversities();
    }, []);



    useEffect(() => {
        const loadAllUniversities = async () => {
            try {
                setLoading(true);
                const data = await fetchUniversity();
                setUniversityData(data);
                setFilteredData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching universities:", error);
                setError("Failed to load universities");
                setLoading(false);
            }
        };
        loadAllUniversities();
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const country = searchParams.get("country");
        if (country) {
            setSelectedCountry(country);
            handleFilter({ country });
        }
    }, [location.search, universityData]);

    const handleFilter = ({ country = "", universityName = "" }) => {
        let filtered = universityData;

        if (country) {
            filtered = filtered.filter(
                (university) => university.countryName?.toLowerCase() === country.toLowerCase()
            );
        }

        // if (universityName) {
        //     filtered = filtered.filter(
        //         (university) => university.universityName?.toLowerCase().includes(universityName.toLowerCase())
        //     );
        // }

        setFilteredData(filtered);
        setError(filtered.length ? null : "No universities found matching the selected filters.");
    };


    const filterByCourse = async () => {
        const response = await axios.get(`/api/filter/course?courseName=${courseFilter}`);
        setFilteredUniversities(response.data);
      };
      
      const filterByRanking = async () => {
        const response = await axios.get(
          `/api/filter/ranking?min=${rankingFilter.min}&max=${rankingFilter.max}`
        );
        setFilteredUniversities(response.data);
      };
      
      const filterByFees = async () => {
        const response = await axios.get(
          `/api/filter/fees?min=${feesFilter.min}&max=${feesFilter.max}`
        );
        setFilteredUniversities(response.data);
      };
      
      const filterByIntake = async () => {
        const response = await axios.get(`/api/filter/intake?intakeDate=${intakeFilter}`);
        setFilteredUniversities(response.data);
      };
      
      const filterByExam = async () => {
        const response = await axios.get(`/api/filter/exam?examName=${examFilter}`);
        setFilteredUniversities(response.data);
      };

         // Fetch all universities initially
    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const response = await axios.get("/api/universities");
                setUniversities(response.data);
                setFilteredUniversities(response.data); // Initialize both states with the same data
                setLoading(false);
            } catch (err) {
                console.error("Error fetching universities:", err);
                setError("Failed to load universities");
                setLoading(false);
            }
        };
        fetchUniversities();
    }, []);

    // Filter handlers for each filter
    const handleCountryFilter = (country) => {
        const filtered = universities.filter(
            (uni) => uni.countryName?.toLowerCase() === country.toLowerCase()
        );
        setFilteredUniversities(filtered);
    };

    const handleCourseFilter = async (courseName) => {
        try {
            const response = await axios.get(`/api/filter/course?courseName=${courseName}`);
            setFilteredUniversities(response.data);
        } catch (err) {
            console.error("Error filtering by course:", err);
        }
    };

    const handleRankingFilter = async ({ min, max }) => {
        try {
            const response = await axios.get(`/api/filter/ranking?min=${min}&max=${max}`);
            setFilteredUniversities(response.data);
        } catch (err) {
            console.error("Error filtering by ranking:", err);
        }
    };

    const handleFeesFilter = async ({ min, max }) => {
        try {
            const response = await axios.get(`/api/filter/fees?min=${min}&max=${max}`);
            setFilteredUniversities(response.data);
        } catch (err) {
            console.error("Error filtering by fees:", err);
        }
    };

    const handleIntakeFilter = async (intakeDate) => {
        try {
            const response = await axios.get(`/api/filter/intake?intakeDate=${intakeDate}`);
            setFilteredUniversities(response.data);
        } catch (err) {
            console.error("Error filtering by intake date:", err);
        }
    };

    const handleExamFilter = async (examName) => {
        try {
            const response = await axios.get(`/api/filter/exam?examName=${examName}`);
            setFilteredUniversities(response.data);
        } catch (err) {
            console.error("Error filtering by exam:", err);
        }
    }; 

      
    if (loading) {
        return <div>Loading universities...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const introHeading = selectedCountry
        ? `Discover Universities in ${selectedCountry}`
        : "Explore Country Vise Global Universities ";

    const introText = selectedCountry
        ? `Embark on an academic journey in ${selectedCountry} with our curated selection of universities. Explore standout programs designed to shape your future in fields like engineering, business, medicine, and more.`
        : `Discover renowned universities worldwide, offering transformative programs across various fields. Whether you're eyeing studies in the USA, UK, Canada, Germany, or Ireland, our listings offer tailored details on each university.`;

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="body-container">
                {/* <ScrollToTopButton/> */}
                <section className="uni-main-container">
                    <h4>{introHeading}</h4>
                    <p>{introText}</p>
                    <br />
                    <div className="uni-container">
                        <div className="uni-list-leftSide-container">
                            <CountryFilter
                                onFilter={handleFilter}
                                availableCountries={["USA", "Canada", "UK", "Germany", "Ireland"]}
                                selectedCountry={selectedCountry}
                                setSelectedCountry={setSelectedCountry}
                            />
                            <hr />
                            <CourseFilter onFilter={handleCourseFilter} />
                             {/* <RankingFilter onFilter={handleRankingFilter} />
                             <FeesFilter onFilter={handleFeesFilter} />
                            <IntakeFilter onFilter={handleIntakeFilter} />
                             <ExamFilter onFilter={handleExamFilter} /> */}
                            

                        </div>
                        <div className="uni-list-rightSide-container">
                            {filteredData.map((university, uniIndex) => (
                                <ul className="uni-list-container" key={uniIndex}>
                                    <li className="university-container">
                                        <Link to={`/universities/${university._id}`} className="universities-cards-info-link">
                                            <div className="universities-cards">
                                                <div className="universities-cards-info">
                                                    <div className="uni-image">
                                                        <img src={university.imageUrl} alt={`${university.universityName} image`} />
                                                    </div>
                                                    <div className="uni-basic-info">
                                                        <div className="d-flex">
                                                            <div>
                                                                <h6>{university.universityName}</h6>
                                                                <p><FaLocationDot /> {university.location} | {university.uniType}</p>
                                                            </div>
                                                            <Link><IoBookmarkOutline /></Link>
                                                        </div>
                                                        <hr />
                                                        <p>1st Year Tuition Fees:</p>
                                                        <p>{university.fees}</p>
                                                        {university.PG && university.PG.map((course, courseIndex) => (
                                                            <div key={courseIndex} className="course-details">
                                                                <p>Course: {course.courseName}</p>
                                                                <p>Duration: {course.duration}</p>
                                                                <p>Price: {course.price}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}














// import "./ListCommonStyle.css";
// import "../../styles/global.css";
// import { useEffect, useState } from "react";
// import axios from "axios"; // Make sure axios is imported
// import { FaLocationDot } from "react-icons/fa6";
// import Navbar from "../../components/NAVBAR/Navbar";
// import Footer from "../../components/FOOTER/Footer";
// import CountryFilter from "../../components/Filter/CountryFilter";
// import CourseFilter from "../../components/Filter/CourseFilter";
// import FeesFilter from "../../components/Filter/FeesFilter";
// import IntakeFilter from "../../components/Filter/IntakeFilter";
// import ExamFilter from "../../components/Filter/ExamFilter";
// import RankingFilter from "../../components/Filter/RankingFilter";
// import { Link } from "react-router-dom";
// import { IoBookmarkOutline } from "react-icons/io5";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function MSList() {
//     const [universities, setUniversities] = useState([]);
//     const [filteredUniversities, setFilteredUniversities] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch all universities initially
//     useEffect(() => {
//         const fetchUniversities = async () => {
//             try {
//                 const response = await axios.get("/api/universities");
//                 setUniversities(response.data);
//                 setFilteredUniversities(response.data); // Initialize both states with the same data
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching universities:", err);
//                 setError("Failed to load universities");
//                 setLoading(false);
//             }
//         };
//         fetchUniversities();
//     }, []);

//     // Filter handlers for each filter
//     const handleCountryFilter = (country) => {
//         const filtered = universities.filter(
//             (uni) => uni.countryName?.toLowerCase() === country.toLowerCase()
//         );
//         setFilteredUniversities(filtered);
//     };

//     const handleCourseFilter = async (courseName) => {
//         try {
//             const response = await axios.get(`/api/filter/course?courseName=${courseName}`);
//             setFilteredUniversities(response.data);
//         } catch (err) {
//             console.error("Error filtering by course:", err);
//         }
//     };

//     const handleRankingFilter = async ({ min, max }) => {
//         try {
//             const response = await axios.get(`/api/filter/ranking?min=${min}&max=${max}`);
//             setFilteredUniversities(response.data);
//         } catch (err) {
//             console.error("Error filtering by ranking:", err);
//         }
//     };

//     const handleFeesFilter = async ({ min, max }) => {
//         try {
//             const response = await axios.get(`/api/filter/fees?min=${min}&max=${max}`);
//             setFilteredUniversities(response.data);
//         } catch (err) {
//             console.error("Error filtering by fees:", err);
//         }
//     };

//     const handleIntakeFilter = async (intakeDate) => {
//         try {
//             const response = await axios.get(`/api/filter/intake?intakeDate=${intakeDate}`);
//             setFilteredUniversities(response.data);
//         } catch (err) {
//             console.error("Error filtering by intake date:", err);
//         }
//     };

//     const handleExamFilter = async (examName) => {
//         try {
//             const response = await axios.get(`/api/filter/exam?examName=${examName}`);
//             setFilteredUniversities(response.data);
//         } catch (err) {
//             console.error("Error filtering by exam:", err);
//         }
//     };

//     if (loading) {
//         return <div>Loading universities...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <>
//             <Navbar />
//             <ToastContainer />
//             <div className="body-container">
//                 <section className="uni-main-container">
//                     <h4>Explore Global Universities</h4>
//                     <p>
//                         Discover renowned universities worldwide, offering transformative programs across various fields.
//                     </p>
//                     <div className="uni-container">
//                         {/* Filters Section */}
//                         <div className="uni-list-leftSide-container">
//                             <CountryFilter onFilter={handleCountryFilter} />
//                             <CourseFilter onFilter={handleCourseFilter} />
//                             <RankingFilter onFilter={handleRankingFilter} />
//                             <FeesFilter onFilter={handleFeesFilter} />
//                             <IntakeFilter onFilter={handleIntakeFilter} />
//                             <ExamFilter onFilter={handleExamFilter} />
//                         </div>

//                         {/* University Cards Section */}
//                         <div className="uni-list-rightSide-container">
//                             {Array.isArray(filteredUniversities) && filteredUniversities.length > 0 ? (
//                                 filteredUniversities.map((university, uniIndex) => (
//                                     <ul className="uni-list-container" key={uniIndex}>
//                                         <li className="university-container">
//                                             <Link
//                                                 to={`/universities/${university._id}`}
//                                                 className="universities-cards-info-link"
//                                             >
//                                                 <div className="universities-cards">
//                                                     <div className="universities-cards-info">
//                                                         <div className="uni-image">
//                                                             <img
//                                                                 src={university.imageUrl}
//                                                                 alt={`${university.universityName} image`}
//                                                             />
//                                                         </div>
//                                                         <div className="uni-basic-info">
//                                                             <h6>{university.universityName}</h6>
//                                                             <p>
//                                                                 <FaLocationDot /> {university.location} | {university.uniType}
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 ))
//                             ) : (
//                                 <div>No universities found.</div>
//                             )}
//                         </div>

//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// }
