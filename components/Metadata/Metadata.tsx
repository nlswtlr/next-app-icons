'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';

import Button from '@/components/Button';

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

  const data = JSON.stringify(json, null, 2);

  return (
    <div className="relative my-8">
      <pre>
        <code className="language-tsx">{data}</code>
      </pre>
      <Button
        className="absolute bottom-2 right-2 px-4 py-1 mt-2 text-xs"
        onClick={() => navigator.clipboard.writeText(data)}>
        copy
      </Button>
    </div>
  );
};

export default Metadata;
