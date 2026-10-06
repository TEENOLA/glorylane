import { PageHero } from "../components/ui/SectionHead";
import GalleryGrid from "../components/gallery/GalleryGrid";

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
        <div className="max-w-[1120px] mx-auto px-6">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
