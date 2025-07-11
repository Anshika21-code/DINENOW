import React from "react";
import { data } from "../restApi.json";


const Footer = () => {
  const logo = "./logoo.svg"; // Since it's in public folder
  return (
    <footer>
      <div className="container">
        <div className="banner">
           <div className="logo">
          <img src={logo} alt="Logo"  style={{width: '90px', height: '90px'}}/>
        </div>
          <div className="right">
            <p>M6 Tilak Nagar, Bhatinda</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By ANSHIKA TANK</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By ANSHIKA TANK.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;