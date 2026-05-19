"use client";

import { useState } from "react";
import Link from "next/link";

const mainSections = [
  {
    title: "Projects",
    description: "Explore end-to-end data engineering and analytics pipelines.",
    link: "/projects",
    tag: "Case Studies",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Currently Building",
    description: "See what I’m actively learning, testing, and shipping right now.",
    link: "/about",
    tag: "In Progress",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

const quickLinks = [
  {
    title: "Resume",
    description: "View & download my profile.",
    link: "/resume",
    tag: "PDF",
  },
  {
    title: "Blog",
    description: "As I learn, you learn with me.",
    link: "/blog",
    tag: "Medium",
  },
  {
    title: "Contact",
    description: "Get in touch for roles or networking.",
    link: "/contact",
    tag: "Connect",
  },
];

export default function MainPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(
      `Collaboration Inquiry from ${formData.name}`
    );

    const emailBody = encodeURIComponent(
      `Hello Hema,\n\n${formData.message}\n\n---\nSender Email: ${formData.email}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=uvs.hema@gmail.com&su=${emailSubject}&body=${emailBody}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero Header */}
        <div className="mb-16 text-center md:max-w-3xl md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">
            Welcome to Hema’s World
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
            What would you like to explore?
          </h1>
        </div>

        {/* Dashboard Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="px-1 text-xs font-semibold uppercase tracking-wider text-white/60">
              Featured Work & Focus
            </h3>

            {mainSections.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className={`group block rounded-3xl bg-gradient-to-br ${card.color} border border-white/10 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                      {card.tag}
                    </span>

                    <h2 className="text-2xl font-bold transition-colors group-hover:text-white">
                      {card.title}
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                      {card.description}
                    </p>
                  </div>

                  <div className="rounded-full bg-white/10 p-3 text-white opacity-60 transition-all duration-300 group-hover:bg-white group-hover:text-purple-600 group-hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* About Me */}
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-md">
  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">
    About Me
  </h3>

  <p className="text-sm leading-relaxed text-white/90">
    I'm a data enthusiast focused on building the hidden pipelines that turn raw
    information into clean, automated reporting strategies.
  </p>

  <Link
    href="/about"
    className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80"
  >
    Read more →
  </Link>
</div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="px-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                Quick Destinations
              </h3>

              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 shadow backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/15"
                >
                  <div>
                    <h4 className="text-sm font-semibold">{link.title}</h4>
                    <p className="mt-0.5 text-xs text-white/70">
                      {link.description}
                    </p>
                  </div>

                  <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-mono text-white/80 transition-colors group-hover:bg-white group-hover:text-gray-900">
                    {link.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA + Form */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="grid items-start gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">
                Let's build something impactful together.
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                Drop your details here! Clicking submit opens Gmail in your
                browser with a ready-to-send message.
              </p>
            </div>

            <form
              onSubmit={handleEmailSubmit}
              className="space-y-4 md:col-span-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-white/30 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-white/30 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-white/30 focus:outline-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-md transition-all duration-200 hover:scale-[1.01] hover:bg-gray-100 active:scale-[0.99]"
                >
                  Say Hello →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}