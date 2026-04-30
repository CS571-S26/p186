import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { FavoritesContext } from "./FavoritesContext"; 

export function GreenCayCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  //const [liked, setLiked] = useState(false);
  const { likedSpots, toggleSpot } = useContext(FavoritesContext);

  const spot = {
  id: "green-cay",
  name: "Green Cay Wetlands",
  location: "Boynton Beach, Florida"
};

  const liked = likedSpots.some((item) => item.id === spot.id);
  return (
    <div
      style={styles.wrapper}
      title={liked ? "click to dislike" : "click to like"}
      onClick={() => toggleSpot(spot)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      
      <div
        style={{
          ...styles.inner,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <div style={styles.front}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <div style={styles.star}>
                {liked ? "★" : "☆"}
              </div>
              <Card.Title>Green Cay Wetlands</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                📍 Boynton Beach, Florida
              </Card.Subtitle>

              <Card.Text>
                Green Cay Wetlands is a well-known South Florida birding spot with wetlands and a boardwalk.
              </Card.Text>

              <Card.Text>
                Its mixed habitats attract many birds year-round.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div style={styles.back}>
          <Card style={styles.card}>
            <Card.Body style={styles.backBody}>
              <div style={styles.star}>
                {liked ? "★" : "☆"}
              </div>
              <Card.Text style={{ marginBottom: 0 }}>
                <strong>Possible Birds:</strong><br />
                • Roseate Spoonbill<br />
                • Great Egret<br />
                • Green Heron<br />
                • Anhinga<br />
                • Eastern Screech Owl
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function EvergladesCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { likedSpots, toggleSpot } = useContext(FavoritesContext);

  const spot = {
    id: "everglades",
    name: "Everglades National Park",
    location: "South Florida"
  };

  const liked = likedSpots.some((item) => item.id === spot.id);

  return (
    <div
      style={styles.wrapper}
      title={liked ? "click to dislike" : "click to like"}
      onClick={() => toggleSpot(spot)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        style={{
          ...styles.inner,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div style={styles.front}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <div style={styles.star}>
                {liked ? "★" : "☆"}
              </div>

              <Card.Title>{spot.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                📍 {spot.location}
              </Card.Subtitle>

              <Card.Text>
                Everglades National Park is a vast subtropical wetland known for
                its unique ecosystem and rich wildlife.
              </Card.Text>

              <Card.Text>
                It is one of the best places in the U.S. for birdwatching and
                spotting rare species.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Back */}
        <div style={styles.back}>
          <Card style={styles.card}>
            <Card.Body style={styles.backBody}>
              <div style={styles.star}>
                {liked ? "★" : "☆"}
              </div>

              <Card.Text>
                <strong>Possible Birds:</strong><br />
                • Wood Stork<br />
                • Great Blue Heron<br />
                • Snail Kite<br />
                • Roseate Spoonbill<br />
                • Osprey
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "350px",
    height: "300px",
    perspective: "1000px",
    marginBottom: "20px",
    position: "relative",
    cursor: "pointer"
  },
  inner: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease",
    transformStyle: "preserve-3d"
  },
  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  },
  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateY(180deg)"
  },
  card: {
    width: "100%",
    height: "100%",
    padding: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "12px"
  },
  cardBody: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  backBody: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column"
  },
  star: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "28px",
    zIndex: 10
  }
};