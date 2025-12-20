import GlobalWrapper from "@/components/layouts/GlobalWrapper";
import { Stack } from "@mui/material";
import Hero from "@/components/landingpage/Hero";
import PastSpeakers from "@/components/landingpage/PastSpeakers";
import GuestShowcase from "@/components/landingpage/GuestShowcase";
import Community from "@/components/landingpage/Community";
import FAQs from "@/components/FAQ/FAQs";
import EventsWorkshops from "@/components/Carousel/EventsWorkshops";
import ThreeDImageRing from "@/components/Carousel/ThreeDImageRing";
const imageUrls = [
  // Team collaboration
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",

  // Professional discussion / meeting
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",

  // Learning / reading / upskilling
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",

  // Modern office work
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",

  // Career planning / growth
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",

  // Presentation / webinar style
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",

  // Remote work / productivity
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",

  // Team brainstorming
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",

  // Professional writing / planning
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",

  // Leadership / discussion
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
];
export default function Home() {
  return (
    <GlobalWrapper>
      <Hero />
      <PastSpeakers />
      <Stack spacing={0} width={"100%"}>
        <EventsWorkshops />
        <ThreeDImageRing images={imageUrls} width={500} imageDistance={700} />
        <GuestShowcase />
        <Community />
      </Stack>
      <FAQs />
    </GlobalWrapper>
  );
}
