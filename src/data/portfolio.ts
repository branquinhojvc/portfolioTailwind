export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  year: string
  details?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
}

export interface PortfolioData {
  personal: {
    name: string
    title: string
    bio: string
    email: string
    phone?: string
    whatsapp?: string
    location: string
    linkedin?: string
    github?: string
    twitter?: string
    website?: string
  }
  summary: string
  experience: Experience[]
  education: Education[]
  skills: {
    category: string
    items: string[]
  }[]
  projects: Project[]
  certifications?: {
    title: string
    issuer: string
    date: string
  }[]
}

// Portfolio data - Update this with your information
export const portfolioData: PortfolioData = {
  personal: {
    name: "João Branquinho",
    title: "Back-End Developer",
    bio: "Passionate about creating innovative solutions and building scalable applications",
    email: "joaobranquinhoofficial@gmail.com",
    phone: "+55 64 99900-8356",
    whatsapp: "https://wa.me/5564999008356?text=Olá! Gostaria de saber mais sobre seu serviço.",
    location: "Brazil",
    linkedin: "https://www.linkedin.com/in/branquinhojvc/",
    github: "https://github.com/branquinhojvc",
    twitter: "https://twitter.com",
    website: "https://www.seusite.com"
  },
  summary: `
    Desenvolvedor BackEnd apaixonado por criar aplicativos limpos, eficientes e fáceis de usar. 
    Com experiência em tecnologias web modernas e uma base sólida em princípios de engenharia de software, bastante dedicado a construir soluções escaláveis que resolvam problemas do mundo real.
  `,
  experience: [
    {
      id: "1",
      title: "Estagiário de Suporte ao BDS",
      company: "Seculos Sistemas",
      period: "02/2021 - 07/2022",
      description: " Primeiro contato com bancos de dados MySQL, aprendendo consultas, modelagem e manutenção.Início na linguagem C#, com foco em lógica e orientação a objetos.",
      skills: ["C#", "SQLServer", "ERP", "Help Desk"]
    },
    {
      id: "2",
      title: "Assistente de Suporte ao BDS",
      company: "Aliare",
      period: "08/2022 - 09/2023",
      description: " Suporte técnico a bancos MongoDB, Oracle e MySQL, auxiliando em incidentes, queries e manutenção.",
      skills: ["Coding", "SQLServer", "Oracle"]
    },
    {
      id: "3",
      title: "Analista de TI",
      company: "Dexian",
      period: "09/2025 - 12/2025",
      description: " Validação de Infraestrutura de rede e servidores voltador para a rede CARGILL.",
      skills: ["Network", "Server", "Cybersecurity" , "Infrastructure"]
    }
  ],
  education: [
    {
      id: "1",
      degree: "Graduacão",
      institution: "UNIRV - Universidade de Rio Verde",
      year: "01/2021 - 12/2027",
      details: "Engenharia de Software - Trancado"
    },
    {
      id: "2",
      degree: "Curso",
      institution: "DIO",
      year: "02/2026 - 03/2026",
      details: "Gen AI & Dados - Cursando"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "REST APIs"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "VS Code", "Figma"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and TypeScript.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/branquinhojvc/portfolioTailwind",
      github: "https://github.com/branquinhojvc"
    }
  ],
  certifications: [
    {
      title: "Gen AI & Dados",
      issuer: "DIO",
      date: "02/2026 - 03/2026"
    }
  ]
}
