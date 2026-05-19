export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Resume</h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          I build the systems that power decisions — from the{" "}
          <span className="font-semibold">plumbing (Data Engineering)</span>, to
          the <span className="font-semibold">patterns (Data Analytics)</span>,
          and finally to{" "}
          <span className="font-semibold">purpose (Business Analysis)</span>.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-sm text-white/80">
          Choose the role-specific resume below.
        </p>

        {/* Resume Role Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Data Engineer */}
          <div className="rounded-3xl bg-white/15 p-8 backdrop-blur shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">Data Engineer</h2>
              <p className="mt-3 text-sm text-white/80">
                Focused on pipelines, automation, SQL performance, cloud
                workflows, and scalable data architecture.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/Hemasree_Resume_Data Engineer.pdf"
                download
                className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
              >
                Download Resume →
              </a>
            </div>
          </div>

          {/* Data Analyst */}
          <div className="rounded-3xl bg-white/15 p-8 backdrop-blur shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">Data Analyst</h2>
              <p className="mt-3 text-sm text-white/80">
                Focused on insights, dashboards, KPI reporting, storytelling,
                and business impact using Tableau, SQL, and Python.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/Hemasree_Resume_Data Analyst.pdf"
                download
                className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
              >
                Download Resume →
              </a>
            </div>
          </div>

          {/* Business Analyst */}
          <div className="rounded-3xl bg-white/15 p-8 backdrop-blur shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">Business Analyst</h2>
              <p className="mt-3 text-sm text-white/80">
                Focused on stakeholder needs, process improvement, reporting,
                and translating business requirements into solutions.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/Hemasree_Resume_Business_Analyst.pdf"
                download
                className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
              >
                Download Resume →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}