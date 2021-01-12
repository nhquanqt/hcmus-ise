import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

import CookieService from "../services/CookieService"
import DataService from "../services/service"

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [UserID, setUserID] = useState(CookieService.get("UserID"));
  const [profile, setProfile] = useState(false);
	const [profilePath, setProfilePath] = useState('');
	const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(true);
  const [postJob, setPostJob] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  useEffect(() => {
    // showButton();
    console.log(UserID);
    if (UserID != null) {
			setProfile(true);
			setLogin(false);
			setLogout(true);
      DataService.getUser(UserID)
      .then(data => {
        const userType = data.data.UserType;
        if (userType == "company") {
          setProfilePath("/company/profile");
          setPostJob(true);
        }
        else if (userType == "seeker") {
          setProfilePath("/seeker/profile");
          setPostJob(false);
        }
      })
    }
  }, []);

	// window.addEventListener('resize', showButton);
	
	const onClickLogout = () => {
    CookieService.remove("UserID", {path: "/"});
    if (props.location.pathname == '/home') {
      window.location.reload();
    }
    else {
      props.history.push('/home');
    }
	}

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          <i class="far fa-laugh-wink"></i>
            JOB SEARCH
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {profile &&
            <li className='nav-item'>
              <Link to={profilePath} className='nav-links' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            }
            {/* <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li> */}
            {postJob &&
            <li>
              <Link to='/recruitment/add' className='nav-links' onClick={closeMobileMenu}>
                Post Job
              </Link>
            </li>
						}
						{login &&
            <li>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
						}
						{logout &&
            <li>
              <Link to='/home' className='nav-links' onClick={onClickLogout}>
                Logout
              </Link>
            </li>
						}
          </ul>
          {/* {button && <Button path="/login" buttonStyle='btn--outline'>Login</Button>} */}
          {/* {button && <Button path="/signup" buttonStyle='btn--outline'>Register</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);