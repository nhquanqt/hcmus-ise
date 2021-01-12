import React from 'react';
import '../App.css';
import Navbar from "./Navbar"
import SeekerProfileScreen from "../screens/SeekerProfileScreen"

function SeekerProfile() {
  return (
    <div>
        <Navbar />
        <SeekerProfileScreen />
    </div>
  );
}

export default SeekerProfile;