'use client'

import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'

export function Header() {
  const { personal } = portfolioData

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-primary-500/20">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          {personal.name.split(' ')[0]}
        </Link>

        <ul className="hidden md:flex gap-8">
          {['Sobre', 'Experiência', 'Educação', 'Projetos', 'Contato'].map((item, i) => (
            <li key={i}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={`mailto:${personal.email}`}
          className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg transition-colors"
        >
          Contato
        </Link>
      </nav>
    </header>
  )
}
