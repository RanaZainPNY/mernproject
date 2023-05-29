import React from "react";
import { Link } from "react-router-dom";

const LinkCategories = () => {
  return (
    <>
      <div>
        <div>
          <h2>Plates Edition</h2>
          <P>check our Limited Edition Plates</P>
        </div>
        <li>
          <Link to="/">
            <span className="fs-4">Limited Edition Plates</span>{" "}
          </Link>
        </li>
        <li>
          <Link to="/music">
            <span className="fs-4">Music Related</span>
          </Link>
        </li>
        <li>
          <Link to="/photograpics">
            <span className="fs-4">Photograpics</span>
          </Link>
        </li>
        <li>
          <Link to="/stamp">
            <span className="fs-4">Stamp</span>
          </Link>
        </li>
      </div>
    </>
  );
};

export default LinkCategories;
