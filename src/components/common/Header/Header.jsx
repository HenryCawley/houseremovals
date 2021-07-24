import HeaderLink from './HeaderLink';
import Logo from '../Logo/Logo';

import classes from './Header.module.css'

function Header() {
  return(
    <div className={classes.headerContainer}>
      <div className={classes.headerBanner}>
          <div className={classes.logo}><Logo /></div>
          <div className={classes.headerContact}>
            <span>Call: 07729 343 232</span>
            <span>Email: removals@sosoremovals.com</span>
          </div>
      </div>

      <div className={classes.navigationContainer}>
        <HeaderLink title={'Home'} root={'Home'}/>
        <HeaderLink title={'About Us'} root={'About-Us'}/>
        <HeaderLink title={'House Clearances'} root={'House-Clearance-Service'}/>
        <HeaderLink title={'Renovations'} root={'Renovations'}/>
        <HeaderLink title={'Areas Covered'} root={'Areas-Covered'}/>
        <HeaderLink title={'Our Prices'} root={'Our-Prices'}/>
        <HeaderLink title={'Customer Reviews'} root={'Customer-Reviews'}/>
        <HeaderLink title={'Contact Us'} root={'Contact-Us'}/>
      </div>
    </div>
  );
};

export default Header;
