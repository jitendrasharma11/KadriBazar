import React from 'react'
import Header from '../Header'

export default function Login() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
                <div className="bg-blue-600 text-white p-8 w-1/3 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4">K-WD</h2>
                    <p className="text-sm mb-6">With the power of K-WD, you can now focus only on functionalities for your digital products, while leaving the UI design on us!</p>
                    <a href="#" className="text-sm underline mb-2 block">Don't Have an account? <span className="font-semibold">Get Started!</span></a>
                    <a href="#" className="text-sm underline block">Read our terms and conditions</a>
                </div>
                <div className="p-8 w-2/3">
                    <h2 className="text-2xl font-bold mb-6">Account Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email address" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <div className="flex justify-between">
                                <input type="password" id="password" className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" />
                                <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="button">
                            Log in
                        </button>
                    </form>
                    <div className="mt-6 flex items-center justify-center">
                        <div className="border-t border-gray-300 w-1/3"></div>
                        <span className="mx-4 text-gray-500 text-sm">or login with</span>
                        <div className="border-t border-gray-300 w-1/3"></div>
                    </div>
                    <div className="mt-6">
                        <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full mb-4 focus:outline-none focus:shadow-outline">
                            
                            Login with Google
                        </button>
                        <button className="flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
                          
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
