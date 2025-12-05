import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogPosts } from '../services/api'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  createdAt: string
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const data = await getBlogPosts()
      setPosts(data)
    } catch (error) {
      console.error('Failed to load posts:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white grid-background pt-20 flex items-center justify-center">
        <div className="text-2xl font-bold">LOADING...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white grid-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl md:text-8xl font-black mb-12 text-black uppercase tracking-tight">Blog</h1>
        <div className="max-w-4xl space-y-6">
          {posts.length === 0 ? (
            <div className="bg-white border-4 border-black p-8">
              <p className="text-lg font-bold text-black">No blog posts yet.</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="bg-white border-4 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-3 uppercase tracking-wide text-black group-hover:text-white transition-all">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm font-semibold mb-4 text-black group-hover:text-white transition-all">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                {post.excerpt && (
                  <p className="text-gray-600 group-hover:text-gray-300 transition-all">{post.excerpt}</p>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
