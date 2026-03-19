import { useState } from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HomePage() {
  //const [count, setCount] = useState(0)

  return (
//     --------------------------------------------------
// Navigation Bar
// Logo / Site Title                Home Spots Gallery Community Favorite
// --------------------------------------------------

// Hero Section
// Big Title + Short Intro          Featured Bird Photo
// Button / CTA

// --------------------------------------------------

// Featured Bird Section
// Large Bird Image
// Bird Name + Description

// --------------------------------------------------

// Why Florida is Great for Birdwatching
// [Card] Diverse Habitats
// [Card] Year-Round Birding
// [Card] Rare and Colorful Birds

// --------------------------------------------------

// Explore the Website
// [Spots] [Gallery] [Community] [Favorite]

// --------------------------------------------------

// Footer
// --------------------------------------------------
    <div style={{ backgroundColor: "#f4f8fc", padding: "60px 0" }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1>Discover the Beauty of Birdwatching in Florida</h1>
                        <p>
                            Florida is one of the best birdwatching destinations...
                        </p>
                        <Button href="/spots">Explore Birding Spots</Button>
                    </Col>

                    <Col md={6}>
                        {/* <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Roseate_Spoonbill.jpg"
                            style={{ width: "100%" }}
                        /> */}
                    </Col>
                </Row>
            </Container>
    </div>
  )
}
