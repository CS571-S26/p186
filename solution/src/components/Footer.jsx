import { Container, Row, Col } from "react-bootstrap";

function Footer() {
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
                        <p><a href="/">Home</a></p>
                        <p><a href="/spots">Spots</a></p>
                        <p><a href="/gallery">Gallery</a></p>
                        <p><a href="/about">About</a></p>
                    </Col>

                    {/* Social */}
                    <Col md={4}>
                        <h5>Connect</h5>
                        <p>📷 Instagram</p>
                        <p>🐦 Twitter</p>
                        <p>📘 Facebook</p>
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
        marginTop: "60px"
    }
};

export default Footer;