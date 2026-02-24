import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#006590] text-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="4"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="16"
              y1="6"
              x2="16"
              y2="26"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="16"
              x2="26"
              y2="16"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <span className="text-xl font-bold tracking-wide">
            {"TÄBY KOMMUN"}
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            Hem
          </Link>
          <Link
            href="/oppna-data"
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            {"Öppna Data"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
