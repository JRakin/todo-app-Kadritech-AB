import React from "react";
import { Field } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = ({value}) => {
  return (
    <div className="w-full">
      <Field name="dueDate">
        {({ field, form: { setFieldValue } }) => {
          return (
            <DatePicker
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              {...field}
              selected={field.value ? new Date(field.value) : null}
              onChange={(val) => {
                setFieldValue('dueDate', val);
              }}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
            />
          );
        }}
      </Field>
    </div>
  );
};

export default FormDatePicker;
