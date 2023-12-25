import React, { useState } from "react";
import { ModalContainer } from "./RecordDiaryModal.styled";
import { useFormik } from "formik";
import { nanoid } from "nanoid";

export const RecordDiaryModal = ({ handleClickClose }) => {
  const [forms, setForms] = useState(["o_PCLpz7Og2qwYnO9QBir"]);
  const [items] = useState({});

  const handleAddForm = () => {
    const id = nanoid();
    setForms((prevForms) => [...prevForms, id]);
  };

  const handleRemoveForm = (id) => {
    setForms((prevForms) => prevForms.filter((formId) => formId !== id));
  };

  const { values, isValid, handleBlur, handleChange, resetForm } = useFormik({
    initialValues: {
      // nameproduct: "",
      // carbonoh: "",
      // protein: "",
      // fat: "",
      // calories: "",
    },
  });

  const handleConfirm = () => {
    forms.forEach((formId) => {
      const formDataForForm = {};
      Object.keys(values).forEach((key) => {
        if (key.includes(formId)) {
          formDataForForm[key.replace(`${formId}`, "")] = values[key];
        }
      });
      items[formId] = formDataForForm;
    });
    console.log(items);
    resetForm();
    handleClickClose();
  };

  return (
    <ModalContainer>
      <h2 className="H2">Record your meal</h2>
      <div className="DinerContainer">
        <div className="Img" />
        <h3 className="Title">Breakfast</h3>
      </div>
      <div className="FormContainer">
        {forms.map((formId) => (
          <form className="FormAddFood" key={formId}>
            <input
              id="nameproduct"
              type="text"
              name={`nameproduct${formId}`}
              onChange={handleChange}
              value={values[`nameproduct${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="The name of the product or dish"
              required
            />
            <input
              id="carbonoh"
              type="text"
              name={`carbonoh${formId}`}
              onChange={handleChange}
              value={values[`carbonoh${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Carbonoh."
              required
            />
            <input
              id="protein"
              type="text"
              name={`protein${formId}`}
              onChange={handleChange}
              value={values[`protein${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Protein"
              required
            />
            <input
              id="fat"
              type="text"
              name={`fat${formId}`}
              onChange={handleChange}
              value={values[`fat${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Fat"
              required
            />
            <input
              id="calories"
              type="text"
              name={`calories${formId}`}
              onChange={handleChange}
              value={values[`calories${formId}`] || ""}
              onBlur={handleBlur}
              placeholder="Calories"
              required
            />
            <div
              className="ButtonDelete"
              type="button"
              onClick={() => handleRemoveForm(formId)}
            ></div>
          </form>
        ))}

        <button className="ButtonAdd" type="button" onClick={handleAddForm}>
          <div className="ImgAdd" />
          Add more
        </button>
      </div>
      <div className="ButtonContainer">
        <button
          className="ButtonConfirm"
          type="button"
          onClick={handleConfirm}
          disabled={!isValid}
        >
          Confirm
        </button>
        <button
          className="ButtonCancel"
          type="button"
          onClick={handleClickClose}
        >
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
};
