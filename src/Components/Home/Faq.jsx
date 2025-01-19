const faqs = [
  {
    id: 1,
    question: 'Who should use the app?',
    answer:
      "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools.",
  },
  {
    id: 2,
    question: 'What is included with my subscription?',
    answer:
      'Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan.',
  },
  {
    id: 3,
    question: 'How do I get paid?',
    answer:
      'Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard.',
  },
  {
    id: 4,
    question: 'Is my personal information safe?',
    answer:
      'Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times.',
  },
  {
    id: 5,
    question: 'How can we get in touch?',
    answer:
      'You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have.',
  },
]

const Faq = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-12 container">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">The tools you need</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-4">
          All in one solution for your projects
        </h2>
      </div>
      <div className="w-2/3 mx-auto">
        {faqs.map((faq, id) => (
          <div key={id}>
            <div className="collapse collapse-plus bg-base-200 mb-4 hover:bg-base-300">
              {/* Change input type from "radio" to "checkbox" */}
              <input type="checkbox" name={`faq-${id}`} id={`faq-${id}`} />
              <label
                className="collapse-title text-xl font-medium"
                htmlFor={`faq-${id}`}
              >
                {faq.question}
              </label>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq

