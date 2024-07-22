import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onChange }) => {
  return (
    <div>
      <button className={s.loadMoreBtn} onClick={onChange}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
