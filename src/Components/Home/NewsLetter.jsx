import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'

const NewsLetter = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-5 container bg-colourBG">
      <div className="text-center mb-10 mx-auto sm:w-3/4 md:w-2/4">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold m-4">
          Stay updated with our NewsLetter
        </h2>
        <p className="text-gray-500 text-sm ">
          Discover the ultimate platform designed to streamline your projects
          and boost collaboration. Whether you are a freelancer, a professional,
          everything is crafted to save you time and deliver result tailored to
          your goals—your success starts here!
        </p>
        <div className="mt-10">
          <button className="btn bg-primary border-none btn-primary ">
            <span>Subscribe Now</span>
            <FaArrowRight />
          </button>
          <Link
            to="/contact"
            className="btn btn-outline  ml-4 hover:bg-blue-500 hover:text-white text-blue-600 transition"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
