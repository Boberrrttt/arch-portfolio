// app/home/page.tsx
import fs from 'fs';
import path from 'path';
import PDFGalleryWrapper from '@/components/pdfgallerywrapper';

export default function HomePage() {
  const pdfDir = path.join(process.cwd(), 'public/pdfs');
  const files = fs.readdirSync(pdfDir).filter((f) => f.endsWith('.pdf'));

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='text-2xl font-bold'>Hazel Louise P. Acurantes</h1>
      <h1 className='text-2xl font-bold mb-12'>BSARCH</h1>
      <PDFGalleryWrapper files={files} />
    </div>
  );
}
