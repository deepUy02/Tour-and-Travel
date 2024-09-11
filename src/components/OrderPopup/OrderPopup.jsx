import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import emailjs from 'emailjs-com';

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm(
      'service_p4vo6yb',      // Your EmailJS service ID
      'template_f4ressd',     // Your EmailJS template ID
      e.target,               // Form element
      'MH70H5nG0S8GIrnmv'     // Your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
        setOrderPopup(false);  // Close popup
      },
      (error) => {
        console.log(error.text);
        alert('Message Failed to Send!');
      }
    );
    e.target.reset(); // Reset form
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-white/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Form */}
            <form onSubmit={sendEmail}>
              {/* Body */}
              <div className="mt-4">
                <input
                  type="text"
                  name="user_name"  // Must match the EmailJS template variable
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <input
                  type="email"
                  name="user_email"  // Must match the EmailJS template variable
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <input
                  type="text"
                  name="user_address"  // Must match the EmailJS template variable
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;