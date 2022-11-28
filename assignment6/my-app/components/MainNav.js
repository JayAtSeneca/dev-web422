import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { searchHistoryAtom } from "../store";

export default function MainNav() {
  const [searchField, setSearchField] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();

  function submitForm(e) {
    e.preventDefault();
    setIsExpanded(false);
    let queryString = `title=true&q=${searchField}`;
    setSearchHistory((current) => [...current, queryString]);
    router.push(`/artwork?title=true&q=${searchField}`);
  }
  return (
    <>
      <Navbar
        className="fixed-top navbar-dark bg-dark"
        expand="lg"
        expanded={isExpanded}
      >
        <Container>
          <Navbar.Brand>Jay Pravinkumar Chaudhari</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={(e) => setIsExpanded((value) => !value)}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link
                  onClick={(e) =>
                    isExpanded ? setIsExpanded((value) => !value) : null
                  }
                  active={router.pathname === "/"}
                >
                  Home
                </Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link
                  onClick={(e) =>
                    isExpanded ? setIsExpanded((value) => !value) : null
                  }
                  active={router.pathname === "/search"}
                >
                  Advanced Search
                </Nav.Link>
              </Link>
            </Nav>
            &nbsp;
            <Form className="d-flex" onSubmit={submitForm}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
              />
              <Button variant="success" type="submit">
                Search
              </Button>
            </Form>
            &nbsp;
            <Nav>
              <NavDropdown title="User Name" id="basic-nav-dropdown">
                <Link href="/favourites" passHref legacyBehavior>
                  <NavDropdown.Item
                    onClick={(e) =>
                      isExpanded ? setIsExpanded((value) => !value) : null
                    }
                    active={router.pathname === "/favourites"}
                  >
                    Favourites
                  </NavDropdown.Item>
                </Link>
                <Link href="/history" passHref legacyBehavior>
                  <NavDropdown.Item
                    onClick={(e) =>
                      isExpanded ? setIsExpanded((value) => !value) : null
                    }
                    active={router.pathname === "/history"}
                  >
                    Search History
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
