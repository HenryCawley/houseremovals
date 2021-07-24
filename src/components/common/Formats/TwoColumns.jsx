import classes from './TwoColumns.module.css';

function TwoColumns(props) {
  return(
    <div className={classes.container}>
      <h2>{props.heading}</h2>
      <div className={classes.grid}>
        <div className={classes.column}>{props.columnOneText}</div>
        <div className={classes.column}>{props.columnTwoText}</div>
      </div>
    </div>
  );
};

export default TwoColumns;
