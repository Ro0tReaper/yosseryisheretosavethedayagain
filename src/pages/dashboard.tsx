// pages/dashboard.tsx
'use client'

import { useRouter } from 'next/router'
import Link from 'next/link'

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
    <div className="p-6 sm:p-10 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-4">📚 CyberSec Course Notes</h1>
      <p className="mb-10 text-lg text-green-400 italic">{greeting}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.name}
            className="border border-cyan-600 rounded-lg p-5 bg-gray-800 hover:shadow-xl hover:border-cyan-400 transition duration-300"
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
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">🤝 Support the Author</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">LinkedIn</a>
          <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300">Facebook</a>
          <a href="https://medium.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-300">Medium</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">GitHub</a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:underline text-sky-300">Twitter</a>
        </div>
      </section>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        &copy; 2025 CyberSec Notes. All rights reserved.
      </footer>
    </div>
  )
}
