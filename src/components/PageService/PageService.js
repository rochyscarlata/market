import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Rochy from "../Images/rochy.png";
import Sergio from "../Images/sergio.png";
import Nicole from "../Images/nicole1.jpeg";
import Mauricio from "../Images/mauricio.png";
import Loguito from "../Images/sagitariologo.png";
import HeaderStatic from "../Layout/HeaderStatic";
import Footer from "../Layout/Fotter";
// stilos de register
import "./styles.css";

const PageService = ({ authen, setAuthen, usuario }) => {
  return (
    <>
      <Container fluid >
        <div className="img-service-container">
          <div className="back-service-color"></div>
        </div>
        <HeaderStatic authen={authen} setAuthen={setAuthen} usuario={usuario} />

        <Container className="main-container-service shadow p-3 mt-4 mb-4 d-flex flex-column justify-content-center">
          <div className="w-100 d-flex justify-content-center mt-5">
          <Image fluid src={Loguito} style={{width:"150px"}}/>
          </div>
         

          <Row className="d-flex flex-column justify-content-center p-5 mt-3">
            <Col>
              <h1 className="text-center textos text-justify">DONDE ESTAMOS</h1>
            </Col>
            <Col className="p-3 text-center font-italic">
              <h4 className="font-weight-light">
                Monteagudo 747
                <br/>
                <i class="fas fa-phone-alt m-2"></i>3814474779
              </h4>
            </Col>
            
            <Col className="m-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5795297969553!2d-65.19986228529636!3d-26.821513795866068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c18b83c26c5%3A0x53d23cc8bc68f9e!2sBernardo%20de%20Monteagudo%20747%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1599968230832!5m2!1ses!2sar"  height="450" frameborder="0" style={{border:0}, {width:"100%"} } allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </Col>
          </Row>

         
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default PageService;
