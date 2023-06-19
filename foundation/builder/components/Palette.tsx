import React from "react";
import Field from "./Field";

const Palette = () => {
  const fields = [
    {
      id: 1,
      fieldName: "Input field",
      classes: "col-6",
      config: {
        type: "text",
        name: "",
        id: "",
        disabled: false,
        required: false,
        readonly: false,
        inputClasses: "",
        label: "",
        placeholder: "",
      },
    },
    {
      id: 2,
      fieldName: "Drop-down list",
      classes: "col-6",
      config: {
        type: "select",
        name: "",
        id: "",
        disabled: false,
        required: false,
        readonly: false,
        inputClasses: "",
        label: "",
        options: "",
        multiple: false,
      },
    },
    {
      id: 3,
      fieldName: "Textarea",
      classes: "col-6",
      config: {
        type: "textarea",
        name: "textarea",
        id: "textarea",
        disabled: false,
        required: false,
        readonly: false,
        inputClasses: "",
        label: "",
        rows: 3,
      },
    },
    {
      id: 4,
      fieldName: "Checkbox input",
      classes: "col-6",
      config: {
        type: "checkbox",
        name: "",
        id: "",
        disabled: false,
        required: false,
        readonly: false,
        inputClasses: "",
        label: "",
        checked: false,
        value: "",
      },
    },
    {
      id: 5,
      fieldName: "Radio input",
      classes: "col-6",
      config: {
        type: "radio",
        name: "",
        id: "",
        disabled: false,
        required: false,
        readonly: false,
        inputClasses: "",
        label: "",
        checked: false,
        values: "",
        radioLabels: "",
      },
    },
    {
      id: 6,
      fieldName: "File input",
      classes: "col-6",
      config: {
        type: "file",
        name: "",
        id: "",
        disabled: false,
        required: false,
        readonly: false,
        inputClasses: "",
        label: "",
        acceptedTypes: "",
      },
    },
  ];

  return (
    <div
      className="card text-white mb-3"
      style={{ backgroundColor: "#495057" }}
    >
      <div className="card-header">PALLET</div>
      <div className="card-body">
        <div className="row">
          {fields.map((field, i) => {
            return (
              <div
                className={`custom-form-field col-12`}
                key={`drag-field-${i}`}
              >
                <Field field={field} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Palette;
