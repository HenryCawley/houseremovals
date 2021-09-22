import classes from './Footer.module.css'

function Footer() {
  return(
    <div className={classes.footerContainer}>
      <div className={classes.footerColumns}>
        <div className={classes.textColumn}>
          <h2>Recycling</h2>
          <p>We aim to recycle as many goods as possible, primarily through donating items to charity or by disposing responsibly</p>
        </div>

        <div className={classes.textColumn}>
          <h2>Environmental Agency</h2>
          <p>North London Property Clearance and Renovations is fully insured and has a Environment Agency Waste Carrier licence.</p>
          <h3>Registration No. CBDU8011</h3>
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
        2021 | North London Property Clearance and Renovations Ltd
      </div>
    </div>
  );
};

export default Footer;
