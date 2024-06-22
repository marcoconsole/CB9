import styles from "./photoDetail.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { LiaBookmark } from "react-icons/lia";

const PhotoDetail = ({ handleCloseClick, photos }) => {
  return (
    <div className={styles.photoDetailContainer}>
      <div className={styles.headContainer}>
        <IoIosArrowBack
          className={styles.closeButton}
          onClick={handleCloseClick}
        />
        <p className={styles.user}>{photos[0].user.username}</p>
      </div>
      <div className={styles.listDetailContainer}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.singlePostContainer}>
            <img
              className={styles.image}
              src={photo.urls.small}
              alt={photo.alt_description}
            />
            <div className={styles.interactiveContainer}>
              <div className={styles.interactive}>
                <FaRegHeart className={styles.interactiveIcon} />
                <FaRegComment className={styles.interactiveIcon} />
                <FiSend className={styles.interactiveIcon} />
              </div>
              <div className={styles.mark}>
                <LiaBookmark className={styles.interactiveIcon} />
              </div>
            </div>
            <div className={styles.description}>{photo.alt_description}</div>
            <div className={styles.like}>Piace a {photo.likes} persone</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoDetail;
