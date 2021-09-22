import PageTitle from '../../common/PageTitle/PageTitle.jsx';
import classes from './HouseClearanceServices.module.css';

import TextBox from '../../common/Formats/TextBox.jsx';
import TwoColumns from '../../common/Formats/TwoColumns';

function HouseClearanceServices() {
  return(
    <>
    <PageTitle title={'House Clearances'} />
    <div className={classes.container}>
      <div className={classes.text}>
          <p>
            Removing possessions from a home can be very stressful , time consuming and usually occurs
            at some of the most emotionally difficult times especially when distances are great. We aim
            to make the whole process as easy and simple as possible by providing a  professional
            respectful service. linked and tailored to your needs.
          </p>

          <p>
            Please contact us and we will arrange to make a visit and provide you with a free no
            obligation estimate. Prices are dependent upon the volume of items that need removing.
            Prices start from £250, however if the items to removed are of value then we could
            provide our services free of charge.
          </p>

          <p>
           We have a registed Environmental Agency Waste Carrier license and only use fully insured
           vehicles. We aim to not only provide you with the most professional clearance but to offer
           you a holistic solution to preparing properties for market whether that be for sale or
           letting.
          </p>

          <p>
          If you are clearing a house for renovation and sale then have a look at our Renovations
          section to find out more information on how we can help you prepare your property for sale.
          </p>
      </div>

      <div className={classes.image}>
        <h4>End Of Tenancy</h4>
        <h4>Domenstic & Commercial</h4>
        <h4>Vehicle Disposal</h4>
        <h4>Needle Sweeps</h4>
        <h4>Rubbish Clearance</h4>
        <h4>Specialist Waste Clearance</h4>
        <h4>Housekeeping Services</h4>
        <h4>House Sitting</h4>  `
        <img />
      </div>
    </div>

    <div>
    </div>

    </>
  );
};

export default HouseClearanceServices;
