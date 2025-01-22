import { Link } from 'react-router'
import { useAuth } from '../Context/AuthContext'
import { useState } from 'react'

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogOut = () => {
    logOut()
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="navbar max-w-screen-2xl container mx-auto px-5 bg-white mb-8 mt-2 relative">
      <div className="navbar-start">
        {/* Hamburger Menu */}
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold flex items-center justify-center"
        >
          <img src="/logo.png" alt="" />
          <span className="text-[#697077] ml-2 hidden sm:block">WebCode</span>
        </Link>
      </div>

      {/* Navbar Links (Large Screens) */}
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal px-1 text-center">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-300">
              Blogs
            </Link>
          </li>
          <li>
            <details className="z-10">
              <summary className="hover:text-gray-300">Category</summary>
              <ul className="p-2">
                <li>
                  <Link to="" className="hover:bg-gray-700 hover:text-gray-300">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:bg-gray-700 hover:text-gray-300">
                    Blockchain with AI
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:bg-gray-700 hover:text-gray-300">
                    DevOps
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* User Authentication */}
      <div className="navbar-end gap-4">
        {user ? (
          <>
            <Link
              to="/Dashboard"
              className="btn btn-outline btn-primary px-8 hidden sm:flex"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogOut}
              className="btn btn-primary hover:bg-primary px-8"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-primary px-8 hidden sm:flex"
            >
              LogIn
            </Link>
            <Link
              to="/pricing"
              className="btn btn-primary hover:bg-primary px-8"
            >
              Start Free Trial
            </Link>
          </>
        )}
      </div>

      {/* Navbar Links (Small Screens) */}
      <div
        className={`absolute top-0 left-0 w-full z-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? 'translate-y-0 bg-gray-900'
            : '-translate-y-full bg-white'
        }`}
      >
        <ul className="menu menu-vertical p-4 text-center text-white">
          <li>
            <Link
              to="/"
              className="hover:bg-gray-700 hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:bg-gray-700 hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:bg-gray-700 hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <details>
              <summary className="hover:text-gray-300">Category</summary>
              <ul className="p-2">
                <li>
                  <Link
                    to=""
                    className="hover:bg-gray-700 hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="hover:bg-gray-700 hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blockchain with AI
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="hover:bg-gray-700 hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    DevOps
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
