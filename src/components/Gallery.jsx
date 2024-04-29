import { useContext } from "react";
import IconHeart from './IconHeart';
import { PhotosContext } from "../context/PhotosContext";

const Gallery = () => {
  const {photos, setPhotos} = useContext(PhotosContext);

  const handleHeartClick = (id) => {
    const likedPhotos = photos.map((foto)=> 
    foto.id === id ? { ...foto, liked: !foto.liked } : foto)
    setPhotos(likedPhotos)
  }

  return <div className="gallery grid-columns-5 p-3">
    {Array.isArray(photos) && photos.map((foto, i)=> (
      <div key={i}>
        <div className='container'>
          <div className="card text-white">
            <IconHeart filled={foto.liked} heartClick={() => handleHeartClick(foto.id)} />
            <img className='card-img' src={foto.src.small} alt={foto.alt} />
            <div className='card-img-overlay'>
              <p className='card-text'>{foto.alt}</p>
            </div>
          </div>
        </div>
      </div>
    ))    
  }
  </div>;
};
export default Gallery;
