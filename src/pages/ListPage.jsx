// src/pages/ListPage.jsx
import { useState, useEffect, useCallback } from 'react'
import PostCard from '../components/PostCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorView from '../components/ErrorView'
import { fetchPosts } from '../services/api'

const LIMIT = 15

export default function ListPage({ onSelectPost }) {
  const [posts, setPosts]           = useState([])
  const [filtered, setFiltered]     = useState([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)
  const [query, setQuery]           = useState('')
  const [page, setPage]             = useState(1)
  const [hasMore, setHasMore]       = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  const load = useCallback(async (pageNum, reset = false) => {
    try {
      reset ? setLoading(true) : setLoadingMore(true)
      setError(null)
      const data = await fetchPosts(pageNum, LIMIT)
      if (data.length < LIMIT) setHasMore(false)
      setPosts(prev => reset ? data : [...prev, ...data])
      setPage(pageNum)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => { load(1, true) }, [load])

  useEffect(() => {
    const q = query.toLowerCase().trim()
    setFiltered(q ? posts.filter(p => p.title.includes(q) || p.body.includes(q)) : posts)
  }, [query, posts])

  const handleScroll = (e) => {
    const el = e.currentTarget
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80
    if (nearBottom && hasMore && !loadingMore && !loading) {
      load(page + 1)
    }
  }

  if (loading) return <LoadingSpinner message="Fetching posts..." />
  if (error && posts.length === 0) return <ErrorView message={error} onRetry={() => load(1, true)} />

  return (
    <>
      {/* Search */}
      <div className="search-wrap">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <span style={{ cursor: 'pointer', color: 'var(--text-muted)', fontSize: 15 }}
              onClick={() => setQuery('')}>✕</span>
          )}
        </div>
      </div>

      <p className="count-label">
        {filtered.length} {filtered.length === 1 ? 'post' : 'posts'} {query ? 'found' : 'loaded'}
      </p>

      {/* List */}
      <div className="scroll-area" onScroll={handleScroll}>
        <div className="list-content">
          {filtered.length === 0
            ? (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <p className="empty-title">No results</p>
                <p className="empty-text">Try a different keyword</p>
              </div>
            )
            : filtered.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => onSelectPost(post.id, post.title)}
              />
            ))
          }

          {loadingMore && (
            <div style={{ textAlign: 'center', padding: '16px', color: 'var(--text-muted)', fontSize: 13 }}>
              Loading more...
            </div>
          )}
          {!hasMore && posts.length > 0 && (
            <div style={{ textAlign: 'center', padding: '16px', color: 'var(--text-muted)', fontSize: 12 }}>
              All posts loaded ✓
            </div>
          )}
        </div>
      </div>
    </>
  )
}
