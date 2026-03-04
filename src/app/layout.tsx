import type { Metadata } from "next"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Portfolio - João Branquinho",
  description: "Full Stack Developer Portfolio",
  keywords: ["portfolio", "developer", "full-stack"],
  authors: [{ name: "João Branquinho" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio.com",
    title: "João Branquinho - Full Stack Developer",
    description: "Explore my portfolio and projects",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-dark-900 text-white">
        {children}
      </body>
    </html>
  )
}
