import { useState } from 'react';

import HeaderLink from './HeaderLink';
import Logo from '../Logo/Logo';
import MobileNav from './MobileNav';
import MobileNavOpen from './MobileNavOpen';

import classes from './Header.module.css'

function Header() {

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  function openMobileNav() {
    setMobileNavIsOpen(false);
  };

  function closeMobileNav() {
    setMobileNavIsOpen(true);
  };

  return(
    <div className={classes.headerContainer}>
      <div className={classes.headerBanner}>
          <div className={classes.logo}><Logo /></div>
          <div className={classes.headerContact}>
            <span>07768 316371</span>
            <span>info@professionalhouseservices.co.uk</span>
          </div>
          <div className={classes.mobileNav}>
            {mobileNavIsOpen === false && <MobileNav onClick={openMobileNav}/>}
            {mobileNavIsOpen === true && <MobileNavOpen onClick={closeMobileNav}/>}
          </div>
    </div>

      <div className={classes.navigationContainer}>
        <HeaderLink title={'Home'} root={''}/>
        <HeaderLink title={'About Us'} root={'About-Us'}/>
        <HeaderLink title={'House Clearances'} root={'House-Clearance-Service'}/>
        <HeaderLink title={'Renovations'} root={'Renovations'}/>
        <HeaderLink title={'Areas Covered'} root={'Areas-Covered'}/>
        <HeaderLink title={'Contact Us'} root={'Contact-Us'}/>
      </div>
    </div>
  );
};

export default Header;
