import { Hero } from "@/components/marketing/Hero";
import { OtherTools } from "@/components/marketing/OtherTools";
import { Pricing } from "@/components/marketing/Pricing";
import { RealGPT } from "@/components/marketing/RealGPT";
import { RealtorReplyDemo } from "@/components/marketing/RealtorReplyDemo";
import { Toolkit } from "@/components/marketing/Toolkit";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <RealtorReplyDemo />
      <Toolkit />
      <OtherTools />
      <RealGPT />
      <Pricing />
    </main>
  );
}
