import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const languages = [
  "Solidity",
  "Rust",
  "Node.js",
  "Typescript",
  "Javascript",
  "C",
  "C++",
  "C#",
  "SQL",
  "Python",
  "Assembly Language",
  "Haskell",
  "R",
  ".NET",
  "Other",
];

const LanguageForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCheckboxChange = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((item) => item !== language)
        : [...prevSelected, language]
    );
  };

  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate("/expeience-form");
  };

  const navigateToFormPrevious = () => {
    navigate("/phone-form");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <div className="text-left max-w-4xl mb-6 mt-12">
          <span className="text-purple-400 font-semibold text-2xl sm:text-3xl">
            5 &rarr;
          </span>
          <span className="text-gray-700 text-2xl sm:text-3xl font-bold ml-2">
            What languages and frameworks are you familiar with?
          </span>
          <p className="ml-8 sm:ml-16 text-xl sm:text-2xl">Select all the languages you know.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {languages.map((language) => (
            <label
              key={language}
              className={`flex items-center justify-between p-4 border-2 rounded cursor-pointer ${
                selectedLanguages.includes(language)
                  ? "bg-purple-100 border-purple-400"
                  : "border-purple-300"
              }`}
              onClick={() => handleCheckboxChange(language)}
            >
              <span className="text-gray-700">{language}</span>
              <input
                type="checkbox"
                value={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => handleCheckboxChange(language)}
                className="form-checkbox h-5 w-5 text-purple-600 hidden"
              />
              <span
                className={`${
                  selectedLanguages.includes(language)
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

export default LanguageForm;
