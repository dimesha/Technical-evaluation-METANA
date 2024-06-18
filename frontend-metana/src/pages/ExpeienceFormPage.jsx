import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const experienceLevels = [
  { label: "No experience (I have never programmed before.)", value: "No experience" },
  { label: "Beginner (I have played with some introductory coding lessons and tutorials.)", value: "Beginner" },
  { label: "Intermediate (I have completed some coding classes or tutorials.)", value: "Intermediate" },
  { label: "Advanced (I can build applications.)", value: "Advanced" },
  { label: "Professional (I am an experienced software engineer.)", value: "Professional" },
];

const ExpeienceForm = () => {
  const [selectedExperience, setSelectedExperience] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (value) => {
    setSelectedExperience(value);
  };

  const navigateToForm = () => {
    navigate("/salary-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/language-form");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <div className="text-left max-w-4xl mb-6 mt-12 ">
          <span className="text-purple-400 font-semibold text-2xl sm:text-3xl">
            6 &rarr;
          </span>
          <span className="text-gray-700 text-2xl sm:text-3xl font-bold ml-2">
            How would you describe your current level of coding experience?
          </span>
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
          className="w-full sm:w-auto bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          type="button"
        >
          OK
        </button>
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

export default ExpeienceForm;
