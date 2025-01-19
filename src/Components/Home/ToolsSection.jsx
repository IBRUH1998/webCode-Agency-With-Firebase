import { IoSettingsOutline } from 'react-icons/io5'
import { IoCodeSharp } from 'react-icons/io5'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { CiCloudDrizzle } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa6'
const ToolsSection = () => {
  const tools = [
    {
      icon: <IoSettingsOutline></IoSettingsOutline>,
      title: 'Customizable settings',
      description: 'Easily configure tools to fit your projects ',
    },
    {
      icon: <IoCodeSharp></IoCodeSharp>,
      title: 'Developer-Friendly',
      description: 'Optimized for developers with clean and efficient code.',
    },
    {
      icon: <IoPhonePortraitOutline></IoPhonePortraitOutline>,
      title: 'Responsive Design',
      description: 'Build tools that look great on any device and screen size.',
    },
    {
      icon: <CiCloudDrizzle />,
      title: 'Cloud Integration',
      description:
        'Seamlessly connect with cloud services for better productivity.',
    },
  ]
  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-12 container mb-7 ">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">The tools you need</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-8">
          All in one solution for your projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4  ">
        {tools.map((tool, index) => {
          return (
            <div key={index}>
              <div className="card bg-base-200 shadow-lg cursor-pointer hover:shadow-2xl transition">
                <div className="card-body flex items-center justify-center">
                  <h2 className="card-title text-3xl text-blue-700">
                    {tool.icon}
                  </h2>
                  <h2 className="card-title">{tool.title}</h2>
                  <p>{tool.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="text-center mt-8">
        <button className="btn bg-primary border-none btn-primary ">
          <span>Explore more</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ToolsSection
