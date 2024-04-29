import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos } = useContext(PhotosContext)

  const favoritesPhotos =photos.filter((foto) => foto.liked)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritesPhotos.map((foto, i) => (
          <div key={i}>
            <div className='container'>
              <div className="card text-white">
                <img className='card-img' src={foto.src.small} alt={foto.alt} />
                <div className='card-img-overlay'>
                  <p className='card-text'>{foto.alt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};
export default Favorites;
