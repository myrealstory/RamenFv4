import React, { useContext, useState } from "react"; //ES6 JS
import { Link } from "react-router-dom";
import LOGO from "../img/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "react-bootstrap";
import LoginProvider from "./LoginComponents/LoginProvider";
import sqlLoginContext from "./LoginComponents/sqlLoginContext"
import CartIcon from "./CartComponent/CartIcon";
// import '../App.css'

function Nav() {
  const [timedPopup, setTimedPopup] = useState(false);
  const { setActiveLogin } = useContext(LoginProvider);
  const { authorized, account,logout } = useContext(sqlLoginContext);
  const sqlLoginContext1 = useContext(sqlLoginContext);
  console.log(sqlLoginContext1);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="NavBar">
        <div>
          <Link to="/" className="navLogo">
            <img src={LOGO} alt="" className="logo" />
          </Link>
        </div>

        <div className="nav" id="navbarNav">
          <ul className="navUL">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FoodMenu" className="nav-link" href="#">
                FOOD MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Recipe" className="nav-link" href="#">
                ORDERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                LOCATION
              </Link>
            </li>
          </ul>
        </div>
        <div className="navLogin">
          <ul className="d-flex ">
            {authorized ? (
              <>
                <li className="navLi">
                  {/* <i className="fa-solid fa-cart-arrow-down white"></i> */}
                  <Link to="/Cart">
                    <CartIcon />
                  </Link>
                </li>
                <li className="Login_Red">{account}</li>
                <li>
                  <span className="WhiteSpace"> | </span>
                  <button
                    to="/"
                    className="pl-2 btn btn-warning"
                    onClick={() => {
                      logout()
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="Login_Red"
                    onClick={() => {
                      setActiveLogin(true)
                    }}
                  >
                    Login /
                  </Link>
                </li>
                <li>
                  <Link to="/Register" className="pl-2 Login_Red">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
