import classes from './MobileNavOpen.module.css';

function MobileNavOpen() {
  return (
      <div className={classes.cross}>
        <div className={classes.forward}></div>
        <div className={classes.backward}></div>
      </div>
);
}

export default MobileNavOpen;
