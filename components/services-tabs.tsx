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
      >
        Interior
      </Link>
      <Link
        className={`nn-tab${active === "exterior" ? " active" : ""}`}
        href="/services/exterior"
      >
        Exterior
      </Link>
      <Link
        className={`nn-tab${active === "roofing" ? " active" : ""}`}
        href="/services/exterior#roofing"
      >
        Roofing · specialty
      </Link>
    </div>
  );
}
