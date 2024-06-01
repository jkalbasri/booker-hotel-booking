import React from 'react';

/**
 * AboutUs component
 * @returns {jsx}
 */
const AboutUs = () => {
  return (
    <div className=" mx-12 px-4  py-8">
      <h1 className="text-4xl text-slate-600 mb-2">About Us</h1>
      <p className="text-lg mb-8">
        Welcome to <span className="text-slate-600">BOOKER</span>, where we are
        dedicated to providing you with the best experience for booking hotels
        around the world.
      </p>

      <h2 className="text-3xl text-slate-600 mb-2">Our Vision</h2>
      <p className="text-lg mb-8">
        At <span className="text-slate-600">BOOKER</span>, we envision a world
        where every traveler finds the perfect accommodation that suits their
        needs and preferences.
      </p>

      <h2 className="text-3xl text-slate-600 mb-2">
        Why Choose Us?
      </h2>
      <ul className="list-disc mb-8 ml-10">
        <li className="text-md mb-3">
          We offer a diverse range of hotels, from luxury resorts to cozy
          boutique stays, ensuring that you find the perfect match for your
          travel style.
        </li>
        <li className="text-md mb-3">
          Our user-friendly interface makes it simple and quick to book your
          ideal stay. With just a few clicks, you can secure your reservation
          hassle-free.
        </li>
        <li className="text-md mb-3">
          Our dedicated customer support team is available 24/7 to assist you
          with any inquiries or issues you may encounter during your.
        </li>
        <li className="text-md mb-3">
          We prioritize the security of your personal information and
          transactions. Book with confidence, knowing that your data is safe
          with us.
        </li>
      </ul>

      <h2 className="text-3xl text-slate-600 mb-2">Contact Us</h2>
      <p className="text-lg mb-4">
        Have questions or need assistance? Feel free to reach out to our
        customer support team at{' '}
        <a
          className="text-brand-secondary hover:underline"
          href="mailto:info@booker.com"
        >
          info@booker.com
        </a>
        . We're here to help!
      </p>
      <p className="text-lg">
        Thank you for choosing <span className="text-brand-secondary">BOOKER</span>.
        We look forward to being your go-to platform for all your hotel booking
        needs.
      </p>
    </div>
  );
};

export default AboutUs;