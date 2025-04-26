import React, { useContext, useEffect, useState } from 'react';
import { counterContext } from './Maincontext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
  let { cart } = useContext(counterContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left: Cart Table */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 border">Image</th>
                  <th className="p-3 border">Product Name</th>
                  <th className="p-3 border">Price</th>
                  <th className="p-3 border">Qty</th>
                  <th className="p-3 border">Total</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartRow item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="bg-gray-50 p-4 rounded-md shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4">Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs 1299</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs 50</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>Rs 1349</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

function CartRow({ item }) {
  const { id,name,price,qty,image } = item;
  let[currentQty,setCurrentQty]=useState(qty)
  const { cart, setCart } = useContext(counterContext);

  const removeCart = () => {
    if (window.confirm("Are you sure you want to delete this item from the cart?")) {
      const finalData = cart.filter((items) => items.id !== id);
      setCart(finalData);
      toast.success("Item removed from cart!");
    }
  };

  useEffect(()=>{
    let finalCart=cart.filter((items)=>{

      if(items.id==id){
        items['qty']=currentQty
      }
      return items
    })
    setCart(finalCart)
  },[currentQty])

  return (
    <tr className="border-t">
      <td className="p-3 border">
        <img src={image} alt={name} className="w-14 h-14 rounded object-cover" />
      </td>
      <td className="p-3 border">{name}</td>
      <td className="p-3 border">Rs {price}</td>
      <td className="p-3 border">
        <input type="number" className='border-2 w-20 text-center' max={10} min={1} value={currentQty} onChange={(e)=>setCurrentQty(e.target.value)} /></td>
      <td className="p-3 border">Rs {price * qty}</td>
      <td className="p-3 border">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-gray-200 rounded">-</button>
          <button className="px-2 py-1 bg-gray-200 rounded">+</button>
          <button onClick={removeCart} className="text-red-500 hover:underline">Remove</button>
        </div>
      </td>
    </tr>
  );
}