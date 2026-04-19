// src/components/PostCard.jsx

const CATS    = ['Tech','Science','Design','Business','Health','Education']
const COLORS  = ['#0A84FF','#34C759','#FF9500','#AF52DE','#FF3B30','#00C7BE']

export default function PostCard({ post, onClick }) {
  const ci    = post.id % CATS.length
  const color = COLORS[ci]

  return (
    <div className="post-card fade-in" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}>
      <div>
        <span className="post-id-badge">#{post.id}</span>
        <span
          className="cat-tag"
          style={{ background: color + '18', color, border: `1px solid ${color}35` }}
        >
          <span className="cat-dot" style={{ background: color }} />
          {CATS[ci]}
        </span>
      </div>

      <p className="post-title-text">
        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </p>
      <p className="post-body-preview">{post.body}</p>

      <div className="card-footer">
        <div className="user-row">
          <div className="user-avatar">U{post.userId}</div>
          <span className="user-label">User {post.userId}</span>
        </div>
        <span className="read-more">Read →</span>
      </div>
    </div>
  )
}
