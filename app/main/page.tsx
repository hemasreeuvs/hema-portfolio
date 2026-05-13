import Link from "next/link";

export default function MainPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold text-blue-600">
            Data Engineer | Analytics & Automation
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Building scalable data pipelines and analytics systems that power
            real business decisions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            I specialize in SQL, Python, data modeling, reporting automation,
            and modern data engineering workflows (dbt, validation, governance).
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              View Projects
            </Link>

            <Link
              href="/resume"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Resume
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>

          {/* Metrics */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <p className="text-3xl font-bold text-gray-900">15+</p>
              <p className="mt-2 text-sm text-gray-600">Systems Consolidated</p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="mt-2 text-sm text-gray-600">Dashboards Built</p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <p className="text-3xl font-bold text-gray-900">40%</p>
              <p className="mt-2 text-sm text-gray-600">SQL Optimization</p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <p className="text-3xl font-bold text-gray-900">20%</p>
              <p className="mt-2 text-sm text-gray-600">Automation Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <p className="mt-3 text-gray-600">
                Selected work demonstrating engineering depth and business
                impact.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Nuclear Operations Data Platform
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Consolidated operational datasets across multiple systems to
                build a single source of truth for reporting.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                SQL • Python • ETL • Data Modeling
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                ITSM Analytics Automation
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Automated KPI tracking and built dashboards to improve service
                performance monitoring.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                Tableau • SQL • Reporting Automation
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                dbt Data Quality Framework
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Designed reusable validation tests and governance checks to
                ensure trusted reporting datasets.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                dbt • SQL • Testing • Governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Building */}
      <section className="bg-white py-20 border-t">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Currently Building
          </h2>
          <p className="mt-3 text-gray-600">
            Projects I’m actively working on to improve my skills and build
            modern data solutions.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                End-to-End dbt Pipeline Project
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Building staging → marts workflow with documentation, tests, and
                best practices.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                SQL Optimization Practice
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Improving performance tuning and scalable query design patterns.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Portfolio Enhancements
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Improving UI/UX and building a recruiter-friendly project
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}