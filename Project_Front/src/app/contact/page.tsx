'use client'
import React, { useState } from 'react';
import Header from '~/components/Header/Header';
import Footer from '~/components/footer/footer';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add the logic to send the form data to your backend
    console.log(formData);
    // You can also clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message. We will contact you shortly.')
    window.location.href = '/'; 
  };

  return (
    <>
        <Header />
        <div className=" bg-gray-100 flex justify-center items-center h-screen">
          <div className="signin border border-gray-300 rounded-2xl w-80 h-110 p-8 bg-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-400 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-2xl px-3 py-2 w-full mb-4"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-2xl px-3 py-2 w-full mb-4"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="border border-gray-300 rounded-2xl px-3 py-2 w-full"
                ></textarea>
              </div>
              <div className='text-center'>
                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-4">Submit</button></div>
            </form>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default ContactUs;
