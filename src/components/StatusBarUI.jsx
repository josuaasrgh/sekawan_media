// src/components/StatusBarUI.jsx
export default function StatusBarUI() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  return (
    <div className="status-bar">
      <span>{time}</span>
      <div className="status-icons">
        <span>●●●</span>
        <span>WiFi</span>
        <span>🔋 100%</span>
      </div>
    </div>
  )
}
