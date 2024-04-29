import { createContext, useState, useEffect } from "react";

export const PhotosContext = createContext()

export const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState([])

    useEffect(()=> {
        const fetchPhotos = async () => {
            try {
              const lasFotos = await import("../photosSource/photos.json");
              setPhotos(lasFotos.photos);
            } catch (error) {
              console.error("error photos.json: ", error);
            }
          };

        fetchPhotos()

    }, [])
    

    return (
        <PhotosContext.Provider value={{ photos, setPhotos }}>
            { children }
        </PhotosContext.Provider>
    )
}