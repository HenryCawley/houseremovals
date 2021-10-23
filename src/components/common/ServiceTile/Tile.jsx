import lettingImg from '../../../assets/lettings.webp';
import clearancesImg from '../../../assets/clearances.webp';
import renovationsImg from '../../../assets/renovations.webp';
import preperationsImg from '../../../assets/preperationsForSale.webp';

import classes from './Tile.module.css'

function Tile(props) {

  const images = {
      Lettings: lettingImg,
      Clearances: clearancesImg,
      Renovations: renovationsImg,
      Preperations: preperationsImg
  };

  return(
    <div className={classes.container}>
      <div className={classes.circle}>
        <img src={images[props.image]} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Tile;
