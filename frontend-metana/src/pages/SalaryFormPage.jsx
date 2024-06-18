import { useState } from "react";
import logo from "../assets/logo.png";
import salary from "../assets/salary.png";
import { useNavigate } from "react-router-dom";

const experienceLevels = [
  {
    label: "<$30,000",
    value: "<$30,000",
  },
  {
    label: "$30,000 - $50,000",
    value: "$30,000 - $50,000",
  },
  {
    label: "$50,000 - $80,000",
    value: "$50,000 - $80,000",
  },
 
];

const ExperienceForm = () => {
  const [selectedExperience, setSelectedExperience] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (value) => {
    setSelectedExperience(value);
  };

  const navigateToForm = () => {
    navigate("/statement-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/expeience-form");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-10">
      {/* <img src={logo} className="h-12 sm:h-16 mb-6" alt="Company Logo" /> */}
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-4 sm:p-8">
            <div className="text-left mb-6">
              <span className="text-purple-400 font-semibold text-2xl sm:text-3xl">
                7 &rarr;
              </span>
              <span className="text-gray-700 text-2xl sm:text-3xl font-bold ml-2">
                What is your current annual compensation? (Optional)
              </span>
              <p className="text-lg mt-4">
                Disclaimer: The information provided regarding salary will be
                kept confidential and will not be used as a determining factor
                for acceptance into the bootcamp. It will be used exclusively
                for career advancement guidance.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              {experienceLevels.map((level) => (
                <label
                  key={level.value}
                  className={`flex items-center justify-between p-4 border-2 rounded cursor-pointer ${
                    selectedExperience === level.value
                      ? "bg-purple-100 border-purple-400"
                      : "border-purple-300"
                  }`}
                  onClick={() => handleRadioChange(level.value)}
                >
                  <span className="text-gray-700">{level.label}</span>
                  <input
                    type="radio"
                    value={level.value}
                    checked={selectedExperience === level.value}
                    onChange={() => handleRadioChange(level.value)}
                    className="form-radio h-5 w-5 text-purple-600 hidden"
                  />
                  <span
                    className={`${
                      selectedExperience === level.value
                        ? "text-purple-600"
                        : "text-transparent"
                    }`}
                  >
                    &#10003;
                  </span>
                </label>
              ))}
            </div>
            <button
              onClick={navigateToForm}
              className="bg-purple-400 w-full sm:w-auto hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              type="button"
            >
              OK
            </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
            <img
              src={salary}
              className="max-w-full h-auto"
              alt="Salary Increase Illustration"
            />
          </div>
        </div>
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

export default ExperienceForm;
