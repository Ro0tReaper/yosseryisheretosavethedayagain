import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getTextFileContent } from '../lib/readText'

interface Module {
  id: string
  title: string
  time: string
  summary: string // HTML content
}

interface Props {
  modules: Module[]
}

export default function CCNAV7({ modules }: Props) {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white scroll-smooth">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">CCNAv7 Course Summary</h1>
      <p className="mb-6 text-gray-300">Click on a module to jump to its summary below:</p>

      <ul className="list-disc list-inside mb-8 space-y-2 text-cyan-300">
        {modules.map(module => (
          <li key={module.id}>
            <a href={`#${module.id}`} className="hover:underline">
              {module.title} <span className="text-sm text-gray-400">~ {module.time}</span>
            </a>
          </li>
        ))}
      </ul>

      <section className="space-y-12">
        {modules.map(module => (
          <section id={module.id} key={module.id} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">{module.title}</h2>
            <div
              className="text-gray-200 space-y-2"
              dangerouslySetInnerHTML={{ __html: module.summary }}
            />
          </section>
        ))}
      </section>

      <div className="mt-10">
        <Link href="/dashboard" className="text-sm text-cyan-400 underline hover:text-cyan-300">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const moduleData = [
    { id: 'mod1', title: 'Module 1: Basic Device Configuration', time: '20–30 mins', file: 'mod1.html' },
    { id: 'mod2', title: 'Module 2: Switching Concepts', time: '10 mins', file: 'mod2.html' },
    { id: 'mod3', title: 'Module 3: VLANs', time: '30–40 mins', file: 'mod3.html' },
    { id: 'mod4', title: 'Module 4: Inter-VLAN Routing', time: '10–15 mins', file: 'mod4.html' },
    { id: 'mod5', title: 'Module 5: STP Concepts', time: '40–50 mins', file: 'mod5.html' },
    { id: 'mod6', title: 'Module 6: EtherChannel', time: '5–10 mins', file: 'mod6.html' },
    { id: 'mod7', title: 'Module 7: DHCPv4', time: '20–25 mins', file: 'mod7.html' },
    { id: 'mod8', title: 'Module 8: SLAAC and DHCPv6', time: '20–30 mins', file: 'mod8.html' },
    { id: 'mod9', title: 'Module 9: FHRP Concepts', time: '5–10 mins', file: 'mod9.html' },
    { id: 'mod10', title: 'Module 10: LAN Security', time: '20 mins', file: 'mod10.html' },
    { id: 'mod11', title: 'Module 11: Switch Security Configuration', time: '30 mins', file: 'mod11.html' },
    { id: 'mod12', title: 'Module 12: WLAN Concepts', time: '55 mins', file: 'mod12.html' },
    { id: 'mod13', title: 'Module 13: WLAN Configuration', time: '55 mins', file: 'mod13.html' },
    { id: 'mod14', title: 'Module 14: Routing Concepts', time: '55 mins', file: 'mod14.html' },
    { id: 'mod15', title: 'Module 15: IP Static Routing', time: '30 mins', file: 'mod15.html' },
    { id: 'mod16', title: 'Module 16: Troubleshoot Static and Default Routes', time: '10 mins', file: 'mod16.html' },
  ]

  const modules: Module[] = moduleData.map(mod => {
    const summary = getTextFileContent(mod.file)
    return { ...mod, summary }
  })

  return {
    props: {
      modules
    }
  }
}
