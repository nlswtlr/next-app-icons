import type { Metadata } from "next";

export type State = {
  locked: boolean;
  dragOver: boolean;
  metadata: Metadata | null;
  filePath: string;
};

type SetDragOverAction = {
  type: "SET_DRAG_OVER";
  payload: boolean;
};

type SetLockedAction = {
  type: "SET_LOCKED";
  payload: boolean;
};

type SetFilePathAction = {
  type: "SET_FILE_PATH";
  payload: string;
};

type SetMetadataAction = {
  type: "SET_METADATA";
  payload: Metadata;
};

export type ReducerActions = SetDragOverAction | SetLockedAction | SetFilePathAction | SetMetadataAction;

export const initialState: State = {
  locked: false,
  dragOver: false,
  metadata: null,
  filePath: "",
};

export const reducer = (state: State, action: ReducerActions) => {
  switch (action.type) {
    case "SET_DRAG_OVER":
      return { ...state, dragOver: action.payload };
    case "SET_LOCKED":
      return { ...state, locked: action.payload };
    case "SET_FILE_PATH":
      return { ...state, filePath: action.payload };
    case "SET_METADATA":
      return { ...state, metadata: action.payload };
    default:
      return state;
  }
};
