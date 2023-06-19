import React, { ComponentType, ReactNode } from "react";
import ReactDOM from "react-dom";

export type MounterProvider = ComponentType<{ children: ReactNode }>;

export function createMounter(Provider: MounterProvider = React.Fragment): any {
  return (Composition: React.ComponentType) => {
    const rootDoc = document.getElementById("root");
    ReactDOM.render(
      <Provider>
        <Composition />
      </Provider>,
      rootDoc
    );
  };
}

export default createMounter;
