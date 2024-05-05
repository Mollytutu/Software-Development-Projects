'use client'
import React, { useState } from 'react';
import Header from '~/components/Header/Header';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
    professionalCategory: '',
    position: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    alert(`Thanks ${name}! You have signed up successfully.`);
    const personalPageUrl = '/dashboard'; // Replace '/personal-page' with the actual URL of your personal page
    window.location.href = personalPageUrl;
  };

    console.log(formData);


  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border border-gray-300 rounded-xl w-80  p-8  bg-blue-200">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-500">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-3xl shadow-sm space-y-6">
            <div className="mb-6">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="input-field rounded-3xl border p-2 w-full"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field rounded-3xl border p-2 w-full"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="input-field rounded-3xl border p-2 w-full"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="input-field rounded-3xl border p-2 w-full"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="profilePicture" className="sr-only">
                Upload profile picture
              </label>
              <input
                id="profilePicture"
                name="profilePicture"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="professionalCategory" className="sr-only">
                Select professional category
              </label>
              <div >
          <select className=" w-full rounded-3xl py-2 px-2 border border-gray-400 border-opacity-50 focus:ring-2 focus:ring-blue-500">
            <option value="">Pick a Professional</option>
            <optgroup label="Information Technology">
              <option value="software-development">Software Development</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
            </optgroup>
            <optgroup label="Healthcare">
              <option value="nursing">Nursing</option>
              <option value="medicine">Medicine</option>
              <option value="physical-therapy">Physical Therapy</option>
            </optgroup>
            <optgroup label="Finance">
              <option value="accounting">Accounting</option>
              <option value="financial-planning">Financial Planning</option>
              <option value="investment-banking">Investment Banking</option>
            </optgroup>
            <optgroup label="Marketing">
              <option value="digital-marketing">Digital Marketing</option>
              <option value="social-media-marketing">Social Media Marketing</option>
              <option value="content-marketing">Content Marketing</option>
            </optgroup>
            <optgroup label="Education">
              <option value="teaching"><a href=''>Teaching</a></option>
              <option value="curriculum-development">Curriculum Development</option>
              <option value="educational-administration">Educational Administration</option>
            </optgroup>
            <optgroup label="Engineering">
              <option value="mechanical-engineering">Mechanical Engineering</option>
              <option value="electrical-engineering">Electrical Engineering</option>
              <option value="civil-engineering">Civil Engineering</option>
            </optgroup>
            <optgroup label="Law">
              <option value="criminal-law">Criminal Law</option>
              <option value="civil-law">Civil Law</option>
              <option value="corporate-law">Corporate Law</option>
            </optgroup>
            <optgroup label="Business Management">
              <option value="project-management">Project Management</option>
              <option value="operations-management">Operations Management</option>
              <option value="strategic-management">Strategic Management</option>
            </optgroup>
            <optgroup label="Sales">
              <option value="retail-sales">Retail Sales</option>
              <option value="b2b-sales">B2B Sales</option>
              <option value="inside-sales">Inside Sales</option>
            </optgroup>
            <optgroup label="Others">
              <option value="retail-sales">Business Owner</option>
              <option value="b2b-sales">Other</option>
              <option value="inside-sales">KOL</option>
            </optgroup>
          </select>
        </div>
            </div>
            <div className="mb-6">
              <label htmlFor="position" className="sr-only">
                Position
              </label>
              <input
                id="position"
                name="position"
                type="text"
                autoComplete="off"
                className="input-field rounded-3xl border p-2 w-full"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="input-field rounded-3xl border p-2 w-full h-60"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group mx-auto relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUpPage;
