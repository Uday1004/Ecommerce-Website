import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
 
import { DataContainer } from "../App";
import { Link } from "react-router-dom";
import "./style/style.scss";
import logo from "../Images/logoicon.png";

export default function Navbar() {
  const { CartItems, setCartItems} = useContext(DataContainer);

  useEffect(() => {
    if (CartItems.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid nav-container">
      <Link className="navbar-brand" to="/" style={{marginLeft:10}}><img className="logo" src={logo} alt="loading..." /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation"
      
      style={{
        border:'none'
      }}
      >
        <span ><FontAwesomeIcon icon={faBars}/></span>
      </button>
      <div className="collapse navbar-collapse navtop" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
          <li className="nav-item mx-2 my-1">
            <Link className="nav-link active element" aria-current="page" to="/"
            style={{
              fontWeight: "bold",
              borderRadius: 9,
              background: "#fff",
              boxShadow: "3px 5px 10px gray",
            }}
            >Home
            </Link>
          </li>
          <li className="nav-item mx-2 my-1 ">
            <Link className="nav-link active element" to="/shop" 
            style={{
              fontWeight: "bold",
              borderRadius: 9,
              background: "#fff",
              boxShadow: "3px 5px 10px gray",
            }}
            >Shop
            </Link>
          </li>
          <li className="nav-item mx-2 my-1 ">
            <Link className="nav-link active element" to="/Exclusive"
            style={{
              fontWeight: "bold",
              borderRadius: 9,
              background: "#fff",
              boxShadow: "3px 5px 10px gray",
            }}
            >Exclusive
            </Link>
          </li>
          <li className="nav-item mx-2 my-1">
            <Link className="nav-link active element" to="#box" tabindex="-1" aria-disabled="true"
            style={{
              fontWeight: "bold",
              borderRadius: 9,
              background: "#fff",
              boxShadow: "3px 5px 10px gray",
            }}
            >About us</Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link element2"
              to="/cart"
              data-num={CartItems.length}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
          <li className="nav-item mx-2">
              <Link className="nav-link active element2" to="/Login">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
  );
}
