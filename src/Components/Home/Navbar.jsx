import { Link } from 'react-router'
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
  const { user, logOut } = useAuth()
  const handleLogOut = () => {
    logOut()
  }
  console.log(user)
  return (
    <div className="navbar max-w-screen-2xl container mx-auto px-5 bg-white mb-8 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <a>Catagorey</a>
              <ul className="p-2">
                <li>
                  <Link to="">Web Development</Link>
                </li>
                <li>
                  <Link to="">Block Chain with AI</Link>
                </li>
                <li>
                  <Link to="">Dev OPPS</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold  flex items-center">
          <img src="/public/logo.png" alt="" />
          <span className="text-[#697077] ml-2 hidden sm:block"> WebCode</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <details className="z-10">
              <summary>Catagorey</summary>
              <ul className="p-2">
                <li>
                  <Link to="">Web Development</Link>
                </li>
                <li>
                  <Link to="">Block Chain with AI</Link>
                </li>
                <li>
                  <Link to="">Dev OPPS</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <>
            {' '}
            <Link
              to="/Dashboard"
              className="btn btn-outline btn-primary px-8 hidden sm:flex"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogOut}
              className="btn  btn-primary  hover:bg-primary px-8"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {' '}
            <Link
              to="/login"
              className="btn btn-outline btn-primary px-8 hidden sm:flex"
            >
              LogIn
            </Link>
            <Link
              to="/pricing"
              className="btn  btn-primary  hover:bg-primary px-8"
            >
              Start Free Trial
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
