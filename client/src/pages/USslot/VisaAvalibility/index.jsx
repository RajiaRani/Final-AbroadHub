import React, { useState, useEffect } from "react";
import "./index.css";

const VisaSlotAvailability = () => {
    const [slots, setSlots] = useState([
        { city: "New Delhi", embassy: "US Embassy", availability: "Loading..." },
        { city: "Mumbai", embassy: "US Consulate General", availability: "Loading..." },
        { city: "Hyderabad", embassy: "US Consulate General", availability: "Loading..." },
        { city: "Chennai", embassy: "US Consulate General", availability: "Loading..." },
        { city: "Kolkata", embassy: "US Consulate General", availability: "Loading..." },
    ]);

    // Simulate fetching real-time data
    useEffect(() => {
        const fetchSlotData = async () => {
            // Simulated API response
            const response = [
                { city: "New Delhi", availability: "live check" },
                { city: "Mumbai", availability: "live check" },
                { city: "Hyderabad", availability: "live check" },
                { city: "Chennai", availability: "live check" },
                { city: "Kolkata", availability: "live check" },
            ];

            setTimeout(() => {
                setSlots((prevSlots) =>
                    prevSlots.map((slot) => ({
                        ...slot,
                        availability:
                            response.find((res) => res.city === slot.city)?.availability || "Data unavailable",
                    }))
                );
            }, 1000); // Simulate network delay
        };

        fetchSlotData();
    }, []);

    return (
        <div className="visa-slot-container">
            <h2 className="title">Visa Slot Availability</h2>
            <table className="visa-slot-table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Embassy/Consulate</th>
                        <th>Available Slots</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.map((slot, index) => (
                        <tr key={index}>
                            <td>{slot.city}</td>
                            <td>{slot.embassy}</td>
                            <td className={slot.availability.includes("No slots") ? "no-slots" : "slots-available"}>
                                {slot.availability}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VisaSlotAvailability;
