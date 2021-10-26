import React from 'react'
import ImgsViewer from "react-images-viewer";

const VisorHistoria = () => {
    const [num, setNum] = useState(0);
    const [open, setOpen] = useState(false);

  

    return (
        <ImgsViewer
        imgs={array}
        currImg={num}
        isOpen={open}
        onClickPrev={anterior}
        onClickNext={siguiente}
        onClose={cerrar}
        backdropCloseable={false}
        preventAutoScroll={false}
        showImgCount={false}
      />
    )
}

export default VisorHistoria
