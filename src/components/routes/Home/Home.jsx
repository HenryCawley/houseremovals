import HomeBanner from '../../common/BannerImage/BannerImage'
import ServiceTile from '../../common/ServiceTile/ServiceTile'
import ExampleProjects from '../../common/ExampleProjects/ExampleProjects'

import classes from './Home'

function Home() {
  return(
      <>
        <HomeBanner/>
        <ServiceTile/>
        <ExampleProjects
          title={'A few of our projects...'}
          text={'No project is too small, for the last few years we have taken on projects refurbishing light industrial units, building garden rooms and house renovations.'}
          image1={'industrialunitclean'}
          image2={'gardenroomsittingarea'}
        />
      </>
  );
};

export default Home;
