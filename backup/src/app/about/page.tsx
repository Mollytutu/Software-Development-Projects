import React from 'react';
import Header from '../../components/Header/Header'; // Import the Header component

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container px-4 py-8 bg-blue-200 mr-0 w-full">
        <section className="py-6">
        <h2 className="text-md font-semibold mb-4 rounded-3xl bg-gray-400 text-white px-4 py-2 w-40">What We Do</h2>
          <p>
          This website provides a platform for professionals to showcase their expertise and availability. Users can browse profiles of local professionals and book paid services such as scheduled quick calls, request quotes, or schedule consulting sessions directly.
          </p>
        </section>
        <section className="py-6">
        <h2 className="text-md font-semibold mb-4 rounded-3xl bg-gray-400 text-white px-4 py-2 w-40">Who We Are</h2>
          <p>
          We are a group of passionate software development students dedicated to learning and honing our skills. Together, we strive to create innovative solutions and contribute positively to the world of technology.
          </p>
        </section>
        <section className="py-6">
        <h2 className="text-md font-semibold mb-4 rounded-3xl bg-gray-400 text-white px-4 py-2 w-60">Contact Information</h2>
          <p>Address: 123 Main St, City, Country</p>
          <p>Customer Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone Number: +1234567890</p>
        </section>
      </div>
    </div>
  );
};

export default About;