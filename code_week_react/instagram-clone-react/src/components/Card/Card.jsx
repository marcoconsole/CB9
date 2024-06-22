import styles from "./card.module.scss";
import PhotoDetail from "../PhotoDetail/PhotoDetail";
import { useState } from "react";

const Card = ({ image, title, photos, onCardClick }) => {
  const [isPhotoDetailVisible, setIsPhotoDetailVisible] = useState(false);

  const handleCardClick = () => {
    onCardClick(photos);
    setIsPhotoDetailVisible(true);
  };

  return (
    <>
      <div className={styles.cardContainer} onClick={handleCardClick}>
        <img className={styles.imageContainer} src={image} alt={title} />
      </div>
      {isPhotoDetailVisible && (
        <PhotoDetail
          handleCloseClick={() => {
            setIsPhotoDetailVisible(false);
          }}
          photos={photos}
        />
      )}
    </>
  );
};

export default Card;
