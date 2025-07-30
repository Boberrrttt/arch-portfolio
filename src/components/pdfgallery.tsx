'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { useState } from 'react';

// Desired order of display
const customOrder = [
  'png2pdf+9.pdf',
  '_DESIGN+7-CONDO_RESEARCH+PL100+(1).pdf',
  'PL100_Case+Study+(4).pdf',
  'PLATE100 CONDO PRINT FINAL FINAL.pdf',
  'PL200-Part-1 COncecptual.pdf',
  'DESIGN-7-RESEARCH-PL200-1.pdf',
  'PL200_CS.pdf',
  'Aquagon-FINAL Competition.pdf',
  'PL200 FINAL.pdf',
  'Portfolio.pdf',
];

// Labels for display
const fileLabels: Record<string, string> = {
  'png2pdf+9.pdf': 'Esquisse 100 Condominium Floor Plan',
  '_DESIGN+7-CONDO_RESEARCH+PL100+(1).pdf': 'RESEARCH 100 Condominium',
  'PL100_Case+Study+(4).pdf': 'CASE STUDY 100 Condominium',
  'PLATE100 CONDO PRINT FINAL FINAL.pdf': 'Plate 100 Mid Rise Condominium (Image)',
  'PL200-Part-1 COncecptual.pdf': 'Plate 200 Domestic Airport Part 1 Conceptual',
  'DESIGN-7-RESEARCH-PL200-1.pdf': 'Research 200 Domestic Airport',
  'PL200_CS.pdf': 'CASE STUDY 200 Domestic Airport',
  'Aquagon-FINAL Competition.pdf': 'Esquise 200 Competition',
  'PL200 FINAL.pdf': 'Plate 200 Final - Domestic Airport Part (Image)',
  'Portfolio.pdf': 'Portfolio',
};

// Files that should be shown as images instead of PDFs
const fileTypes: Record<string, string> = {
  'PLATE100 CONDO PRINT FINAL FINAL.pdf': '/Screenshot 2025-07-30 133640.png',
  'PL200 FINAL.pdf': '/Screenshot 2025-07-30 133709.png',
};

export default function PDFGallery({ files }: { files: string[] }) {
  const plugin = defaultLayoutPlugin();
  const [activeFile, setActiveFile] = useState(customOrder[0]);

  // Always use customOrder as the source of truth for ordering
  const orderedFiles = customOrder;

  const isImage = !!fileTypes[activeFile];
  const fileUrl = `/pdfs/${activeFile}`;
  const imageUrl = fileTypes[activeFile];

  return (
    <div>
      {/* File selection buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {orderedFiles.map((file) => (
          <button
            key={file}
            onClick={() => setActiveFile(file)}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              backgroundColor: activeFile === file ? '#2563EB' : '#f5f5f5',
              color: activeFile === file ? '#fff' : '#333',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              boxShadow: activeFile === file ? '0 2px 6px rgba(0,0,0,0.2)' : 'none',
            }}
          >
            {fileLabels[file] || file}
          </button>
        ))}
      </div>

      {/* Viewer Section */}
      <div style={{ height: '600px', marginTop: '20px', textAlign: 'center' }}>
        {isImage ? (
          <img
            src={imageUrl}
            alt={fileLabels[activeFile]}
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          />
        ) : (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={fileUrl} plugins={[plugin]} />
          </Worker>
        )}

        <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
          {fileLabels[activeFile] || activeFile}
        </p>
      </div>
    </div>
  );
}
