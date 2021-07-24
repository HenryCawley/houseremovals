import classes from './TextColumnImage.module.css';

function TextColumnImage(props) {
  return(
    <div className={classes.container}>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.image}></div>
    </div>
  );
};

export default TextColumnImage;
