import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <Navbar>
      <Link
        to="/"
        className="fixed self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex"
      >
        <img src={logo} className="mr-3 mt-14 h-16 sm:h-16" alt="Company Logo" />
      </Link>
    </Navbar>
  );
}
