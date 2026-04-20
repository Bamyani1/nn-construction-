import Image from "next/image";
import Link from "next/link";

export function Editorial() {
  return (
    <section className="nn-section nn-section-raised">
      <div className="nn-container nn-editorial">
        <div className="nn-editorial-img">
          <Image
            src="/assets/projects/standing-seam-reroof/02.webp"
            alt="Standing-Seam Re-roof"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="nn-editorial-tag">Standing-Seam Re-roof</div>
        </div>
        <div>
          <div className="nn-chapter">
            <span className="nn-chapter-label">The work</span>
          </div>
          <h2 className="nn-section-title">
            Built true
            <br />
            to plumb.
          </h2>
          <div className="nn-prose" style={{ marginTop: 40 }}>
            <p>
              We are a twelve-person shop running framing, finish, and
              roofing out of Silver Spring. One project manager, one crew,
              one warranty — start to finish.
            </p>
            <p>
              <strong>No subcontractor shuffle.</strong> The people who bid
              your project are the people who show up. Change orders are
              written, signed, and priced before work proceeds. Permits
              handled. Receipts on request.
            </p>
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="nn-btn nn-btn-ghost" href="/about">
              Read about us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
