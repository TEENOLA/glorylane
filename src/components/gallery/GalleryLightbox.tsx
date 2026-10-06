import { useEffect } from "react";
import type { GalleryItem } from "../../data/content";

type GalleryLightboxProps = {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({ items, activeIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const activeItem = items[activeIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (event.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-green-dark/95 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-cream text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 cursor-pointer"
      >
        ×
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous"
        className="absolute left-3 md:left-6 text-cream text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 cursor-pointer"
      >
        ‹
      </button>

      <div
        className="bg-cream rounded-sm max-w-lg w-full overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-sage">
          <img src={activeItem.image} alt={activeItem.title} className="w-full h-64 object-cover" />
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-brass mb-1.5">{activeItem.category}</div>
          <h4 className="text-lg mb-1.5">{activeItem.title}</h4>
          <p className="text-sm m-0">{activeItem.caption}</p>
        </div>
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        aria-label="Next"
        className="absolute right-3 md:right-6 text-cream text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 cursor-pointer"
      >
        ›
      </button>
    </div>
  );
}
