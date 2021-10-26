import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4,
  },
}));

const IconoMenu = (props) => {
  const {click} = props;
  const classes = useStyles();
  return (
    
    <div className={classes.root} onClick={(e) => click(e)} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="26"
        viewBox="0 0 6 26"
      >
        <g id="menu" transform="translate(-451 -1909)">
          <circle
            id="Elipse_24"
            data-name="Elipse 24"
            cx="3"
            cy="3"
            r="3"
            transform="translate(451 1909)"
            fill="#fff"
          />
          <circle
            id="Elipse_24-2"
            data-name="Elipse 24"
            cx="3"
            cy="3"
            r="3"
            transform="translate(451 1919)"
            fill="#fff"
          />
          <circle
            id="Elipse_24-3"
            data-name="Elipse 24"
            cx="3"
            cy="3"
            r="3"
            transform="translate(451 1929)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconoMenu;
