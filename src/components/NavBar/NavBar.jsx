import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

export function NavBar() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }

  return (
    <Navbar 
      bg={temaEscuro ? "dark" : "success"}
      variant = {temaEscuro ? "dark" : "light"} 
      expand="lg" 
    >     
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">  {/*usando esse as dá para usar o to que se usa em Links, porque o Nav.Link só aceita href*/}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/perfil">
              Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Button variant="outline-light" onClick={alternar}>
              <img src={iconeBtn} width="16" />
              Alternar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
