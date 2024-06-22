

import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";


export default function Home() {
  return (
    <main>
      <div className="bg-neutral-800">
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-300">
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel />
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-300">
            Scroll up
          </span>
        </div>
      </div>
    </main>
  );
}

