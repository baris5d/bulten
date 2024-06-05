import React, { createContext, useReducer, ReactNode, useContext } from "react";

interface SelectedMatch {
  id: string;
  selectedKey: string;
  match: string;
  rate: string;
}

interface SelectedMatchesContextType {
  selectedMatches: SelectedMatch[];
  toggleSelection: (
    id: string,
    key: string,
    match: string,
    rate: string
  ) => void;
}

type Action = {
  type: "TOGGLE_SELECTION";
  payload: { id: string; key: string; match: string; rate: string };
};

const SelectedMatchesContext = createContext<
  SelectedMatchesContextType | undefined
>(undefined);

const selectedMatchesReducer = (
  state: SelectedMatch[],
  action: Action
): SelectedMatch[] => {
  switch (action.type) {
    case "TOGGLE_SELECTION":
      const { id, key, match, rate } = action.payload;
      const matchIndex = state.findIndex((match) => match.id === id);
      if (matchIndex !== -1) {
        const updatedMatches = [...state];
        updatedMatches[matchIndex] = { id, selectedKey: key, match, rate };
        return updatedMatches;
      } else {
        return [...state, { id, selectedKey: key, match, rate }];
      }
    default:
      return state;
  }
};

export const SelectedMatchesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedMatches, dispatch] = useReducer(selectedMatchesReducer, []);

  const toggleSelection = (
    id: string,
    key: string,
    match: string,
    rate: string
  ) => {
    dispatch({ type: "TOGGLE_SELECTION", payload: { id, key, match, rate } });
  };

  return (
    <SelectedMatchesContext.Provider
      value={{ selectedMatches, toggleSelection }}
    >
      {children}
    </SelectedMatchesContext.Provider>
  );
};

export const useSelectedMatches = () => {
  const context = useContext(SelectedMatchesContext);
  if (!context) {
    throw new Error(
      "useSelectedMatches must be used within a SelectedMatchesProvider"
    );
  }
  return context;
};
