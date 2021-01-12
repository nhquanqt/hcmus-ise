import React from 'react';
import '../App.css';
import Navbar from "./Navbar"
import AddRecruitment from "../components/add-recruitment.component"

function PostJob() {
  return (
    <div>
        <Navbar />
        <AddRecruitment />
    </div>
  );
}

export default PostJob;