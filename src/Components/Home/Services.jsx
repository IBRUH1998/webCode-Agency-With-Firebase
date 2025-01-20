import { FaRegCalendar } from 'react-icons/fa'
import { FaRegCompass } from 'react-icons/fa'
import { GoPulse } from 'react-icons/go'
import { FiTruck } from 'react-icons/fi'

const Services = () => {
  const servicesCards = [
    {
      icon: <FaRegCalendar />,
      title: 'Customizable Settings',
      description:
        'From strategy to execution, our digital services are crafted to meet your unique business requirements. We specialize in designing websites, optimizing user experiences, and implementing seamless integrations to help your business thrive in the digital world. ',
    },
    {
      icon: <FaRegCompass />,
      title: 'Developer-Friendly',
      description:
        'Explore our professional web design services, tailored to align with your brand identity and business objectives. Whether you’re starting from scratch or revamping an existing site, we deliver customized solutions designed to captivate your audience and drive results.',
    },
    {
      icon: <GoPulse />,
      title: 'Responsive Design',
      description:
        'Unlock your business’s potential with our scalable e-commerce platforms. Designed to grow with your business, our solutions prioritize functionality, user engagement, and conversions to help you achieve your goals. .',
    },
    {
      icon: <FiTruck />,
      title: 'Cloud Integration',
      description:
        'Our commitment doesn’t end with the launch. We offer ongoing support and maintenance services to ensure your website stays updated, secure, and optimized for success. Partner with us to keep your business ahead of the curve.',
    },
  ]

  return (
    <div className="max-w-screen-2xl mx-auto pt-20 px-5 container mb-7 ">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold">
          The services Cards you need
        </p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-8       md:w-4/5 mx-auto">
          Explore our range of your professional service Tailored <br />
          To meet your business meet.
        </h2>
        <p className="py-6 text-gray-500 font-semibold md:w-3/5 mx-auto ">
          At WEbcode Agency, we specialize in crafting visually stunning,
          user-friendly, and functional websites tailored to meet the unique
          needs of your brand. Whether you are a small business, entrepreneur,
          or large enterprise, we bring your vision to life with cutting-edge
          design and seamless functionality.
        </p>
      </div>
      {/* Sevices card Here*/}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6  ">
        {servicesCards.map((servicesCard, index) => {
          return (
            <div key={index}>
              <div className="card bg-base-200 shadow-lg cursor-pointer hover:shadow-2xl transition">
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title text-3xl text-blue-700">
                    {servicesCard.icon}
                  </h2>

                  <p>{servicesCard.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="text-center mt-8">
        <button className="btn bg-primary border-none btn-primary ">
          <span>Explore more</span>
        </button>
      </div>
    </div>
  )
}

export default Services
