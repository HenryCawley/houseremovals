import classes from './Logo.module.css';
import LogoSVG from './Logo.svg';
import logo from '../../../assets/Logo.webp';

function Logo() {
  return(
    <div className={classes.logoContainer}>
      <div className={classes.logoVanIcon}><img src={logo}/></div>
    </div>
  );
};

export default Logo;
