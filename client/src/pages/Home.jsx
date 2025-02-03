import { useAuth } from "../store/auth";

export const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <main className="bg-[#242424] text-white min-h-screen">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg text-gray-300 font-medium">
                We are the World Best IT Company
              </p>
              <h1 className="text-5xl font-bold text-white">
                Hi {user?.username || "User"}
              </h1>
              <h1 className="text-5xl font-bold text-white">
                Welcome to ShubhamHub
              </h1>
              <p className="text-gray-400 text-lg">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At ShubhamHub,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              {/* Buttons */}
              <div className="flex space-x-4">
                <a href="/contact">
                  <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    Connect Now
                  </button>
                </a>
                <a href="/services">
                  <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <img
                src="/images/coding.jpg"
                alt="coding together"
                className="w-3/4 md:w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="py-16">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
            {/* Hero Image */}
            <div className="flex justify-center">
              <img
                src="/images/coding2.jpg"
                alt="coding together"
                className="w-3/4 md:w-full max-w-lg"
              />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg text-gray-300 font-medium">
                We are here to help you
              </p>
              <h1 className="text-5xl font-bold text-white">
                Get Started Today
              </h1>
              <p className="text-gray-400 text-lg">
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how ShubhamHub can help your business thrive
                in the digital age.
              </p>
              {/* Buttons */}
              <div className="flex space-x-4">
                <a href="/contact">
                  <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    Connect Now
                  </button>
                </a>
                <a href="/services">
                  <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
