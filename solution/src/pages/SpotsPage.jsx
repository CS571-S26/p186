import { Card } from 'react-bootstrap'
import GreenCayCard from "../components/SpotsCard";
export default function SpotsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Birding Spots</h1>
      <p>Welcome to the best birding locations in Florida!</p>
      <GreenCayCard /> 
    </div>
  );
}