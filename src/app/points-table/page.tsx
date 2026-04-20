import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PointsTable } from "@/components/PointsTable";
import { IMG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Points Tables — CrickPulse",
  description:
    "IPL and WPL standings with NRR, form trends, and playoff cutoff highlighting.",
};

export default function PointsTablePage() {
  return (
    <>
      <PageHeader
        eyebrow="Standings"
        title={
          <>
            Points tables, updated the{" "}
            <span className="italic text-[var(--amber)]">moment</span> the
            innings ends.
          </>
        }
        description="Top four qualify. NRR breaks ties. We visualize form so you can see who's peaking and who's quietly sliding out."
        image={IMG.crowd}
      />
      <PointsTable />
    </>
  );
}
