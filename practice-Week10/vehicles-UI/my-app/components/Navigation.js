import { Container, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';

export default function Navigation(props) {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref><Navbar.Brand >Vehicles UI</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref><Nav.Link >Home</Nav.Link></Link>
            <Link href="/vehicles" passHref><Nav.Link>Vehicles</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}