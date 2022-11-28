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
import { addToHistory } from "../lib/userData";
import { readToken, removeToken } from '../lib/authenticate';

export default function MainNav() {
  const [searchField, setSearchField] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();
  let token = readToken();

  async function submitForm(e) {
    e.preventDefault();
    setIsExpanded(false);
    let search = searchField;
    setSearchField("");
    setSearchHistory(await addToHistory(`title=true&q=${search}`));
    router.push(`/artwork?title=true&q=${search}`);
  }

  function logout() {
    setIsExpanded(false);
    removeToken();
    router.push('/login');
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
              {token && <Link href="/search" passHref legacyBehavior>
                <Nav.Link
                  onClick={(e) =>
                    isExpanded ? setIsExpanded((value) => !value) : null
                  }
                  active={router.pathname === "/search"}
                >
                  Advanced Search
                </Nav.Link>
              </Link>}
            </Nav>
            &nbsp;
            {token && <Form className="d-flex" onSubmit={submitForm}>
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
            </Form>}
            &nbsp;
            {token ? 
            <Nav>
              <NavDropdown title={token.userName} id="basic-nav-dropdown">
                <Link href="/favourites" passHref legacyBehavior>
                  <NavDropdown.Item
                    onClick={(e) =>
                      isExpanded ? setIsExpanded((value) => !value) : null
                    }
                  >
                    Favourites
                  </NavDropdown.Item>
                </Link>
                <Link href="/history" passHref legacyBehavior>
                  <NavDropdown.Item
                    onClick={(e) =>
                      isExpanded ? setIsExpanded((value) => !value) : null
                    }
                  >
                    Search History
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item
                  onClick={logout}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> 
            :
            <Nav className="ms-auto">
              <Link href="/register" passHref legacyBehavior>
                  <Nav.Link
                    onClick={(e) =>
                      isExpanded ? setIsExpanded((value) => !value) : null
                    }
                    active={router.pathname === "/register"}
                  >
                    Register
                  </Nav.Link>
              </Link>

              <Link href="/login" passHref legacyBehavior>
                  <Nav.Link
                    onClick={(e) =>
                      isExpanded ? setIsExpanded((value) => !value) : null
                    }
                    active={router.pathname === "/login"}
                  >
                    Login
                  </Nav.Link>
              </Link>

            </Nav>
            }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
