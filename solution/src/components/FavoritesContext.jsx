import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [likedSpots, setLikedSpots] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleSpot = (spot) => {
    const exists = likedSpots.some((item) => item.id === spot.id);

    if (exists) {
      setLikedSpots(likedSpots.filter((item) => item.id !== spot.id));
    } else {
      setLikedSpots([...likedSpots, spot]);
    }
  };

  const togglePhoto = (photo) => {
    const exists = likedPhotos.some((item) => item.id === photo.id);

    if (exists) {
      setLikedPhotos(likedPhotos.filter((item) => item.id !== photo.id));
    } else {
      setLikedPhotos([...likedPhotos, photo]);
    }
  };

  const removeSpot = (id) => {
    setLikedSpots(likedSpots.filter((item) => item.id !== id));
  };

  const removePhoto = (id) => {
    setLikedPhotos(likedPhotos.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        likedSpots,
        likedPhotos,
        toggleSpot,
        togglePhoto,
        removeSpot,
        removePhoto
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}