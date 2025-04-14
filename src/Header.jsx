import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'

const Header = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative flex flex-col h-auto bg-gray-50">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-[#0f2027]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 mb-4"></div>
          <p className="text-lg text-cyan-200 font-semibold tracking-wider font-mono">
            Loading 3D Human Viewer...
          </p>
        </div>
      ) : (
        <>
          <header className="p-4 bg-white shadow flex items-center justify-between md:px-10 px-2">
            <h2 className="text-md font-extrabold text-center tracking-wide bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              🦴 3D Human Skeleton Viewer
            </h2>
            <button
              className="text-3xl text-cyan-600 hover:text-cyan-800 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </header>

          {/* Right Side Menu */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="fixed top-0 right-0 w-64 h-full bg-[#0f2027] shadow-lg z-50 p-6 animate-slide-in"
            >
              <h2 className="text-xl font-bold mb-4 text-cyan-700">Menu</h2>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li>
                    <NavLink
                    to="/skeleton"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        isActive
                        ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1'
                        : 'hover:text-cyan-500'
                    }
                    >
                    Skeleton
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/skull"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        isActive
                        ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1'
                        : 'hover:text-cyan-500'
                    }
                    >
                    Skull
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/ribcage"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                        isActive
                        ? 'text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1'
                        : 'hover:text-cyan-500'
                    }
                    >
                    Ribcage
                    </NavLink>
                </li>
            </ul>
            </div>
          )}

          <main className="flex-1">
            {children}
          </main>

          {/* Slide-in animation */}
          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .animate-slide-in {
              animation: slideIn 0.3s ease-out forwards;
            }
          `}</style>
        </>
      )}
    </div>
  );
};

export default Header;
