import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#8839c0" : "#3124e2", // 👈 NOT blue anymore
  fontWeight: isActive ? "bold" : "normal"
});

    return (
        <div style={styles.footer}>
            <Container>

                <Row>
                    {/* About */}
                    <Col md={4}>
                        <h5>Florida Birding</h5>
                        <p>
                            Discover the beauty of birdwatching in Florida, from wetlands
                            to coastal habitats filled with unique and colorful species.
                        </p>
                    </Col>

                    {/* Navigation */}
                    <Col md={4}>
                    <h5>Explore</h5>

                    <p>
                        <NavLink to="/" style={navStyle}>
                        Home
                        </NavLink>
                    </p>

                    <p>
                        <NavLink to="/spots" style={navStyle}>
                        Spots
                        </NavLink>
                    </p>

                    <p>
                        <NavLink to="/gallery" style={navStyle}>
                        Gallery
                        </NavLink>
                    </p>

                    <p>
                        <NavLink to="/favorite" style={navStyle}>
                        Favorite
                        </NavLink>
                    </p>
                    </Col>

                    {/* Social */}
                    <Col md={4}>
                        <h5>Connect</h5>
                        <p>📷 Instagram</p>
                        <p>📧 Email</p>
                    </Col>
                </Row>

                {/* Bottom line */}
                <Row style={{ marginTop: "30px", textAlign: "center" }}>
                    <Col>
                        <hr />
                        <p style={{ marginTop: "10px" }}>
                            © {new Date().getFullYear()} Florida Birding. All rights reserved.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

const styles = {
    footer: {
        backgroundColor: "#1f2d3d",
        color: "white",
        padding: "40px 0",
        marginTop: "20px"
    },
    link: {
        textdecoration: "none"
    }
};

export default Footer;