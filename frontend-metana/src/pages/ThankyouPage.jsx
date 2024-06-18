import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ThankYouForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <img src={logo} className="absolute top-8 left-8 h-12 sm:h-16" alt="Company Logo" /> */}

      <div className="flex flex-col items-center text-center bg-white p-10 ">
        <h1 className="text-3xl font-bold text-gray-800">Thank you for applying</h1>
        <p className="text-gray-600 mt-4">An admissions team member will contact you shortly.</p>

        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a> 
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-blue-700 hover:text-blue-900"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        <button className="mt-8 bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
          Create a typeform
        </button>
      </div>
    </div>
  );
};

export default ThankYouForm;
