import { useState } from "react";
import { LOGO_URL } from "../common/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div id="logo">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() =>
              loginLogout == "Login"
                ? setLoginLogout("Logout")
                : setLoginLogout("Login")
            }
          >
            {loginLogout}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
