import { FloatingButton } from "components/Button";
import Navigation from "components/Navigation";
import { NextPage } from "next";
import { useState } from "react";

const Projects: NextPage = () => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);
  const handleOpenNavigation = () => {
    setNavigationOpen(true);
  };
  const handleCloseNavigation = () => {
    setNavigationOpen(false);
  };

  return (
    <div>
      <FloatingButton
        color="green"
        onClick={handleOpenNavigation}
        iconSrc="/navigation.svg"
      />
      {navigationOpen && <Navigation />}
    </div>
  );
};

export default Projects;
