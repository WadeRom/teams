import { useState } from "react";

export const useChangeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setupdateState = (updatestate) => {
    return setState(updatestate);
  };
  
  return [state, setupdateState];
} 