import React from 'react';
import Logo from "../Assets/volvo-logo-2x.png"

const Header = () => {
  return (
    <div style={{width: "100%", height: "80px", textAlign: "center", borderBottom: "2px solid darkgray", padding: "12px 0", marginBottom: "30px"}}>
      <img style={{height: "55px"}} src={Logo} alt="volvo-logo"/>
    </div>
  )
};

export default Header;