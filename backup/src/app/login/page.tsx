'use client'

import Link from 'next/link';
import React, { createContext, useState } from 'react';
import Header from '~/components/Header/Header';
import { useRouter } from 'next/router';



const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const handleLogin = () => {
    // Perform login authentication here
    if (email === 'example@example.com' && password === 'password') {
      // Successful login
      // login(input)
      console.log('Login successful');

      setError('');
    } else {
      // Failed login
      setError('Invalid email or password');
    }
  };


  // const { mutate:login,inError} = trpc.admin.login.useMutation()
  //   onSuccess: ()=>{
  //     router.push('/dashboard')
  //   },
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen mt-16">
        <div className="signin border border-gray-300 rounded-xl w-80 h-96 p-8  bg-blue-200">
          <h1 className="text-2xl font-bold mb-4 text-gray-400 text-center">Login</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mt-4"
          >
            Login
          </button>
          <Link className="text-blue-500" href="/signup">
          <p className=" text-center text-red-600 underline mt-4">
            First time here? Sign up
          </p></Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;