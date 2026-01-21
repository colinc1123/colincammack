export default function ContactPage() {
  return (
    <section>
    <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
      Contact
    </h1>



      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Personal Email
          </p>
          <a href="mailto:youremail@gmail.com" className="underline underline-offset-4">
            colincammack@icloud.com
          </a>
        </div>

        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            School Email
          </p>
          <a href="mailto:yourpurdueemail@purdue.edu" className="underline underline-offset-4">
            cammack@purdue.edu
          </a>
        </div>

        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/colin-cammack-a4b21a225/"
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
