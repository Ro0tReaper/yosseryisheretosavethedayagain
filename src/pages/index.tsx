import { useState } from 'react'
import { useRouter } from 'next/router'

const whitelist = ['ahmed khaled eltatawy','ahmed eltatawy', 'nancy', 'fagr', 'salma', 'salma tawfik', 'faten amer', 'omar saleh', 'faten', 'mohamed ahmed', 'malak', 'mlak', 'ahmed ashraf']

export default function Home() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name) {
      setError('🕵️ Please enter a name.')
      return
    }
    if (whitelist.includes(name.toLowerCase())) {
        router.push({
        pathname: '/dashboard',
        query: { user: name }
      })
    } else if (name.toLowerCase() === "ahmed" || "mohamed" || "omar" )
      {
        if(name.split(" ").length === 2 && !whitelist.includes(name.toLowerCase())) setError('🚫 Access denied. You are have no place here!')
        setError("⚠ First and Last name please ...")
      }else {
      setError('🚫 Access denied. You are have no place here!')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-4">🔍 Cyber Sleuth Portal</h1>
      <p className="mb-6 text-center text-gray-300">Enter your to check if i like you or not 🙄...</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm">
        <input
          type="text"
          placeholder="Your Name goes here"
          className="px-4 py-2 w-full rounded border border-cyan-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setError('')
          }}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition w-full"
        >
          Analyze 🔍
        </button>
      </form>

      {error && <p className="mt-4 text-red-400 font-mono">{error}</p>}
    </div>
  )
}
