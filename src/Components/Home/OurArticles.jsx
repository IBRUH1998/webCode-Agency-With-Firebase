const OurArticles = () => {
  const blogs = [
    {
      id: 1,
      image: '/images/blogs/blog1.png',
      category: 'Technology',
      title: 'How AI is Shaping the Future of Web Development',
      description:
        'Discover how artificial intelligence is transforming the way we build and design websites.',
      authorImage: '/images/authors/author1.png',
      authorName: 'John Doe',
      authorRole: 'Tech Blogger',
    },
    {
      id: 2,
      image: '/images/blogs/blog2.png',
      category: 'Design',
      title: '10 Tips for Creating Stunning UI/UX Designs',
      description:
        'Learn the secrets to designing user interfaces that captivate and convert users.',
      authorImage: '/images/authors/author2.png',
      authorName: 'Jane Smith',
      authorRole: 'UX Designer',
    },
    {
      id: 3,
      image: '/images/blogs/blog3.png',
      category: 'Development',
      title: 'Understanding JavaScript Closures in Depth',
      description:
        'A comprehensive guide to one of the most powerful concepts in JavaScript.',
      authorImage: '/images/authors/author3.png',
      authorName: 'Mark Johnson',
      authorRole: 'Frontend Developer',
    },
    {
      id: 4,
      image: '/images/blogs/blog4.png',
      category: 'Business',
      title: 'Why Digital Transformation is Essential for Success',
      description:
        'Explore how businesses can thrive by adopting digital transformation strategies.',
      authorImage: '/images/authors/author4.png',
      authorName: 'Emily Carter',
      authorRole: 'Business Analyst',
    },
  ]
  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-12 container">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold ">Our Blogs</p>
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mt-4">
          Latest Articles And Insights
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {blogs.map((blog, id) => (
          <div
            key={id}
            className="card bg-base-100  shadow-xl overflow-hidden cursor-pointer "
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover hover:scale-110 transition transform"
              />
            </figure>
            <div className="card-body">
              <span className="uppercase text-blue-500 text-sm font-thin">
                {blog.category}
              </span>
              <h2 className="card-title text-xl">{blog.title}</h2>
              <p className="text-gray-500 text-lg">{blog.description}</p>
              {/*Author section*/}
              <div className="flex items-center space-x-5 hover:scale-110 transition transform">
                <img
                  src={blog.authorImage}
                  alt={blog.authorName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-gray-800 font-bold  text-sm">
                    {blog.authorName}
                  </h3>
                  <p className="text-gray-500 text-xs ">{blog.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurArticles
