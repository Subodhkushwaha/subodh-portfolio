import { Fragment } from 'react'
import ParticleBackground from './components/ParticleBackground.jsx'
import {
  profile, navLinks, stats, about, skillGroups,
  projects, education, achievements,
} from './data.js'

// Turns "text with **bold** words" into JSX.
function Rich({ text }) {
  return text.split('**').map((part, i) =>
    i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
  )
}

function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">{profile.shortName}</a>
          <ul>
            {navLinks.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

// One line of the animated JSON panel.
function Ln({ delay, children }) {
  return (
    <>
      <span className="ln" style={{ animationDelay: `${delay}s` }}>{children}</span>
      {'\n'}
    </>
  )
}

function Hero() {
  const k = (t) => <span className="k">{t}</span>
  const s = (t) => <span className="s">{t}</span>
  const n = (t) => <span className="n">{t}</span>
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="status"><span className="dot" />Open to internships and entry-level roles</span>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.intro}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">See my projects</a>
            <a className="btn" href={profile.liveErp} target="_blank" rel="noopener noreferrer">Live ERP demo</a>
            <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          </div>
        </div>

        <div className="code" aria-label="Sample API response describing Subodh">
          <div className="code-bar">
            <b>GET</b> /api/developers/subodh <span style={{ marginLeft: 'auto' }}>200 OK</span>
          </div>
          <pre>
            <Ln delay={0.2}>{'{'}</Ln>
            <Ln delay={0.5}>{'  '}{k('"name"')}: {s('"Subodh Kushwaha"')},</Ln>
            <Ln delay={0.8}>{'  '}{k('"role"')}: {s('"Java Backend Developer"')},</Ln>
            <Ln delay={1.1}>{'  '}{k('"stack"')}: [{s('"Spring Boot"')}, {s('"Hibernate"')}, {s('"MySQL"')}],</Ln>
            <Ln delay={1.4}>{'  '}{k('"security"')}: [{s('"JWT"')}, {s('"RBAC"')}],</Ln>
            <Ln delay={1.7}>{'  '}{k('"deployed"')}: [{s('"Vercel"')}, {s('"Docker"')}],</Ln>
            <Ln delay={2.0}>{'  '}{k('"dsaProblemsSolved"')}: {n('400')},</Ln>
            <Ln delay={2.3}>{'  '}{k('"location"')}: {s('"Ghaziabad, India"')},</Ln>
            <Ln delay={2.6}>{'  '}{k('"available"')}: {n('true')}</Ln>
            <Ln delay={2.9}>{'}'}</Ln>
          </pre>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <div className="wrap">
      <div className="stats">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <h2>Backend-first, with the full picture in view</h2>
        <div>{about.map((p, i) => <p key={i}><Rich text={p} /></p>)}</div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div className={`skill${g.wide ? ' main' : ''}`} key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectSide({ side }) {
  return (
    <div className="proj-side" aria-hidden="true">
      {side.kind === 'roles'
        ? side.rows.map((role) => (
            <div key={role}><span className="m put">ROLE</span>{role}</div>
          ))
        : side.rows.map(([cls, method, path]) => (
            <div key={method + path}><span className={`m ${cls}`}>{method}</span>{path}</div>
          ))}
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        {projects.map((p) => (
          <article className="proj" key={p.title}>
            <ProjectSide side={p.side} />
            <div className="proj-main">
              <h3>{p.title}</h3>
              <p className="sub">{p.sub}</p>
              <ul>{p.bullets.map((b, i) => <li key={i}><Rich text={b} /></li>)}</ul>
              {p.links.length > 0 && (
                <div className="proj-links">
                  {p.links.map(([label, key]) => (
                    <a className="link" key={key} href={profile[key]} target="_blank" rel="noopener noreferrer">{label}</a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey">
      <div className="wrap two">
        <div>
          <h2>Education and training</h2>
          <div className="tl">
            {education.map((e) => (
              <div className="tl-item" key={e.title}>
                <time>{e.time}</time><h3>{e.title}</h3><p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Achievements</h2>
          <div className="certs">
            {achievements.map((a) => (
              <div className="cert" key={a.title}><h3>{a.title}</h3><p>{a.text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const socials = [['GitHub', profile.github], ['LinkedIn', profile.linkedin], ['LeetCode', profile.leetcode], ['GeeksforGeeks', profile.gfg]]
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <h2>Let's build something solid</h2>
          <p>I'm looking for a Software Engineering internship or entry-level role. Send me a message and I'll reply quickly.</p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.phoneHref}>{profile.phone}</a>
          </div>
          <div className="cta" style={{ marginTop: 14 }}>
            {socials.map(([label, href]) => (
              <a className="btn" key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <footer><div className="wrap">{profile.name} · {profile.location}</div></footer>
    </>
  )
}
