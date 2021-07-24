import PageTitle from '../../common/PageTitle/PageTitle.jsx';
import TextImage from '../../common/Formats/TextColumnImage';

import classes from './AboutUs'

function AboutUs() {
  return(
    <>
      <PageTitle title={'About Us'} />
      <TextImage text={'North London House Clearance and Renovations is run by Simon Whitelock. Simon is an avid construction fan, interested in all things building and reclamation. He has a huge experience in construction and property maintenance having spent 26 years within a major property development company dealing with small refurbishment contracts up to major office constructions. In addition to his wealth of experiance as a chartered building surveyor Simon has also spent the last 40 years refurbishing and building his own residential properties including developments within Hertfordshire, Westminster, Ireland and Devon.'} />

      <TextImage text={'Some years ago the trauma of losing both his parents reminded him how this is a difficult moment in peoples lives where they are in need of help to deal with the large amount of collected material left in the property and outbuilding which have been inherited and the need to renovate those properties prior to sale. The fact is these considerations  aree the last  things on siblingss minds and clear guidancce is essential.'} />
    </>
  );
};

export default AboutUs;
