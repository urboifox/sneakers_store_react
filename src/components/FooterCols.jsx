/* eslint-disable react/prop-types */
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const FooterCols = ({ heading, links }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <ul>
        {links.map((e) => {
          return (
            <li key={nanoid()}>
              <Link to={e.to} target={e.blank ? "_blank" : "_self"}>
                {e.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCols;
