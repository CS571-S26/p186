import {Row, Col, Card} from "react-bootstrap";
import p2 from "../figures/p2.png";    
import p1 from "../figures/p1.png"; 

export default function ConnectPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Connect With Us</h1>
      <p>Follow us on social media or send us an email!</p>

      {/* Instagram */}
      <div style={{ marginTop: "20px" }}>
        <p>📷 Instagram:</p>
        <a
          href="https://www.instagram.com/thefishcamera?igsh=ZWx1cGI0bTJqbmcz"
          target="_blank"
          rel="noreferrer"
        >
          Visit our Instagram
        </a>
      </div>

      {/* Email Cards */}
      <div style={{ marginTop: "30px" }}>
        <p>📧 Email:</p>

        <Row className="g-4">
          {/* Person 1 */}
          <Col md={6}>
            <Card style={styles.card}>
              <Card.Img
                variant="top"
                src={p1}
                style={styles.avatar}
                alt="p1"
              />
              <Card.Body className="text-center">
                <Card.Title>dddRaven
                </Card.Title>
                <Card.Text>jzhang2782@wisc.edu</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Person 2 */}
          <Col md={6}>
            <Card style={styles.card}>
              <Card.Img
                variant="top"
                src={p2}
                style={styles.avatar}
                alt="p2"
              />
              <Card.Body className="text-center">
                <Card.Title>pw003</Card.Title>
                <Card.Text>wpeng35@wisc.edu</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  avatar: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    padding: "20px",
    backgroundColor: "#f5f5f5"
  }
};