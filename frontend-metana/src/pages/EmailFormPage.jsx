import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const EmailFormPage = () => {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate("/country-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/name-form");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <div className="text-left mb-6 mt-12">
          <div className="flex items-left">
            <span className="text-purple-400 font-semibold text-xl sm:text-2xl md:text-3xl">
              2 &rarr;
            </span>
            <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold ml-2">
              What is your email address?
            </span>
          </div>
          <p className="ml-8 sm:ml-12 md:ml-16 text-lg sm:text-xl md:text-2xl">
            This is how we will contact you.
          </p>
        </div>
        <form className="w-full mx-auto mt-6 sm:mt-10">
          <div className="mb-4">
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-3 py-2 text-base sm:text-lg border-b-2 border-purple-300 outline-none focus:border-purple-500 transition duration-200 placeholder-purple-400"
              style={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            />
          </div>
          <div className="mt-6 sm:mt-10">
            <button
              onClick={navigateToForm}
              type="submit"
              className="bg-purple-400 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              OK
            </button>
            <span className="ml-2 text-gray-500 text-base sm:text-lg">
              press <strong>Enter ↵</strong>
            </span>
          </div>
        </form>
      </div>
      <div className="fixed bottom-4 right-4 flex space-x-1 sm:bottom-8 sm:right-8">
        <button
          onClick={navigateToFormPrevious}
          className="bg-purple-400 text-white p-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          aria-label="Previous"
        >
          &#9650;
        </button>
        <button
          onClick={navigateToForm}
          className="bg-purple-400 text-white p-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          aria-label="Next"
        >
          &#9660;
        </button>
        <button className="bg-purple-400 text-white p-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
          Powered By <span className="font-bold">Typeform</span>
        </button>
      </div>
    </div>
  );
};

export default EmailFormPage;
