import React from 'react'
import Header from '../Header'

export default function Register() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Register For A Free Account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your email address" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your secure password" />
              <p className="text-gray-600 text-xs italic">At least 6 characters</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline text-sm">I already have an account</a>
          </div>
          <div className="mt-8 text-center text-gray-500 text-xs">
            <p>This is a product of Your Company</p>
          </div>
        </div>
      </div>

    </div>
  )
}
