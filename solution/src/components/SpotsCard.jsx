import { Card } from "react-bootstrap";

export default function GreenCayCard() {
  return (
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>Green Cay Wetlands</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          📍 Boynton Beach, Florida
        </Card.Subtitle>

        <Card.Text>
          Green Cay Wetlands is one of the best urban birding spots in South Florida, 
          featuring over 100 acres of restored wetlands and a 1.5-mile boardwalk 
          that allows visitors to observe wildlife up close.
        </Card.Text>

        <Card.Text>
          The habitat includes marshes, cypress areas, and open water, attracting 
          a wide variety of bird species year-round.
        </Card.Text>



        <Card.Text>
          <strong>Possible Birds:</strong><br />
          • Roseate Spoonbill<br />
          • Great Egret<br />
          • Green Heron<br />
          • Anhinga<br />
          • Eastern Screech Owl<br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const styles = {
  card: {
    marginBottom: "20px",
    padding: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "12px"
  }
};