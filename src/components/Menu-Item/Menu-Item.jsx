import React from "react";
import "./Menu-Item.scss";
import { withRouter } from "react-router";
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.path}` + `${linkUrl}`)}
    >
      <div
        className="background"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
