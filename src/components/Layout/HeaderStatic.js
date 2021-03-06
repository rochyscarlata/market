import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Image,
  Navbar,
  NavDropdown,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { FaUser, FaShareSquare } from "react-icons/fa";

const HeaderStatic = ({ authen, setAuthen, usuario }) => {
  let history = useHistory();
  const cerrarSes = () => {
    localStorage.removeItem("Token");
    setAuthen(null);
    history.push("/main");
  };

  return (
    <Fragment>
      <Container fluid className="Container_Header">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/main" className="">
            
              <i class="fas fa-shopping-cart fa-2x"></i>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="d-flex flex-lg-row justify-content-center align-items-center navbar-desplegable">
                {authen ? (
                  <div className="btnLogin-collapse w-100">
                    <NavDropdown
                      title={usuario.username}
                      id="collasible-nav-dropdown"
                      className="d-flex btnUsername-collapse btnUsername btnNav_header w-100 flex-column align-items-center"
                    >
                      {usuario.role === "user" ? (
                        <Dropdown.Item className="dropDown-font" href="/perfil">
                          Perfil
                        </Dropdown.Item>
                      ) : null}

                      {usuario.role === "admin" ? (
                        <Dropdown.Item className="dropDown-font" href="/admin">
                          Admin
                        </Dropdown.Item>
                      ) : null}
                      <NavDropdown.Item
                        className="w-100"
                        href="/shopping-checkout"
                      >
                        Ir al Carrito
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        className="font-weight-bolder dropDown-cerrarSesion"
                        onClick={cerrarSes}
                      >
                        Cerrar Sesión
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                ) : (
                  <Button
                    className="btnLogin_header btnLogin-collapse shadow"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    INICIAR SESIÓN
                  </Button>
                )}

                <Nav.Link
                  href="/main"
                  className="btnNav_header d-flex justify-content-center w-100"
                >
                  <Row className="d-block  align-self-center ">
                    <Col
                      xs="auto"
                      className=" d-flex justify-content-center btnNav_mainFont "
                    >
                      TIENDA
                    </Col>
                    
                  </Row>
                </Nav.Link>

                <Nav.Link
                  href="/service"
                  className="btnNav_header d-flex justify-content-center w-100"
                >
                  <Row className="d-block  align-self-center ">
                    <Col
                      xs="auto"
                      className=" d-flex justify-content-center btnNav_mainFont"
                    >
                      CONTACTO  
                    </Col>
                   
                  </Row>
                </Nav.Link>

               
              </Nav>
            </Navbar.Collapse>

            <Nav className="btnLogin-out">
              {authen ? (
                <Dropdown
                  as={ButtonGroup}
                  className="btnNav_header btnUsername"
                >
                  <Row className="ml-3">
                    <Col xs="auto" className="d-flex">
                      <Row className="d-block  align-self-center">
                        <Col
                          xs="auto"
                          className=" d-flex justify-content-center btnNav_usernameFont"
                        >
                          {usuario.username}
                        </Col>
                        <Col
                          xs="auto"
                          className=" d-flex justify-content-center btnNav_secondFont"
                        >
                          usuario
                        </Col>
                      </Row>
                    </Col>
                    <Col xs="auto" className="d-flex">
                      <Dropdown.Toggle
                        split
                        id="dropdown-split-basic"
                        className="btnDropdown-username"
                      />
                    </Col>
                  </Row>
                  <Dropdown.Menu id="DropDown-username">
                    {usuario.role === "user" ? (
                      <Dropdown.Item className="dropDown-font" href="/perfil">
                        Perfil
                      </Dropdown.Item>
                    ) : null}

                    {usuario.role === "admin" ? (
                      <Dropdown.Item className="dropDown-font" href="/admin">
                        Admin
                      </Dropdown.Item>
                    ) : null}
                    <Dropdown.Item
                      className="dropDown-font"
                      href="/shopping-checkout"
                    >
                      Ir al Carrito
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      className="font-weight-bolder dropDown-cerrarSesion"
                      onClick={cerrarSes}
                    >
                      Cerrar Sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  className="btnLogin_header btnLogin-out mr-3 shadow"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  INICIAR SESIÓN
                </Button>
              )}
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default HeaderStatic;
