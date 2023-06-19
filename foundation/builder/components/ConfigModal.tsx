import React from "react";
import ConfigForm from "./ConfigForm";

const ConfigModal = ({ open, onClose, onSubmit, field, selectedIndex }) => {
  return (
    <div
      className="modal bd-example-modal-lg"
      role="dialog"
      style={open ? { display: "block" } : {}}
    >
      <div
        className="modal-dialog modal-dialog-centered  modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Configure</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ConfigForm
              onSubmit={onSubmit}
              field={field}
              selectedIndex={selectedIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigModal;
