import { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import spoonbill2 from "../figures/Rosetaspoonbill2.jpg";
import Grebe1 from "../figures/Grebe1.jpg";
import Mitredparakeet1 from "../figures/Mitredparakeet1.jpg";

export function Roseta_Spoonbill() {
  const [liked, setLiked] = useState(false);

  const images = [spoonbill2];
  const useCarousel = images.length > 2;

  return (
    <Card style={styles.card}>
      <div style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
            {useCarousel ? (
            <Carousel interval={null}>
                {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                    src={img}
                    alt={`Roseate Spoonbill ${index + 1}`}
                    style={styles.image}
                    className="zoom-image"
                    />
                </Carousel.Item>
                ))}
            </Carousel>
            ) : (
            <img
                src={images[0]}
                alt="Roseate Spoonbill"
                style={styles.image}
                className="zoom-image"
            />
            )}
        </div>
    </div>

      <Card.Body style={styles.body}>
        <Card.Title style={styles.title}>
          Roseate Spoonbill
        </Card.Title>

        {/* ❤️ Heart button */}
        <div
          style={{
            ...styles.heart,
            color: liked ? "red" : "#aaa"
          }}
          onClick={(e) => {
            e.stopPropagation(); // prevent other clicks
            setLiked(!liked);
          }}
        >
          {liked ? "❤️" : "♡"}
        </div>
      </Card.Body>
    </Card>
  );
}

export function Grebe() {
  const [liked, setLiked] = useState(false);

  const images = [Grebe1];
  const useCarousel = images.length > 2;

  return (
    <Card style={styles.card}>
      <div style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
            {useCarousel ? (
            <Carousel interval={null}>
                {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                    src={img}
                    alt={`Grebe ${index + 1}`}
                    style={styles.image}
                    className="zoom-image"
                    />
                </Carousel.Item>
                ))}
            </Carousel>
            ) : (
            <img
                src={images[0]}
                alt="Grebe"
                style={styles.image}
                className="zoom-image"
            />
            )}
        </div>
    </div>

      <Card.Body style={styles.body}>
        <Card.Title style={styles.title}>
          Pie-billed Grebe
        </Card.Title>

        {/* ❤️ Heart button */}
        <div
          style={{
            ...styles.heart,
            color: liked ? "red" : "#aaa"
          }}
          onClick={(e) => {
            e.stopPropagation(); // prevent other clicks
            setLiked(!liked);
          }}
        >
          {liked ? "❤️" : "♡"}
        </div>
      </Card.Body>
    </Card>
  );
}

export function Mitredparakeet() {
  const [liked, setLiked] = useState(false);

  const images = [Mitredparakeet1];
  const useCarousel = images.length > 2;

  return (
    <Card style={styles.card}>
      <div style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
            {useCarousel ? (
            <Carousel interval={null}>
                {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                    src={img}
                    alt={`Mitred parakeet ${index + 1}`}
                    style={styles.image}
                    className="zoom-image"
                    />
                </Carousel.Item>
                ))}
            </Carousel>
            ) : (
            <img
                src={images[0]}
                alt="Mitred parakeet"
                style={styles.image}
                className="zoom-image"
            />
            )}
        </div>
    </div>

      <Card.Body style={styles.body}>
        <Card.Title style={styles.title}>
          Mitred parakeet
        </Card.Title>

        {/* ❤️ Heart button */}
        <div
          style={{
            ...styles.heart,
            color: liked ? "red" : "#aaa"
          }}
          onClick={(e) => {
            e.stopPropagation(); // prevent other clicks
            setLiked(!liked);
          }}
        >
          {liked ? "❤️" : "♡"}
        </div>
      </Card.Body>
    </Card>
  );
}




const styles = {
  card: {
    width: "400px",
    height: "300px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  imageContainer: {
    width: "100%",
    height: "240px"
  },
  imageWrapper: {
  width: "100%",
  height: "100%",
  overflow: "hidden", // 👈 important
},
image: {
  width: "100%",
  height: "240px",
  objectFit: "cover",
  transition: "transform 0.4s ease"
},
  body: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative" 
  },
  title: {
    margin: 0
  },
  heart: {
    position: "absolute",
    bottom: "10px",
    right: "15px",
    fontSize: "22px",
    cursor: "pointer"
  }
};