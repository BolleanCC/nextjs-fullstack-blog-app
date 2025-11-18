import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">About</span>
      </div>

      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-bold">
          About Our Blog
        </h1>
        <p className="text-md md:text-xl text-gray-600">
          A platform for developers, designers, and digital marketers to share knowledge and grow together.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col gap-6 text-lg text-justify">
          {/* Our Story */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our development blog, a community-driven platform where technology enthusiasts share
              their insights, experiences, and expertise. We believe that knowledge grows when shared, and
              our mission is to create a space where developers, designers, and marketers can learn from
              each other's real-world experiences.
            </p>
          </div>

          {/* What We Cover */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Cover</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">
                  Modern frameworks, APIs, full-stack techniques, and performance optimization strategies.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Web Design</h3>
                <p className="text-sm text-gray-600">
                  UI/UX principles, responsive design, color theory, and creating intuitive user experiences.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Databases</h3>
                <p className="text-sm text-gray-600">
                  SQL and NoSQL optimization, schema design, scaling strategies, and performance tuning.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">SEO</h3>
                <p className="text-sm text-gray-600">
                  Search optimization, content strategy, technical SEO, and staying ahead of algorithm changes.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Marketing</h3>
                <p className="text-sm text-gray-600">
                  Content marketing, social media strategies, email campaigns, and ROI measurement.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">General</h3>
                <p className="text-sm text-gray-600">
                  Career advice, industry trends, productivity tips, and professional development insights.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-800 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Practical Over Theoretical:</strong>
                  <span className="text-gray-700"> We focus on real-world solutions and experiences that you can apply immediately.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-800 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Community-Driven:</strong>
                  <span className="text-gray-700"> Our content comes from professionals who are actively working in the field.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-800 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Always Learning:</strong>
                  <span className="text-gray-700"> Technology evolves quickly, and we're committed to staying current with the latest trends.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-800 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Quality Content:</strong>
                  <span className="text-gray-700"> Every article is thoroughly researched and written to provide genuine value.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Join Us */}
          <div className="bg-blue-50 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Join Our Community</h2>
            <p className="text-gray-700 mb-4">
              Whether you're a seasoned professional or just starting your journey in tech, there's a place
              for you here. Share your knowledge, learn from others, and grow your skills alongside a
              supportive community of like-minded individuals.
            </p>
            <Link
              to="/write"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition-colors"
            >
              Start Writing
            </Link>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="md:w-80 flex-shrink-0">
          <div className="sticky top-8 flex flex-col gap-6">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Articles Published</span>
                  <span className="font-bold text-blue-800">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Writers</span>
                  <span className="font-bold text-blue-800">4+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Categories</span>
                  <span className="font-bold text-blue-800">5</span>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SEO</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions or suggestions? We'd love to hear from you.
              </p>
              <Link
                to="/posts"
                className="text-blue-800 hover:underline font-medium text-sm"
              >
                Browse Articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
