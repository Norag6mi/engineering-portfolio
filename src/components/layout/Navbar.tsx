import { navigation } from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <a
            href="#hero"
            className="font-mono text-xl font-bold tracking-tight text-text transition-colors hover:text-primary"
        >
            {"<SD/>"}
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`text-sm transition-all duration-200 ${
                activeSection === item.id
                  ? "text-primary font-medium"
                  : "text-muted hover:text-text"
              }`}
            >
              {item.title}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1mGf06otQkZVFNcEDXd5gKYe6Zsm6FjhS/view?usp=sharing"
            className="rounded-lg border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}