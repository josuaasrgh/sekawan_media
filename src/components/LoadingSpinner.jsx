// src/components/LoadingSpinner.jsx
export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-screen">
      <div className="spinner" />
      <p className="loading-text">{message}</p>
    </div>
  )
}
