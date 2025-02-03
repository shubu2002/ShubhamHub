import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <main className="bg-[#242424] text-white min-h-screen">
        <section className="py-16">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-5xl font-bold text-white">Why Choose Us?</h1>
              <p className="text-gray-300">
                <strong>Expertise:</strong> Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry trends.
              </p>
              <p className="text-gray-300">
                <strong>Customization:</strong> We understand that every business is unique.
                That's why we create solutions that are tailored to your specific needs and goals.
              </p>
              <p className="text-gray-300">
                <strong>Customer-Centric Approach:</strong> We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="text-gray-300">
                <strong>Affordability:</strong> We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="text-gray-300">
                <strong>Reliability:</strong> Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and available 24/7.
              </p>

              {/* Buttons */}
              <div className="flex space-x-4">
                <NavLink to="/contact">
                  <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    Connect Now
                  </button>
                </NavLink>
                <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <img
                src="/images/aboutpic.jpg"
                alt="coding buddies"
                className="w-3/4 md:w-full max-w-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
