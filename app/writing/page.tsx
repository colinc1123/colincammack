import Link from 'next/link'
import { getWritingPosts, formatDate } from 'app/writing/utils'
export const runtime = 'nodejs'

export const metadata = {
  title: 'Writing',
  description: 'Essays and writing by Colin Cammack.',
}

export default function WritingPage() {
  let allPosts = getWritingPosts()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writing</h1>
      <div>
        {allPosts
          .sort((a, b) =>
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ? -1
              : 1
          )
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/writing/${post.slug}`}
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
    </section>
  )
}
