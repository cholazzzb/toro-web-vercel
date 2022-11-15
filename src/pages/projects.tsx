import { NextPage } from 'next';
import { useState } from 'react';
import { FloatingButton } from 'components/Button';
import { Layout } from 'components/Layout';
import Navigation from 'components/Navigation';

const Projects: NextPage = () => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);
  const handleOpenNavigation = () => {
    setNavigationOpen(true);
  };
  const handleCloseNavigation = () => {
    setNavigationOpen(false);
  };

  return (
    <Layout>
      <FloatingButton
        color="green"
        onClick={handleOpenNavigation}
        iconSrc="/icons/navigation.svg"
      />
      {navigationOpen && <Navigation />}
    </Layout>
  );
};

export default Projects;
