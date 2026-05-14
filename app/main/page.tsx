import Link from "next/link";

const exploreCards = [
  {
    title: "Projects",
    description: "Explore end-to-end data engineering and analytics projects.",
    link: "/projects",
    tag: "Case Studies",
  },
  {
    title: "Resume",
    description: "View and download my resume with experience highlights.",
    link: "/resume",
    tag: "PDF",
  },
  {
    title: "Currently Building",
    description: "See what I’m actively learning and building right now.",
    link: "/about",
    tag: "In Progress",
  },
  {
    title: "Blog",
    description: "Read my technical notes and Medium posts (dbt, SQL, testing).",
    link: "/blog",
    tag: "Medium",
  },
  {
    title: "About Me",
    description: "Learn about my background, skills, and career focus.",
    link: "/about",
    tag: "Story",
  },
  {
    title: "Contact",
    description: "Reach out for opportunities, networking, or collaboration.",
    link: "/contact",
    tag: "Connect",
  },
];

export default function MainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">
            Welcome to Hema’s World
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What would you like to explore?
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose a section below to explore my projects, skills, learning
            journey, and professional experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card) => (
            <Link
              key={card.title}
              href={card.link}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {card.title}
                </h2>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {card.tag}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-600">{card.description}</p>

              <p className="mt-6 text-sm font-semibold text-blue-600">
                Explore →
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center text-white shadow">
          <h2 className="text-2xl font-bold">Want to connect with me?</h2>
          <p className="mt-3 text-white/90">
            I’m open to full-time opportunities and always excited to work on
            impactful data projects.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
            >
              Contact Me →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}