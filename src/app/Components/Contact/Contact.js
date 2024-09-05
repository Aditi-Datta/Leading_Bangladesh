import React from "react";

function Contact() {
  return (
    <>
      <div className="py-10 mx-16 ">
        <h3 className="text-center text-2xl font-bold mb-10">
          CONTACT WITH US
        </h3>
        <div className="grid gap-8">
          <div className="flex flex-col items-center">
            <div className="card bg-teal-50 shadow-xl w-full">
              <div className="card-body">
                <div className="flex items-center">
                  <i className="fa-solid fa-globe text-4xl mr-4"></i>
                  <div>
                    <h5 className="card-title text-xl">Our Address:</h5>
                    <h6 className="text-lg">
                    5/3, Tajmahal Road , Mohammadpur , Dhaka-1207.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-teal-50 shadow-xl">
              <div className="card-body">
                <div className="flex items-center">
                  <i className="fa-solid fa-envelope text-4xl mr-4"></i>
                  <div>
                    <h5 className="card-title text-xl">Email Us:</h5>
                    <h6 className="text-lg">leadingbangladesh71@gmail.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-teal-50 shadow-xl">
              <div className="card-body">
                <div className="flex items-center">
                  <i className="fa-solid fa-phone text-4xl mr-4"></i>
                  <div>
                    <h5 className="card-title text-xl">Call Us:</h5>
                    <h6 className="text-lg">+8801912845317</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <form
              action="submit_form.php"
              method="post"
              className="card bg-teal-50 shadow-xl w-full p-6"
            >
              <div className="form-control ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    className="input input-bordered bg-cyan-50 "
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="input input-bordered bg-cyan-50"
                  />
                </div>
              </div>
              <div className="form-control my-4">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="input input-bordered bg-cyan-50"
                />
              </div>
              <div className="form-control mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  placeholder="Message"
                  className="textarea textarea-bordered bg-cyan-50"
                ></textarea>
              </div>
              <div  className="justify-items-center">
              <button type="submit" className="btn bg-green-950 text-white w-full ">
                Send
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
