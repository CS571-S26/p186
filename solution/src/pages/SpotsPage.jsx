import { EvergladesCard, GreenCayCard } from "../components/SpotsCard";
import {Col, Row} from "react-bootstrap";
export default function SpotsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Birding Spots</h1>
      <p>Welcome to the best birding locations in Florida!</p>
      <Row>
        <GreenCayCard />
        <EvergladesCard />  
      </Row>
      
    </div>
  );
}