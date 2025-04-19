import React from 'react'
import Header from '../Header'
import { FaArrowLeft } from "react-icons/fa6";

export default function Cart() {
  return (
    <div>
      
      <section className='py-25'>
        <div className='max-w-[1400px] m-auto grid grid-cols-[70%_30%]  gap-[40px]'>
          <div>
            <div className='flex justify-between border-b-1 mb-5'>
              <h3 className='mb-7 font-semibold text-[20px]'>Shopping Cart</h3>
              <h3 className='mb-7 font-semibold text-[20px]'>0 Items</h3>
            </div>
            <div className='grid grid-cols-[50%_22%_22%_22%] justify-between mb-7'>
              <p className='uppercase text-[13px] font-bold text-gray-500'>Product Details</p>
              <p className='uppercase text-[13px] font-bold text-gray-500'>Quantity</p>
              <p className='uppercase text-[13px] font-bold text-gray-500'>Price</p>
              <p className='uppercase text-[13px] font-bold text-gray-500'>Total</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='text-[#6366F1] text-[17px] font-bold'><FaArrowLeft /></div>
              <h3 className='text-[#6366F1] text-[17px] font-bold'>Continue Shoping</h3>
            </div>
          </div>
          <div>
            <div>
              <div className='flex justify-between border-b-1 mb-5'>
                <h3 className='mb-7 font-semibold text-[20px]'>Order Summary</h3>
              </div>
              <div className='flex justify-between mb-7'>
                <h3 className='font-bold text-[15px] uppercase'>Items 0</h3>
                <h3 className='font-bold text-[15px] uppercase'>Rs. 0</h3>
              </div>
              <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - Rs. 100</option>
              </select>
              </div>
              <div class="py-10">
                <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
              </div>
              <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-[10px]">Apply</button>
              <div class="border-t mt-8"><div class="flex font-semibold justify-between py-6 text-sm uppercase"><span>Total cost</span><span>Rs. 0</span></div><button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
