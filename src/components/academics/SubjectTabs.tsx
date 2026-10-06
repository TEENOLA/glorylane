import { useState } from "react";
import { seniorTracks } from "../../data/content";

export default function SubjectTabs() {
  const [activeTrackId, setActiveTrackId] = useState(seniorTracks[0].id);
  const activeTrack = seniorTracks.find((track) => track.id === activeTrackId)!;

  return (
    <div>
      <div className="flex gap-0 border-b border-rule mb-6.5 flex-wrap">
        {seniorTracks.map((track) => (
          <button
            key={track.id}
            onClick={() => setActiveTrackId(track.id)}
            className={`bg-none border-none py-2.5 mr-5.5 cursor-pointer text-sm font-semibold border-b-2 ${
              track.id === activeTrackId ? "text-green-dark border-brass" : "text-ink-soft border-transparent"
            }`}
          >
            {track.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {activeTrack.subjects.map((subject) => (
          <span key={subject} className="block bg-sage border border-sage-line rounded-sm px-3 py-2.5 text-sm text-ink">
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
}
