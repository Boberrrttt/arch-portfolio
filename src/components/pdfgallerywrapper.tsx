// components/PDFGalleryWrapper.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the actual PDFGallery (which uses @react-pdf-viewer)
const PDFGallery = dynamic(() => import('./pdfgallery'), {
  ssr: false,
});

export default function PDFGalleryWrapper({ files }: { files: string[] }) {
  return <PDFGallery files={files} />;
}
