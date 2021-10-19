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
          <form className={classes.callbackRequest} method="POST" enctype="multipart/form-data" action="http://www.professionalhouseservices.co.uk/callbackHandler.php">
            <h2>Request a Callback</h2>
            <input className={classes.input} type='text' placeholder='Name' name="visitor_name" required/>
            <input className={classes.input} placeholder='Phone Number' type="tel" name="tel_number" required/>
            <button className={classes.button} type="submit">Request A Callback</button>
          </form>
        </div>
      </div>

      <div className={classes.copyright}>
        2021 | North London Professional Property Services
      </div>
    </div>
  );
};

export default Footer;
