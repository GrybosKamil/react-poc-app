import { useContext } from "react";

import ThemeContext from "../../context/theme/ThemeContext";

import Sidebar from "../sidebar/Sidebar";
import PageContent from "./PageContent";

import "./PageContentContainer.scss";

const PageContentContainer = () => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <div className="page-content-container container">
      <div className="col-3 page-sidebar">
        <Sidebar />
      </div>

      <div className="col-9 page-content">
        <PageContent />
      </div>
    </div>
  );
};

export default PageContentContainer;
