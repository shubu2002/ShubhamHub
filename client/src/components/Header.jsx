import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-gray-900 text-gray-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 ">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">S</span>
          </div>

          {/* Logo Text */}
          <NavLink
            className="text-2xl font-extrabold tracking-wide text-gray-50 hover:text-purple-400 transition-all duration-300 "
            to="/"
          >
            Shubham<span className="text-purple-500">Hub</span>
          </NavLink>
        </div>

        {/* Navbar Section */}
        <div className="lg:hidden">
          {/* Hamburger Button */}
          <button
            className="text-gray-50 hover:text-white"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6 items-center">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>

            {/* Login/Logout Links */}
            {isLoggedIn ? (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                  }
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-gray-900 text-gray-50 py-3 px-4`}
      >
        <ul className="space-y-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>

          {/* Login/Logout Links */}
          {isLoggedIn ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                }
                to="/logout"
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "text-[rgb(96,96,237)] hover:text-white transition-all duration-300"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
