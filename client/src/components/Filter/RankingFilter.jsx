import React, { useState } from "react";
import "./CommonStyle.css";

export default function RankingFilter({ onFilter }) {
    const [minRank, setMinRank] = useState("");
    const [maxRank, setMaxRank] = useState("");

    const handleFilter = () => {
        onFilter({ min: minRank, max: maxRank });
    };

    return (
        <div className="Filter-container">
            <h3>Filter by Ranking</h3>
            <div className="filter-range">
                <input
                    type="number"
                    placeholder="Min Rank"
                    value={minRank}
                    onChange={(e) => setMinRank(e.target.value)}
                    className="range-input"
                />
                <input
                    type="number"
                    placeholder="Max Rank"
                    value={maxRank}
                    onChange={(e) => setMaxRank(e.target.value)}
                    className="range-input"
                />
            </div>
            <button onClick={handleFilter} className="apply-btn">
                Apply
            </button>
        </div>
    );
}
