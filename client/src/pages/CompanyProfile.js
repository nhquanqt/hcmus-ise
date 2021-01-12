import React from 'react';
import '../App.css';
import Navbar from "./Navbar"
import CompanyProfileScreen from "../screens/CompanyProfileScreen"

function CompanyProfile() {
  return (
    <div>
        <Navbar />
        <CompanyProfileScreen />
    </div>
  );
}

export default CompanyProfile;