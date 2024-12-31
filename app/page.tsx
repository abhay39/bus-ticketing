import EnjoySummer from "@/components/EnjoySummer";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LayoutForTicket from "@/components/LayoutForTicket";
import Steps from "@/components/Steps";
import Tours from "@/components/Tours";


export default function Home() {
  return (
    <main className=" min-h-screen  lg:px-32 py-2 md:px-16 px-8 flex flex-col gap-5">
      <HeroSection />
      <LayoutForTicket />
      <Steps />
      <EnjoySummer />
      <Tours />
    </main>
  );
}
