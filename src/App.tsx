import './App.css'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const sectionTransition = {
  duration: 0.6,
  ease: 'easeOut' as const,
}

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <nav className="navbar-inner">
          <div className="logo-mark">
            <div className="logo-circle" />
            <div className="logo-text">
              <span>Andrey Barboza</span>
              <span>Frontend • SENAI</span>
            </div>
          </div>

          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollToId('inicio')}>
              Início
            </button>
            <button className="nav-link" onClick={() => scrollToId('sobre')}>
              Sobre
            </button>
            <button className="nav-link" onClick={() => scrollToId('senai')}>
              SENAI
            </button>
            <button className="nav-link" onClick={() => scrollToId('projetos')}>
              Projetos
            </button>
            <button className="nav-link" onClick={() => scrollToId('contato')}>
              Contato
            </button>
          </div>
        </nav>
      </header>

      <main className="app-inner">
        {/* HERO */}
        <section id="inicio" className="hero">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={sectionTransition}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Aberto para oportunidades
            </div>

            <h1 className="hero-title">
              Olá, eu sou <span className="hero-highlight">Andrey Luis Barboza</span>
            </h1>

            <p className="hero-subtitle">
              Desenvolvedor Frontend &amp; Estudante de Desenvolvimento de Sistemas no SENAI.
            </p>

            <p className="hero-description">
              Apaixonado por tecnologia, interfaces bonitas e experiências cheias de animações.
              Estou construindo projetos modernos para evoluir como desenvolvedor e deixar minha
              marca no mundo digital.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToId('projetos')}>
                Ver meus projetos
              </button>
              <button className="btn-secondary" onClick={() => scrollToId('contato')}>
                Falar comigo
              </button>
            </div>

            <div className="hero-meta">
              <div>
                <strong>Nascido em 25/11/2006</strong>
                Brasil • Futuro dev de alto nível
              </div>
              <div>
                <strong>+4 anos de SENAI</strong>
                Formação técnica sólida
              </div>
              <div>
                <strong>Frontend em evolução</strong>
                React • TypeScript • UI moderna
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="hero-orbital" />
            <div className="hero-circle">
              <span className="hero-initials">ALB</span>
            </div>
            <div className="hero-tag">Portfólio 2025</div>
          </motion.div>
        </section>

        {/* SOBRE */}
        <motion.section
          id="sobre"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          transition={{ ...sectionTransition, delay: 0.05 }}
        >
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Sobre mim</div>
              <h2 className="section-title">Minha história com tecnologia</h2>
              <p className="section-description">
                Um pouco de quem eu sou, de onde venho e para onde quero ir como desenvolvedor.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Meu nome é Andrey Luis Barboza, nasci em 25/11/2006 e há anos estou mergulhado no
                mundo da tecnologia. Gosto de criar interfaces bonitas, modernas e cheias de
                movimento, que passem uma sensação profissional e ao mesmo tempo criativa.
              </p>
              <p>
                Estou sempre estudando novas ferramentas, frameworks e boas práticas para escrever
                códigos limpos, organizados e fáceis de manter. Hoje estou no segundo ano de Data
                Science no SENAI, ao mesmo tempo em que aprofundo meu foco em desenvolvimento
                frontend com React e TypeScript.
              </p>
              <p>
                Além da parte técnica, valorizo trabalho em equipe, comunicação clara e a vontade de
                aprender todos os dias. Cada projeto que construo é um passo a mais na direção da
                carreira que sonho para o futuro.
              </p>

              <div className="chips" style={{ marginTop: '0.8rem' }}>
                <span className="chip">React &amp; TypeScript</span>
                <span className="chip">Interfaces modernas</span>
                <span className="chip">Animações e UX</span>
                <span className="chip">Estudante SENAI</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-meta">Resumo rápido</div>
              <div className="info-card-title">Quem é o Andrey hoje?</div>
              <ul className="info-card-list">
                <li>18 anos, brasileiro, focado em desenvolvimento web.</li>
                <li>Segundo ano de Data Science no SENAI.</li>
                <li>Estudante dedicado, sempre buscando aprender coisas novas.</li>
                <li>Objetivo de trabalhar com tecnologia e crescer na área de software.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* SENAI */}
        <motion.section
          id="senai"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          transition={{ ...sectionTransition, delay: 0.05 }}
        >
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Formação</div>
              <h2 className="section-title">Minha jornada no SENAI</h2>
              <p className="section-description">
                Já são cerca de 4 anos de estudos no SENAI, construindo uma base sólida em
                tecnologia e desenvolvimento de sistemas.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                O SENAI é uma parte muito importante da minha formação. Ali eu tive contato com
                lógica de programação, desenvolvimento web, boas práticas e projetos que simulam o
                dia a dia do mercado de trabalho.
              </p>
              <p>
                Durante esses anos, aprendi a trabalhar com foco, disciplina e responsabilidade, ao
                mesmo tempo em que desenvolvi habilidades técnicas e comportamentais que levo para
                todos os meus projetos.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card-meta">Destaques</div>
              <div className="info-card-title">O que o SENAI me proporcionou</div>
              <ul className="info-card-list">
                <li>Base forte em desenvolvimento de sistemas.</li>
                <li>Experiências com projetos em grupo e prazos reais.</li>
                <li>Contato direto com boas práticas do mercado.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* PROJETOS */}
        <motion.section
          id="projetos"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          transition={{ ...sectionTransition, delay: 0.05 }}
        >
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Portfólio</div>
              <h2 className="section-title">Projetos em destaque</h2>
              <p className="section-description">
                Alguns projetos que mostram um pouco do que eu já desenvolvi. Depois você pode
                editar os nomes, descrições e links com os seus projetos reais.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-title-row">
                <h3 className="project-title">Dashboard de Finanças Pessoais</h3>
                <span className="project-tag">Frontend</span>
              </div>
              <p className="project-description">
                Aplicação web para acompanhar gastos mensais, metas e gráficos de evolução, com
                foco em visual limpo e responsivo.
              </p>
              <p className="project-tech">React • TypeScript • Styled UI</p>
              <div className="project-links">
                <a
                  className="project-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Ver repositório</span>
                </a>
                <a
                  className="project-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Ver online</span>
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-title-row">
                <h3 className="project-title">Landing Page Animada</h3>
                <span className="project-tag">UI • Animações</span>
              </div>
              <p className="project-description">
                Página moderna com seções bem definidas, scroll suave e animações sutis, criada
                para treinar experiência do usuário.
              </p>
              <p className="project-tech">React • Framer Motion</p>
              <div className="project-links">
                <a
                  className="project-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Ver repositório</span>
                </a>
                <a
                  className="project-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Ver online</span>
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-title-row">
                <h3 className="project-title">Sistema de Tarefas</h3>
                <span className="project-tag">Fullstack simples</span>
              </div>
              <p className="project-description">
                To-do list com autenticação simples, filtros e organização por categorias, focada
                em produtividade e usabilidade.
              </p>
              <p className="project-tech">React • API (Node / Express)</p>
              <div className="project-links">
                <a
                  className="project-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Ver repositório</span>
                </a>
                <a
                  className="project-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>Ver online</span>
                </a>
              </div>
            </article>
          </div>
        </motion.section>

        {/* CONTATO */}
        <motion.section
          id="contato"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          transition={{ ...sectionTransition, delay: 0.05 }}
        >
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Contato</div>
              <h2 className="section-title">Vamos conversar?</h2>
              <p className="section-description">
                Se você quiser trocar uma ideia, falar sobre oportunidades ou apenas dar um
                feedback sobre meus projetos, aqui estão alguns jeitos de me encontrar.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-text">
              <p>
                Este portfólio é o começo da minha presença profissional na internet. Em breve,
                pretendo adicionar mais projetos, detalhes técnicos e talvez até um blog com o que
                estou aprendendo.
              </p>
              <p>
                Enquanto isso, você pode usar os links ao lado para falar comigo, ver meu código ou
                acompanhar minha evolução como desenvolvedor.
              </p>
            </div>

            <div>
              <div className="contact-pill">Links principais</div>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-item-label">E-mail</span>
                  <span className="contact-item-value">
                    andreyluis15@outlook.com
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">
                    github.com/BARBOZAAAA
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">
                    www.linkedin.com/in/andrey-luis-barboza
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} • Andrey Luis Barboza</span>
          <span>Construído com React, TypeScript e animações com Framer Motion.</span>
        </footer>
      </main>
    </div>
  )
}

export default App
