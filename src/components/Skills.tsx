'use client'

import { portfolioData } from '@/data/portfolio'

export function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Habilidades</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, i) => (
            <div
              key={i}
              className="border border-primary-500/20 rounded-lg p-6 hover:border-primary-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-primary-600/20 text-primary-300 px-4 py-2 rounded-lg text-sm hover:bg-primary-600/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
