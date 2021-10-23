import { useState } from 'react';

import HeaderLink from './HeaderLink';
import Logo from '../Logo/Logo';
import MobileNav from './MobileNav';
import MobileNavOpen from './MobileNavOpen';

import classes from './Header.module.css'

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function openMobileNav() {
    setMobileNavOpen(false);
  };

  function closeMobileNav() {
    setMobileNavOpen(true);
  };

  return(
    <div className={classes.headerContainer}>
      <div className={classes.headerBanner}>
          <div className={classes.logo}><Logo /></div>
              <div className={classes.headerContact}>
                <span>Call Us On: 07768 316371</span>
              </div>
              <div className={classes.mobileNav}>
                {mobileNavOpen === false
                  ? <a onClick={closeMobileNav}><MobileNavOpen onClick={closeMobileNav}/></a>
                  : <a onClick={openMobileNav}><MobileNav onClick={openMobileNav}/></a>
                }
              </div>
          </div>

          <div className={classes.navigationContainer} style={{display: mobileNavOpen === true  ? 'none' : 'flex'}}>
            <HeaderLink title={'Home'} root={''} />
            <HeaderLink title={'About Us'} root={'About-Us'} />
            <HeaderLink title={'House Clearances'} root={'House-Clearance-Service'}/>
            <HeaderLink title={'Renovations'} root={'Renovations'}/>
            <HeaderLink title={'Areas Covered'} root={'Areas-Covered'}/>
            <HeaderLink title={'Contact Us'} root={'Contact-Us'}/>
          </div>
    </div>
  );
};

export default Header;
