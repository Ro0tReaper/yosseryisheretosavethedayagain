'use client'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const router = useRouter()
  const userName = typeof router.query.user === 'string' ? router.query.user : 'Investigator'
  const greeting = `Damn, ${userName}, looking cute today, aren't we.`

  const courses = [
    {
      name: 'CRTP',
      status: 'Finished – Notion',
      link: 'https://www.notion.so/CRTP-9553540d0fdc4e709f1a7af7baf88d33?source=copy_link',
      external: true
    },
    {
      name: 'OSWA',
      status: 'Finished – Notion',
      link: 'https://www.notion.so/OSWA-WEB-200-90dab786e70b48c49b2ba9aa4a86eb16?source=copy_link',
      external: true
    },
    {
      name: 'eJPT',
      status: 'Finished – Notion',
      link: 'https://www.notion.so/eJPTv2-7b0614ac350d40148c3e747ba43d7a87?source=copy_link',
      external: true
    },
    {
      name: 'CCNAv7',
      status: 'Finished – Embedded',
      link: '/ccnav7',
      external: false
    },
    {
      name: 'eMAPT',
      status: 'Under Construction',
      link: '',
      external: false
    }
  ]

  return (
    <main className="bg-gray-900 text-white min-h-screen p-6 sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-3">📚 CyberSec Course Notes</h1>
        <p className="text-lg sm:text-xl text-green-400 italic">{greeting}</p>
      </motion.div>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <motion.div
            key={course.name}
            className="border border-cyan-600 rounded-lg p-5 bg-gray-800 hover:shadow-2xl hover:border-cyan-400 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{course.name}</h2>
            <p className="mb-4">
              <span
                className={
                  course.status.includes('Notion') ? 'text-green-400' :
                  course.status.includes('Under Construction') ? 'text-yellow-400' :
                  'text-blue-400'
                }
              >
                {course.status}
              </span>
            </p>

            {course.external && course.link && (
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded hover:bg-cyan-300 transition"
              >
                🔗 View Notes
              </a>
            )}

            {!course.external && course.link && (
              <Link
                href={course.link}
                className="inline-block px-4 py-2 bg-green-400 text-gray-900 font-bold rounded hover:bg-green-300 transition"
              >
                📄 View Summary
              </Link>
            )}

            {!course.link && (
              <span className="text-sm text-gray-400 italic">🚧 Coming Soon</span>
            )}
          </motion.div>
        ))}
      </section>

      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">🤝 Support the Author</h2>
        <div className="flex justify-center flex-wrap gap-4 text-sm">
          <a href="https://www.linkedin.com/in/mohamed-yousry-elsayed-mahmoud/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">LinkedIn</a>
          <a href="https://www.facebook.com/medomedo54665487965464846687548976354968765463487" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300">Facebook</a>
          <a href="https://medium.com/@cfmohammed24" target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-300">Medium</a>
          <a href="https://github.com/Ro0tReaper/" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">GitHub</a>
          <a href="https://x.com/0xm03180050?s=21" target="_blank" rel="noopener noreferrer" className="hover:underline text-sky-300">Twitter</a>
        </div>
      </motion.section>

      <footer className="mt-20 text-sm text-gray-500 text-center">
        &copy; 2025 CyberSec Notes. All rights reserved.
      </footer>
    </main>
  )
}
