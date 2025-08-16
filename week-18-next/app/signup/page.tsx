"use client"

import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SignUp() {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const router = useRouter();
        return <div className="h-screen w-screen items-center justify-center flex">
        <div className="border p-2">
            <input type="text" placeholder="Username" onChange={e => {setUsername(e.target.value)}}></input>
            <input type="password" placeholder="password" onChange={e => {setPassword(e.target.value)}}></input>

            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup", {
                    username,
                    password
                })
                router.push("/signin")
            }}>Sign Up</button>
        </div>
    </div>
}