import classes from './Logo.module.css';
import LogoSVG from './Logo.svg';

function Logo() {
  return(
    <div className={classes.logoContainer}>
      <div className={classes.logoVanIcon}><img src={LogoSVG}/></div>
    </div>
  );
};

export default Logo;
