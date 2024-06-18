import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const experienceLevels = [
  { label: "I accept", value: "I accept" },
  { label: "I don't accept", value: "I don't accept" },
];

const StatementForm = () => {
  const [selectedExperience, setSelectedExperience] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (value) => {
    setSelectedExperience(value);
  };

  const navigateToForm = () => {
    navigate("/linkedin-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/salary-form");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <div className="text-left mb-6 mt-12">
          <span className="text-purple-400 font-semibold text-2xl sm:text-3xl">
            8 &rarr;
          </span>
          <span className="text-gray-700 text-2xl sm:text-3xl font-bold ml-2">
            Certifying Statement
          </span>
          <p className="text-lg mt-4">
            This question is required. I hereby acknowledge that this
            application form was completed by me (the individual seeking to
            enroll in Metana) and I did not receive help from any external
            sources. The responses submitted are entirely my own and based on
            my own reasoning. Also, I opt in to receive communication messages
            from Metana about my application.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 max-w-md">
          {experienceLevels.map((level) => (
            <label
              key={level.value}
              className={`flex items-left justify-between p-4 border-2 rounded cursor-pointer ${
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
          className="bg-purple-400 w-full sm:w-auto hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 mt-4 sm:ml-4 sm:mt-6"
          type="button"
        >
          OK
        </button>
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

export default StatementForm;
