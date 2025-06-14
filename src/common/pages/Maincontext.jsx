import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export let counterContext = createContext()
export default function Maincontext({ children }) {

  let [count, setCount] = useState(1)
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("CART")) ?? [] )

  let obj = {
    count,
    setCount,
    cart,
    setCart
  }
  useEffect(() => {
    console.log(cart)
    localStorage.setItem("CART",JSON.stringify(cart))
  }, [cart])

  return (
    <counterContext.Provider value={obj}>
      {children}
    </counterContext.Provider>
  )
}

