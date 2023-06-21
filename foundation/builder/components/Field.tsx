import React from "react";
import { useDrag } from "react-dnd";

const Field = ({ field }) => {
  const { fieldName, config } = field;

  const [{}, drag] = useDrag(
    () => ({
      type: "field",
      item: field,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        item: monitor.getItem(),
      }),
    }),
    []
  );

  const getFieldType = (config) => {
    switch (config.type) {
      case "select":
        let options = ["Please select"];

        if (config.options) {
          options = options.concat(config.options.split(" | "));
        }
        return (
          <select
            className={`form-select ${config.inputClasses}`}
            aria-label="Select Box"
            id={config.id}
            name={config.name}
            disabled={config.disabled}
            required={config.required}
          >
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            className={`form-control ${config.inputClasses}`}
            id={config.id}
            name={config.name}
            disabled={config.disabled}
            required={config.required}
            readOnly={config.readonly}
            rows={config.rows}
          ></textarea>
        );
      // case "checkbox":
      //   return (
      //     <div className={`form-check ${config.inputClasses}`}>
      //       <input
      //         className="form-check-input"
      //         type="checkbox"
      //         value={config.value}
      //         id={config.id}
      //         name={config.name}
      //         disabled={config.disabled}
      //         required={config.required}
      //         readOnly={config.readonly}
      //         defaultChecked={config.checked}
      //       />
      //       <label className="form-check-label" htmlFor="flexCheckDefault">
      //         {config.label || "Checkbox input"}
      //       </label>
      //     </div>
      //   );
      case "radio":
        return (
          <div className={`form-check ${config.inputClasses}`}>
            <input
              className="form-check-input"
              type="radio"
              value={config.value}
              id={config.id}
              name={config.name}
              disabled={config.disabled}
              required={config.required}
              readOnly={config.readonly}
              defaultChecked={config.checked}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              {config.label || "Checkbox input"}
            </label>
          </div>
        );
      case "file":
        return (
          <input
            className={`form-control ${config.inputClasses}`}
            type="file"
            id={config.id}
            name={config.name}
            disabled={config.disabled}
            required={config.required}
            readOnly={config.readonly}
          />
        );
      default:
        return (
          <input
            type={config.type}
            className={`form-control ${config.inputClasses}`}
            id={config.id}
            name={config.name}
            disabled={config.disabled}
            required={config.required}
            readOnly={config.readonly}
            placeholder={config.placeholder}
          />
        );
    }
  };

  return (
    <div className="form-group" ref={drag}>
      <div className="pb-2">
        <span>{fieldName}</span>
      </div>
      {getFieldType(config)}
    </div>
  );
};

export default Field;
