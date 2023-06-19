import React, { useCallback, useReducer } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Palette from "./components/Palette";
import Board from "./components/Board";

export type BuilderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: React.ReactNode;
};

export function Builder({ children }: BuilderProps) {
  const [createdFields, dispatch] = useReducer((state, action) => {
    const updatedFields = [...state];

    switch (action.type) {
      case "add":
        updatedFields.push(action.item);
        return updatedFields;
      case "remove":
        updatedFields.splice(action.index, 1);
        return updatedFields;
      case "update":
        let allFields = [...state];
        let currentField = allFields[action.index];

        currentField = {
          ...currentField,
          classes: action.fieldClass,
          config: action.config,
        };

        allFields[action.index] = currentField;
        return allFields;
      default:
        console.log("nothing");
        break;
    }
  }, []);

  const handleDrop = useCallback((item) => {
    dispatch({ type: "add", item });
  }, []);

  const handleRemove = useCallback((index) => {
    dispatch({ type: "remove", index });
  }, []);

  const handleConfig = useCallback((index, config, fieldClass) => {
    dispatch({ type: "update", index, config, fieldClass });
  }, []);

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="row">
          <div className="col-md-2 col-12">
            <Palette />
          </div>
          <div className="col-md-10 col-12">
            <Board
              onDrop={handleDrop}
              fields={createdFields}
              onRemove={handleRemove}
              updateConfig={handleConfig}
            />
          </div>
        </div>
      </DndProvider>
    </div>
  );
}
