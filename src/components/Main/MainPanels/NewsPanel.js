import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Example from './Example'
import "./NewsPanel.css";

const NewsPanel = () => {
  const [noticia, setNoticia] = useState({
    titulo: "",
    descripcion: {
      lanzamiento: "",
      generos: [],
      rating: "",
      tiendas: [{ nombre: "", url: "" }],
    },
    imagen: "",
  });
  const [numeroAleatorio, setNumeroAleatorio] = useState(
    Math.floor(Math.random() * 19)
  );

  const [validandoCompra, setValidandoCompra] = useState();
  function simularCargando() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }
  useEffect(() => {
    if (validandoCompra) {
      simularCargando().then(() => {
        setValidandoCompra(false);
      });
    }
  }, [validandoCompra]);

  const GenerarNumeroAleatorio = () => {
    setNumeroAleatorio(Math.floor(Math.random() * 19));
  };

  useEffect(() => {
    const noticiaStorage = {
      titulo: "",
      descripcion: {
        lanzamiento: "",
        generos: [],
        rating: "",
        tiendas: [],
      },
      imagen: "",
    };

    fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "da21e69965msh29b942b58a24f5ep10aea9jsna2960dd4b46b",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        noticiaStorage.titulo = response.results[numeroAleatorio].name;
        noticiaStorage.imagen =
          response.results[numeroAleatorio].background_image;
        noticiaStorage.descripcion.lanzamiento =
          response.results[numeroAleatorio].released;
        response.results[numeroAleatorio].genres.map((genero) =>
          noticiaStorage.descripcion.generos.push(genero.name)
        );
        noticiaStorage.descripcion.rating =
          response.results[numeroAleatorio].rating;

        response.results[numeroAleatorio].stores.map((tienda) =>
          noticiaStorage.descripcion.tiendas.push({
            nombre: tienda.store.name,
            url: tienda.url_en,
          })
        );
      })
      .then(() => setNoticia(noticiaStorage))
      .catch((err) => {
        console.log(err);
      });
  }, [numeroAleatorio]);

  return (
    <Container fluid id="news-panel-container">
      <Container>
        <Row className="d-flex flex-column flex-lg-row">
          <Col className="p-5">
            <Row className="d-flex flex-column">
              <Col className="mb-2">
                <Row className="d-flex flex-column align-items-center justify-content-center p-5">
                  <Col className="d-flex justify-content-center text-uppercase text-nowrap mb-2">
                    <h3
                      id="news-title"
                      className=" text-danger d-flex justify-content-center"
                    > <strong> Información importante</strong>
                   
                     

                    </h3>
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    {/* <Image
                      fluid
                      id="news-image-small"
                      className="shadow rounded mb-4"
                      src={noticia.imagen}
                    /> */}
                  </Col>
                  <Col className="text-dark text-justify mb-4">
                    <Row className="d-flex flex-column">
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-dark font-weight">
                        PRODUCTOS DE VENTA AL PESO <br></br>
                      Los productos de venta al peso como los fiambres tienen publicado el precio por cada 100 gramos.
                       Si carga al carrito 3 cantidades estará recibiendo 300 gramos del producto seleccionado.<br></br>
                      
                        </h5>
                        <h5 className="font-weight">
                        VENCIMIENTO EN LÁCTEOS <br></br>
                      Los lácteos poseen fecha de vencimiento de 10 a 15 días, los mismos serán enviados dentro dicho rango.
                      Cadena de frío en la entrega
                        </h5>
                      </Col>
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-dark font-weight">
                        Los alimentos que requieren bajas temperaturas para su conservación son enviados en conservadoras refrigeradas que no cortan la cadena 
                      de frío.
                        </h5>
                        
                       <h3 className="text-center text-danger">ZONA DE ENVÍOS <br></br>
                            entre: Av. Mitre y Av. Soldati
                            entre: Av. Sarmiento y Av. 24 de Septiembre
                            </h3>
                      </Col>
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Example/>
                        
                      </Col>
                    
                    </Row>
                  </Col>
                </Row>
              </Col>
             
            </Row>
          </Col>
          {/* <Col className="p-5 d-flex align-items-start justify-content-center">
            <Row id="news-image-container" className="shadow rounded">
             
          <iframe src="https://www.google.com.ar/intl/es/about/products"></iframe>
            </Row>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default NewsPanel;
