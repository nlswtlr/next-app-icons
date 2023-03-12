import Script from "next/script";

import Header from "@/components/Header";
import FileUpload from "@/components/FileUpload";

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto mt-8 px-4 text-white">
        <Header />
        <FileUpload />
        <p className="mt-12 mb-6 text-center text-xs text-slate-700">
          Robot by Adrien Coquet from{" "}
          <a href="https://thenounproject.com/browse/icons/term/robot/" target="_blank" title="Robot Icons">
            Noun Project
          </a>
          <br />
          drag drop by Yogi Aprelliyanto from{" "}
          <a href="https://thenounproject.com/browse/icons/term/drag-drop/" target="_blank" title="drag drop Icons">
            Noun Project
          </a>
        </p>
      </main>
      <Script src="/assets/js/prism.js" />
    </>
  );
}

export const dynamic = "force-dynamic";
