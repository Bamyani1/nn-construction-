import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";
import { ServiceBranchPage } from "@/components/service-branch-page";

export const metadata: Metadata = {
  title: "Interior services · NN Construction",
  description:
    "Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry, stone counters, tile set true.",
};

const branch = serviceBranches.find((b) => b.slug === "interior")!;

export default function InteriorServicesPage() {
  return <ServiceBranchPage branch={branch} />;
}
