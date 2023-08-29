import Backdrop from '../components/Backdrop/Backdrop';
import { SideBar } from 'components';
import Header from 'components/AppShell/Header/Header';
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
      <Header toggleMenu={toggleMenu}></Header>
      <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}></SideBar>
      {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
    </>
  );
}

export default SideBarTopBar;
