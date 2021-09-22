import portlandImg from '../../../assets/portland.jpg';
import victoriaImg from '../../../assets/victoria.jpg';
import goughImg from '../../../assets/gough.jpg';

import justiceImg from '../../../assets/office.jpg';
import empressImg from '../../../assets/empress.jpg';
import palaceImg from '../../../assets/palace.jpg';


import classes from './PastProjects.module.css'

function PastProjects(props) {
  const images = {
      portland: portlandImg,
      victoria: victoriaImg,
      gough: goughImg,

      ministry: justiceImg,
      empress: empressImg,
      palace: palaceImg
  };

  return(
    <div className={classes.container}>
      <img src={images[props.image]} />
      <h3>{props.title}</h3>
    </div>
  )
}

export default PastProjects;
