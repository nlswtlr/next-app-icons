"use client";

import { useEffect } from "react";
import type { Metadata } from "next";

type MetadataProps = {
  json: Metadata | null;
};

const Metadata = ({ json }: MetadataProps) => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  if (!json) {
    return null;
  }

  return (
    <div className="my-8">
      <pre>
        <code className="language-tsx">{JSON.stringify(json, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Metadata;
