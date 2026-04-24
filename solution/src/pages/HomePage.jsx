import { useState } from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import spoonbill1 from "../figures/spoonbill1.png";

export default function HomePage() {

  return (

    <div style={{ backgroundColor: "#f4f8fc", padding: "60px 0" }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1>Discover the Beauty of Birdwatching in Florida</h1>
                        <p>
                            Florida is one of the best birdwatching destinations...
                        </p>
                        <Button as={Link} to="/spots">
                            Explore Birding Spots
                        </Button>
                    </Col>

                    <Col md={6}>
                        <img
                            src={spoonbill1}
                            alt="Roseate Spoonbill"
                            style={{ width: "120%" }}
                        />
                    </Col>
                </Row>
            </Container>
            

            <Container style={{ marginTop: "60px" }}>
    
                <Row className="text-center mb-4">
                    <Col>
                        <h2>Featured Birds in Florida</h2>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={4}>
                        <div style={styles.card}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                            <h5>Roseate Spoonbill</h5>
                            <p>
                                A striking pink bird often seen wading in shallow wetlands across Florida.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={styles.card}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                            <h5>Great Blue Heron</h5>
                            <p>
                                A large wading bird known for its slow movements and sharp hunting skills.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={styles.card}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                            <h5>Painted Bunting</h5>
                            <p>
                                One of the most colorful birds in North America, often spotted in southern Florida.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <div style={styles.card}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                            <h5>American Flamingo</h5>
                            <p>
                                Rare but occasionally seen in Florida, famous for its vibrant pink feathers.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={styles.card}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                            <h5>Anhinga</h5>
                            <p>
                                Known as the "snake bird" for its long neck, often seen drying its wings.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={styles.card}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                            <h5>Limpkin</h5>
                            <p>
                                A unique bird with a loud call, commonly found near freshwater wetlands.
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>
            
            <Container style={{ marginTop: "60px" }}>
    
                <Row className="text-center mb-4">
                    <Col>
                        <h2>Why Florida is a Great Place for Birdwatching</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <div style={styles.card2}>
                            <h5>Diverse Habitats</h5>
                            <p>
                                From wetlands to forests, Florida supports a wide variety of bird species.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={styles.card2}>
                            <h5>Year-Round Birding</h5>
                            <p>
                                Birds can be seen in every season thanks to Florida's climate and migration routes.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={styles.card2}>
                            <h5>Rare and Colorful Birds</h5>
                            <p>
                                Spot unique birds like the Roseate Spoonbill and Painted Bunting.
                            </p>
                        </div>
                    </Col>
                </Row>  
            </Container>

            <Container style={{ marginTop: "80px", textAlign: "center" }}>
    
    {/* Title */}
    <Row className="mb-4">
        <Col>
            <h2>Explore the Website</h2>
            <p>Discover more about Florida birdwatching</p>
        </Col>
    </Row>

    {/* Buttons */}
    <Row className="justify-content-center mb-4">
        <Col md="auto">
            <Button as={Link} to="/spots" variant="primary" style={styles.btn}>
                Spots
            </Button>
        </Col>

        <Col md="auto">
            <Button as={Link} to="/gallery" variant="success" style={styles.btn}>
                Gallery
            </Button>
        </Col>

        <Col md="auto">
            <Button as={Link} to="/community" variant="warning" style={styles.btn}>
                Community
            </Button>
        </Col>

        <Col md="auto">
            <Button as={Link} to="/favorite" variant="danger" style={styles.btn}>
                Favorite
            </Button>
        </Col>
    </Row>

    {/* Back to top */}
    <Row>
        <Col>
            <Button
                variant="outline-secondary"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑ Back to Top
            </Button>
        </Col>
    </Row>

    </Container>
    </div>
    
  )
  
}

const styles = {
    card: {
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        height: "100%",
        transition: "transform 0.2s ease"
    },

    card2:{
        backgroundColor: "white",
        padding: "50px",
    },

    btn: {
        margin: "5px",
        padding: "10px 20px",
        fontWeight: "500"
    }

};
