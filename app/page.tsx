export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">Hemasree UVS</h1>
          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium text-blue-600">
          Data Engineer | Analytics & Automation
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Building scalable data pipelines, trusted models, and dashboards that
          drive business decisions.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          I specialize in SQL, Python, cloud platforms, and modern analytics
          engineering workflows to build end-to-end data solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-2xl font-bold">Featured Projects</h3>
          <p className="mt-2 text-gray-600">
            A selection of end-to-end projects showcasing data engineering,
            analytics, and automation.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-gray-50 p-6 shadow-sm">
              <h4 className="text-lg font-semibold">
                Nuclear Operations Data Platform
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Consolidated data across multiple operational systems to build a
                single source of truth for reporting and decision-making.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                SQL • Python • ETL • Data Modeling
              </p>
            </div>

            <div className="rounded-xl border bg-gray-50 p-6 shadow-sm">
              <h4 className="text-lg font-semibold">
                ITSM Incident Analytics Automation
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Built dashboards and automated reporting pipelines to reduce
                manual tracking and improve service performance insights.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                Tableau • SQL • Reporting Automation
              </p>
            </div>

            <div className="rounded-xl border bg-gray-50 p-6 shadow-sm">
              <h4 className="text-lg font-semibold">
                Data Quality Framework (dbt)
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Designed reusable generic + singular tests to validate pipelines
                and enforce trusted data governance.
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                dbt • SQL • Testing • Data Governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-2xl font-bold">Skills & Tools</h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold">Data Engineering</h4>
              <p className="mt-2 text-sm text-gray-600">
                ETL/ELT • Data Modeling • Pipelines • Data Warehousing
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold">Programming</h4>
              <p className="mt-2 text-sm text-gray-600">
                Python • SQL • Git • Automation
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold">Analytics & BI</h4>
              <p className="mt-2 text-sm text-gray-600">
                Tableau • KPI Dashboards • Reporting Automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-2xl font-bold">About Me</h3>
          <p className="mt-4 max-w-3xl text-gray-600">
            I’m a Data Engineer with experience building analytics solutions,
            operational dashboards, and data pipelines across complex business
            systems. I enjoy creating scalable data products, optimizing SQL
            workflows, and enabling teams to make faster decisions using trusted
            data.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-gray-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hemasree UVS
          </p>

          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a
              href="mailto:your-email@gmail.com"
              className="hover:text-gray-900"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hemasreeuvs"
              target="_blank"
              className="hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
