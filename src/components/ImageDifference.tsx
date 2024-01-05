import styles from "./ImageDifference.module.css";
import SingleImage from "./SingleImage";

const ImageDifference = (data: DifferenceMetadata) => {
  return (
    <div class={styles.container}>
      <SingleImage left data={data} />
      <SingleImage data={data} />
    </div>
  );
};

export default ImageDifference;
