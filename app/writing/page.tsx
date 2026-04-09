import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import { getWritingPosts, formatDate } from 'app/writing/utils'

export default function Page() {
  const allWriting = getWritingPosts()
  const latestWriting = allWriting.sort((a, b) =>
    new Date(b.metadata.publishedAt) > new Date(a.metadata.publishedAt) ? 1 : -1
  )[0]

  return (
    <section>
      <img src="/IMG_1756.jpeg" alt="Colin Cammack" className="mb-4 h-40 w-40 object-cover rounded-xl" />
      <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
        Colin Cammack
      </h1>
      <p className="mb-4 text-sm text-neutral-400">
        Cybersecurity @ Purdue
      </p>
      <p className="mb-4">
        {`I'm a Purdue Cybersecurity major with a heavy interest in signals and geopolitics. I'm especially drawn to work that sits at the intersection of security and global affairs, and I'm always looking to keep learning and grow toward meaningful work in that space.`}
      </p>
      <div className="my-8">
        <BlogPosts />
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
      </div>
    </section>
  )
}