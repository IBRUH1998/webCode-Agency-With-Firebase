import { useState } from 'react'
import { GoTriangleRight } from 'react-icons/go'

const pricingPlans = [
  {
    name: 'Freelancer',
    monthlyPrice: 25,
    yearlyPrice: 250,
    saves: '$25 USD per month, paid annually',
    features: [
      '1 Project',
      'Basic Support',
      'Access to all templates',
      '5GB Storage',
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 65,
    yearlyPrice: 650,
    saves: '$55 USD per month, paid annually',
    features: [
      '5 Projects',
      'Priority Support',
      'Access to all templates',
      '25GB Storage',
      'Advanced Analytics',
    ],
  },
  {
    name: 'Agency',
    monthlyPrice: 95,
    yearlyPrice: 950,
    saves: '$95 USD per month, paid annually',
    features: [
      'Unlimited Projects',
      '24/7 Support',
      'Access to all templates',
      'Unlimited Storage',
      'Custom Branding',
      'Team Collaboration',
    ],
  },
]

const Pricing = () => {
  const [IsYearly, setIsYearly] = useState(false)

  return (
    <div className="max-w-screen-2xl mx-auto pt-20 px-5 container">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">Choice your Plan</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-4">
          All in one solution for your projects
        </h2>
      </div>

      {/* Toggle Section */}
      <div className="text-center mb-12">
        <label className="inline-flex items-center justify-center cursor-pointer">
          <span className="mr-3 text-gray-500 text-lg">
            {IsYearly ? 'Yearly Price' : 'Monthly Price'}
          </span>
          <div>
            <input
              type="checkbox"
              className="toggle toggle-success"
              defaultChecked
              onChange={() => setIsYearly(!IsYearly)}
            />
          </div>
        </label>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto  ">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className=" ">
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl  transition-all duration-300 h-full flex flex-col">
              {/* Card Header */}
              <div className="p-5 text-center   ">
                <h2 className=" text-2xl font-semibold ">{plan.name}</h2>
                <p className="text-gray-600 mb-5">Best for {plan.name}</p>
                <div className="h-20">
                  <span className="font-bold text-2xl">$</span>
                  <span className="font-bold text-2xl">
                    {IsYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-700 text-sm">
                    {IsYearly ? '/yearly' : '/monthly'}
                  </span>
                  <h2 className="text-gray-500">
                    {IsYearly ? plan.saves : ''}
                  </h2>
                </div>
              </div>

              {/* Card Features */}
              <div className="flex-grow px-5">
                <ul className="text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <GoTriangleRight className="mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button Section */}
              <div className="p-5">
                <button className="btn font-bold bg-blue-600 px-6 py-2 text-white rounded-full hover:bg-blue-800 transition-all duration-300 w-full">
                  Choose {plan.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
