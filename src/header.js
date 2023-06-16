import React, { Component } from "react";
import styles from "./styles.js";
import "./App.css";
import logo from "./chlaLogo.png";

function Header(props) {
  return (
    <div>
      <div className="row header">
        <div className = "col-12" ><img className = "image" src = {logo}/></div>
      </div>
    </div>
  );
}
export default Header;
