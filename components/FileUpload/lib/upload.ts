import { Dispatch } from "react";
import type { Metadata } from "next";

import { ReducerActions } from "./state";

type Response = { success: boolean; file: string; metadata: Metadata };

export default async function upload(iconFile: File, dispatch: Dispatch<ReducerActions>) {
  try {
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
    const { metadata, file }: Response = await res.json();

    dispatch({ type: "SET_METADATA", payload: metadata });
    dispatch({ type: "SET_FILE_PATH", payload: file });
    dispatch({ type: "SET_LOCKED", payload: true });
  } catch (e) {
    console.error(e);
  }
}
