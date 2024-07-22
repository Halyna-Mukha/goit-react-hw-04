import { Field, Form, Formik } from "formik";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation, AiOutlineSearch } from "react-icons/ai";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const initialValues = { text: "" };
  const searchId = useId();
  const notify = () =>
    toast(
      <p className={s.error_Toast}>
        <AiOutlineExclamation className={s.error_Icon} />
        Please enter a search query!
      </p>
    );

  function handleSubmit(values, actions) {
    if (!values.text) {
      notify();
      return;
    } else {
      onSearch(values.text);
      console.log(values.text);
    }
    actions.resetForm();
  }

  return (
    <header className={s.header}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "red",
            color: "#fff",
          },

          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <div>
            <label className={s.label} htmlFor={searchId}>
              Search
            </label>
            <Field
              className={s.search_Text}
              type="text"
              name="text"
              autoComplete="off"
              id={searchId}
              autoFocus
              placeholder="Search images"
            />
          </div>
          <button className={s.formBtn} type="submit">
            <AiOutlineSearch className={s.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
