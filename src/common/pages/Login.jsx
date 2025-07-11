import React, { useState } from 'react'

export default function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let handleSubmit=(event)=>{
        event.preventDefault()
       console.log(email)
       console.log(password)

       setEmail('')
       setPassword('')
    }

    return (
        <div>
            <div class="flex items-center h-screen w-full">
                <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                    <span class="block w-full text-xl uppercase font-bold mb-4">Login</span>
                    <form onSubmit={handleSubmit} class="mb-4"  method="post">
                        <div class="mb-4 md:w-full">
                            <label for="email" class="block text-xs mb-1">Username or Email</label>
                           
                            <input value={email} 
                            onChange={(event)=> setEmail(event.target.value) }
                             class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
                        </div>
                        <div class="mb-6 md:w-full">
                            <label for="password" class="block text-xs mb-1">Password</label>
                            <input onChange={(event)=>setPassword(event.target.value)} value={password} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                    </form>
                    <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
                </div>
            </div>
        </div>
    )
}