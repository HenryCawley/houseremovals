import Tile from './Tile.jsx'
import classes from './ServiceTile.module.css'

function ServiceTile() {
  return(
    <div className={classes.container}>
      <h2>What We Can Offer</h2>

      <div className={classes.tileContainer}>
        <Tile title={'Preperation For Letting'} image={'Lettings'}/>
        <Tile title={'Clearances'} image={'Clearances'}/>
        <Tile title={'Renovations'} image={'Renovations'}/>
        <Tile title={'Preperations For Sale'} image={'Preperations'}/>
      </div>

      <p>We want to offer you a cost effective and professional
      service from property clearance, through to renovation and
      finally preparation for sale. Our team can make this process
      as stress free as possible, get in contact now for a free consultation,
      or request a call back at the bottom of the page.</p>
    </div>
  );
};

export default ServiceTile;
