import React from "react";
import "./Slot.css";
import { useEffect } from "react";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import VisaSteps from "../../pages/USslot/VisaSteps/VisaSteps.jsx";
import VisaSlotAvailability from "./VisaAvalibility/index.jsx";
import VisaFilter from "./VisaFilter/VisaFilter.jsx";

export default function DependentVisa() {
    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);




    const faqData = [
        {
            question: "Why do you want to study in the US?",
            answer: "The US offers top-ranked universities and diverse programs that match my academic goals.",
        },
        {
            question: "What are your plans after graduation?",
            answer: "I plan to return to my home country and utilize my degree for a better career.",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="visa-main-container">
                <div className="left-side">
                    <VisaFilter />
                </div>

                <div className="right-side">
                    <h1 className="title">Dependent Visa for the USA</h1>
                    <p className="subtitle">
                        Everything you need to know about applying for an F1 or M1 visa.
                    </p>
                    <div className="slot-image">
                        <p>The United States welcomes foreign citizens who come to the U.S. to study. Before applying for a visa, all student visa applicants are required to be accepted and approved by their school or program. Once accepted, the educational institution will provide the applicant with the necessary approval documentation to be submitted when applying for a student visa. Student (F and M) visas for new students can be issued up to 365 days in advance of the start date for a course of study, and students can travel within 30 days from the start date on the Form I-20.</p>
                    </div>
                    <div className="visa-container">

                        <section>
                            <h1>Visa descriptions and qualifications</h1>
                            <h2>F-1 visa</h2>
                            <p>
                                This is the most common type of student visa. If you wish to engage in academic studies in the United States at an approved school, such as an accredited U.S. college or university, private secondary school, or approved English language program then you need an F-1 visa. You will also need an F-1 visa if your course of study is more than 18 hours a week.</p>
                            <h2>M-1 visa</h2>
                            <p>
                                If you plan engage in non-academic or vocational study or training at a U.S. institution then you need an M-1 visa.</p>
                        </section>
                        <section>
                            <VisaSteps />
                        </section>
                        <section className="info-section">
                            <h2>What is a Student Visa?</h2>
                            <p>
                                <b>F1 Visa:</b> For academic studies (e.g., bachelor's, master's, Ph.D.). <br />
                                <b>M1 Visa:</b> For vocational or technical training programs.
                            </p>
                        </section>

                        <section className="info-section">
                            <h2>Eligibility Criteria</h2>
                            <ul>
                                <li>Accepted into a SEVP-certified US institution.</li>
                                <li>Proof of financial capability.</li>
                                <li>Intent to return to the home country after studies.</li>
                            </ul>
                        </section>

                        <section className="info-section">
                            <h2>Required Documents</h2>
                            <ul>
                                <li>Valid passport</li>
                                <li>Form I-20</li>
                                <li>DS-160 confirmation</li>
                                <li>SEVIS fee receipt</li>
                                <li>Academic records</li>
                                <li>Proof of funds</li>
                                <li>Visa fee receipt</li>
                                <li>Ties to the home country</li>
                            </ul>
                        </section>

                        <section className="info-section">
                            <h2>Application Process</h2>
                            <ol>
                                <li>Apply to a SEVP-approved institution and receive Form I-20.</li>
                                <li>Pay the SEVIS fee online ($350).</li>
                                <li>Complete the DS-160 form at <a href="https://ceac.state.gov/" target="_blank" rel="noopener noreferrer">ceac.state.gov</a>.</li>
                                <li>Schedule your biometrics and visa interview appointments.</li>
                                <li>Attend the biometrics appointment at the VAC.</li>
                                <li>Attend the visa interview at the US Embassy/Consulate.</li>
                            </ol>
                        </section>

                        <section className="info-section">
                            <h2>Fees</h2>
                            <ul>
                                <li><b>SEVIS Fee:</b> $350</li>
                                <li><b>Visa Fee:</b> $160</li>
                                <li><b>Other Costs:</b> Courier or documentation services</li>
                            </ul>
                        </section>



                        <section className="info-section">
                            <h2>US Embassy Locations</h2>
                            <VisaSlotAvailability />
                        </section>

                        <section className="faq-section">
                            <h2>FAQs</h2>
                            {faqData.map((faq, index) => (
                                <div key={index} className="faq">
                                    <h4>{faq.question}</h4>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}
