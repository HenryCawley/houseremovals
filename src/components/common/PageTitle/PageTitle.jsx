import classes from './PageTitle.module.css';

function PageTitle(props) {
  return(
    <div className={classes.titleContainer}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default PageTitle;
