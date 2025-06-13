'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const whitelist = [
  'ahmed khaled eltatawy', 'ahmed eltatawy', 'nancy', 'fagr',
  'salma', 'salma tawfik', 'faten amer', 'omar saleh',
  'faten', 'mohamed ahmed', 'malak', 'mlak', 'ahmed ashraf'
]

export default function Home() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const normalized = name.trim().toLowerCase()

    if (!normalized) {
      setError('🕵️ Please enter a name.')
      return
    }

    if (whitelist.includes(normalized)) {
      router.push({
        pathname: '/dashboard',
        query: { user: name }
      })
    } else if (['ahmed', 'mohamed', 'omar'].includes(normalized)) {
      if (name.split(' ').length === 2 && !whitelist.includes(normalized)) {
        setError('🚫 Access denied. You have no place here!')
      } else {
        setError('⚠ First and Last name please ...')
      }
    } else {
      setError('🚫 Access denied. You have no place here!')
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-6 text-center"
      >
        <h1 className="text-4xl font-extrabold text-cyan-400">🔍 Cyber Sleuth Portal</h1>
        <p className="text-gray-300 text-base">Enter your name to check if I like you or not 🙄...</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name goes here"
            className="w-full px-4 py-3 rounded border border-cyan-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setError('')
            }}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition"
          >
            Analyze 🔍
          </button>
        </form>

        {error && (
          <motion.p
            className="text-red-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}
      </motion.div>

      {/* Legal Footer */}
      <motion.footer
        className="mt-12 text-sm text-gray-500 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          &copy; 2025 <span className="text-white font-semibold">Mohamed Yossery</span>. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-600 italic">
          This site is for personal use only. Unauthorized access, abuse, or name spoofing is strictly prohibited.
        </p>
      </motion.footer>
    </main>
  )
}
