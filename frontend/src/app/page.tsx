"use client";

import { useQuery } from "react-query"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from "react"

const inter = Inter({ subsets: ['latin'] })

async function getUsers() {
  const response = await fetch("http://165.227.145.185:3001/users");
  const data = await response.json();

  return data as any[];
}

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const { data: users } = useQuery(["users"], () => getUsers(), {
    refetchInterval: 1000,
    initialData: []
  })

  async function addUser(name: string, age: number) {

    await fetch("http://165.227.145.185:3001/user", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, age })
    })

  }

  return <div>
    <h2>Users</h2>
    <ul>
      {users?.map(user => <li><span>{user.name}</span> <b>{user.age}</b></li>)}
    </ul>
    <hr />

    <h2>Create User</h2>
    <input value={name} onChange={e => setName(e.target.value)} />
    <input value={age} onChange={e => setAge(parseInt(e.target.value))} />

    <button onClick={() => addUser(name, age)}>
      Save
    </button>
  </div>
}
