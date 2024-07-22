import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ listImages, onOpen }) => {
  return (
    <div>
      <ul className={s.list}>
        {listImages.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onOpen={onOpen} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
