"use client"

import axios from "axios"

export default function SignIn() {
    return <div className="h-screen w-screen items-center justify-center flex">
        <div className="border p-2">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="password"></input>

            <button onClick={() => {
                axios.get("http://localhost:3000/api/v1/signin")
            }}>Sign In</button>
        </div>
    </div>
}