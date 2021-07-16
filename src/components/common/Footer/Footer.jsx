import classes from './Footer.module.css'

function Footer() {
  return(
    <div className={classes.footerContainer}>
      <div className={classes.footerColumns}>
        <div className={classes.textColumn}>
          <h2>Recycling</h2>
          <p>SOSORecycling prioritises recycling as much </p>
        </div>

        <div className={classes.textColumn}>
          <h2>Environmental Agency</h2>
          <p>SOSORecycling holds a full Environment Agency Waste Carrier licence.</p>
          <h3>Registration No. CSDAEWQD</h3>
        </div>

        <div className={classes.callback}>
          <form className={classes.callbackRequest}>
            <h2>Request a Callback</h2>
            <input className={classes.input} type='text' placeholder='Name'/>
            <input className={classes.input} type='text' placeholder='Phone Number'/>
            <button className={classes.button}>Request A Callback</button>
          </form>
        </div>
      </div>

      <div className={classes.copyright}>
        Footer
      </div>
    </div>
  );
};

export default Footer;
