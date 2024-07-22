import s from "./ImageCard.module.css";

const ImageCard = ({ image, onOpen }) => {
  return (
    <div className={s.image_Card}>
      <img
        className={s.card_Image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onOpen(image)}
      />
    </div>
  );
};

export default ImageCard;
