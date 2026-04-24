import { useState, useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import spot from "../figures/spotsexample.jpg";
import photo from "../figures/birdexample.jpg";
import { FavoritesContext } from "../components/FavoritesContext";

export default function FavoritePage() {
  const [hovered, setHovered] = useState("");
  const { likedSpots, likedPhotos, removeSpot, removePhoto } = useContext(FavoritesContext);
  const [activeTab, setActiveTab] = useState("");
 
  
  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure to delete the card?");
    if (!confirmed) return;

    if (activeTab === "spots") {
      removeSpot(id);
    } else {
      removePhoto(id);
    }
  };
  
  
  return (
    <div style={{ padding: "40px" }}>
      <h1>The spots and photos you like</h1>
      
      <Row className="g-4">
        <Col md={6}>
          <div style={styles.wrapper}>
            <div
              style={styles.imageBox}
              onClick={() => setActiveTab("spots")}
              onMouseEnter={() => setHovered("spot")}
              onMouseLeave={() => setHovered("")}
            >
              <Card style={styles.card}>
                <img src={spot} alt="spot" style={styles.image} />
              </Card>
              <div
                style={{
                  ...styles.overlay,
                  opacity: hovered === "spot" ? 1 : 0
                }}
              >
                <span style={styles.overlayText}>Spot</span>
              </div>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div style={styles.wrapper}>
            <div
              style={styles.imageBox}
              onClick={() => setActiveTab("photos")}
              onMouseEnter={() => setHovered("photo")}
              onMouseLeave={() => setHovered("")}
            >
              <Card style={styles.card}>
                <img src={photo} alt="bird" style={styles.image} />
              </Card>
              <div
                style={{
                  ...styles.overlay,
                  opacity: hovered === "photo" ? 1 : 0
                }}
              >
                <span style={styles.overlayText}>Photo</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {activeTab && (
  <>
    <h2 style={{ marginTop: "40px" }}>
      {activeTab === "spots" ? "Liked Spots" : "Liked Photos"}
    </h2>

    <Row className="g-4">
      {(activeTab === "spots" ? likedSpots : likedPhotos).map((item) => (
        <Col key={item.id} md={4}>
          <Card style={styles.resultCard}>
            {item.image && (
              <img src={item.image} alt={item.name} style={styles.resultImage} />
            )}

            <Card.Body>
              <Card.Title>{item.name}</Card.Title>

              {item.location && (
                <Card.Subtitle className="mb-2 text-muted">
                  📍 {item.location}
                </Card.Subtitle>
              )}

              <Button
                variant="danger"
                onClick={() =>
                  activeTab === "spots"
                    ? removeSpot(item.id)
                    : removePhoto(item.id)
                }
              >
                Unlike
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </>
)}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center"
  },
  imageBox: {
    position: "relative",
    width: "850px",
    height: "500px",
    overflow: "hidden",
    borderRadius: "10px"
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    border: "none"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(200, 200, 200, 0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.3s ease"
  },
  overlayText: {
    color: "white",
    fontSize: "5rem",
    fontWeight: "600",
    fontFamily: "Segoe UI, sans-serif",
    letterSpacing: "2px",
    fontStyle: "italic" 
  },
  resultCard: {
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
},
resultImage: {
  width: "100%",
  height: "220px",
  objectFit: "cover"
}
};