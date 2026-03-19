import { Link, Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import '../App.css'

export default function Layout() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#0a1f44" }} variant="dark">
        <Container>
        {/* need an icon */}
        <Navbar.Brand href="/">Florida Birding Explorer</Navbar.Brand>
        </Container>
        <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/spots">Spots</Nav.Link>
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        <Nav.Link href="/community">Community</Nav.Link>
        <Nav.Link href="/favorite">Favorite</Nav.Link>
        </Nav>
        
      </Navbar>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
