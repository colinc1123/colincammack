import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <img src="/IMG_1756.jpeg" alt="Colin Cammack" className="mb-4 h-28 w-28 object-cover rounded-xl" />

      <h1 className="mb-1 text-2xl font-semibold tracking-tighter">
        Colin Cammack
      </h1>
        <p className="mb-4 text-sm text-neutral-400">
    Cybersecurity @ Purdue
  </p>
      <p className="mb-4">
        {`I’m a Purdue Cybersecurity major interested in network and system security. I’m currently building a homelab to strengthen my hands-on skills, and I have experience developing AI agents and automation workflows. I’m actively looking for opportunities to learn, contribute, and grow on a technical team.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
