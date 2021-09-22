import industrialUnitCleanImg from '../../../assets/IndustrialUnitAfter.jpg';
import industrialUnitDirtyImg from '../../../assets/IndustrialUnitBefore.jpg';
import gardenRoomSittingAreaImg from '../../../assets/gardenRoomSittingArea.jpg';

import classes from './ExampleProjects.module.css'

function ExampleProjects(props) {
  const images = {
      industrialunitclean: industrialUnitCleanImg,
      industrialunitdirty: industrialUnitDirtyImg,
      gardenroomsittingarea: gardenRoomSittingAreaImg
  };

  return (
    <div className={classes.container}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <div className={classes.imageContainer}>
        <img src={images[props.image1]} />
        <img src={images[props.image2]} />
      </div>
    </div>
  )
}

export default ExampleProjects;
