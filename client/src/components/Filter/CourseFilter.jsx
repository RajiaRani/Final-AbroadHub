import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import "./CommonStyle.css";

export default function CourseFilter({ onFilter }) {
    const [courseSearchTerm, setCourseSearchTerm] = useState("");

    const handleFilter = () => {
        onFilter(courseSearchTerm);
    };

    const clearCourseSearch = () => setCourseSearchTerm("");

    return (
        <div className="Filter-container">
               <div className="filter-container">
            <h3>Filter by Course</h3>
            <div className="filter-btn">
                <CiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search Course"
                    value={courseSearchTerm}
                    onChange={(e) => setCourseSearchTerm(e.target.value)}
                    className="search-input"
                />
                {courseSearchTerm && (
                    <MdClear className="clear-icon" onClick={clearCourseSearch} />
                )}
            </div>
            <button onClick={handleFilter} className="apply-btn">
                Search
            </button>
        </div>
        </div>
    );
};
