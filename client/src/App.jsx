import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import MainPage from "../src/pages/MAINPAGE/MainPage.jsx";
import Country from "./pages/COUNTRY/Country.jsx";
import CountryDetails from "./pages/COUNTRY/CountryDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Universities from "./pages/UNIVERSITY/Universities.jsx";
import MSList from "./pages/UNIVERSITY/MSList.jsx";
import LogoUni from "./pages/UNIVERSITY/LogoUni.jsx";
import UniversityDetails from "./pages/UNIVERSITY/UniversityDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import SignUp from "../src/UserPage/Passport/Signup.jsx";
import Login from "../src/UserPage/Passport/Login.jsx";
// import Dashboard from "./pages/USER-DASHBOARD/Dashboard.jsx";

import VisaType from "./pages/TOURISTVISA/USslot/VisaSteps/VisaType.jsx";

import Navbar from "../src/components/NAVBAR/Navbar.jsx";
import Footer from "../src/components/FOOTER/Footer.jsx";
import Hero from "./pages/TOURISTVISA/USslot/Hero/Hero.jsx";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="/universities/:id" element={<UniversityDetails />} />
        <Route path="/universities" element={<MSList />} />
        <Route path="/universities/all" element={<LogoUni />} />

        <Route path="/visa-type" element={<VisaType />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/*------------------------- USA Tourist Visa Start ---------------------------*/}
        {/* <Route path="/usa-tourist" element={<Slot />} />
        <Route path="/student-visa" element={<StudentVisa />} />
        <Route path="/tourist-visa" element={<TouristVisa />} />
        <Route path="/work-visa" element={<WorkVisa />} />
        <Route path="/business-visa" element={<BusinessVisa />} />
        <Route path="/dependent-visa" element={<DependentVisa />} />
        <Route path="/transit-visa" element={<TransitVisa />} /> */}


        {/* {Hero()} */}


        
        {/*------------------------- USA Tourist Visa End ---------------------------*/}

        {/*------------------------- Canada Tourist Visa Start ---------------------------*/}
         
        {/*------------------------- CanadaTourist Visa End ---------------------------*/}

        {/*------------------------- France Tourist Visa Start ---------------------------*/}
        {/*------------------------- France Tourist Visa End ---------------------------*/}
        {/* <Route path="/user-dashboard" element={<Dashboard />} /> */}

        {/*-------------------------- 404 Not Found Route--------------------------*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
