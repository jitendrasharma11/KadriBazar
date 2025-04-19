import React from 'react'
import Header from '../Header'
import { IoStar } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            
            <section className='bg-white dark:bg-gray-900 pt-[100px]'>
                <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  grid-cols-2'>
                    <div className='w-[600px] mb-4 sm:text-4xl text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                        <h2 className='w-[100%]'>The eperience maked <br /> all teh difference.</h2>
                        <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mt-[15px]'>From checkout to global sales tax compliance, companies <br /> around the world use Flowbite to simplify their payment <br /> stack.</p>
                    </div>
                    <div className='w-[520px]'>
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                    </div>
                    <div>
                        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Get Started</button>

                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">OFFERS</button>
                    </div>
                </div>
            </section>
            <section >
                <div className='bg-white w-[1320px] pt-[100px] mx-auto shadow-lg px-20'>
                    <div className='grid grid-cols-3 gap-4 mx-auto '>
                        <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="" className='row-span-2 bg-cover h-[700px]' />

                        <img src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" />

                        <img src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="" className='row-span-2 bg-cover h-[700px]' />
                        <img src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='py-[50px]'>
                <div>
                    <h3 className='text-[56px] font-bold text-center py-[15px] shadow-lg max-w-[1400px] m-auto'>Get difference Product</h3>
                </div>
                <div className='max-w-[1400px] m-auto grid lg:grid-cols-5 py-28 gap-6'>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail.png" alt="" />
                        <h4 className='font-bold'>Essence Mascara Lash Princess</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 9.99</h3>
                        <p className='pt-2'>Essence</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.94)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (1).png" alt="" />
                        <h4 className='font-bold'>Eyeshadow Palette with Mirror</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 19.99</h3>
                        <p className='pt-2'>Glamour Beauty</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.28)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (2).png" alt="" />
                        <h4 className='font-bold'>Powder Canister</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 14.99</h3>
                        <p className='pt-2'>Velvet Touch</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.82)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (3).png" alt="" />
                        <h4 className='font-bold'>Red Lipstick</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 12.99</h3>
                        <p className='pt-2'>Chic Cosmetics</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.51)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (4).png" alt="" />
                        <h4 className='font-bold'>Red Nail Polish
                        </h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 8.99</h3>
                        <p className='pt-2'>Nail Couture</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308]'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.91)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (5).png" alt="" />
                        <h4 className='font-bold'>Calvin Klein CK One
                        </h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 49.99</h3>
                        <p className='pt-2'>Calvin Klein</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.85)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (6).png" alt="" />
                        <h4 className='font-bold'>Chanel Coco Noir Eau De</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 129.99</h3>
                        <p className='pt-2'>Chanel</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.76)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (7).png" alt="" />
                        <h4 className='font-bold'>Dior J'adore</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 89.99</h3>
                        <p className='pt-2'>Dior</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.31)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (8).png" alt="" />
                        <h4 className='font-bold'>Dolce Shine Eau de</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 69.99</h3>
                        <p className='pt-2'>Dolce & Gabbana</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.68)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (9).png" alt="" />
                        <h4 className='font-bold'>Gucci Bloom Eau de</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 79.99</h3>
                        <p className='pt-2'>Gucci</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.69)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (10).png" alt="" />
                        <h4 className='font-bold'>Annibale Colombo Bed</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 1899.99</h3>
                        <p className='pt-2'>Annibale Colombo</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.14)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (11).png" alt="" />
                        <h4 className='font-bold'>Annibale Colombo Sofa</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 2499.99</h3>
                        <p className='pt-2'>Annibale Colombo</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.08)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (12).png" alt="" />
                        <h4 className='font-bold'>Bedside Table African Cherry</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 299.99</h3>
                        <p className='pt-2'>Furniture Co.</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.48)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (13).png" alt="" />
                        <h4 className='font-bold'>Knoll Saarinen Executive Conference Chair</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 499.99</h3>
                        <p className='pt-2'>Knoll</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.11)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (14).png" alt="" />
                        <h4 className='font-bold'>Wooden Bathroom Sink With Mirror</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 799.99</h3>
                        <p className='pt-2'>Bath Trends</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.26)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (15).png" alt="" />
                        <h4 className='font-bold'>Apple</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 1.99</h3>
                
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.96)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (16).png" alt="" />
                        <h4 className='font-bold'>Beef Steak</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 12.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.83)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (17).png" alt="" />
                        <h4 className='font-bold'>Cat Food</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 8.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.88)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (18).png" alt="" />
                        <h4 className='font-bold'>Chicken Meat</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 9.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.61)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (19).png" alt="" />
                        <h4 className='font-bold'>Cooking Oil</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 4.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.01)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (20).png" alt="" />
                        <h4 className='font-bold'>Cucumber</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 1.49</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.71)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (21).png" alt="" />
                        <h4 className='font-bold'>Dog Food</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 10.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(2.74)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (22).png" alt="" />
                        <h4 className='font-bold'>Eggs</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 2.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.46)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (23).png" alt="" />
                        <h4 className='font-bold'>Fish Steak</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 14.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.83)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (24).png" alt="" />
                        <h4 className='font-bold'>Green Bell Pepper</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 1.29</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.28)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (25).png" alt="" />
                        <h4 className='font-bold'>Green Chili Pepper</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 0.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.43)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (26).png" alt="" />
                        <h4 className='font-bold'>Honey Jar</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 6.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.5)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (27).png" alt="" />
                        <h4 className='font-bold'>Ice Cream</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 6.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.5)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (28).png" alt="" />
                        <h4 className='font-bold'>Juice</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 3.99</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(3.41)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                    <div className='rounded-[10px] shadow-lg p-[20px]'>
                        <div className='text-[#CC3535] flex justify-end'>
                            <FaHeart />
                        </div>
                        <img src="/images/thumbnail (29).png" alt="" />
                        <h4 className='font-bold'>Kiwi</h4>
                        <h3 className='font-bold text-[#B45309]'>Rs 2.49</h3>
                        
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[2px] text-[#EAB308] items-center'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <p className='text-black text-[10px]'>(4.37)</p>
                            </div>
                            <button className='py-[6px] px-5 rounded-[10px] bg-[#2563EB] text-white font-bold'>Add</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
