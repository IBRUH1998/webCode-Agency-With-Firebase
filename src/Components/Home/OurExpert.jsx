import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
const OurExpert = () => {
  const teamMembers = [
    {
      id: 1,
      image: '/public/images/members/person1.png',
      name: 'John Doe',
      role: 'CEO',
      linkedIn: '<FaLinkedin />',
      twitter: '<FaTwitter />',
      instagram: '<FaInstagram />',
      facebook: '<FaFacebook />',
    },
    {
      id: 2,
      image: '/public/images/members/person2.png',
      name: 'Jane Smith',
      role: 'CTO',
      linkedIn: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
    {
      id: 3,
      image: '/public/images/members/person3.png',
      name: 'Mark Johnson',
      role: 'Designer',
      linkedIn: 'https://linkedin.com/in/markjohnson',
      twitter: 'https://twitter.com/markjohnson',
      instagram: 'https://instagram.com/markjohnson',
      facebook: 'https://facebook.com/markjohnson',
    },
    {
      id: 4,
      image: '/public/images/members/person4.png',
      name: 'Emily Carter',
      role: 'Developer',
      linkedIn: 'https://linkedin.com/in/emilycarter',
      twitter: 'https://twitter.com/emilycarter',
      instagram: 'https://instagram.com/emilycarter',
      facebook: 'https://facebook.com/emilycarter',
    },
  ]

  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-12 container">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">The tools you need</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-4">
          All in one solution for your projects
        </h2>
      </div>
      {/* there are expert card section*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, id) => {
          return (
            <div
              key={id}
              className="overflow-hidden bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="card bg-base-100  shadow-xl">
                <figure>
                  <img src={member.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{member.name}</h2>
                  <span className="text-gray-500 text-sm">{member.role}</span>
                  <div className="flex items-center space-x-6  ">
                    <span className="">
                      <FaLinkedin className="text-blue-600 text-lg cursor-pointer " />
                    </span>
                    <span>
                      <FaFacebook className="text-blue-600 text-lg cursor-pointer "></FaFacebook>
                    </span>
                    <span>
                      <FaTwitter className=" text-blue-600 text-lg cursor-pointer "></FaTwitter>
                    </span>
                    <span>
                      <FaInstagram className="text-rose-700 text-lg cursor-pointer "></FaInstagram>
                    </span>
                  </div>
                  <div className="card-actions justify-start mt-6">
                    <button className="btn bg-blue-700 text-white px-12 rounded-3xl hover:bg-sky-500 ">
                      {member.name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurExpert
