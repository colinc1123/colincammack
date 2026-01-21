export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Contact
      </h1>

      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Email is the fastest way to reach me.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Personal Email
          </p>
          <a href="mailto:youremail@gmail.com" className="underline underline-offset-4">
            youremail@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            School Email
          </p>
          <a href="mailto:yourpurdueemail@purdue.edu" className="underline underline-offset-4">
            yourpurdueemail@purdue.edu
          </a>
        </div>

        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            linkedin.com/in/yourusername
          </a>
        </div>
      </div>
    </section>
  )
}
