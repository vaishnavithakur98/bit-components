import { useState, useEffect } from "react";
import { inputTypes } from "../utils/helper";

const ConfigForm = ({ onSubmit, field, selectedIndex }) => {
  const [configDetails, setConfigDetails] = useState(field.config);
  const [fieldClass, setFieldClass] = useState(field.classes);

  const handleClick = () => {
    onSubmit(selectedIndex, configDetails, fieldClass);
  };

  const changeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setConfigDetails({
        ...configDetails,
        [event.target.name]: event.target.checked,
      });
    } else {
      setConfigDetails({
        ...configDetails,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    setConfigDetails(field.config);
    setFieldClass(field.classes);
  }, [field]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 custom-form-field">
          <div className="form-group">
            <label htmlFor="field-lable" className="col-form-label">
              Field Label:
            </label>
            <input
              type="text"
              className="form-control"
              id="field-lable"
              value={configDetails.label}
              name="label"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="col-6 custom-form-field">
          <div className="form-group">
            <label htmlFor="field-lable" className="col-form-label">
              Field Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="field-lable"
              value={configDetails.name}
              name="name"
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 custom-form-field">
          <div className="form-group">
            <label htmlFor="field-lable" className="col-form-label">
              Field Id:
            </label>
            <input
              type="text"
              className="form-control"
              id="field-lable"
              value={configDetails.id}
              name="id"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="col-6 custom-form-field">
          <div className="form-group">
            <label htmlFor="field-lable" className="col-form-label">
              Validations:
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="is-required"
              checked={configDetails.required}
              name="required"
              onChange={changeHandler}
            />
            <label className="form-check-label" htmlFor="is-required">
              Required
            </label>
          </div>
          {configDetails.type !== "select" && (
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="is-readonly"
                checked={configDetails.readonly}
                name="readonly"
                onChange={changeHandler}
              />
              <label className="form-check-label" htmlFor="is-readonly">
                Readonly
              </label>
            </div>
          )}
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="is-disabled"
              checked={configDetails.disabled}
              name="disabled"
              onChange={changeHandler}
            />
            <label className="form-check-label" htmlFor="is-disabled">
              Disabled
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 custom-form-field">
          <div className="form-group">
            <label htmlFor="field-lable" className="col-form-label">
              Custom Input Classes:
            </label>
            <input
              type="text"
              className="form-control"
              id="field-lable"
              value={configDetails.inputClasses}
              name="inputClasses"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="col-6 custom-form-field">
          <div className="form-group">
            <label htmlFor="field-lable" className="col-form-label">
              Custom Container Classes:
            </label>
            <input
              type="text"
              className="form-control"
              id="field-lable"
              value={fieldClass}
              name="classes"
              onChange={({ target }) => setFieldClass(target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        {inputTypes.includes(configDetails.type) && (
          <>
            <div className="col-6 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Field Type:
                </label>
                <select
                  className="form-select"
                  aria-label="Select Box"
                  id="field-type"
                  name="type"
                  value={configDetails.type}
                  onChange={changeHandler}
                >
                  <option disabled>Please select</option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="email">Email</option>
                  <option value="tel">Tel</option>
                  <option value="color">Color</option>
                  <option value="date">Date</option>
                  <option value="password">Password</option>
                  <option value="url">URL</option>
                </select>
              </div>
            </div>
            <div className="col-6 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Placeholder:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="field-lable"
                  value={configDetails.placeholder}
                  name="placeholder"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </>
        )}
        {configDetails.type === "select" && (
          <>
            <div className="col-8 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Select Options (separated option values with | sign):
                </label>
                <textarea
                  className="form-control"
                  id="field-lable"
                  value={configDetails.options}
                  name="options"
                  onChange={changeHandler}
                  rows="2"
                ></textarea>
              </div>
            </div>
            <div className="col-4 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Extra Config:
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="is-multiple"
                  checked={configDetails.multiple}
                  name="multiple"
                  onChange={changeHandler}
                />
                <label className="form-check-label" htmlFor="is-multiple">
                  Multiple Select?
                </label>
              </div>
            </div>
          </>
        )}
        {configDetails.type === "textarea" && (
          <div className="col-6 custom-form-field">
            <div className="form-group">
              <label htmlFor="field-lable" className="col-form-label">
                Number of rows:
              </label>
              <input
                type="text"
                className="form-control"
                id="field-lable"
                value={configDetails.rows}
                name="rows"
                onChange={changeHandler}
              />
            </div>
          </div>
        )}
        {configDetails.type === "checkbox" && (
          <>
            <div className="col-6 custom-form-field">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="is-checked"
                  checked={configDetails.checked}
                  name="checked"
                  onChange={changeHandler}
                />
                <label className="form-check-label" htmlFor="is-checked">
                  Checked
                </label>
              </div>
            </div>
            <div className="col-6 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Value:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="field-lable"
                  value={configDetails.value}
                  name="value"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </>
        )}
        {configDetails.type === "file" && (
          <div className="col-6 custom-form-field">
            <div className="form-group">
              <label htmlFor="field-lable" className="col-form-label">
                Accepted File Types:
              </label>
              <input
                type="text"
                className="form-control"
                id="field-lable"
                value={configDetails.acceptedTypes}
                name="acceptedTypes"
                onChange={changeHandler}
              />
            </div>
          </div>
        )}
        {configDetails.type === "radio" && (
          <>
            <div className="col-6 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Radio Labels (separated Labels with | sign to create a radio
                  group):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="field-lable"
                  value={configDetails.radioLabels}
                  name="radioLabels"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="col-6 custom-form-field">
              <div className="form-group">
                <label htmlFor="field-lable" className="col-form-label">
                  Radio Values (separated Values with | sign to create set radio
                  group values):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="field-lable"
                  value={configDetails.values}
                  name="values"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="row">
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-outline-primary btn-lg float-end"
            onClick={handleClick}
          >
            Save Field
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;
