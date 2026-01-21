import { BlogPosts } from 'app/components/posts'
export const runtime = 'nodejs'

export const metadata = {
  title: 'Portfolio',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portfolio</h1>
      <BlogPosts />
    </section>
  )
}
