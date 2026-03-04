'use client'

import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'

export function Projects() {
  const { projects } = portfolioData

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-primary-500/20 rounded-lg overflow-hidden hover:border-primary-500/50 transition-colors"
            >
              {project.image && (
                <div className="h-48 bg-dark-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Demo →
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      GitHub →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
