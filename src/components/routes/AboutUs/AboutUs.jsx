import simonImg from '../../../assets/simon.jpg';

import PastProjects from '../../common/PastProjects/PastProjects';

import classes from './AboutUs.module.css'

function AboutUs() {
  return(
    <>
      <div className={classes.container}>
        <div className={classes.text}>
        <h2>About Us</h2>
            <p>
              North London House Clearance and Renovations is run by Simon Whitelock.
            </p>

            <p>
              Simon is an avid construction fan, interested in all things building and reclamation.
              He has a huge experience in construction and property maintenance having spent 26 years within
              a major property development company dealing with small refurbishment contracts up to major office
              constructions. In addition to his wealth of experience as a chartered building surveyor Simon has
              also spent the last 40 years refurbishing and building his own residential properties including
              developments within London ,Hertfordshire, Ireland and Devon.
            </p>

            <p>
              Some years ago the trauma of losing both his parents impressed on  him how this is a difficult moment
              in peoples lives where they are in need of help to deal with the large amount of collected material
              left in the property and outbuildings which have been inherited and the need to renovate those properties
              prior to sale. The fact is these considerations are the last things on relatives minds so speeedy and
              clear guidance is essential.
            </p>
        </div>

        <div className={classes.image}>
          <img src={simonImg}/>
        </div>
      </div>

      <div className={classes.pastProjects}>
        <h2>Past Projects...</h2>
        <p>Below are some of the large projects Simon has worked on during
        his career of 45 years. Managing small maintenance works up to large-scale
        developments in London on some iconic buildings.</p>
        <div className={classes.pastProjectTile}>
          <PastProjects title={'Home Office (now the Ministry of Justice)'} image={'ministry'}/>
          <PastProjects title={'25 Victoria Street'} image={'victoria'}/>
          <PastProjects title={'Empress State Buidling'} image={'empress'}/>
        </div>

        <div className={classes.pastProjectTile}>
          <PastProjects title={'12 Gough Square'} image={'gough'}/>
          <PastProjects title={'20 Palace Street'} image={'palace'}/>
          <PastProjects title={'Portland House'} image={'portland'}/>
        </div>
      </div>

    </>

  );
};

export default AboutUs;
