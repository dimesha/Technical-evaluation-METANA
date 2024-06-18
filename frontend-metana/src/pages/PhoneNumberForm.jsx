import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import logo from "../assets/logo.png";

const PhoneFormPage = () => {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate("/language-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/country-form");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <form className="w-full mx-auto mt-10">
          <div className="text-left mb-6 mt-12 ">
            <span className="text-purple-400 font-semibold text-2xl sm:text-3xl">
              4 &rarr;
            </span>
            <span className="text-gray-700 text-2xl sm:text-3xl font-bold ml-2">
              What is your phone number?
            </span>
          </div>
          <div className="mb-4">
            <PhoneInput
              country={"us"}
              containerStyle={{ borderBottom: "1px solid #AC94FF" }}
              inputStyle={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #AC94FF",
                borderRadius: "0",
                boxShadow: "none",
                fontSize: "1.25rem", // Adjust font size for responsiveness
              }}
              buttonStyle={{ border: "none", background: "none" }}
              dropdownStyle={{ color: "#AC94FF" }}
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center">
            <button
              onClick={navigateToForm}
              type="submit"
              className="w-full sm:w-auto bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              OK
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

export default PhoneFormPage;
