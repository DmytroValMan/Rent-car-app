import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useId, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const openModalDelete = () => setModalDeleteIsOpen(true);
  const closeModalDelete = () => setModalDeleteIsOpen(false);
  const openModalEdit = () => setModalEditIsOpen(true);
  const closeModalEdit = () => setModalEditIsOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.error("contact was deleted");
    closeModalDelete();
  };

  const initialValues = {
    name: contact.name,
    number: contact.number,
  };

  const handleEdit = (values, actions) => {
    dispatch(editContact({ id: contact.id, ...values }));
    closeModalEdit();
    toast.success("contact was edited succesfully!");
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <div className={css.item}>
      <div className={css.contact}>
        <p>
          <HiUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <HiPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button
          className={css.btnDelete}
          type="button"
          onClick={openModalDelete}
        >
          Delete
        </button>
        <button className={css.btnEdit} type="button" onClick={openModalEdit}>
          Edit
        </button>
      </div>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeModalDelete}
        contentLabel="Confirm Delete"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete <strong>{contact.name}</strong>?
        </p>
        <div className={css.modalButtons}>
          <button onClick={handleDelete} className={css.confirm}>
            Yes
          </button>
          <button onClick={closeModalDelete} className={css.cancel}>
            No
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={closeModalEdit}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2>Edit Contact</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleEdit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <label className={css.label} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.errorMsg}
                name="name"
                component="span"
              />
            </div>
            <div className={css.inputWrapper}>
              <label className={css.label} htmlFor={phoneFieldId}>
                Number
              </label>
              <Field
                className={css.input}
                type="tel"
                name="number"
                id={phoneFieldId}
              />
              <ErrorMessage
                className={css.errorMsg}
                name="number"
                component="span"
              />
            </div>
            <div className={css.btnWrapper}>
              <button className={css.btnSave} type="submit">
                Save
              </button>
              <button
                className={css.btnCancel}
                type="button"
                onClick={closeModalEdit}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default Contact;
