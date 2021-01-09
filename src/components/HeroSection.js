import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  let job = '';
  let location ='';
  const handleChange = (event) => {
    console.log(event.target.value);
    job = event.target.value;
  }

  const handleChangeSelect = (event) =>{
    console.log(event.target.value);
    location = event.target.value ;
  }

  const handleSubmit = (event)=> {
    alert('A name was submitted: ' + job + '&' + location);
    event.preventDefault();
}
  
  return (
    <div className='hero-container'>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <input
        type = "text"
          className='btns'
         placeholder = "Search.."
         onChange={handleChange}
        >
        </input>
        <select className = 'btns'
         onChange={handleChangeSelect}>
          <option value="" title="All Locations">All Locations</option>
          <option value="Ho Chi Minh" title="Ho Chi Minh">Ho Chi Minh</option>
          <option value="Ha Noi" title="Ha Noi">Ha Noi</option>
          <option value="Da Nang" title="Da Nang">Da Nang</option>
        </select>

        <Button
          className='btns'
          type='submit'
          onClick={handleSubmit}
        > 
          SEARCH <i className='far fa-search' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
