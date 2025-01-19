import { Link } from 'react-router'
import errorIcon from '../ErrorPage/rocket-icon.png'
const ErrorPage = ({ message = 'Page not found', code = 404 }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen space-x-5 ">
      <img src={errorIcon} alt="" />
      <h2 className="w-2/4">
        <h2 className="mt-10 text-2xl font-bold text-gray-700">
          OPPS....! {message}
        </h2>
        <h2 className="my-4">{code}</h2>
        Oops! Something Went Wrong It looks like we ve hit a little bump in the
        road. This could happen for a few reasons: The page youre looking for
        may have been moved or no longer exists. There might be a typo in the
        URL you entered. Our server is having a moment and couldnt complete
        your request. Don’t worry—we’re here to help you get back on track! Here
        are a few things you can try:
      </h2>
      <Link
        to="/"
        className="mt-6  py-3 px-6 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition transform "
      >
        {' '}
        Go To Home
      </Link>
    </div>
  )
}

export default ErrorPage
