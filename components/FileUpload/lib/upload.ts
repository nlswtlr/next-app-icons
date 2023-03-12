import { Dispatch } from "react";
import type { Metadata } from "next";

import { ReducerActions } from "./reducer";

type SuccessResponse = { success: boolean; file: string; metadata: Metadata };
type ErrorResponse = { errorCode: string };

const errorCodes: Record<string, string> = {
  "001":
    "Oops, something went wrong while generating the app icons. Please try again later. The error will be logged on the server and hopefully soon be resolved.",
  "004": "The filetype is not allowed. Please upload a PNG, JPG or GIF file.",
  "005": "The auth token expired. Please reload the page and upload your image again.",
  "006": "Please upload only images smaller than 1MB.",
};

export default async function upload(iconFile: File, dispatch: Dispatch<ReducerActions>) {
  try {
    dispatch({ type: "SET_MESSAGE", payload: { type: "error", text: "" } });
    dispatch({ type: "SET_UPLOAD_STATE", payload: true });

    const tokenEl = document.querySelector<HTMLSpanElement>("[data-file-hash]");
    const formData = new FormData();

    formData.append("icon", iconFile);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/generate`, {
      method: "POST",
      body: formData,
      headers: {
        "X-Auth": tokenEl?.dataset.fileHash || "",
      },
    });
    const respData: SuccessResponse | ErrorResponse = await res.json();

    dispatch({ type: "SET_UPLOAD_STATE", payload: false });

    if ("errorCode" in respData) {
      const errorMsg = errorCodes[respData.errorCode];
      return dispatch({ type: "SET_MESSAGE", payload: { type: "error", text: errorMsg || errorCodes["001"] } });
    }

    dispatch({ type: "SET_METADATA", payload: respData.metadata });
    dispatch({ type: "SET_FILE_PATH", payload: respData.file });
  } catch (e) {
    dispatch({ type: "SET_UPLOAD_STATE", payload: false });
    dispatch({ type: "SET_MESSAGE", payload: { type: "error", text: "Ok, something broke in the frontend here." } });
  }
}
