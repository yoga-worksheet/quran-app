import React from "react";
import { PAGES } from "../../constants/pages";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        {PAGES.map((page) => (
          <li>
            <Link to={page.link}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
