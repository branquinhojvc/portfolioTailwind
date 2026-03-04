'use client'

import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'

export function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contato" className="py-20 bg-dark-800/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">Entre em Contato</h2>
        <p className="text-gray-300 mb-12 text-lg">
          Ficarei feliz em conversar sobre novos projetos e oportunidades.
        </p>

        <div className="space-y-4 mb-12">
          <p className="text-gray-300">
            <span className="text-primary-400 font-semibold">Email:</span>{' '}
            <Link
              href={`mailto:${personal.email}`}
              className="hover:text-primary-400 transition-colors"
            >
              {personal.email}
            </Link>
          </p>

          {personal.phone && (
            <p className="text-gray-300">
              <span className="text-primary-400 font-semibold">Telefone:</span>{' '}
              <Link
                href={`tel:${personal.phone.replace(/\D/g, '')}`}
                className="hover:text-primary-400 transition-colors"
              >
                {personal.phone}
              </Link>
            </p>
          )}

          {personal.location && (
            <p className="text-gray-300">
              <span className="text-primary-400 font-semibold">Localização:</span>{' '}
              {personal.location}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {personal.linkedin && (
            <Link
              href={personal.linkedin}
              target="_blank"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              LinkedIn
            </Link>
          )}
          {personal.github && (
            <Link
              href={personal.github}
              target="_blank"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              GitHub
            </Link>
          )}
          {personal.twitter && (
            <Link
              href={personal.twitter}
              target="_blank"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Twitter
            </Link>
          )}
          {personal.website && (
            <Link
              href={personal.website}
              target="_blank"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Website
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
