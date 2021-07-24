import classes from './Logo.module.css';
import LogoSVG from './Logo.svg';

function Logo() {
  return(
    <div className={classes.logoContainer}>
      <div className={classes.logoVanIcon}><img src={LogoSVG}/></div>
      <div className={classes.logoVanText}><span className={classes.logoText}>North London House Clearance and Renovations</span></div>
    </div>
  );
};

export default Logo;
