import { useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "../../data/content";
import GalleryLightbox from "./GalleryLightbox";

const CATEGORIES: Array<GalleryItem["category"] | "All"> = [
  "All",
  "Campus & Grounds",
  "Classrooms & Labs",
  "Sports & Events",
  "Culture & Founders' Day",
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () => (activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-7">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold border cursor-pointer ${
              category === activeCategory
                ? "bg-green text-cream border-green"
                : "bg-transparent text-ink-soft border-rule hover:border-green"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => {
          const trueIndex = galleryItems.findIndex((galleryItem) => galleryItem.id === item.id);
          return (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(trueIndex)}
              className="text-left bg-sage border border-sage-line rounded-sm overflow-hidden cursor-pointer group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-300"
                />
              </div>
              <div className="bg-cream px-3.5 py-3 border-t border-sage-line">
                <h4 className="text-sm m-0">{item.title}</h4>
              </div>
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={galleryItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
