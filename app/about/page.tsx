export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            About Me
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
            I’m Hemasree Uppaluri Venkata Syamala, and I thrive on the puzzle of data. As a data enthusiast who loves problem-solving, I focus on building scalable pipelines and automation systems that make data clean, reliable, and instantly useful for driving business decisions.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="rounded-3xl bg-white/15 p-8 backdrop-blur shadow-lg">
            <h2 className="text-xl font-semibold">What I Build</h2>
            <p className="mt-3 text-sm text-white/85">
              ETL pipelines, analytics workflows, dashboards, automated reports,
              and scalable SQL-based data models.
            </p>
          </div>

          <div className="rounded-3xl bg-white/15 p-8 backdrop-blur shadow-lg">
            <h2 className="text-xl font-semibold">What I Believe</h2>
            <p className="mt-3 text-sm text-white/85">
              Data should be reliable, validated, and easy to trust. I focus on
              clean structure, testing, and documentation.
            </p>
          </div>

          <div className="rounded-3xl bg-white/15 p-8 backdrop-blur shadow-lg">
            <h2 className="text-xl font-semibold">What I’m Learning</h2>
            <p className="mt-3 text-sm text-white/85">
              Modern data engineering tools like dbt, cloud workflows, and
              scalable pipeline patterns to build production-grade systems.
            </p>
          </div>

        </div>

        {/* Skills */}
        {/* Core Skills */}
<div className="mt-20 rounded-3xl bg-white/15 p-10 backdrop-blur shadow-lg">
  <h2 className="text-2xl font-semibold text-center">Core Skills</h2>

  <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    
    {/* Programming */}
    <div>
      <h3 className="text-lg font-semibold text-white/95">Programming</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {["Python", "SQL", "HTML", "CSS"].map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Databases */}
    <div>
      <h3 className="text-lg font-semibold text-white/95">Databases</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {["PostgreSQL", "MySQL", "Snowflake", "DynamoDB"].map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Data Engineering */}
    <div>
      <h3 className="text-lg font-semibold text-white/95">Data Engineering</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {["dbt", "ETL / ELT", "Data Modeling", "Data Quality Testing"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>

    {/* BI & Visualization */}
    <div>
      <h3 className="text-lg font-semibold text-white/95">
        BI & Visualization
      </h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {["Tableau", "Power BI", "Dashboards", "KPI Reporting"].map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Statistics */}
    <div>
      <h3 className="text-lg font-semibold text-white/95">Statistics</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {["Hypothesis Testing", "A/B Testing", "Regression", "Probability"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>

    {/* Machine Learning */}
    <div>
      <h3 className="text-lg font-semibold text-white/95">
        Machine Learning
      </h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {["Supervised Learning", "Unsupervised Learning", "Model Evaluation"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>

  </div>
</div>
        
        
      </section>
    </main>
  );
}
