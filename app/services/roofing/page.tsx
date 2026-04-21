import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";
import { ServiceBranchPage } from "@/components/service-branch-page";

export const metadata: Metadata = {
  title: "Roofing · NN Construction",
  description:
    "Our proven specialty since 2009 — 1.4 million square feet delivered. Standing-seam metal, asphalt, slate repair. Ice-shield to ridge cap.",
};

const branch = serviceBranches.find((b) => b.slug === "roofing")!;

export default function RoofingServicesPage() {
  return <ServiceBranchPage branch={branch} />;
}
