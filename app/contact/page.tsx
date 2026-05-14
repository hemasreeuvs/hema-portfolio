export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        
        <h1 className="text-5xl font-bold tracking-tight">
          Get in Touch
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/90">
          Always hunting for the next big challenge be it a full-time role, a collaborative side-quest, or a meaningful new connection. Feel free to reach out via any of the links below. Let's build something
        </p>

        {/* Contact Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          
          {/* <a
            href="mailto:uvs.hema@gmail.com"
            className="rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100"
          >
            Email →
          </a> */}
          <a
            href="mailto:uvs.hema@gmail.com?subject=Collaboration"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100"
              >
                Email →
          </a>

          <a
            href="https://www.linkedin.com/in/uvshema/"
            target="_blank"
            className="rounded-2xl bg-white/20 px-8 py-4 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-white/30"
          >
            LinkedIn →
          </a>

          <a
            href="https://x.com/hemachronicles"
            target="_blank"
            className="rounded-2xl bg-white/20 px-8 py-4 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-white/30"
          >
            X (Twitter) →
          </a>
        </div>

        {/* Extra note */}
        <p className="mt-16 text-sm text-white/80">
          AUSTIN, TX • Open to remote and relocation opportunities
        </p>
      </section>
    </main>
  );
}