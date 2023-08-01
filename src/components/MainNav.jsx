import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function MainNav() {
    return (
      <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to="/"><Navbar.Brand >Home</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </> );
}

export default MainNav;