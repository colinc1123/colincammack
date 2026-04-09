import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { getWritingPosts } from 'app/writing/utils'

export function BlogPosts() {
  const allBlogs = getBlogPosts().map(p => ({ ...p, type: 'blog' }))
  const allWriting = getWritingPosts().map(p => ({ ...p, type: 'writing' }))
  const allPosts = [...allBlogs, ...allWriting]

  return (
    <div>
      {allPosts
        .sort((a, b) =>
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${post.type === 'writing' ? 'writing' : 'blog'}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}