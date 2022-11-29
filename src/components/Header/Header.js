import './Header.css'
import NavState from '../Menu/Context/NavState';
import MainMenu from '../Menu/MainMenu';
import React from 'react';


function Header() {
    return (
   
      <div className= "HeaderSite">
           <div className="headerMyName">
              <h5>Oleksii Iurchenko</h5>
            </div>

           <div className="headerOnline">
           <div className="greenCircle"></div>
             <h5>Available for new projects</h5>
            </div>

           <div className="navBar">
              <NavState>
                 <MainMenu />
              </NavState>
           </div>
      </div>
 
    );
  }
  
  export default Header;