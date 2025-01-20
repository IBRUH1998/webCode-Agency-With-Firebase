const Testimonial = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-10 px-5 container mb-10 bg-colourBG">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">Testimonials</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-6">
          What our Clients say...
        </h2>
        <div className="mt-8">
          {/* Slider part */}
          <div className="carousel w-full  relative">
            {/* Slide 1 */}
            <div
              id="slide1"
              className="carousel-item md:space-x-8 relative w-full flex items-center justify-center "
            >
              <div className="flex flex-wrap gap-8 justify-center w-full px-5 py-10">
                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt="Client 1"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      J
                    </span>
                    <h3 className="font-semibold text-xl">John Doe</h3>
                    <span className="text-sm text-gray-500 italic">
                      CEO, TechCorp
                    </span>
                  </div>
                </div>

                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Client 2"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      S
                    </span>
                    <h3 className="font-semibold text-xl">Jane Smith</h3>
                    <span className="text-sm text-gray-500 italic">
                      CEO, TechCorp
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-5">
                <a
                  href="#slide6"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              id="slide2"
              className="carousel-item relative w-full flex items-center justify-center"
            >
              <div className="flex flex-wrap gap-8 justify-center w-full px-5 py-10">
                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt="Client 3"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      R
                    </span>
                    <h3 className="font-semibold text-xl">Rafayet</h3>
                    <span className="text-sm text-gray-500 italic">
                      Developer, BIST
                    </span>
                  </div>
                </div>

                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Client 4"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      S
                    </span>
                    <h3 className="font-semibold text-xl">Hasan Mahmud</h3>
                    <span className="text-sm text-gray-500 italic">
                      CEO, TopNotch
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-5">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              id="slide3"
              className="carousel-item relative w-full flex items-center justify-center"
            >
              <div className="flex flex-wrap gap-8 justify-center w-full px-5 py-10">
                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt="Client 5"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      T
                    </span>
                    <h3 className="font-semibold text-xl">Tariq Khan</h3>
                    <span className="text-sm text-gray-500 italic">
                      Founder, KhanTech
                    </span>
                  </div>
                </div>

                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Client 6"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      M
                    </span>
                    <h3 className="font-semibold text-xl">Maria Garcia</h3>
                    <span className="text-sm text-gray-500 italic">
                      Manager, AutoCorp
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-5">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 4 */}
            <div
              id="slide4"
              className="carousel-item relative w-full flex items-center justify-center"
            >
              <div className="flex flex-wrap gap-8 justify-center w-full px-5 py-10">
                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt="Client 7"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      P
                    </span>
                    <h3 className="font-semibold text-xl">Peter Adams</h3>
                    <span className="text-sm text-gray-500 italic">
                      CEO, AdamsCo
                    </span>
                  </div>
                </div>

                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Client 8"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      K
                    </span>
                    <h3 className="font-semibold text-xl">Kelly Simmonds</h3>
                    <span className="text-sm text-gray-500 italic">
                      CTO, SimmondsInc
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-5">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide5"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 5 */}
            <div
              id="slide5"
              className="carousel-item relative w-full flex items-center justify-center"
            >
              <div className="flex flex-wrap gap-8 justify-center w-full px-5 py-10">
                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt="Client 9"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      T
                    </span>
                    <h3 className="font-semibold text-xl">Tom Riddle</h3>
                    <span className="text-sm text-gray-500 italic">
                      Founder, RiddleTech
                    </span>
                  </div>
                </div>

                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Client 10"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      R
                    </span>
                    <h3 className="font-semibold text-xl">Rachel Green</h3>
                    <span className="text-sm text-gray-500 italic">
                      CEO, GreenTech
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-5">
                <a
                  href="#slide4"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide6"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 6 */}
            <div
              id="slide6"
              className="carousel-item relative w-full flex items-center justify-center"
            >
              <div className="flex flex-wrap gap-8 justify-center w-full px-5 py-10">
                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt="Client 11"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      A
                    </span>
                    <h3 className="font-semibold text-xl">Amir Khan</h3>
                    <span className="text-sm text-gray-500 italic">
                      Developer, KhanInc
                    </span>
                  </div>
                </div>

                <div className="card bg-base-100 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-xl mb-6 sm:mb-0">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Client 12"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <p className="text-gray-600 italic md:w-3/5 mx-auto">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span className="text-2xl bg-sky-200 text-white rounded-full p-2">
                      Z
                    </span>
                    <h3 className="font-semibold text-xl">Zara Mohammed</h3>
                    <span className="text-sm text-gray-500 italic">
                      Manager, ZaraTech
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-5">
                <a
                  href="#slide5"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-blue-600 text-white"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
