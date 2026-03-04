'use client'

import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'

export function Hero() {
  const { personal, summary } = portfolioData

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          {personal.name}
        </h1>

        <p className="text-2xl md:text-3xl text-primary-400 mb-8">
          {personal.title}
        </p>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
          {summary}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {personal.linkedin && (
            <Link
              href={personal.linkedin}
              target="_blank"
              className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              LinkedIn
            </Link>
          )}
          {personal.github && (
            <Link
              href={personal.github}
              target="_blank"
              className="border border-primary-500 text-primary-400 hover:bg-primary-500/10 px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              GitHub
            </Link>
          )}
          <Link
            href={`mailto:${personal.email}`}
            className="border border-primary-500 text-primary-400 hover:bg-primary-500/10 px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            Email
          </Link>
        </div>

        <div className="mt-16 text-gray-400 text-sm">
          <p>{personal.location}</p>
        </div>
      </div>
    </section>
  )
}
