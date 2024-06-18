import { FcHome } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import logo from '../assets/logo.png';

const CountryFormPage = () => {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate('/phone-form');
  };

  const navigateToFormPrevious = () => {
    navigate('/email-form');
  };

  const countries = [
    { value: 'United States', label: 'United States' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'China', label: 'China' },
    { value: 'Canada', label: 'Canada' },
    { value: 'United Arab Emirates', label: 'United Arab Emirates' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Andorra', label: 'Andorra' },
    // Add more options as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius:'none',
      borderBottom: '2px solid #AC94FF',
      boxShadow: 'none',
      '&:hover': {
        borderBottom: '2px solid #AC94FF',
        borderTop: 'none',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#AC94FF',
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-10">
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-5 rounded">
      {/* <div className="flex justify-left mb-4">
        <img src={logo} className="h-12 sm:h-16" alt="Company Logo" />
      </div> */}
        <div className="text-left mb-6 mt-12">
          <div className="flex items-center">
            <span className="text-purple-400 font-semibold text-xl sm:text-2xl md:text-3xl">
              3 &rarr;
            </span>
            <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold ml-2">
              Which country are you from?
            </span>
            <div className="flex text-xl sm:text-2xl md:text-3xl ml-3">
              <FcHome /><FcHome /><FcHome />
            </div>
          </div>
          <p className="ml-8 sm:ml-12 md:ml-16 text-lg sm:text-xl md:text-2xl">Type or select an option.</p>
        </div>
        <form className="w-full mx-auto mt-6 sm:mt-10">
          <div className="mb-4">
            <Select
              options={countries}
              styles={customStyles}
              placeholder="Type or select an option"
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
        <button
          className="bg-purple-400 text-white p-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Powered By <span className="font-bold">Typeform</span>
        </button>
      </div>
    </div>
  );
};

export default CountryFormPage;
