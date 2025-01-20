import Marquee from 'react-fast-marquee'
import { FaApple } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa6'
import { FaAmazon } from 'react-icons/fa'
import { FaWindows } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
const ComponaysLogo = () => {
  const logos = [
    {
      icon: <FaApple />,
      name: 'Apple',
    },
    {
      icon: <FaGoogle />,
      name: 'Google',
    },
    {
      icon: <FaAmazon />,
      name: 'Amazon',
    },
    {
      icon: <FaWindows />,
      name: 'Microsoft',
    },
    {
      icon: <FaFacebookF />,
      name: 'Facebook',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
    },
  ]
  return (
    <>
      <div className="max-w-screen-2xl mx-auto py-10 px-5 container bg-colourBG ">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">Our Trusted partners</p>
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-8">
            company we have worked together
          </h2>
          <p className="py-4 text-gray-400 font-semibold">
            We have partnered with some of the most innovative and leading
            companies to bring the best solution for you.
          </p>
        </div>
        <Marquee pauseOnHover>
          <div className=" flex items-center justify-center gap-x-5  ">
            {logos.map((logo, index) => (
              <div key={index}>
                <div className="flex items-center  justify-around bg-white rounded-full mx-6 my-2 p-5 h-15 w-15 hover:scale-110 transition transform ">
                  <span className="text-blue-600 text-2xl ">{logo.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default ComponaysLogo
