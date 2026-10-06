export default function MapEmbed() {
  return (
    <div className="border border-rule rounded-sm overflow-hidden mt-5">
      <iframe
        title="Map showing Lekki Phase 1, Lagos"
        loading="lazy"
        className="w-full h-[220px] border-0 block"
        src="https://www.openstreetmap.org/export/embed.html?bbox=3.4500%2C6.4300%2C3.4900%2C6.4600&layer=mapnik&marker=6.4450%2C3.4700"
      />
    </div>
  );
}
