import { BlogPosts } from 'app/components/posts'

export default function Page() {
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
        {`I’m a Purdue Cybersecurity major with a heavy interest in signals and geopolitics. I’m especially drawn to work that sits at the intersection of security and global affairs, and I’m always looking to keep learning and grow toward meaningful work in that space.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
