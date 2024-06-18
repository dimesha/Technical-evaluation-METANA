import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import home from "../assets/homeimg.png";
import { MdPeople } from "react-icons/md";

const LaunchDataCareer = () => {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate("/name-form");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <div className="container mx-auto flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left md:mr-20">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-4">
              Launch your Data Career 
              <br /> in Weeks,not Years
            </h1>
            <p className="text-xl sm:text-xl">What to expect:</p>
            <ul className="text-left mb-4 ">
              <li className="mb-2 text-xl sm:text-xl">
                - <span className="font-bold">Short-answer</span> questions &
                <span className="font-bold"> No </span>cover letter
              </li>
              <li className="text-xl sm:text-xl">- Takes 4 mins on average</li>
            </ul>
            <div className="flex items-center mt-10">
              <button
                onClick={navigateToForm}
                className="text-xl sm:text-2xl bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Start Your Journey
              </button>
              <p className="ml-4">
                press <span className="font-bold">Enter ↵</span>
              </p>
            </div>
            <div className="flex items-center mt-4">
              <MdPeople className="mr-2" />
              <p className="text-sm font-medium">81 people have filled this out</p>
            </div>
          </div>
          <div className="text-center">
            <img
              src={home}
              className="h-48 sm:h-60 md:h-72 lg:h-92 mx-auto"
              alt="Company Logo"
            />
            <div className="mt-8 text-gray-700">
              <p className="text-xl sm:text-xl font-bold mb-4">Our students <u>used</u> to work at</p>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-6 sm:h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  alt="IBM"
                  className="h-6 sm:h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                  alt="Nike"
                  className="h-6 sm:h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"
                  alt="eBay"
                  className="h-6 sm:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDataCareer;
