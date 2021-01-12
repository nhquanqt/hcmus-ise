import React from 'react';
import '../App.css';
import Navbar from "./Navbar"
import SearchJob from "../components/search-job.component"

function Home() {
  return (
    <div>
        <Navbar />
        <SearchJob />
    </div>
  );
}

export default Home;