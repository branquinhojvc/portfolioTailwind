'use client'

import { portfolioData } from '@/data/portfolio'

export function Experience() {
  const { experience } = portfolioData

  if (!experience || experience.length === 0) {
    return null
  }

  return (
    <section id="experiência" className="py-20 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Experiência</h2>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <div
              key={job.id}
              className="border border-primary-500/20 rounded-lg p-6 hover:border-primary-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-primary-400">{job.title}</h3>
                  <p className="text-gray-400">{job.company}</p>
                </div>
                <span className="text-gray-500 text-sm">{job.period}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

              {job.skills && job.skills.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {job.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
