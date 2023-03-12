import type { Metadata } from "next";

export type State = {
  dragOver: boolean;
  uploading: boolean;
  metadata: Metadata | null;
  filePath: string;
  message: {
    type: "success" | "error";
    text: string;
  };
};

type SetDragOverAction = {
  type: "SET_DRAG_OVER";
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

type SetMessageAction = {
  type: "SET_MESSAGE";
  payload: State["message"];
};

type SetUploadStateAction = {
  type: "SET_UPLOAD_STATE";
  payload: boolean;
};

export type ReducerActions =
  | SetDragOverAction
  | SetFilePathAction
  | SetMetadataAction
  | SetMessageAction
  | SetUploadStateAction;

export const initialState: State = {
  dragOver: false,
  uploading: false,
  metadata: null,
  filePath: "",
  message: {
    type: "error",
    text: "",
  },
};

export const reducer = (state: State, action: ReducerActions) => {
  switch (action.type) {
    case "SET_DRAG_OVER":
      return { ...state, dragOver: action.payload };
    case "SET_FILE_PATH":
      return { ...state, filePath: action.payload };
    case "SET_METADATA":
      return { ...state, metadata: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: { ...action.payload } };
    case "SET_UPLOAD_STATE":
      return { ...state, uploading: action.payload };
    default:
      return state;
  }
};
