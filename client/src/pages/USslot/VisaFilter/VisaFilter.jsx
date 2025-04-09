import { Link } from "react-router-dom";
import "./VisaFilter.css";

export default function VisaFilter() {
    return (
        <div className="visa-filter-container">
            <ul>
                <li><Link to="/business-visa">Business Visa</Link></li>
                <li><Link to="/tourist-visa">Tourist Visa</Link></li>
                <li><Link to="/student-visa">Student Visa</Link></li>
                <li><Link to="/work-visa">Work Visa</Link></li>
                <li><Link to="/dependent-visa">Dependent Visa</Link></li>
                <li><Link to="/transit-visa">Transit Visa</Link></li>
            </ul>
        </div>
    );
}
