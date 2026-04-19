// src/components/ErrorView.jsx
export default function ErrorView({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="error-screen">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">Oops!</h2>
      <p className="error-msg">{message}</p>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          🔄 Try Again
        </button>
      )}
    </div>
  )
}
