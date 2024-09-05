import Image from "next/image";
import CallActionImage from "@/../public/cta-bg.jpg";

import Link from "next/link";

const CallAction = () => {
  return (
    <section id="call-to-action" className="section bg-gray-900">
      <div className="container mx-auto py-8">
        <div className="relative">
        <Image   src={CallActionImage}  alt="Background" className="w-full h-full object-cover absolute top-0 left-0 opacity-30" />
          
          <div className="content flex justify-center items-center py-16" data-aos="zoom-in" data-aos-delay="100">
            <div className="text-center relative z-10">
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="btn btn-circle glass"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-4.72-2.448a1 1 0 00-1.482.874v4.832a1 1 0 001.482.874l4.72-2.448a1 1 0 000-1.748z"
                  />
                </svg>
              </a>
              <h3 className="text-4xl font-bold text-white mt-6">Call To Action</h3>
              <p className="text-gray-300 mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              
                <a className="btn btn-primary mt-6">Call To Action</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction;


