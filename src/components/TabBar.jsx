// src/components/TabBar.jsx

const TABS = [
  { key: 'list',    label: 'Posts',   icon: '📰' },
  { key: 'profile', label: 'Profile', icon: '👤' },
]

export default function TabBar({ active, onChange }) {
  return (
    <div className="tab-bar">
      {TABS.map(tab => (
        <button
          key={tab.key}
          className={`tab-item ${active === tab.key ? 'active' : ''}`}
          onClick={() => onChange(tab.key)}
        >
          <div className="tab-icon-wrap">
            <span className="tab-icon">{tab.icon}</span>
            {active === tab.key && <div className="tab-active-dot" />}
          </div>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
