import Home from "../HOME/Home.jsx";
import VisaInfo from "../VISAINFO/VisaInfo.jsx";
import VisaSteps from "../VISASTEP/VisaSteps.jsx";
import Services from "../SERVICES/Services.jsx";
import Experts from "../EMOPLYEE/Experts.jsx";
import Tourist from "../TOURIST/Tourist.jsx";
import Country from "../COUNTRY/Country.jsx";
import Logo from "../Uni-LOGO/Logo.jsx";
import Navbar from "../../components/NAVBAR/Navbar.jsx";
import Footer from "../../components/FOOTER/Footer.jsx";
import "./MainPage.css";
import "../../styles/global.css";
import Universities from "../UNIVERSITY/Universities.jsx";
import SideSocialMedia from "../../components/SideSocialMedia/SideSocialMedia.jsx";
import Slot from "../USslot/Slot.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";

export default function Body() {
    return (
        <>
        <div className="body-container">
        <div className="side-social-container">
            <ScrollToTopButton/>
            <SideSocialMedia/>
        </div>
                <Navbar />
                <Home />
                <Country/>
                <VisaInfo />
                <Logo/>
                <Slot/>
                <Universities/>  
                <VisaSteps />
                <Tourist />
                <Services />
                <Experts />
                <Footer />
        </div>
        </>
   
    );
}
