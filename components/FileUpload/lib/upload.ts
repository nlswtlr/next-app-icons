export default async function upload(file: File) {
  try {
    const tokenEl = document.querySelector<HTMLSpanElement>("[data-file-hash]");
    const formData = new FormData();

    console.log(tokenEl?.dataset.fileHash);

    formData.append("icon", file);

    const res = await fetch(`${process.env.API_BASE_PATH}/generate`, {
      method: "POST",
      body: formData,
      headers: {
        "X-Auth": tokenEl?.dataset.fileHash || "",
      },
    });
    const data = await res.json();

    console.log(data);
  } catch (e) {}
}
