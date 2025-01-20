import { MdOutlinePlayCircle } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false)

  // Function to open the modal
  const openModal = () => setPlayVideo(true)

  // Function to close the modal
  const closeModal = () => setPlayVideo(false)

  // Add/remove overflow-hidden on <body> when modal is toggled
  useEffect(() => {
    if (playVideo) {
      // Disable scrolling on the page
      document.body.style.overflow = 'hidden'
    } else {
      // Enable scrolling
      document.body.style.overflow = ''
    }

    // Cleanup to restore scrolling if the component unmounts
    return () => {
      document.body.style.overflow = ''
    }
  }, [playVideo])

  return (
    <div className="hero bg-colourBG max-w-screen-2xl container mx-auto md:px-12 mb-7">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center">
        {/* Right Side - Video Section */}
        <div className="relative w-full sm:w-1/2 lg:w-1/2 z-20 mx-2 md:z-20">
          <img
            src="/src/assets/banner.png"
            alt="Hero Section Banner"
            className="w-full rounded-lg object-cover"
          />
          <button
            onClick={openModal}
            className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl text-white hover:text-blue-700"
            aria-label="Play video"
          >
            <MdOutlinePlayCircle className="hover:text-red-600" />
          </button>

          {/* Modal */}
          {playVideo && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md relative w-11/12 sm:max-w-xl">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-black bg-slate-700 text-lg hover:text-white hover:bg-red-600  px-2 rounded"
                  aria-label="Close video modal"
                >
                  &times;
                </button>

                {/* Iframe Video */}
                <iframe
                  className="w-full aspect-video rounded-lg"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/tVphpcFHGaI?si=J-Ewkd784hAajas1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    border: 'none',
                  }}
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Left Side - Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Build Your Dream Website
          </h1>
          <p className="py-4 text-gray-400 font-medium text-sm sm:text-base">
            Join thousands of businesses already growing with our solutions. Let
            us help you take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3">
            <button className="btn bg-primary border-none btn-primary flex items-center gap-2 text-sm sm:text-base px-6 py-3">
              <span>Get started</span>
              <FaArrowRight />
            </button>
            <Link
              to="/contact"
              className="btn btn-outline btn-primary hover:bg-blue-600 hover:text-white text-blue-600 transition text-sm sm:text-base px-6 py-3"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
