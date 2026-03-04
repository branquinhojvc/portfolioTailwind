'use client'

import { portfolioData } from '@/data/portfolio'

export function Education() {
  const { education } = portfolioData

  if (!education || education.length === 0) {
    return null
  }

  return (
    <section id="educação" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Educação</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border border-primary-500/20 rounded-lg p-6 hover:border-primary-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
              {edu.details && <p className="text-gray-400">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
