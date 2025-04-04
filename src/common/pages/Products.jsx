import React from 'react'
import Header from '../Header'

export default function Products() {
  return (
    <div>
      <Header />
      <section className='py-20'>
        <div className='grid grid-cols-[20%_80%] gap-5 my-5'>
          <div>
            <div className='border-[1px] border-[#ccc] h-[250px] p-5 overflow-y-scroll'>
              <h3 className='uppercase font-bold'>categories</h3>
              <ul>
                <li className='p-2'> <input type="checkbox" /> Beauty</li>
                <li className='p-2'> <input type="checkbox" /> Fragrances</li>
                <li className='p-2'> <input type="checkbox" /> Furniture</li>
                <li className='p-2'> <input type="checkbox" /> Groceries</li>
                <li className='p-2'> <input type="checkbox" /> Home Decoration</li>
                <li className='p-2'> <input type="checkbox" /> Kitchen Accessories</li>
                <li className='p-2'> <input type="checkbox" /> Laptops</li>
                <li className='p-2'> <input type="checkbox" /> Mens Shirts</li>
                <li className='p-2'> <input type="checkbox" /> Mens Shoes</li>
                <li className='p-2'> <input type="checkbox" /> Mens Watches</li>
                <li className='p-2'> <input type="checkbox" /> Mobile Accessories</li>
              </ul>
            </div>
            <div className='border-[1px] border-[#ccc] h-[250px] p-5 overflow-y-scroll'>
              <h3 className='uppercase font-bold'>BRAND</h3>
              <ul>
                <li className='p-2'> <input type="checkbox" /> Essence</li>
                <li className='p-2'> <input type="checkbox" /> Glamour Beauty</li>
                <li className='p-2'> <input type="checkbox" /> Velvet Touch</li>
                <li className='p-2'> <input type="checkbox" /> Chic Cosmetics</li>
                <li className='p-2'> <input type="checkbox" /> Nail Couture</li>
                <li className='p-2'> <input type="checkbox" /> Calvin Klein</li>
                <li className='p-2'> <input type="checkbox" /> Chanel</li>
                <li className='p-2'> <input type="checkbox" /> Gucci</li>
                <li className='p-2'> <input type="checkbox" /> Annibale Colombo</li>
                <li className='p-2'> <input type="checkbox" /> Furniture Co.</li>
                <li className='p-2'> <input type="checkbox" /> Knoll</li>
              </ul>
            </div>
            <div className='border-[1px] border-[#ccc] h-[250px] p-5'>
              <h3 className='uppercase font-bold'>PRICE</h3>
              <ul>
                <li className='p-2'> <input type="checkbox" /> Rs. 10 to Rs. 250</li>
                <li className='p-2'> <input type="checkbox" /> Rs. 250 to Rs. 500</li>
                <li className='p-2'> <input type="checkbox" /> Rs. 500 to Rs. 1000</li>
                <li className='p-2'> <input type="checkbox" /> Rs. 1000 to Above</li>
              </ul>
            </div>
            <div className='border-[1px] border-[#ccc] h-[250px] p-5'>
              <h3 className='uppercase font-bold'>PRICE</h3>
              <ul>
                <li className='p-2'> <input type="checkbox" /> 5% and above</li>
                <li className='p-2'> <input type="checkbox" /> 10% and above</li>
                <li className='p-2'> <input type="checkbox" /> 15% and above</li>
                <li className='p-2'> <input type="checkbox" /> 20% and above</li>
              </ul>
            </div>
            <div className='border-[1px] border-[#ccc] h-[250px] p-5'>
              <h3 className='uppercase font-bold'>Rating</h3>
              <ul>
                <li className='p-2'> <input type="checkbox" /> 4★ & above</li>
                <li className='p-2'> <input type="checkbox" /> 3★ & above</li>
                <li className='p-2'> <input type="checkbox" /> 2★ & above</li>
                <li className='p-2'> <input type="checkbox" /> 1★ & above</li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-[20px]'>
            <div className='border-[1px] border-[#ccc] rounded-[10px] p-[13px] h-[400px]'>
              <img src="/images/thumbnail.png" alt="" />
              <h4 className='font-bold'>Essence Mascara Lash Princess</h4>
              <p className='text-[14px] mt-2.5'>the essence mascara lash princess is a popular mascara known for its</p>
              <div className='flex gap-2 items-center mt-2.5'>
              <h4 className='font-bold'>Rs.10</h4>
              <p className='text-[12px]'>Rs. 10</p>
              <p className='text-[12px] text-[#FF3F6C]'>(7)</p>
              </div>
            </div>
            <div className='border-[1px] border-[#ccc] rounded-[10px] p-[13px] h-[400px]'>
              <img src="/images/thumbnail (1).png" alt="" />
              <h4 className='font-bold'>Eyeshadow Palette With Mirror</h4>
              <p className='text-[14px] mt-2.5'>the eyeshadow palette with mirror offers a versatile range of eyeshadow</p>
              <div className='flex gap-2 items-center mt-2.5'>
              <h4 className='font-bold'>Rs.20</h4>
              <p className='text-[12px]'>Rs. 20</p>
              <p className='text-[12px] text-[#FF3F6C]'>(6)</p>
              </div>
            </div>
            <div className='border-[1px] border-[#ccc] rounded-[10px] p-[13px] h-[400px]'>
              <img src="/images/thumbnail (2).png" alt="" />
              <h4 className='font-bold'>Powder Canister</h4>
              <p className='text-[14px] mt-2.5'>the powder canister is a finely milled setting powder designed to set</p>
              <div className='flex gap-2 items-center mt-2.5'>
              <h4 className='font-bold'>Rs.15</h4>
              <p className='text-[12px]'>Rs.15</p>
              <p className='text-[12px] text-[#FF3F6C]'>(18)</p>
              </div>
            </div>
            <div className='border-[1px] border-[#ccc] rounded-[10px] p-[13px] h-[400px]'>
              <img src="/images/thumbnail (3).png" alt="" />
              <h4 className='font-bold'>Red Lipstick</h4>
              <p className='text-[14px] mt-2.5'>the red lipstick is a classic and bold choice for adding a pop of color to</p>
              <div className='flex gap-2 items-center mt-2.5'>
              <h4 className='font-bold'>Rs.13</h4>
              <p className='text-[12px]'>Rs.13</p>
              <p className='text-[12px] text-[#FF3F6C]'>(19)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
