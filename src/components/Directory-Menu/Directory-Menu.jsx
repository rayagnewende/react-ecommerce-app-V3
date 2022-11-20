import React from "react";
import MenuItem from "../Menu-Item/Menu-Item";
import "./Directory-Menu.scss";

function DirectoryMenu({ data }) {
  const dataList = data.map(({ id, title, imageUrl, size }) => {
    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
  });
  return <div className="directory-menu">{dataList}</div>;
}

export default DirectoryMenu;
