import { Card } from 'react-bootstrap';
import { Roseta_Spoonbill, Grebe, Mitredparakeet } from "../components/GalleryCard";

export default function GalleryPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Birding Gallery</h1>
      <p>Enjoy the pictures!</p>

      <div style={styles.container}>
        <Roseta_Spoonbill />
        <Grebe />
        <Mitredparakeet />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",          
    flexWrap: "wrap"      
  }
};