import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.987403380843!2d77.517268!3d28.479926000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea880c4c0d29%3A0x2a946dc3ae36613!2s39%2C%20Pocket%20H%2C%20Block%20H%2C%20Sector%20Alpha%20II%2C%20Greater%20Noida%2C%20Brahmpur%20Rajraula%20Urf%20Nawada%2C%20Uttar%20Pradesh%20201307!5e0!3m2!1sen!2sin!4v1725959903846!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
