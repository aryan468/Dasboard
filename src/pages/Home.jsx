import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/uploading">Uploading</Link>
        </li>
        <li>
          <Link to="/uploaded">Uploaded</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
