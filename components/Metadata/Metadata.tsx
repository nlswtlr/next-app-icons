"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";

import Button from "@/components/Button";

type MetadataProps = {
  json: Metadata | null;
};

const Metadata = ({ json }: MetadataProps) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  if (!json) {
    return null;
  }

  const data = JSON.stringify(json, null, 2);

  return (
    <div className="relative my-8">
      <pre>
        <code className="language-tsx">{data}</code>
      </pre>
      <Button
        className="absolute top-full right-0 px-4 py-1 mt-2 text-xs"
        onClick={() => {
          navigator.clipboard.writeText(data);
          setClicked(true);
        }}
      >
        <span className={`${clicked ? "block" : "hidden"} absolute left-1 top-2/4 -translate-y-2/4 text-lime-600`}>
          ✓{" "}
        </span>
        copy
      </Button>
    </div>
  );
};

export default Metadata;
