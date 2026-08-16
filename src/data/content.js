export const profile = {
  name: 'Jamile Rockenbach',
  fullName: 'Jamile Rockenbach Ferreira',
  role: { pt: 'Desenvolvedora FullStack e Designer UX/UI', en: 'FullStack Developer and UX/UI Designer' },
  tags: ['Front-end', 'Back-end', 'IA', 'UX/UI', 'Dados', 'Dev. Web'],
  location: { pt: 'Passo Fundo, Rio Grande do Sul, Brasil', en: 'Passo Fundo, Rio Grande do Sul, Brazil' },
  bio: {
    pt: [
      'Olá! Sou Jamile Rockenbach Ferreira, desenvolvedora Full Stack em formação e estudante de Ciência da Computação na Atitus Educação.',
      'Tenho experiência com React, React Native, Python, HTML, CSS, JavaScript, Java e SQL, participando do desenvolvimento de sites, interfaces e aplicações Full Stack. Estou sempre em busca de novos conhecimentos e desafios que me permitam evoluir profissionalmente e entregar soluções cada vez melhores.',
      'Atualmente, estou disponível para projetos freelancer e parcerias, ajudando empresas, empreendedores e clientes a transformar ideias em soluções digitais modernas, funcionais e de qualidade.',
    ],
    en: [
      "Hello! I'm Jamile Rockenbach Ferreira, a Full Stack developer in training and a Computer Science student at Atitus Educação.",
      "I have experience with React, React Native, Python, HTML, CSS, JavaScript, Java and SQL, participating in the development of websites, interfaces and Full Stack applications. I'm always seeking new knowledge and challenges that allow me to grow professionally and deliver better solutions.",
      "Currently, I'm available for freelance projects and partnerships, helping companies, entrepreneurs and clients turn ideas into modern, functional and high-quality digital solutions.",    ],
  },
  quote: {
    pt: 'A tecnologia não é apenas sobre códigos, mas sobre transformar ideias em soluções que impactam vidas.',
    en: "Technology isn't just about code — it's about turning ideas into solutions that impact lives.",
  },
  cvUrl: '/assets/Curriculo-Jamile-Rockenbach.pdf',
  photo: '/assets/minha-foto.jpeg',
  stats: [
    { key: 'languages', target: 9, suffix: '+' },
    { key: 'projects', target: 15, suffix: '+' },
  ],
}

export const skills = [
  { name: 'HTML', icon: '/assets/html5.svg' },
  { name: 'CSS', icon: '/assets/css.svg' },
  { name: 'JavaScript', icon: '/assets/javascript.svg' },
  { name: 'React', icon: '/assets/react.svg' },
  { name: 'React Native', icon: '/assets/react.svg' },
  { name: 'Figma', icon: '/assets/figma.svg' },
  { name: 'Python', icon: '/assets/python.svg' },
  { name: 'Pandas', icon: '/assets/pandas.svg' },
  { name: 'C#', icon: '/assets/ccharp.svg' },
  { name: '.NET', icon: '/assets/dotnet.svg' },
  { name: 'Git', icon: '/assets/git.svg' },
  { name: 'GitHub', icon: '/assets/github.svg' },
  { name: 'Java', icon: '/assets/java.svg' },
  { name: 'IntelliJ', icon: '/assets/intellij.svg' },
  { name: 'Docker', icon: '/assets/docker.svg' },
  { name: 'SQL', icon: '/assets/sql.svg' },
  { name: 'PostgreSQL', icon: '/assets/postgresql.svg' },
]

const tagLabels = {
  POO: { pt: 'POO', en: 'OOP' },
  IA: { pt: 'IA', en: 'AI' },
  Python: { pt: 'Python', en: 'Python' },
  Pygame: { pt: 'Pygame', en: 'Pygame' },
  Pandas: { pt: 'Pandas', en: 'Pandas' },
  Tkinter: { pt: 'Tkinter', en: 'Tkinter' },
  Java: { pt: 'Java', en: 'Java' },
}
export const translateTag = (tag, lang) => tagLabels[tag]?.[lang] ?? tag

