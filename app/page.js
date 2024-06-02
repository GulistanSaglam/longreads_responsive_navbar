import Hero from "@/components/Hero/Hero";
import Social from "@/components/Social/Social";

export const metadata = {
  title: "Homepage - Longreads",
  description: "Longreads",
};
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Social />
    </div>
  );
}
