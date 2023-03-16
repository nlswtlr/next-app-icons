import Script from "next/script";

import Header from "@/components/Header";
import FileUpload from "@/modules/FileUpload";

const Home = async () => (
  <>
    <main className="max-w-xl mx-auto mt-8 px-4 text-white">
      {/* @ts-expect-error Server Component */}
      <Header />
      <FileUpload />
      <p className="mt-10 mb-6 text-center text-xs text-slate-700">
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

export default Home;
