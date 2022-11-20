import React from "react";
import DirectoryMenu from "../../components/Directory-Menu/Directory-Menu";
import "./HomePage.scss";
import { sections } from "../../directory.data";

function HomePage() {
  return (
    <div className="homepage">
      <DirectoryMenu data={sections} />
    </div>
  );
}

export default HomePage;
