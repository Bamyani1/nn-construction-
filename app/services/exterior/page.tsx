import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";
import { ServiceBranchPage } from "@/components/service-branch-page";

export const metadata: Metadata = {
  title: "Exterior services · NN Construction",
  description:
    "Siding, decks, windows, and doors. Tight mitered corners, consistent reveal top to bottom, drainage engineered in.",
};

const branch = serviceBranches.find((b) => b.slug === "exterior")!;

export default function ExteriorServicesPage() {
  return <ServiceBranchPage branch={branch} />;
}
