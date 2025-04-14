import React from 'react';
import { FiArrowRightCircle, FiLayers, FiFacebook, FiInstagram, FiRotateCw, FiPlayCircle, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import Header from './Header';

const HomePage = () => {
  return (
    <Header>
       
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0f2027] text-white relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            Explore the Human Skeleton in 3D
          </h1>
          <p className="text-lg md:text-xl font-medium text-cyan-100 mb-8">
            Interact with fully labeled, immersive 3D anatomical models of the skeleton, skull, and ribcage.
          </p>
          <Link
            to="skeleton"
            smooth={true}
            duration={800}
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-lg shadow-lg transition cursor-pointer"
          >
            View Skeleton
            <FiArrowRightCircle className="ml-3 text-2xl" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Features of the 3D Human Skeleton Viewer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-4 bg-white text-gray-800 p-4 rounded-full shadow-xl">
                <FiRotateCw className="text-4xl text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive 3D Navigation</h3>
              <p>
                Rotate, zoom, and pan through the 3D models of the human skeleton, skull, and ribcage to explore every angle and detail in an intuitive and user-friendly interface.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 bg-white text-gray-800 p-4 rounded-full shadow-xl">
                <FiLayers className="text-4xl text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Labeled Anatomy</h3>
              <p>
                Each model comes with clear, labeled parts of the body, making it perfect for anatomy studies. Easily identify bones, joints, and other anatomical structures.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 bg-white text-gray-800 p-4 rounded-full shadow-xl">
                <FiPlayCircle className="text-4xl text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Animated Model</h3>
              <p>
                Watch the skeleton in motion! The models come with animations, showcasing the movement of the body and how bones interact in a dynamic 3D space.
              </p>
            </div>

            
          </div>
        </div>
      </section>

       {/* About Section */}
       <section className="py-20 px-6 bg-white text-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-cyan-600">Why This Viewer?</h2>
          <p className="text-lg leading-relaxed">
            The 3D Human Skeleton Viewer is a powerful tool designed for students, medical professionals, and anyone curious about human anatomy. It offers a real-time, labeled visualization of major skeletal parts to help improve understanding and learning efficiency.
          </p>
        </div>
      </section>

      {/* Contact Section / Footer */}
<footer className="bg-[#1e293b] text-white py-10 text-center">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
    <p className="text-lg mb-6">
      We're here to help you explore the human skeleton in 3D. Feel free to reach out to us for any inquiries or support.
    </p>
    <div className="flex justify-center mb-6">
      <a href="mailto:contact@humanskeletonviewer.com" className="mx-4 text-2xl hover:text-cyan-400">
        <FiMail />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl hover:text-cyan-400">
        <FiFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl hover:text-cyan-400">
        <FiInstagram />
      </a>
    </div>
    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Human Skeleton Viewer. All Rights Reserved.</p>
  </div>
</footer>

    </Header>
  );
};

export default HomePage;
