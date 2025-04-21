import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap.css';

export default function Product() {

  let [products, setProducts] = useState([])
  let [category, setCategory] = useState([])
  let [brand, setBrand] = useState([])

  let [dropdown, setDropdown] = useState(false)
  let [sorting, setSorting] = useState(null)
  let [caregoryfillter, setCaregoryfillter] = useState([])
  let [brandfillter, setBrandfillter] = useState([])
  let [isLoading, setisLoading] = useState(false)
  let [pricefilter, setpricefilter] = useState([null, null])
  let [totalPage, setTotalpage] = useState(null)
  let [CurrentPage, setCurrentPage] = useState(1)





  let getCategories = () => {
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((axiosRes) => axiosRes.data)
      .then((finalRes) => {
        setCategory(finalRes.data)

      })

  }


  let getBrand = () => {
    axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((axiosRes) => axiosRes.data)
      .then((finalRes) => {
        setBrand(finalRes.data)

      })

  }

  let getProducts = () => {
    console.log(caregoryfillter)
    setisLoading(true)

    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params: {
        page: CurrentPage,
        limit: 12,
        categories: caregoryfillter.join(","),
        brands: brandfillter.join(","), //["ram","ravi","raj"]
        price_from: pricefilter[0],
        price_to: pricefilter[1],
        discount_from: '',
        discount_to: '',
        rating: null,
        sorting: sorting
      }
    })
      .then((axiosRes) => axiosRes.data)
      .then((finalRes) => {
        setProducts(finalRes.data)
        setTotalpage(finalRes.total_pages)
        setisLoading(false)

      })
  }



  let getmyCheckCategory = (event) => {

    if (event.target.checked) {
      if (!caregoryfillter.includes(event.target.value)) {
        setCaregoryfillter([...caregoryfillter, event.target.value])
      }
    }
    else {

      let finalData = caregoryfillter.filter((v) => v != event.target.value)
      setCaregoryfillter(finalData)

    }


  }


  let getmyCheckBrand = (event) => {

    if (event.target.checked) {
      if (!brandfillter.includes(event.target.value)) {
        setBrandfillter([...brandfillter, event.target.value])
      }
    }
    else {

      let finalData = brandfillter.filter((v) => v != event.target.value)
      setBrandfillter(finalData)

    }


  }


  useEffect(() => {
    getCategories()
    getBrand()
  }, [])




  useEffect(() => {
    getProducts()
  }, [sorting, caregoryfillter, brandfillter, pricefilter, CurrentPage])




  return (
    <div className='grid grid-cols-[20%_auto] gap-5 my-5'>
      <div className='border-[1px] border-[#ccc]'>
        <div className='p-3 border-[1px] border-[#ccc] h-[250px] overflow-y-scroll'>
          <h3 className='font-bold'>Categories</h3>

          <ul>
            {category.map((items, index) => {
              return (
                <li className='p-2'>
                  <input type="checkbox" onChange={getmyCheckCategory} value={items.slug} />
                  {items.name} </li>
              )
            })}


          </ul>

        </div>
        <div className='p-3 border-[1px] border-[#ccc] h-[250px] overflow-y-scroll'>
          <h3 className='font-bold'>Brand</h3>

          <ul>
            <ul>
              {brand.map((items, index) => {
                return (
                  <li className='p-2'>
                    <input type="checkbox" onChange={getmyCheckBrand} value={items.slug} />  {items.name} </li>
                )
              })}


            </ul>
          </ul>

        </div>
        <div className='p-3 border-[1px] border-[#ccc] '>
          <h3 className='font-bold'>PRICE
          </h3>

          <ul>
            <li className='p-2'> <input type="radio" name='pricefilter' onClick={() => setpricefilter([10, 250])} />  Rs. 10 to Rs. 250 </li>
            <li className='p-2'> <input type="radio" name='pricefilter' onClick={() => setpricefilter([250, 500])} />  Rs. 250 to Rs. 500 </li>
            <li className='p-2'> <input type="radio" name='pricefilter' onClick={() => setpricefilter([500, 1000])} />  Rs. 500 to Rs. 1000 </li>
            <li className='p-2'> <input type="radio" name='pricefilter' onClick={() => setpricefilter([1000, 50000])} />  Rs. 1000 to Above </li>

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
      <div>
        <div className='flex justify-between items-center p-3 border-[1px] border-[#ccc] mb-5'>
          <h3 className='font-bold text-2xl'>Products</h3>

          <div className='relative'>
            <button onClick={() => setDropdown(!dropdown)} id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" class="bg-transparent cursor-pointer font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center outline-2" type="button">Sort by : Recommended <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>


            <div id="multi-dropdown" class={`absolute top-[100%] z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 ${dropdown ? '' : 'hidden'} `}>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li onClick={() => {
                  setSorting(1)
                  setDropdown(false)
                }}>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name : A to Z</a>
                </li>

                <li onClick={() => {
                  setSorting(2)
                  setDropdown(false)
                }}>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name : Z to A</a>
                </li>
                <li onClick={() => {
                  setSorting(3)
                  setDropdown(false)
                }}>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price : Low to High</a>
                </li>
                <li onClick={() => {
                  setSorting(4)
                  setDropdown(false)
                }}>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price : High to Low</a>
                </li>
                <li onClick={() => {
                  setSorting(5)
                  setDropdown(false)
                }}>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Discounted Price : Low to High</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div>
          <div className='grid grid-cols-4 gap-5'>


            {
              isLoading ?

                <>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                    <div class="flex animate-pulse space-x-4">
                      <div class="size-10 rounded-full bg-gray-200"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 rounded bg-gray-200"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                          </div>
                          <div class="h-2 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>

                :

                products.map((items, index) => <ProductItems pdata={items} />)

            }


          </div>
          <div className='mt-7'>
            <ResponsivePagination
              current={CurrentPage}
              total={totalPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductItems({ pdata }) {

  let { id, name, image, price, discount_percentage, rating } = pdata
  return (
    <div className='shadow-xl pb-5'>
      <img src={image} alt="" />
      <div className='p-3'>
        <Link to={`/product-details/${id}`} >
          <h4 className='font-bold mt-2'>{name}</h4>
          <div className='flex gap-3 items-center mt-3'>
            <h4 className='font-bold  text-blue-600'>Rs {price}</h4>
            <p className='text-red-600 text-[13px]'>Discount {discount_percentage}%</p>
            <p className=' text-[13px]'>(Rating {rating})</p>
          </div>

        </Link>
        <button className='bg-blue-700 text-white py-2 px-4 rounded-[10px] mt-3 hover:bg-blue-400'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}