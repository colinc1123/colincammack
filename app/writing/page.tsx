import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import { getWritingPosts, formatDate } from 'app/writing/utils'

export default function Page() {
  const latestWriting = getWritingPosts()
    .sort((a, b) => new Date(b.metadata.publishedAt) > new Date(a.metadata.publishedAt) ? 1 : -1)
    .slice(0, 1)[0]

  return (
    <section>
      <img src="/IMG_1756.jpeg" ... />
      <h1 ...>Colin Cammack</h1>
      <p ...>Cybersecurity @ Purdue</p>
      <p ...>{`I'm a Purdue...`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
      {latestWriting && (
        <div className="mt-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Latest Writing</p>
          <Link href={`/writing/${latestWriting.slug}`} className="flex flex-col space-y-1">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums">
                {formatDate(latestWriting.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {latestWriting.metadata.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </section>
  )
}