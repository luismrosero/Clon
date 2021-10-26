import { React, useEffect, useState } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {Avatar} from "@material-ui/core";

const Historias = (props) => {
  const { click, tienda } = props;
  const [histoCompo, setHistoCompo] = useState([]);

  const estilo = {
    boxShadow: tienda ? tienda.paleta.sombra : "",
  };

  const hacerArray = () => {
    if (tienda !== '') {
      tienda.historias.map((ulr) => {
        setHistoCompo((histoCompo) =>
          histoCompo.concat(
            <Avatar
              src={ulr.src}
              onClick={() => click(ulr)}
              sx={{ cursor: 'pointer', height: 70, width: 70, margin: 1 }}
              style={estilo}
            />
          )
        );
      });
    }
  };

  useEffect(() => {
    hacerArray();
  }, [tienda]);

  return (
    <>
      <Carousel
        slides={histoCompo}
        plugins={[
          'clickToChange',
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
      />
    </>
  );
};

export default Historias;
