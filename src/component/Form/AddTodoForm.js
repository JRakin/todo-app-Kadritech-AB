import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAppContext from "../../context/AppContext";
import FormDatePicker from "./FormDatePicker";

const today = new Date();

function isLaterThanToday(date) {
  return date && date > today;
}

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .max(50, "Must be 50 characters or less"),
  description: Yup.string()
    .required("Description is required")
    .max(200, "Must be 200 characters or less"),
  dueDate: Yup.date()
    .nullable()
    .required("Due date is required")
    .test(
      "is-later-than-today",
      "Date must be later than today",
      function (value) {
        return isLaterThanToday(value);
      }
    ),
});

const AddTodoForm = () => {
  const { handleSubmit } = useAppContext();

  return (
    <Formik
      initialValues={{ title: "", description: "", dueDate: null }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Enter the title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field
              component="textarea"
              rows="5"
              id="description"
              name="description"
              placeholder="Enter the description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="dueDate">Due Date</label>
            <div className="w-full customDatePickerWidth">
              <FormDatePicker vlaue={values?.dueDate}/>
              <ErrorMessage
                name="dueDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
