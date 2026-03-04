'use client'

import { portfolioData } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { personal } = portfolioData

  return (
    <footer className="bg-dark-800 border-t border-primary-500/20 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {personal.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desenvolvido com Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
