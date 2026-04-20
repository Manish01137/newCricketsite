import { Hero } from "@/components/Hero";
import { ScoreTicker } from "@/components/ScoreTicker";
import { LiveMatches } from "@/components/LiveMatches";
import { Features } from "@/components/Features";
import { Predictions } from "@/components/Predictions";
import { FantasyTips } from "@/components/FantasyTips";
import { PointsTable } from "@/components/PointsTable";
import { Writers } from "@/components/Writers";
import { Editorial } from "@/components/Editorial";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScoreTicker />
      <LiveMatches />
      <Features />
      <Predictions />
      <FantasyTips />
      <PointsTable />
      <Writers />
      <Editorial />
      <Testimonials />
      <Newsletter />
    </>
  );
}
