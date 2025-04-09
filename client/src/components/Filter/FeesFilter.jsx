import React, { useState } from "react";
import "./CommonStyle.css";
import { CiSearch } from "react-icons/ci";

export default function FeesFilter({ onFilter }) {
    const [minFees, setMinFees] = useState("");
    const [maxFees, setMaxFees] = useState("");

    const handleFilter = () => {
        onFilter({ min: minFees, max: maxFees });
    };

    return (
        <div className="Filter-container">
            <div className="filter-container">
            <h3>Filter by Fees</h3>
            <div className="filter-range">
            <CiSearch className="search-icon" />
                <input
                    type="number"
                    placeholder="Min Fees"
                    value={minFees}
                    onChange={(e) => setMinFees(e.target.value)}
                    className="range-input"
                />
                <input
                    type="number"
                    placeholder="Max Fees"
                    value={maxFees}
                    onChange={(e) => setMaxFees(e.target.value)}
                    className="range-input"
                />
            </div>
            <button onClick={handleFilter} className="apply-btn">
                Apply
            </button>
        </div>
        </div>
    );
}
