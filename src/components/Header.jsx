import React, { useState, useEffect } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 p-5 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <nav className="flex items-center">
          <div className="mr-4">
            <img
              src="./dotdazzle-logo.svg"
              alt="dotdazzle logo"
              title="logo of dotdazzle"
              className="w-24 md:w-28"
            />
          </div>
        </nav>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 rounded-3xl bg-black text-white p-3 px-5 font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        {/* Contact Us Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/+919599518124"
            className="flex gap-4 rounded-3xl bg-black text-white p-2 md:p-3 px-3 md:px-5 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
          {/* Hamburger Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={24} /> : <BsGridFill size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white w-full p-5 mt-3 rounded-lg">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <a href="/" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About us
              </a>
            </li>
            <li>
              <a href="#project" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/+919599518124"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-3xl bg-white text-black p-2"
                onClick={toggleMenu}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
