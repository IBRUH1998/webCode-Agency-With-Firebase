import { useForm } from 'react-hook-form'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../Context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { signInWithEmail, googleLogin } = useAuth()
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    try {
      await signInWithEmail(data.email, data.password)
      console.log('login successful')
      alert('Successfully Login')
      navigate('/')
    } catch (error) {
      console.log('Failled to login', error)
    }
  }
  //google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
      navigate('/')
    } catch (error) {
      console.error('Failed to login', error)
    }
  }
  return (
    <div>
      <div className="max-w-screen-2xl container min-h-screen mx-auto px-5 bg-white  mt-2">
        <h2 className=" text-center font-sans text-4xl font-semibold mt-4">
          Please Login
        </h2>
        <div className="card bg-base-200 mt-12 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: 'Enter a valid Gmail address ',
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
              />

              {errors.email && (
                <span className="text-red-700 italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Password be in 6 character',
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              {errors.password && (
                <span className="text-red-700 italic">
                  {errors.password.message}
                </span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn text-white bg-sky-500 hover:bg-sky-700">
                Login
              </button>
            </div>
            <p className="text-center">
              do not have an account.Please{' '}
              <Link className="text-blue-500 font-extrabold" to="/register">
                Register
              </Link>
            </p>
          </form>
          {/** Social login with icon */}
          <div className="text-center space-y-3 pb-8 ">
            <p className="text-gray-600">or Login with</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center text-white px-4 py-2 space-x-2 rounded bg-red-500 hover:bg-red-700"
              >
                <FaGoogle />
                <span>Google</span>
              </button>
              <button className="flex items-center text-white px-4 py-2 space-x-2 rounded bg-black hover:bg-black-">
                <FaGithub />
                <span>GitHub</span>
              </button>
              <button className="flex items-center text-white px-4 py-2 space-x-2 rounded bg-blue-500 hover:bg-blue-700">
                <FaFacebookF />
                <span>facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
