import PageTitle from '../../common/PageTitle/PageTitle.jsx';

import classes from './ContactUs.module.css'

function ContactUs() {
  return(
    <>
      <PageTitle title={'Contact Us'} />

        <form className={classes.container} method="POST" enctype="multipart/form-data" action="http://www.professionalhouseservices.co.uk/emailHandler.php">
          <div className={classes.firstRow}>
            <input placeholder="Name" type="text" name="visitor_name" required/>
            <input placeholder="Number" type="tel" name="tel_number" required/>
            <input placeholder="Email" type="email" name="visitor_email" required/>
          </div>
          <div className={classes.secondRow}>
            <textarea placeholder="Message" rows="6" name="visitor_message" required/>
          </div>
          <div className={classes.thirdRow}>
            <button type="submit">send</button>
          </div>
        </form>
    </>
  );
};

export default ContactUs;
