import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflow: "hidden",
          padding: 0,
          background: "none",
          border: "none",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
      onRequestClose={onClose}
    >
      <div className={s.container}>
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.alt_description}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </Modal>
  );
};
export default ImageModal;
