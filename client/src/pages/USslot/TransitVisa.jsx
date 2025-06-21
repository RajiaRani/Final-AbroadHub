import React from "react";
import "./Slot.css";
import { useEffect } from "react";
import Navbar from "../../components/NAVBAR/Navbar";
import Footer from "../../components/FOOTER/Footer";
import VisaSteps from "../../pages/USslot/VisaSteps/VisaSteps.jsx";
import VisaSlotAvailability from "./VisaAvalibility/index.jsx";
import VisaFilter from "./VisaFilter/VisaFilter.jsx";

export default function TransitVisa() {
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
            <div className="visa-main-container">
                <div className="left-side">
                    <VisaFilter />
                </div>

                <div className="right-side">
                    <h1 className="title">Transit Visa for the USA</h1>
                    <p className="subtitle">
                        Everything you need to know about applying for an Transit visa.
                    </p>
                    <div className="slot-image">
                    </div>
                    <div className="visa-container">

                        <section>
                            <h1>Visa descriptions</h1>
                            <h2>Transit (C visa)</h2>
                            <p>A citizen of a foreign country traveling in immediate and continuous transit through the United States en route to a foreign destination requires a valid transit visa. Exceptions to this requirement include those travelers eligible to transit the United States without a visa under the Visa Waiver Program or travelers who are nationals of a country which has an agreement with the United States allowing their citizens to travel to the United States without visas .

                                If the traveler seeks layover privileges for purposes other than for transit through the United States, such as to visit friends or for sightseeing, the applicant will have to qualify for and obtain the type of visa required for that purpose, such as a B-2 visa.</p>

                            <h2>Crew (D visa)
                            </h2>
                            <p>A crewmember serving onboard a sea vessel or aircraft in the United States needs a crew visa. Crewmembers of an aircraft or ship that will be transiting through the United States or its waters generally use a combination transit/crew visa (C-1/D). However, in some cases, individuals may only require the D visa.

                                Crewmembers who work aboard vessels within the Outer Continental Shelf, may qualify for a modified B-1 visa in lieu of a crew visa.

                                Crewmembers who will be entering the United States during time-off between flights or cruises should also obtain a B-1/B-2 visa to use during these personal/vacation days. Applicants applying simultaneously for both a C-1/D and a B-1/B-2 visa pay only one visa application fee.</p>
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
        </>
    );

}
