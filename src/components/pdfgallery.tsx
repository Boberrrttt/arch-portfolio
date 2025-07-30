// components/PDFGallery.tsx
'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PDFGallery({ files }: { files: string[] }) {
  const plugin = defaultLayoutPlugin();

  return (
    <div>
      {files.map((file, index) => (
        <div key={index} style={{ height: '600px', marginBottom: '40px' }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={`/pdfs/${file}`} plugins={[plugin]} />
          </Worker>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>{file}</p>
        </div>
      ))}
    </div>
  );
}
