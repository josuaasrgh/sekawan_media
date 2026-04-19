// src/pages/DetailPage.jsx
import { useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorView from '../components/ErrorView'
import { fetchPostById, fetchCommentsByPost, fetchUserById } from '../services/api'

export default function DetailPage({ postId, onBack }) {
  const [post, setPost]         = useState(null)
  const [comments, setComments] = useState([])
  const [author, setAuthor]     = useState(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  const load = async () => {
    try {
      setLoading(true)
      setError(null)
      const [postData, commentData] = await Promise.all([
        fetchPostById(postId),
        fetchCommentsByPost(postId),
      ])
      setPost(postData)
      setComments(commentData)
      const userData = await fetchUserById(postData.userId)
      setAuthor(userData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [postId])

  if (loading) return <LoadingSpinner message="Loading post..." />
  if (error)   return <ErrorView message={error} onRetry={load} />

  return (
    <div className="scroll-area">
      <div className="detail-content fade-in">

        <span className="detail-id">POST #{post.id}</span>

        <h1 className="detail-title">{post.title}</h1>

        {/* Author */}
        {author && (
          <div className="author-card">
            <div className="author-avatar">{author.name.charAt(0)}</div>
            <div>
              <p className="author-name">{author.name}</p>
              <p className="author-email">{author.email}</p>
            </div>
          </div>
        )}

        <div className="divider" />

        {/* Body */}
        <p className="section-label">Content</p>
        <p className="detail-body">{post.body}</p>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-col">
            <span style={{ fontSize: 18 }}>💬</span>
            <span className="stat-val">{comments.length}</span>
            <span className="stat-lbl">Comments</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <span style={{ fontSize: 18 }}>📌</span>
            <span className="stat-val" style={{ color: 'var(--accent)' }}>Post</span>
            <span className="stat-lbl">Type</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <span style={{ fontSize: 18 }}>👤</span>
            <span className="stat-val" style={{ color: 'var(--warning)' }}>User {post.userId}</span>
            <span className="stat-lbl">Author</span>
          </div>
        </div>

        {/* Comments */}
        <p className="section-label">Comments</p>
        {comments.map(c => (
          <div key={c.id} className="comment-card">
            <div className="comment-header">
              <div className="comment-avatar">{c.name.charAt(0).toUpperCase()}</div>
              <div>
                <p className="comment-name">{c.name}</p>
                <p className="comment-email">{c.email}</p>
              </div>
            </div>
            <p className="comment-body">{c.body}</p>
          </div>
        ))}

        <div style={{ height: 16 }} />
      </div>
    </div>
  )
}
