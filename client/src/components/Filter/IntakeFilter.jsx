import React, { useState } from "react";
import "./CommonStyle.css";

export default function IntakeFilter({ onFilter }) {
    const [intakeDate, setIntakeDate] = useState("");

    const handleFilter = () => {
        onFilter(intakeDate);
    };

    return (
        <div className="Filter-container">
            <h3>Filter by Intake Date</h3>
            <input
                type="date"
                value={intakeDate}
                onChange={(e) => setIntakeDate(e.target.value)}
                className="date-input"
            />
            <button onClick={handleFilter} className="apply-btn">
                Apply
            </button>
        </div>
    );
}
