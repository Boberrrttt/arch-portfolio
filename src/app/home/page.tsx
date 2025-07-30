import fs from 'fs';
import path from 'path';
import PDFGalleryWrapper from '@/components/pdfgallerywrapper';

export default function HomePage() {
  const pdfDir = path.join(process.cwd(), 'public/pdfs');
  const files = fs.readdirSync(pdfDir).filter((f) => f.endsWith('.pdf'));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-purple-100/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center border-b border-purple-300">
        <h1 className="text-xl font-bold text-purple-800 tracking-wide">Hazel Louise P. Acurantes</h1>
        <div className="space-x-4 text-sm font-medium text-purple-700">
          <a href="#about" className="hover:text-purple-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Portfolio Section */}
      <section
        id="projects"
        className="px-6 py-24 max-w-6xl mx-auto border-y border-purple-300 mt-16"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-900">Projects</h2>
        <PDFGalleryWrapper files={files} />
      </section>
      
       {/* About Section */}
       <section
        id="about"
        className="px-6 py-24 max-w-5xl mx-auto bg-purple-100/60 rounded-2xl shadow-md mt-10 flex flex-col md:flex-row items-center gap-10"
      >
        <img
          src="https://static.wixstatic.com/media/8b2a4d_18e229cc90784dec805b4676bb22d559~mv2.jpg/v1/fill/w_410,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9307_edited_edited.jpg"
          alt="Hazel Louise P. Acurantes"
          className="w-64 h-64 object-cover rounded-full border-4 border-purple-300 shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-5xl font-extrabold mb-6 text-purple-900">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="block mb-4">Artist. Creator. Idealist.</span>
            I am a BS Architecture student driven by a love for thoughtful, human-centered design.
            With an eye for aesthetics and a passion for creative expression, I draw inspiration from everyday life,
            nature, and the built environment. Whether sketching concepts or modeling structures, I aim to bring emotion
            and function into every space I imagine.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-purple-200 px-6 py-20 max-w-4xl mx-auto text-center mt-16 rounded-xl shadow-inner"
      >
        <h2 className="text-4xl font-bold mb-4 text-purple-900">Contact</h2>
        <p className="text-md text-gray-700">
          For inquiries, collaborations, or feedback, feel free to reach out.
        </p>
        <p className="mt-2">
          Email:{' '}
          <a
            href="mailto:acuranteshazel@gmail.com"
            className="text-purple-800 hover:underline font-medium"
          >
            acuranteshazel@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600 border-t border-purple-300 mt-20">
        &copy; {new Date().getFullYear()} Hazel Louise P. Acurantes. All rights reserved.
      </footer>
    </div>
  );
}
