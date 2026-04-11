import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import icon from "../figures/icon.png";
import '../App.css'

export default function Layout() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#0a1f44" }} variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={icon}
          alt="icon"
          style={{ width: "40px", marginRight: "10px" }}
        />
        Florida Birding Explorer
        </Navbar.Brand>
        </Container>
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/spots">Spots</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/community">Community</Nav.Link>
        <Nav.Link as={Link} to="/favorite">Favorite</Nav.Link>
        </Nav>
        
      </Navbar>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  )
}
