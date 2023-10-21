import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

function Header() {
    return (
        <div className='container'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><Image style={{ width: "40px", marginLeft: "-15px" }} src={require('../img/user.png')} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Events</Nav.Link>
                            <NavDropdown title="Learn" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://www.w3schools.com/react/default.asp">Learn React</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.w3schools.com/nodejs/">
                                    Learn Node
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://www.w3schools.com/whatis/whatis_fullstack.asp">
                                    Full Strak Development
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            <Image style={{ width: "40px" }} src={require('../img/logo.png')} />
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    )
}

export default Header;  