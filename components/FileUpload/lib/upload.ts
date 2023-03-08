import type { Metadata } from "next";

export default async function upload(file: File) {
  try {
    const tokenEl = document.querySelector<HTMLSpanElement>("[data-file-hash]");
    const formData = new FormData();

    formData.append("icon", file);

    const res = await fetch(`${process.env.API_BASE_PATH}/generate`, {
      method: "POST",
      body: formData,
      headers: {
        "X-Auth": tokenEl?.dataset.fileHash || "",
      },
    });
    const data: Promise<{ success: boolean; file: string; metadata: Metadata }> = await res.json();

    console.log(data);
  } catch (e) {}
}
