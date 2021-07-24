import classes from './TextBox.module.css'

function TextBox(props) {
  return(
  <div className={classes.textBox}>
    <p>{props.text}</p>
  </div>
  );
};

export default TextBox;