export const projectCategories = [
  { key: 'todos', label: { pt: 'Todos', en: 'All' } },
  { key: 'fullstack', label: { pt: 'Fullstack', en: 'Fullstack' } },
  { key: 'javascript', label: { pt: 'JavaScript', en: 'JavaScript' } },
  { key: 'python', label: { pt: 'Python', en: 'Python' } },
  { key: 'dados', label: { pt: 'Análise de Dados', en: 'Data Analysis' } },
  { key: 'ia', label: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' } },
  { key: 'java', label: { pt: 'Java', en: 'Java' } },
]

export const projects = [
  {
    slug: 'golup',
    title: { pt: 'GolUp', en: 'GolUp' },
    description: {
      pt: 'GolUp é um marketplace mobile onde usuários podem navegar por produtos esportivos, favoritar itens, realizar compras e acompanhar seus pedidos. Toda a identidade visual foi inspirada em detalhes do meio esportivo, utilizando elementos gráficos, cores e uma experiência voltada para amantes do futebol. Front-end mobile em React Native e JavaScript, API em Java, banco PostgreSQL, autenticação JWT e suporte a múltiplos idiomas.',
      en: 'GolUp is a mobile marketplace where users can browse sports products, favorite items, make purchases and track their orders. The entire visual identity was inspired by details from the sports world, using graphic elements, colors and an experience aimed at football lovers. Mobile front-end in React Native and JavaScript, API in Java, PostgreSQL database, JWT authentication and support for multiple languages.',
    },
    image: '/assets/golup.png',
    category: 'fullstack',
    tags: ['React Native', 'Java', 'PostgreSQL'],
    link: 'https://github.com/Leo981-web/projeto-e-commerce-copa',
  },
  {
    slug: 'olivrastore',
    title: { pt: 'OlivraStore', en: 'OlivraStore' },
    description: {
      pt: "Aplicativo 'Olivra Store ₊✧' de listagem e consulta de produtos consumindo a Fake Store API, desenvolvido com JavaScript e Node.js.",
      en: "'Olivra Store ₊✧' app for listing and browsing products, consuming the Fake Store API, built with JavaScript and Node.js.",
    },
    image: '/assets/olivrastore.jpeg',
    category: 'javascript',
    tags: ['JavaScript', 'Node.js'],
    link: 'https://github.com/MariaLaimer/ListagemProdutos-JavaScript',
  },
  {
    slug: 'turisme',
    title: { pt: 'Turis.me', en: 'Turis.me' },
    description: {
      pt: 'Turis.Me - Maps é uma aplicação web de fins didáticos desenvolvida com React que permite visualizar e cadastrar pontos geográficos em um mapa interativo. Usuários autenticados podem adicionar ou atualizar pontos clicando no mapa, que são salvos em um backend e exibidos para todos.',
      en: 'Turis.Me - Maps is an educational web application built with React that lets users view and register geographic points on an interactive map. Authenticated users can add or update points by clicking on the map, which are saved to a backend and shown to everyone.',
    },
    image: '/assets/turisme.jpeg',
    category: ['javascript', 'fullstack'],
    tags: ['React', 'JavaScript'],
    link: 'https://github.com/MariaLaimer/App-Maps-TurisMe',
    siteUrl: null,
  },
  {
    slug: 'jogo-da-memoria',
    title: { pt: 'Jogo da Memória', en: 'Memory Game' },
    description: {
      pt: 'Jogo da memória multiplayer desenvolvido com Node.js, WebSockets e JavaScript puro, com temática de linguagens de programação. Dois jogadores entram na mesma sala e disputam quem encontra mais pares.',
      en: 'Multiplayer memory game built with Node.js, WebSockets and vanilla JavaScript, themed around programming languages. Two players join the same room and compete to find the most matching pairs.',
    },
    image: '/assets/jogodamemoria.jpeg',
    category: 'javascript',
    tags: ['JavaScript', 'Node.js'],
    link: 'https://github.com/Leo981-web/jogo-memoriaG2',
  },
  {
    slug: 'prompt-manager',
    title: { pt: 'Prompt Manager', en: 'Prompt Manager' },
    description: {
      pt: 'Desenvolvimento de um projeto web completo do zero utilizando HTML, CSS, JavaScript e Inteligência Artificial na prática como copiloto para aumentar a produtividade e acelerar o aprendizado. Criação do Prompt Manager: uma plataforma web prática e intuitiva para organizar e gerenciar prompts de IA em um só lugar.',
      en: 'A complete web project built from scratch using HTML, CSS, JavaScript and AI as a hands-on copilot to boost productivity and speed up learning. Creation of Prompt Manager: a practical and intuitive web platform to organize and manage AI prompts in one place.',
    },
    image: '/assets/promptmanager.jpeg',
    category: 'ia',
    tags: ['JavaScript', 'IA'],
    link: 'https://github.com/JamileRockenbach/NLW-Prompts',
  },
  {
    slug: 'plpgsql',
    title: {
      pt: 'Manipulação Dinâmica e Consistência de Dados com PL/pgSQL',
      en: 'Dynamic Data Manipulation and Consistency with PL/pgSQL',
    },
    description: {
      pt: 'Projeto acadêmico que aplica recursos avançados da linguagem procedural PL/pgSQL (PostgreSQL 17) para automação de regras de negócio, manipulação de dados complexos e garantia da integridade referencial e transacional de um ecossistema de banco de dados voltado a e-commerce/vendas. O escopo abrange o desenvolvimento, teste e documentação de functions, procedures, triggers e controle transacional com RAISE EXCEPTION e RAISE WARNING.',
      en: 'Academic project applying advanced features of the PL/pgSQL procedural language (PostgreSQL 17) to automate business rules, handle complex data manipulation and ensure referential and transactional integrity for an e-commerce/sales database ecosystem. The scope covers developing, testing and documenting functions, procedures, triggers and transactional control with RAISE EXCEPTION and RAISE WARNING.',
    },
    image: '/assets/plpgsql.jpeg',
    category: 'dados',
    tags: ['PostgreSQL', 'SQL'],
    link: 'https://github.com/bymariia/projeto-pratico-PL-pgSQL',
  },
  {
    slug: 'dashboard-salarios',
    title: {
      pt: 'Dashboard de Análise de Salários na Área de Dados',
      en: 'Data Field Salary Analysis Dashboard',
    },
    description: {
      pt: 'Dashboard interativo desenvolvido durante a Imersão de Dados da Alura em Python, com foco na análise de salários na área de dados, permitindo explorar informações de diferentes anos, cargos, senioridades, tipos de contrato e tamanho das empresas. Construído com Streamlit e Plotly, oferecendo uma experiência visual clara, dinâmica e intuitiva.',
      en: "Interactive dashboard built during Alura's Data Immersion in Python, focused on analyzing salaries in the data field, allowing exploration of information across different years, job roles, seniority levels, contract types and company sizes. Built with Streamlit and Plotly, offering a clear, dynamic and intuitive visual experience.",
    },
    image: '/assets/dashboard-salarios.jpeg',
    category: 'dados',
    tags: ['Python', 'Streamlit', 'Plotly'],
    link: 'https://github.com/JamileRockenbach/Dashboard_dados',
  },
  {
    slug: 'clinica-medica',
    title: { pt: 'Banco de Dados de Clínica Médica', en: 'Medical Clinic Database' },
    description: {
      pt: 'Projeto completo de banco de dados aplicando modelagem conceitual, lógica e física, além da implementação e manipulação de dados com SQL no PostgreSQL. Cenário: desenvolvimento do sistema de informação de uma clínica médica, gerenciando pacientes, médicos, consultas, especialidades médicas e prontuários.',
      en: 'A complete database project applying conceptual, logical and physical modeling, along with data implementation and manipulation using SQL in PostgreSQL. Scenario: building the information system for a medical clinic, managing patients, doctors, appointments, medical specialties and health records.',
    },
    image: '/assets/clinica-medica.jpeg',
    category: 'dados',
    tags: ['SQL', 'PostgreSQL'],
    link: '/assets/banco-dados-clinica.pdf',
    linkLabel: { pt: 'Ver documento (PDF)', en: 'View document (PDF)' },
  },
  {
    slug: 'jornada-de-luz',
    title: { pt: 'Game a Jornada de Luz', en: 'A Journey of Light (Game)' },
    description: {
      pt: 'Jogo 2D desenvolvido em Python no Pygame que une arte e emoção para guiar o jogador por uma experiência simbólica de superação.',
      en: 'A 2D game built in Python with Pygame that blends art and emotion to guide the player through a symbolic journey of overcoming adversity.',
    },
    image: '/assets/jornada.jpeg',
    category: 'python',
    tags: ['Python', 'Pygame'],
    link: 'https://github.com/JamileRockenbach/Jornada_de_Luz',
  },
  {
    slug: 'mini-dashboard-dados',
    title: { pt: 'Mini Dashboard de Dados', en: 'Mini Data Dashboard' },
    description: {
      pt: 'Aplicação para visualizar e analisar dados de arquivos .csv de forma interativa, usando Python, tkinter, pandas e matplotlib.',
      en: 'An application to interactively visualize and analyze data from .csv files, built with Python, tkinter, pandas and matplotlib.',
    },
    image: '/assets/dashboard.jpeg',
    category: 'dados',
    tags: ['Python', 'Pandas', 'Tkinter'],
    link: 'https://github.com/JamileRockenbach/dashboard_python',
  },
  {
    slug: 'botytalk',
    title: { pt: 'BotyTalk', en: 'BotyTalk' },
    description: {
      pt: 'Chatbot desenvolvido em Python e inteligência artificial para ajudar nos estudos, criado durante o curso da Assimov Academy.',
      en: 'A chatbot built with Python and AI to help with studying, created during the Assimov Academy course.',
    },
    image: '/assets/botytalkimg.jpeg',
    category: 'ia',
    tags: ['Python', 'IA'],
    link: 'https://github.com/JamileRockenbach/BotyTalk',
  },
  {
    slug: 'estoque-poo',
    title: { pt: 'Sistema de Estoque com POO', en: 'Inventory System with OOP' },
    description: {
      pt: 'Mini sistema de estoque e vendas em Programação Orientada a Objetos, utilizando estruturas de dados Lista, Pilha e Fila.',
      en: 'A small inventory and sales system built with Object-Oriented Programming, using List, Stack and Queue data structures.',
    },
    image: '/assets/POO.jpeg',
    category: 'python',
    tags: ['Python', 'POO'],
    link: 'https://github.com/bymariia/PROJETO-SISTEMA-ESTOQUE-',
  },
  {
    slug: 'api-java',
    title: { pt: 'API Java com Microserviços', en: 'Java API with Microservices' },
    description: {
      pt: 'O projeto é dividido em múltiplos serviços independentes, que se comunicam entre si através de um API Gateway e um serviço de descoberta (Service Discovery).',
      en: 'The project is divided into multiple independent services that communicate with each other through an API Gateway and a Service Discovery service.',
    },
    image: '/assets/api-java.jpeg',
    category: 'java',
    tags: ['Java', 'Microservices', 'Docker'],
    link: 'https://github.com/MariaLaimer/Microsservices-Copa-Java',
  },
  {
    slug: 'biblioteca',
    title: { pt: 'Sistema de Biblioteca', en: 'Library Management System' },
    description: {
      pt: 'Sistema de gerenciamento de biblioteca em Java, aplicando herança, polimorfismo, encapsulamento e abstração em um projeto funcional.',
      en: 'A library management system in Java, applying inheritance, polymorphism, encapsulation and abstraction in a working project.',
    },
    image: '/assets/ExBiblioteca.jpeg',
    category: 'java',
    tags: ['Java', 'POO'],
    link: 'https://github.com/JamileRockenbach/sistema-biblioteca.git',
  },
  {
    slug: 'previsao-tempo',
    title: { pt: 'Previsão do Tempo com Python + Tkinter', en: 'Weather Forecast with Python + Tkinter' },
    description: {
      pt: 'Mini projeto de previsão do tempo desenvolvido em Python com interface gráfica em Tkinter. O usuário digita a cidade e o estado (ex: Campinas, SP) e o app exibe temperatura atual, umidade relativa do ar e condição climática, consumindo a API Open-Meteo com requisições HTTP via requests.',
      en: 'A small weather forecast project built in Python with a Tkinter graphical interface. The user types in a city and state (e.g. Campinas, SP) and the app shows the current temperature, relative humidity and weather condition, consuming the Open-Meteo API through HTTP requests with the requests library.',
    },
    image: '/assets/previsao-tempo.jpeg',
    category: 'python',
    tags: ['Python', 'Tkinter'],
    link: 'https://github.com/JamileRockenbach/previsao_tempo_python',
  },
]

export const certificates = [
  {
    title: {
      pt: 'Qualificação em Desenvolvimento de Aplicação Júnior',
      en: 'Junior Application Development Qualification',
    },
    issuer: 'Atitus Educação',
    id: null,
    year: '2025.1',
    link: 'assets/Desenvolvimento-Aplicações-Júnior.pdf',
  },
  {
    title: {
      pt: 'Qualificação em Desenvolvimento de Solução Full Stack',
      en: 'Full Stack Solution Development Qualification',
    },
    issuer: 'Atitus Educação',
    id: null,
    year: '2025.2',
    link: 'assets/Qualificação-FullStack.pdf',
  },
  {
    title: { pt: 'Fullstack Developer', en: 'Fullstack Developer' },
    issuer: 'DIO',
    id: null,
    year: '07 de Novembro de 2025',
    link: 'assets/fullstack.pdf',
  },
  {
    title: { pt: 'Lógica de Programação', en: 'Programming Logic' },
    issuer: 'DIO',
    id: null,
    year: '15 de Fevereiro de 2026',
    link: 'assets/logica.pdf',
  },
  {
    title: { pt: 'Imersão de Dados com Python', en: 'Python Data Immersion' },
    issuer: 'Alura',
    id: null,
    year: '09 de fevereiro de 2026',
    link: 'assets/imersao-dados.pdf',
  },
  {
    title: {
      pt: 'Introdução ao .NET e Controle de Versão com Git',
      en: 'Introduction to .NET and Version Control with Git',
    },
    issuer: 'DIO',
    id: null,
    year: '07 de setembro de 2025',
    link: 'https://www.dio.me/certificate/AB1CLBRX/share',
  },
  {
    title: {
      pt: 'Python para IA: do zero ao primeiro chatbot',
      en: 'Python for AI: from Zero to Your First Chatbot',
    },
    issuer: 'Assimov Academy',
    id: null,
    year: '01 de julho de 2025',
    link: 'https://hub.asimov.academy/validar-certificado/a4ebd041-9c3c-46e3-a21f-f72c8ea1759a',
  },
  {
    title: { pt: 'NLW Agents - Iniciante', en: 'NLW Agents - Beginner' },
    issuer: 'Rocketseat',
    id: null,
    year: '11 de julho de 2025',
    link: 'https://app.rocketseat.com.br/certificates/e62ba556-f08f-4cbd-92fe-0c079716d7f9',
  },
  {
    title: { pt: 'Introdução ao React', en: 'Introduction to React' },
    issuer: 'DIO',
    id: null,
    year: '25 de agosto de 2025',
    link: 'https://www.dio.me/certificate/BLCXHOSV/share',
  },
  {
    title: { pt: 'Imersão Dev Agentes de IA Google', en: 'Google AI Agents Dev Immersion' },
    issuer: 'Alura',
    id: null,
    year: '22 de setembro de 2025',
    link: 'assets/dev-agentes.pdf',
  },
  {
    title: { pt: 'Introdução à Ciência de Dados', en: 'Introduction to Data Science' },
    issuer: 'Santander Open Academy',
    id: null,
    year: '04 de junho de 2025',
    link: 'assets/ciencia-dados.pdf',
  },
  {
    title: { pt: 'Introdução à programação com Python', en: 'Introduction to Programming with Python' },
    issuer: 'Santander Open Academy',
    id: null,
    year: '11 de maio de 2025',
    link: 'assets/python.pdf',
  },
]

export const linkedinUrl = 'https://www.linkedin.com/in/jamile-rockenbach-ferreira'

export const experiences = [
  {
    role: { pt: 'Estágio de TI – Suporte', en: 'IT Internship – Support' },
    company: 'Prefeitura Municipal de Passo Fundo',
    period: { pt: 'fev. 2026 – Atual', en: 'Feb 2026 – Present' },
    current: true,
    description: {
      pt: 'Atuação no suporte técnico de TI para escolas municipais, garantindo a disponibilidade dos sistemas, atendimento ao usuário, resolução de problemas e suporte a ferramentas de gestão escolar. Criação, gestão e tratamento de dados utilizando Microsoft Excel, e elaboração de relatórios técnicos para acompanhamento da performance da infraestrutura de TI e suporte à tomada de decisão.',
      en: 'Providing IT technical support for municipal schools, ensuring system availability, user support, troubleshooting and support for school management tools. Creating, managing and processing data using Microsoft Excel, and producing technical reports to track IT infrastructure performance and support decision-making.',
    },
  },
]

export const contact = {
  email: 'jamilerockenbach.tech@gmail.com',
  instagram: 'https://www.instagram.com/jami_r.f?igsh=azc4YjhxdjN3bGVn',
  linkedin: 'https://www.linkedin.com/in/jamile-rockenbach-ferreira',
  github: 'https://github.com/JamileRockenbach',
  subtitle: {
    pt: 'Estou disponível para feedbacks, novos projetos, freelas e oportunidades. Vamos criar algo incrível juntos?',
    en: "I'm open to feedback, new projects, freelance work and opportunities. Let's create something amazing together?",
  },
}

export const navItems = [
  { key: 'sobre', href: '#sobre' },
  { key: 'skills', href: '#skills' },
  { key: 'projetos', href: '#projetos' },
  { key: 'certificados', href: '#certificados' },
  { key: 'experiencia', href: '#experiencia' },
  { key: 'contato', href: '#contato' },
]