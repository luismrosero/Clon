import { React, useContext } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 7
  },
}));

const BotonAtrasArriba = (props) => {
  const { click } = props;
  const classes = useStyles();


  return (
    <div className={classes.root} onClick={() => click()}
      style={{ backgroundColor: "#707070", boxShadow: 10, borderRadius: 6, paddingTop: 6, paddingBottom: 1, paddingLeft: 6, paddingRight: 6 }}  >
      <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24.286"
        viewBox="0 0 30 34.286">
        <g id="flecha-hacia-arriba" transform="translate(-21.333)">
          <g id="Grupo_2" data-name="Grupo 2" transform="translate(21.333)">
            <g id="Grupo_1" data-name="Grupo 1" transform="translate(0)">
              <path id="Trazado_1" data-name="Trazado 1" d="M21.333,79H29.9V91.857H42.762V79h8.571l-15-15Z" transform="translate(-21.333 -57.571)" fill="#fff" />
              <rect id="Rectángulo_2" data-name="Rectángulo 2" width="30" height="4.286" fill="#fff" />
            </g>
          </g>
        </g>
      </svg>

    </div>
  );
};

export default BotonAtrasArriba;
