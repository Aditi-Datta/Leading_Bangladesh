import loggo from "@/../public/loggo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
        <a href="/" className="text-white">
        <Image src={loggo} alt="logo img" width={190} height={100} />
      </a>
          <p>
           Leading Bangladesh Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Development</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Security</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="/about" className="link link-hover">
              About us
            </a>
            <a href="/services" className="link link-hover">
            Services
          </a>
            <a href="/tranning" className="link link-hover">
            Tranning
          </a>
            <a href="/contact" className="link link-hover">
            Contact
          </a>
          
          
          
        </nav>
        <nav >
        <div className="w-64">
          <h6 className="footer-title">Contact Us</h6>
          <div >
            <FontAwesomeIcon icon="fa-solid fa-globe " />
            <small>
            5/3, Tajmahal Road , Mohammadpur, 
            </small>
          </div>

          <div >
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            <small > +8801912845317</small>
          </div>

          <div >
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <small >
            leadingbangladesh71@gmail.com

            </small>
          </div>
        </div>

        {/*  <div className="join text-black py-6">
          <input
            className="input input-bordered join-item bg-white border-solid border-2 border-black "
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full bg-red-500 text-white">
            Subscribe
          </button>
        </div>  */}
      </nav>

         {/*<nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>*/}
      </footer>

      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Leading Bangladesh Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
