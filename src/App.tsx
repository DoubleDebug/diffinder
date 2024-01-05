import styles from "./App.module.css";
import ImageDifference from "./components/ImageDifference";
import metadata from "./data/1.json";

function App() {
  const numOfDifferences = metadata.differences.length;

  return (
    <div class={styles.layout}>
      <p>
        Find all <strong>{numOfDifferences}</strong> differences.
      </p>
      <ImageDifference {...metadata} />
    </div>
  );
}

export default App;
