import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import "./CommonStyle.css";

export default function ExamFilter({ onFilter }) {
    const [examSearchTerm, setExamSearchTerm] = useState("");

    const handleFilter = () => {
        onFilter(examSearchTerm);
    };

    const clearExamSearch = () => setExamSearchTerm("");

    return (
        <div className="Filter-container">
            <h3>Filter by Exam</h3>
            <div className="filter-btn">
                <CiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search Exam"
                    value={examSearchTerm}
                    onChange={(e) => setExamSearchTerm(e.target.value)}
                    className="search-input"
                />
                {examSearchTerm && (
                    <MdClear className="clear-icon" onClick={clearExamSearch} />
                )}
            </div>
            <button onClick={handleFilter} className="apply-btn">
                Search
            </button>
        </div>
    );
}
