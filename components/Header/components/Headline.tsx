"use client";

const Headline = () => (
  <h1
    className="text-xl text-center mb-4 cursor-pointer"
    onClick={() => {
      window.location.href = "/";
    }}
  >
    Next.js App Icon Generator
  </h1>
);

export default Headline;
