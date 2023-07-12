import './NavComp.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/Logo3.png';

function NavComp() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="Nav-bar">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo de moustache gentlemen" /></Navbar.Brand>
        <Navbar.Toggle style={{border: "1px solid var(--dorado)"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='Nav-item' href="#inicio">Inicio</Nav.Link>
            <Nav.Link className='Nav-item' href="#contacto">Contacto</Nav.Link>
            <Nav.Link className='Nav-item' href="#about">About</Nav.Link>
            <Nav.Link className='Nav-item' href="#servicios">Servicios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComp