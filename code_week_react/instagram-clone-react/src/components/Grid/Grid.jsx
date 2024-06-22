import Card from "../Card/Card";
import styles from "./grid.module.scss";

const Grid = ({ list = [], onCardClick }) => {
  return (
    <div className={styles.gridContainer}>
      {list.map((photo, index) => (
        <Card
          key={index}
          image={photo.urls.small}
          photos={list}
          title={photo.alt_description}
          onCardClick={() => onCardClick(list)}
        />
      ))}
    </div>
  );
};

export default Grid;
