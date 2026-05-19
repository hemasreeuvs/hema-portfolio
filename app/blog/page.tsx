export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Blog</h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          I write about anything that relates to the Data that canhelp you in real time hands on experiences. If you enjoy structured learning and practical
          insights, follow my work here.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <a
            href="https://medium.com/@uvs.hema"
            target="_blank"
            className="rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100"
          >
            Read on Medium →
          </a>

          <a
            href="https://x.com/hemachronicles/articles"
            target="_blank"
            className="rounded-2xl bg-white/20 px-8 py-4 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-white/30"
          >
            Read on X Articles →
          </a>
        </div>

        <div className="mt-20 rounded-3xl bg-white/10 border border-white/10 backdrop-blur p-10 shadow-xl text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Topics Iam writing now</h2>

          <ul className="mt-6 space-y-3 text-white/85 text-sm">
            <li>• dbt fundamentals and testing strategies</li>
            <li>• Interview preparation and career learning</li>

          </ul>
        </div>
      </section>
    </main>
  );
}