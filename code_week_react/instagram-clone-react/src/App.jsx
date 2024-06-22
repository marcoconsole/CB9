// PREMESSA: Il progetto è stato sviluppato ipotizzando solo un utilizzo mobile //

import { useState, useEffect } from "react";
import styles from "./app.module.scss";
import { base_URL } from "./utils/endpoints";
import NavBar from "./components/NavBar/NavBar";
import Grid from "./components/Grid/Grid";
import PhotoDetail from "./components/PhotoDetail/PhotoDetail";
import Footer from "./components/Footer/Footer";

function App() {
  const [photoList, setPhotoList] = useState([]);
  const [isPhotoDetailVisible, setIsPhotoDetailVisible] = useState(false);
  const [modalVisual, setModalVisual] = useState([]);

  useEffect(() => {
    fetch(
      `${base_URL}/photos/?client_id=${
        import.meta.env.VITE_AUTH_KEY
      }&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => setPhotoList(data));
  }, []);

  const handleCardClick = (photos) => {
    setModalVisual(photos);
    setIsPhotoDetailVisible(true);
  };

  const handleCloseClick = () => {
    setIsPhotoDetailVisible(false);
  };

  return (
    <main className={styles.mainContainer}>
      <NavBar />
      {!isPhotoDetailVisible ? (
        <Grid list={photoList} onCardClick={handleCardClick} />
      ) : (
        <PhotoDetail handleCloseClick={handleCloseClick} photos={modalVisual} />
      )}
      <Footer />
    </main>
  );
}

export default App;
