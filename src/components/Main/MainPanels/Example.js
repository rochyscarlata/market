import React, { useState} from 'react'
import {Modal,Button} from 'react-bootstrap';

const Example = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="p-1" variant="danger" onClick={handleShow}>
        Ver datos de envío
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Envíos</Modal.Title>
          </Modal.Header>
          <Modal.Body>  
                    <h6>
                        ENVÍOS <br></br>
                          Podes comprar todos los días año durante las 24 hs.
                          El monto mínimo de compra es de $1000.<br></br>
                          Los envíos se realizan de lunes a sábados, en la franja horaria de 18 a 22 hs. <br></br>
                          Las compras ingresadas hasta las 18 hs serán enviadas el mismo día. <br></br>
                          Las compras ingresadas posterior a las 18 hs. serán envidas al día siguiente.<br></br>
                          Los días domingos y feriados no realizamos envíos.<br></br>
                          Nuestro servicio de envío tiene un costo de $160.<br></br>
                          Ante cualquier situación de devolución o cambio de producto te pedimos que te comuniques por medio de nuestros canales de contacto para pronta solución.

                          </h6>  
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

}

export default Example;