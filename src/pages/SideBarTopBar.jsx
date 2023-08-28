import Backdrop from '../components/Backdrop/Backdrop';
import { SideBar, TopBar } from 'components';
import React, { useEffect, useState } from 'react';

function SideBarTopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMenuOpen(window.innerWidth >= 1440);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <TopBar toggleMenu={toggleMenu}></TopBar>
      <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}></SideBar>
      {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
    </>
  );
}

export default SideBarTopBar;
