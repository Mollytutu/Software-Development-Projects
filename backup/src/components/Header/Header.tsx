'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/Logo_white_long.png';
import { FaBars, FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue) {
      const [optgroup, option] = selectedValue.split('/');
      window.location.href = `/categories/${optgroup}/${option}`;
    }
  };

  return (
    <header className="relative sm:mx-auto">
      <div className="text-grey-400 grid grid-cols-2 gap-4 text-gray-800 pb-4 px-0 items-center">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="Open Your Cycle" width={220} height={60} />
          </Link>
        </div>
        <div className="inline-flex gap-4 pr-4 sm:pr-8 justify-end text-grey-200">
          <Link href="/login">
            <span className="border-gray-300 text-sm border_md text-red-700 cursor-pointer hover:bg-light-salmon hover:text-gray-300 flex justify-end">
              Sign up/Log in
            </span>
          </Link>
          <FaBars className="text-gray-500 cursor-pointer mb-0.5" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="absolute bg-gray-700 text-white top-12 right-4 mt-2 w-40 bg-white shadow-lg rounded-3xl z-10">
              <ul>
                <li>
                  <a className="block py-2 px-4 hover:bg-gray-100">
                    <Link href="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 hover:bg-gray-100">
                    <Link href="/about">About</Link>
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 hover:bg-gray-100">
                    <Link href="/contact">Contact Us</Link>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 px-8 w-full px-4 gap-4 mb-4">
        <div>
          <select
            className="w-full rounded-3xl py-2 px-2 border border-gray-400 border-opacity-50 focus:ring-2 focus:ring-blue-500"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value="">Pick a Professional</option>
            <optgroup label="Information Technology">
              <option value="information-technology/software-development">Software Development</option>
              <option value="information-technology/web-development">Web Development</option>
              <option value="information-technology/data-science">Data Science</option>
            </optgroup>
            <optgroup label="Healthcare">
              <option value="healthcare/nursing">Nursing</option>
              <option value="healthcare/medicine">Medicine</option>
              <option value="healthcare/physical-therapy">Physical Therapy</option>
            </optgroup>
            <optgroup label="Finance">
              <option value="finance/accounting">Accounting</option>
              <option value="finance/financial-planning">Financial Planning</option>
              <option value="finance/investment-banking">Investment Banking</option>
            </optgroup>
            <optgroup label="Marketing">
              <option value="marketing/digital-marketing">Digital Marketing</option>
              <option value="marketing/social-media-marketing">Social Media Marketing</option>
              <option value="marketing/content-marketing">Content Marketing</option>
            </optgroup>
            <optgroup label="Education">
              <option value="education/teaching">Teaching</option>
              <option value="education/curriculum-development">Curriculum Development</option>
              <option value="education/educational-administration">Educational Administration</option>
            </optgroup>
            <optgroup label="Engineering">
              <option value="engineering/mechanical-engineering">Mechanical Engineering</option>
              <option value="engineering/electrical-engineering">Electrical Engineering</option>
              <option value="engineering/civil-engineering">Civil Engineering</option>
            </optgroup>
            <optgroup label="Law">
              <option value="law/criminal-law">Criminal Law</option>
              <option value="law/civil-law">Civil Law</option>
              <option value="law/corporate-law">Corporate Law</option>
            </optgroup>
            <optgroup label="Business Management">
              <option value="business-management/project-management">Project Management</option>
              <option value="business-management/operations-management">Operations Management</option>
              <option value="business-management/strategic-management">Strategic Management</option>
            </optgroup>
            <optgroup label="Sales">
              <option value="sales/retail-sales">Retail Sales</option>
              <option value="sales/b2b-sales">B2B Sales</option>
              <option value="sales/inside-sales">Inside Sales</option>
            </optgroup>
            <optgroup label="Others">
              <option value="others/business-owner">Business Owner</option>
              <option value="others/other">Other</option>
              <option value="others/kol">KOL</option>
            </optgroup>
          </select>
        </div>
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-3xl py-2 px-2 pl-8 border border-gray-400 border-opacity-50 focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 sm:w-120" />
        </div>
      </div>
    </header>
  );
};

export default Header;
