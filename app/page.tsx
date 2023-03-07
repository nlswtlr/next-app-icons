import FileUpload from "@/components/FileUpload";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-8 px-4 text-white">
      <h1 className="text-xl text-center">Next.js App Icons Generator</h1>
      <p className="text-sm text-center">
        Generate app icons with auto generated{" "}
        <a
          className="underline decoration-1"
          target="_blank"
          rel="noopener"
          href="https://beta.nextjs.org/docs/api-reference/metadata"
        >
          metadata
        </a>{" "}
        output.
      </p>
      <FileUpload />
      <p className="text-center text-xs text-slate-600">
        Robot by Adrien Coquet from{" "}
        <a href="https://thenounproject.com/browse/icons/term/robot/" target="_blank" title="Robot Icons">
          Noun Project
        </a>
      </p>
    </main>
  );
}
