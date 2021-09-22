import classes from './MobileNav.module.css';

function MobileNav() {
  return (
      <div className={classes.cross}>
        <div className={classes.forward}></div>
        <div className={classes.backward}></div>
      </div>
);
}

export default MobileNav;
