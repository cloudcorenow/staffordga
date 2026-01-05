import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-md border-b border-slate-700/50 py-1.5'
        : 'bg-slate-900 py-3'
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-0 group">
            <img
              src="https://imagedelivery.net/s0JEtwqnLquT1GUYjPcg5Q/5c19e074-87f8-4fe5-6b05-6caccfab0200/public"
              alt="Company Logo"
              className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-white text-2xl font-bold tracking-wide font-garamond -ml-2">
              Stafford Group & Associates
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/portal" className="ml-4 btn btn-primary">
              Make A Payment
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-slate-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col py-4 space-y-2 bg-slate-800/95 backdrop-blur-lg rounded-2xl mt-4 p-4 shadow-xl border border-slate-700/50">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/portal" className="btn btn-primary mt-4 text-center">
                Make A Payment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;