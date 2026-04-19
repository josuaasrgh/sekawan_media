// src/services/api.js
const BASE_URL = 'https://jsonplaceholder.typicode.com'

const request = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
  return res.json()
}

export const fetchPosts = (page = 1, limit = 15) =>
  request(`/posts?_page=${page}&_limit=${limit}`)

export const fetchPostById = (id) => request(`/posts/${id}`)

export const fetchCommentsByPost = (postId) => request(`/posts/${postId}/comments`)

export const fetchUserById = (userId) => request(`/users/${userId}`)
