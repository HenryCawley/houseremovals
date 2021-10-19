import PageTitle from '../../common/PageTitle/PageTitle.jsx';
import londonMap from '../../../assets/LondonMap.jpg';
import mapIcon from '../../../assets/map.png';
import classes from './AreasCovered.module.css'
import TextBox from '../../common/Formats/TextBox.jsx';

function AreasCovered() {

const list = [
    'Potters Bar',
    'Cufley',
    'Barnet',
    'Islinton',
    'Holloway',
    'Archway',

    'Highgate',
    'Muswell Hill',
    'Hampstead',
    'Ware',
    'Ashwell',
    'Wembley',

    'Elstree',
    'Northaw',
    'Harpenden',
    'London Colney',
    'Golders Green',
    'Collindale'
  ]

const list1 = [];
const list2 = [];
const list3 = [];
const list4 = [];
const list5 = [];
const list6 = [];

for (let i = 0; i < 6; i++) {
  list1.push(<div className={classes.listElement}><img src={mapIcon}/><h4>{list[i]}</h4></div>);
}
for (let i = 6; i < 12; i++) {
  list2.push(<div className={classes.listElement}><img src={mapIcon}/><h4>{list[i]}</h4></div>);
}
for (let i = 12; i < 18; i++) {
  list3.push(<div className={classes.listElement}><img src={mapIcon}/><h4>{list[i]}</h4></div>);
}
for (let i = 0; i < 9; i++) {
  list4.push(<div className={classes.listElement}><img src={mapIcon}/><h4>{list[i]}</h4></div>);
}
for (let i = 9; i < 18; i++) {
  list5.push(<div className={classes.listElement}><img src={mapIcon}/><h4>{list[i]}</h4></div>);
}
for (let i = 0; i < 18; i++) {
  list6.push(<div className={classes.listElement}><img src={mapIcon}/><h4>{list[i]}</h4></div>);
}

  return(
    <>
      <PageTitle title={'Areas Covered'} />
      <TextBox text={'We cover all major areas of North London and beyond, below are a list of some the areas we taking work for. Let us know where you are and what work you require and we will happily provide you a quote. If outside this area don’t heistate to get in contact, we will still happily provide you a quote.'} />
      <img className={classes.map} src={londonMap} />
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

      <div className={classes.listContainerTwo}>
        <div className={classes.list}>
          {list4}
        </div>
        <div  className={classes.list}>
          {list5}
        </div>
      </div>

      <div className={classes.listContainerThree}>
        <div className={classes.list}>
          {list6}
        </div>
      </div>
    </>
  );
};

export default AreasCovered;
