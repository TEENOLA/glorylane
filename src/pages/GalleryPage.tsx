import { PageHero } from "../components/ui/SectionHead";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Reveal from "../components/ui/Reveal";

export default function GalleryPage() {
  return (
    <main>
      <PageHero crumb="GALLERY" title="Around the campus">
        <p className="m-0">
          We're rebuilding our photo library after a site refresh — for now, here's an illustrated look at the
          grounds, classrooms, and the year's key events. Filter by category, or open any piece for the full
          caption.
        </p>
      </PageHero>

      <section className="py-16">
        <Reveal direction="up" className="max-w-[1120px] mx-auto px-6">
          <GalleryGrid />
        </Reveal>
      </section>
    </main>
  );
}
