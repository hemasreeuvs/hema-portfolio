import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 px-6 text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hey, welcome to the world of{" "}
          <span className="underline decoration-white/50">Hema</span>
        </h1>

        <p className="mt-6 text-lg text-white/90 sm:text-xl">
          Explore my projects, skills, and the work I’m building as a Data
          Engineer.
        </p>

        <div className="mt-10">
          <Link
            href="/main"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100"
          >
            Let’s Get Started →
          </Link>
        </div>
      </div>
    </main>
  );
}