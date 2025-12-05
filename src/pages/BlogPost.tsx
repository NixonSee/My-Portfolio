import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogPostBySlug } from '../services/api'

interface BlogPost {
  id: string
  title: string
  content: string
  createdAt: string
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      loadPost(slug)
    }
  }, [slug])

  const loadPost = async (slug: string) => {
    try {
      const data = await getBlogPostBySlug(slug)
      setPost(data)
    } catch (error) {
      console.error('Failed to load post:', error)
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

  if (!post) {
    return (
      <div className="min-h-screen bg-white grid-background pt-20 flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8">
          <div className="text-2xl font-bold">POST NOT FOUND</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white grid-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black p-8 mb-8">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight text-black">{post.title}</h1>
            <p className="text-sm font-bold text-black">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="bg-white border-4 border-black p-8">
            <div className="prose prose-lg max-w-none text-black">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
