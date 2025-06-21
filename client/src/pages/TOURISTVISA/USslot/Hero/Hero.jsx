import StudentVisa from "../StudentVisa.jsx";
import TouristVisa from "../TouristVisa.jsx";
import WorkVisa from "../WorkVisa.jsx";
import TransitVisa from "../TransitVisa.jsx";
import BusinessVisa from "../BusinessVisa.jsx";
import DependentVisa from "../DependentVisa.jsx";
import Slot from "../Slot.jsx";
import React from "react";

import { Route, Routes } from "react-router-dom";
function Hero() {
  return (
    <>
      <Routes>
        <Route exact path="/usa-tourist" element={<Slot />} />
        <Route path="/student-visa" element={<StudentVisa />} />
        <Route path="/tourist-visa" element={<TouristVisa />} />
        <Route path="/work-visa" element={<WorkVisa />} />
        <Route path="/business-visa" element={<BusinessVisa />} />
        <Route path="/dependent-visa" element={<DependentVisa />} />
        <Route path="/transit-visa" element={<TransitVisa />} />
      </Routes>
    </>
  );
}

export default Hero;
