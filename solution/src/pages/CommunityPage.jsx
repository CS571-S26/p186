import { useState, useRef, useEffect } from "react";
import { Button, Modal, Form, Card, Container, Row, Col } from "react-bootstrap";
import defaultbird from "../figures/defaultbird.png";

export default function CommunityPage() {
  const [show, setShow] = useState(false);
  const fileInputRef = useRef(null);

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("communityPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    place: "",
    picture: null,
    preview: "",
    experience: "",
    date: ""
  });

  useEffect(() => {
    localStorage.setItem("communityPosts", JSON.stringify(posts));
  }, [posts]);

  const handleClose = () => {
    setShow(false);
    setFormData({
      name: "",
      species: "",
      place: "",
      picture: null,
      preview: "",
      experience: "",
      date: ""
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        picture: file,
        preview: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePost = () => {
    if (
      !formData.name ||
      !formData.species ||
      !formData.place ||
      !formData.experience ||
      !formData.date
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newPost = {
      id: Date.now(),
      name: formData.name,
      species: formData.species,
      place: formData.place,
      preview: formData.preview || defaultbird,
      experience: formData.experience,
      date: formData.date
    };

    setPosts((prev) => [newPost, ...prev]);
    alert("Successfully posted!");
    handleClose();
  };

  return (
    <div style={styles.page}>
      <Container>
        <div style={styles.header}>
          <h1 style={styles.title}>Community</h1>
          <p style={styles.subtitle}>
            Share your birding moments with other nature lovers.
          </p>

          <Button style={styles.shareButton} onClick={handleShow}>
            Share
          </Button>
        </div>

        <Row className="g-4">
          {posts.length === 0 ? (
            <Col xs={12}>
              <div style={styles.emptyBox}>
                No posts yet. Be the first to share your birding experience.
              </div>
            </Col>
          ) : (
            posts.map((post) => (
              <Col key={post.id} xs={12} md={6} lg={4}>
                <Card style={styles.card}>
                  <div style={styles.posterBar}>
                    Posted by: {post.name}
                  </div>

                  <div style={styles.imageWrapper}>
                    <img
                      src={post.preview}
                      alt={post.species}
                      style={styles.image}
                    />
                  </div>

                  <Card.Body>
                    <Card.Title>{post.species}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      📍 {post.place}
                    </Card.Subtitle>

                    <Card.Text>
                      <strong>Date:</strong> {post.date}
                    </Card.Text>

                    <Card.Text>
                      <strong>Birding Experience:</strong> {post.experience}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Share Your Birding Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Poster Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Species</Form.Label>
                <Form.Control
                  type="text"
                  name="species"
                  value={formData.species}
                  onChange={handleChange}
                  placeholder="Enter bird species"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="Enter birding location"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Picture</Form.Label>

                <div
                  style={styles.uploadBox}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {formData.preview ? (
                    <img
                      src={formData.preview}
                      alt="Preview"
                      style={styles.previewImage}
                    />
                  ) : (
                    <img
                      src={defaultbird}
                      alt="Default bird"
                      style={styles.previewImage}
                    />
                  )}
                  <div style={styles.overlayPlus}>＋</div>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />

                <Form.Text className="text-muted">
                  Optional — a default bird image will be used if left empty.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Birding Experience</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Share what you saw (40 words)"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handlePost}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fb",
    paddingTop: "40px",
    paddingBottom: "60px"
  },
  header: {
    textAlign: "center",
    marginBottom: "35px"
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#13294b"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "20px"
  },
  shareButton: {
    backgroundColor: "#13294b",
    border: "none",
    padding: "10px 26px",
    borderRadius: "999px",
    fontWeight: "600"
  },
  emptyBox: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "50px 20px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    color: "#666"
  },
  card: {
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    height: "100%"
  },
  posterBar: {
    padding: "10px 16px",
    fontWeight: "600",
    backgroundColor: "#eef3f8",
    borderBottom: "1px solid #ddd"
  },
  imageWrapper: {
    width: "100%",
    height: "240px",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  uploadBox: {
    width: "100%",
    height: "180px",
    border: "2px dashed #ccc",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    overflow: "hidden",
    backgroundColor: "#fafafa",
    position: "relative"
  },
  previewImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  overlayPlus: {
    position: "absolute",
    fontSize: "30px",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};