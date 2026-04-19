// src/App.jsx
import { useState } from 'react'
import StatusBarUI   from './components/StatusBarUI'
import TabBar        from './components/TabBar'
import ListPage      from './pages/ListPage'
import DetailPage    from './pages/DetailPage'
import ProfilePage   from './pages/ProfilePage'

// Navigation states: 'list' | 'detail' | 'profile'
export default function App() {
  const [tab, setTab]           = useState('list')  // active bottom tab
  const [screen, setScreen]     = useState('list')  // current visible screen
  const [selectedPost, setPost] = useState(null)    // { id, title }

  const handleSelectPost = (id, title) => {
    setPost({ id, title })
    setScreen('detail')
  }

  const handleBack = () => {
    setScreen('list')
  }

  const handleTabChange = (newTab) => {
    setTab(newTab)
    setScreen(newTab)
  }

  return (
    <div className="phone-shell">
      <StatusBarUI />

      {/* Header */}
      {screen === 'list' && (
        <div className="screen-header">
          <div className="header-row">
            <div>
              <h1 className="header-title">Posts</h1>
              <p className="header-subtitle">JSONPlaceholder API</p>
            </div>
            <button className="header-icon-btn" aria-label="Posts">
              <span style={{ fontSize: 20 }}>📰</span>
            </button>
          </div>
        </div>
      )}

      {screen === 'detail' && (
        <div className="back-header">
          <button className="back-btn" onClick={handleBack} aria-label="Go back">‹</button>
          <span className="back-header-title">Post Detail</span>
          <div className="back-header-spacer" />
        </div>
      )}

      {screen === 'profile' && (
        <div className="screen-header">
          <div className="header-row">
            <div>
              <h1 className="header-title">Profile</h1>
            </div>
            <button className="header-icon-btn" aria-label="Profile">
              <span style={{ fontSize: 20 }}>👤</span>
            </button>
          </div>
        </div>
      )}

      {/* Screens */}
      <div className="screen">
        {screen === 'list'    && <ListPage onSelectPost={handleSelectPost} />}
        {screen === 'detail'  && <DetailPage postId={selectedPost?.id} onBack={handleBack} />}
        {screen === 'profile' && <ProfilePage />}
      </div>

      {/* Tab Bar — hide on detail screen */}
      {screen !== 'detail' && (
        <TabBar active={tab} onChange={handleTabChange} />
      )}
    </div>
  )
}
