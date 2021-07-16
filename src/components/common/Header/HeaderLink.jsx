import { Link } from 'react-router-dom';

import classes from './HeaderLink.module.css';

function HeaderLink(props) {
  return(
    <Link to={'/' + `${props.root}`}>
      {props.title}
    </Link>
  );
};

export default HeaderLink;
