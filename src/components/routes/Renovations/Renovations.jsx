import PageTitle from '../../common/PageTitle/PageTitle.jsx';

import ExampleProjects from '../../common/ExampleProjects/ExampleProjects'

import TextBox from '../../common/Formats/TextBox.jsx';

import classes from './Renovations.module.css';

function Renovations() {

  const list = [
    'Building Works',
    'Carpenter',
    'CCTV Drainage Surveys',
    'Lock Changes',
    'Pest Controls',
    'Roofing Works',
    'Security Grills',

    'Damp & Timber Reports',
    'Drain Downs',
    'Electrical Reports',
    'Glazing',
    'Painting & Decorating',
    'Fencing',
    'System Refills',

    'Property Maintainence Reports',
    'Gardening Services',
    'Town & Country Planning Advice',
    'Refurbishment Projects',
    'Repossession Packages',
    'Structural Engineer Reports',
    'Condition Reports'
  ]

  const list1 = [];
  const list2 = [];
  const list3 = [];

  for (let i = 0; i < 7; i++) {
    list1.push(<h4>{list[i]}</h4>);
  }

  for (let i = 7; i < 14; i++) {
    list2.push(<h4>{list[i]}</h4>);
  }

  for (let i = 14; i < 21; i++) {
    list3.push(<h4>{list[i]}</h4>);
  }

  return(
    <>
    <PageTitle title={'Renovations'} />
    <TextBox text={'With over 44 years experience in renovating property both working at a major development company and having carried out many small domestic projects we can help to prepare any properties for sale or rent.'} />
    <TextBox text={'Here are some of the many services we can supply.'} />

    <div className={classes.listContainer}>
      <div className={classes.list}>
        {list1}
      </div>

      <div  className={classes.list}>
        {list2}
      </div>

      <div  className={classes.list}>
        {list3}
      </div>
    </div>

    <TextBox text={'See below some before and after pictures of projects we have worked on.'} />

    <ExampleProjects
      title={'CASE STUDY: INDUSTRIAL UNIT'}
      text={'This industrial unit was in a very poor state when we were contacted. We were able to remove all of the waste and completely refurbish the unit.'}
      text2={'We carried out a lot of replastering, painting and flooring work. Transforming the property ready to be rented out to the next client.'}
      text3={'We are happy to take on commercial projects. If you would like help transforming your property then get in touch for a free quote.'}
      image1={'industrialunitclean'}
      image2={'gardenroomsittingarea'}
    />

    <ExampleProjects
      title={'CASE STUDY: GARDEN ANNEX'}
      text={'We built a annex equipped with a bathroom, kitchen, living space and a bedroom. This was built at the end of the clients garden and has added value to their property which could potentially be used as an AirBnB. We were happy to integrate a workingVictorian fireplace which really adds to the aesthetic.'}
      text2={'If you are looking for additional space to your property then get in contact to discuss your requirements.'}
      text3={''}
      image1={'industrialunitclean'}
      image2={'gardenroomsittingarea'}
    />
    </>
  );
};

export default Renovations;
