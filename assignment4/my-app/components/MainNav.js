import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';


export default function MainNav(){
    const [searchField, setSearchField] = useState('');
    const router = useRouter();

    function submitForm(e){
        e.preventDefault();
        router.push(`/artwork?title=true&q=${searchField}`);
    }
    return (
        <>
        <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
          <Container fluid>
            <Navbar.Brand >Jay Pravinkumar Chaudhari</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto"
              >
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/search'>Advanced Search</Nav.Link>
              </Nav>
              <Form className="d-flex" onSubmit={submitForm}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchField}
                  onChange={e=>setSearchField(e.target.value)}
                />
                <Button variant="success" type='submit'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/>
        <br/>
        </>
    );
}