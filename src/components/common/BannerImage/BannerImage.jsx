import classes from './BannerImage.module.css'

function Banner() {

  const triangle = {
    borderTop: "solid 10px #fff",
    borderLeft: "solid `${window.screen.width}` #fff",
    borderBottom: "solid 10px #fff",
    borderRight: "solid 30px #fff"
  }


  return(
    <div className={classes.bannerContainer}>
      <div className={classes.bannerTextContainer}>
        <h1>Clearances & </h1>
        <h2>Renovations</h2>
        <h3>all in one place</h3>
      </div>
    </div>
  );
};

export default Banner;
