import Link from "next/link";

type Tab = "interior" | "exterior" | "roofing";

interface ServicesTabsProps {
  active: Tab;
}

export function ServicesTabs({ active }: ServicesTabsProps) {
  return (
    <div className="nn-tabs" style={{ marginTop: 48 }}>
      <Link
        className={`nn-tab${active === "interior" ? " active" : ""}`}
        href="/services/interior"
        aria-current={active === "interior" ? "page" : undefined}
      >
        Interior
      </Link>
      <Link
        className={`nn-tab${active === "exterior" ? " active" : ""}`}
        href="/services/exterior"
        aria-current={active === "exterior" ? "page" : undefined}
      >
        Exterior
      </Link>
      <Link
        className={`nn-tab${active === "roofing" ? " active" : ""}`}
        href="/services/roofing"
        aria-current={active === "roofing" ? "page" : undefined}
      >
        Roofing
      </Link>
    </div>
  );
}
