import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const LinkedInForm = () => {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate("/thankyou-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/statement-form");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <div className="text-left mb-6 mt-12 ">
          <span className="text-purple-400 font-semibold text-2xl sm:text-3xl">
            9 &rarr;
          </span>
          <span className="text-gray-700 text-2xl sm:text-3xl font-bold ml-2">
            LinkedIn URL (optional)
          </span>
          <p className="ml-8 sm:ml-16 text-lg sm:text-2xl">
            Here is a sniper link to make your life easy - linkedin.com (It'll
            open in a new tab) 🚀
          </p>
        </div>
        <form className="w-full mx-auto mt-10">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Type your answer here..."
              className="w-full px-3 py-2 text-lg border-b-2 border-purple-300 outline-none focus:border-purple-500 transition duration-200 placeholder-purple-400"
              style={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center">
            <button
              onClick={navigateToForm}
              type="submit"
              className="w-full sm:w-auto bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit
            </button>
            <span className="mt-4 sm:mt-0 sm:ml-2 text-gray-500 text-lg">
              press <strong>Enter ↵</strong>
            </span>
          </div>
        </form>
      </div>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex space-x-1">
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

export default LinkedInForm;
