import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Hema Portfolio",
  description:
    "Portfolio of Hema - Building and learning with Data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/main" className="text-lg font-semibold">
              Hemasree Uppaluri Venkata Syamala
            </Link>

            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/projects" className="hover:text-gray-900">
                Projects
              </Link>
              <Link href="/blog" className="hover:text-gray-900">
                Blog
              </Link>
              <Link href="/resume" className="hover:text-gray-900">
                Resume
              </Link>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="border-t bg-white/60 backdrop-blur py-8">
          <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Hemasree UVS. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}