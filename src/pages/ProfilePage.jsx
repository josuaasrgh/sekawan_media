// src/pages/ProfilePage.jsx

const PROFILE = {
  name: 'Josua Lens Franklin Saragih',
  initials: 'JS',
  profileImage: '/profile.jpeg', // Gambar profil lokal (folder public/)
  role: 'Mobile & Full-Stack Developer',
  bio: "I'm an informatics student at IT DEL passionate about UI/UX design and full-stack development. I love crafting clean, intuitive digital experiences.",
  location: 'Laguboti, North Sumatra, Indonesia',
  university: 'Institut Teknologi Del',
  github: 'https://github.com/josuaasrgh',
  linkedin: 'https://www.linkedin.com/in/j0suaasrgh/',
}

const SKILLS = [
  {
    cat: 'Soft Skills', icon: '🤝', color: '#0A84FF',
    items: ['Leadership','Public Speaking','Adaptability','Communication','Problem Solving','Creative Thinking'],
  },
  {
    cat: 'Frameworks & Dev', icon: '💻', color: '#34C759',
    items: ['Laravel','React.js','NodeJS','Next.js','HTML','Tailwind','CSS','Bootstrap','JavaScript'],
  },
  {
    cat: 'Dev Tools', icon: '🔧', color: '#FF9500',
    items: ['Postman','SQLYog','Git','VS Code','Eclipse','IntelliJ IDEA','NetBeans','Android Studio','DBeaver','pgAdmin4'],
  },
  {
    cat: 'Programming Languages', icon: '📟', color: '#AF52DE',
    items: ['Haskell','C','Java','Kotlin','Python','JavaScript','PHP'],
  },
  {
    cat: 'Designing', icon: '🎨', color: '#FF3B30',
    items: ['Figma','Balsamiq'],
  },
  {
    cat: 'Interests', icon: '⭐', color: '#00C7BE',
    items: ['UI/UX Design','Frontend Development','Full-Stack Web Development'],
  },
]

function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <div className="skill-group-header">
        <div className="skill-icon-box" style={{ background: group.color + '18' }}>
          <span style={{ fontSize: 15 }}>{group.icon}</span>
        </div>
        <span className="skill-group-title">{group.cat}</span>
      </div>
      <div className="chips-wrap">
        {group.items.map(item => (
          <span
            key={item}
            className="chip"
            style={{ color: group.color, background: group.color + '12', borderColor: group.color + '35' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <div className="profile-scroll">
      {/* Hero */}
      <div className="profile-hero fade-in">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar-ring">
            <img 
              src={PROFILE.profileImage} 
              alt={PROFILE.name}
              className="profile-avatar"
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <div className="online-dot" />
        </div>

        <p className="profile-name">{PROFILE.name}</p>
        <div className="profile-role">{PROFILE.role}</div>

        <p className="profile-meta">📍 {PROFILE.location}</p>
        <p className="profile-meta">🎓 {PROFILE.university}</p>

        <p className="profile-bio">{PROFILE.bio}</p>

        <div className="social-row">
          <a className="social-btn" href={PROFILE.github} target="_blank" rel="noreferrer">
            <div className="social-icon-circle" style={{ background: '#1c1c1e18', color: '#1c1c1e' }}>GH</div>
            <span className="social-label">GitHub</span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 'auto' }}>↗</span>
          </a>
          <a className="social-btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <div className="social-icon-circle" style={{ background: '#0077b518', color: '#0077b5' }}>in</div>
            <span className="social-label">LinkedIn</span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 'auto' }}>↗</span>
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-strip">
        <div className="ss-col">
          <span style={{ fontSize: 18 }}>💼</span>
          <span className="ss-val" style={{ color: 'var(--primary)' }}>10+</span>
          <span className="ss-lbl">Projects</span>
        </div>
        <div className="ss-div" />
        <div className="ss-col">
          <span style={{ fontSize: 18 }}>💻</span>
          <span className="ss-val" style={{ color: 'var(--purple)' }}>7</span>
          <span className="ss-lbl">Languages</span>
        </div>
        <div className="ss-div" />
        <div className="ss-col">
          <span style={{ fontSize: 18 }}>⭐</span>
          <span className="ss-val" style={{ color: 'var(--accent)' }}>30+</span>
          <span className="ss-lbl">Skills</span>
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section">
        <h2 className="skills-title">Skills & Expertise</h2>
        {SKILLS.map(g => <SkillGroup key={g.cat} group={g} />)}
      </div>

      <div className="profile-footer">I can't wait to collaborate with you!</div>
    </div>
  )
}
