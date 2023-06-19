import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ConfigModal from "./ConfigModal";
import CreatedField from "./CreatedFields";

const Board = ({ fields, onDrop, onRemove, updateConfig }) => {
  const [openConfigModal, setOpenConfigModal] = useState(false);
  const [configField, setConfigField] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [{}, drop] = useDrop(
    () => ({
      accept: "field",
      drop: (monitor) => {
        onDrop(monitor);
      },
      collect: (monitor) => {
        return {
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        };
      },
    }),
    []
  );

  const handleActions = (type, index) => {
    if (type === "remove") {
      onRemove(index);
    } else {
      const editField = fields[index];
      setOpenConfigModal(true);
      setConfigField(editField);
      setSelectedIndex(index);
    }
  };

  const handleClose = () => setOpenConfigModal(false);

  const handleConfig = (index, config, fieldClass) => {
    updateConfig(index, config, fieldClass);
    setOpenConfigModal(false);
  };

  return (
    <div className="form-board" ref={drop}>
      <div className="card text-dark mb-3">
        <div className="card-header">Board</div>
        <div className="card-body">
          <div className="row">
            {fields.map((field, i) => {
              return (
                <div
                  className={`custom-form-field ${field.classes}`}
                  key={`droped-field-${i}`}
                >
                  <CreatedField
                    field={field}
                    actionHandler={handleActions}
                    index={i}
                  />
                </div>
              );
            })}
          </div>
          {fields.length > 0 && selectedIndex !== null && (
            <ConfigModal
              open={openConfigModal}
              onClose={handleClose}
              onSubmit={handleConfig}
              field={configField}
              selectedIndex={selectedIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
