import Image from "next/image";
import loggo from "@/../public/loggo.png";
import styles from "../../styles/CustomColors.module.css";

function Navbar() {
  return (
    <>
    <div className={styles.backgroundColorNavbar}>
    <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <a
              href="/"
              className="text-black hover:bg-white hover:text-black rounded-lg"
            >
              Home
            </a>
              </li>
              <li>
              <a
              href="/about"
              className="text-black hover:bg-white hover:text-black rounded-lg"
            >
              About
            </a>
              </li>
              <li>
                <a>Services</a>
                <ul className="p-2 ">
                  <li>
                  <a
                  href="/services"
                  className="text-black hover:bg-white hover:text-black rounded-lg"
                >
                  Service
                </a>
                  </li>
                  <li>
                  <a
                  href="/tranning"
                  className="text-black hover:bg-white hover:text-black rounded-lg"
                >
                  Tranning
                </a>
                  </li>
                </ul>
              </li>
              <li>
              <a
              href="/contact"
              className="text-black hover:bg-white hover:text-black rounded-lg"
            >
              Contact
            </a>
              </li>
            </ul>
          </div>
          <Image src={loggo} alt="logo img" width={100} height={70} />
         {/* <a className="btn btn-ghost text-xl">Leading Bangladesh</a> */}
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <a
            href="/"
            className="text-black hover:bg-white hover:text-black rounded-lg"
          >
            Home
          </a>
            </li>
            <li>
            <a
            href="/about"
            className="text-black hover:bg-white hover:text-black rounded-lg"
          >
            About
          </a>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-white ">
                  <li>
                  <a
                  href="/services"
                  className="text-black hover:bg-white hover:text-black rounded-lg"
                >
                  Services
                </a>
                  </li>
                  <li>
                  <a
                  href="/tranning"
                  className="text-black hover:bg-white hover:text-black rounded-lg"
                >
                  Tranning
                </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
            <a
            href="/contact"
            className="text-black hover:bg-white hover:text-black rounded-lg"
          >
            Contact
          </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>

      
    </>
  );
}

export default Navbar;
