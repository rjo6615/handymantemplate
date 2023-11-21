import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";

function NavbarComponent() {
  const navbarStyle = {
    backgroundColor: 'rgba(3, 4, 94, 1)',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  };

  const linkStyle = {
    backgroundColor: 'transparent',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#CAF0F8',
    padding: '5px 10px',
    borderRadius: '30px',
    textDecoration: 'none',
  };

  return (
    <div style={navbarStyle}>
      <Navbar expand="lg" style={{ height: '75px' }}>
        <Container fluid>
        <div className="logo-image" style={{width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', marginRight: '5px'}}>
            <img src={logo} className="img-fluid" alt="logo"></img>
        </div>
          <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: 'bold', color: '#CAF0F8' }}>
            Handyman Template
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  />
          <Navbar.Collapse id="navbarScroll" style={{backgroundColor: 'rgba(3, 4, 94, 1)'}}>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/" className='button-pop-out mx-2' style={linkStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="#services" className='button-pop-out mx-2' style={linkStyle}>
                Services
              </Nav.Link>
              <Nav.Link href="#gallery" className='button-pop-out mx-2' style={linkStyle}>
                Gallery
              </Nav.Link>
              <Nav.Link href="#pricing" className='button-pop-out mx-2' style={linkStyle}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#aboutus" className='button-pop-out mx-2' style={linkStyle}>
                About Us
              </Nav.Link>
            </Nav>
            <Button
              className="float-right button-pop-out"
              style={{ backgroundColor: '#0077B6', borderColor: 'transparent', color: '#CAF0F8' }}
            >
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;