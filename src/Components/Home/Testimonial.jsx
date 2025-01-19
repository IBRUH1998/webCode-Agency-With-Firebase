const Testimonial = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-14 px-12 container mb-10 bg-colourBG">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">Testimonials</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-6">
          What our Clients say...
        </h2>
        <div className="mt-8">
          {/**Slider part */}
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item md:space-x-8 relative w-full"
            >
              <div className="flex items-center justify-between mx-auto  gap-8 py-10 ">
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt=""
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center justify-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200 
                    size-10 rounded-full"
                    >
                      J
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      John Doe
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Ceo,TechCrop
                    </span>
                  </div>
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200  
                    size-10 rounded-full"
                    >
                      S
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      Jane Smith
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Ceo,TechCrop
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="flex items-center justify-between mx-auto  gap-8 py-10 ">
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt=""
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center justify-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200 
                    size-10 rounded-full"
                    >
                      R
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      Rafayet
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Developer,BIST
                    </span>
                  </div>
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200  
                    size-10 rounded-full"
                    >
                      S
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      Hasan Mahmud
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Ceo,TopNotch
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="flex items-center justify-between mx-auto  gap-8 py-10 ">
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt=""
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center justify-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200 
                    size-10 rounded-full"
                    >
                      J
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      Alex janosn
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Ceo,P.hero
                    </span>
                  </div>
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200  
                    size-10 rounded-full"
                    >
                      B
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      karim Benzeima
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Ceo,Barselona
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div className="flex items-center justify-between mx-auto  gap-8 py-10 ">
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo1.png"
                      alt=""
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center justify-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200 
                    size-10 rounded-full"
                    >
                      A
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      Hakim Azad
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      professor,NSU
                    </span>
                  </div>
                </div>
                <div className="card bg-base-100 w-1/2 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="/public/images/logos/logo2.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center ">
                    <p className="text-gray-600 italic  md:w-3/5 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni architecto similique, quam voluptatibus facere sint.
                    </p>
                    <span
                      className="text-2xl text-center bg-sky-200  
                    size-10 rounded-full"
                    >
                      K
                    </span>
                    <h3 className="text-center font-semibold text-xl">
                      paul Kayle
                    </h3>
                    <span className="text-center text-sm text-gray-500 italic">
                      Ceo,BrainStation
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
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
