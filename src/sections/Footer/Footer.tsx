export default function Footer() {
  return (
    <footer className="border-t border-border py-16">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">

        <h2 className="font-mono text-2xl font-bold text-text">
          {"<SD/>"}
        </h2>

        <p className="max-w-xl text-muted">
          Software Engineer focused on Backend Engineering,
          Full-Stack Applications, Desktop Software, and
          Intelligent Unity Systems.
        </p>

        <div className="flex flex-wrap justify-center gap-3">

          <span className="rounded-full border border-border px-4 py-2 text-sm">
            React
          </span>

          <span className="rounded-full border border-border px-4 py-2 text-sm">
            TypeScript
          </span>

          <span className="rounded-full border border-border px-4 py-2 text-sm">
            TailwindCSS
          </span>

          <span className="rounded-full border border-border px-4 py-2 text-sm">
            Vite
          </span>

        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Sayantan Das. Built with React, TypeScript and Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}