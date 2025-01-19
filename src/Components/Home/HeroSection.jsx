import { MdOutlinePlayCircle } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'
import { useState } from 'react'
const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const openModal = () => setPlayVideo(true)
  const closeModal = () => setPlayVideo(false)
  return (
    <div className="hero bg-colourBG  max-w-screen-2xl container mx-auto px-12 mb-7">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative lg:w-1/2">
          <img src="/src/assets/banner.png" alt="" />
          <button
            onClick={openModal}
            className="absolute inset-0 flex items-center justify-center text-6xl  text-white hover:text-blue-700  "
          >
            <MdOutlinePlayCircle className="hover:text-red-600"></MdOutlinePlayCircle>
          </button>

          {/* Modal conditions*/}
          {playVideo && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-5 rounded-lg shadow-md relative max-w-xl w-full">
                <button
                  onClick={closeModal}
                  className=" absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded"
                >
                  &times;
                </button>
                <iframe
                  className="w-full aspect-video "
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/tVphpcFHGaI?si=J-Ewkd784hAajas1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-1/2 text-cent">
          <h1 className="text-4xl font-bold">Build Your Dream Website</h1>
          <p className="py-4 text-gray-400 font-semibold ">
            Join thousands of business already growing with our solutions.Lets
            help you take your business to the next level.
          </p>
          <button className="btn bg-primary border-none btn-primary ">
            <span>Get started</span>
            <FaArrowRight />
          </button>
          <Link
            to="/contact"
            className="btn btn-outline btn-primary ml-4 hover:bg-blue-600 hover:text-white text-blue-600 transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
