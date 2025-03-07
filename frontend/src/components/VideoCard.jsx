import React, { useCallback, useState } from "react";

export default function VideoCard({ video }) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const handleToggleDescription = useCallback(() => {
    setDescriptionOpen((prev) => !prev);
  }, []);

  return (
    <div
      className="card shadow-sm "
      style={{ width: "calc((100% - 2rem) / 3)", minWidth: "252px" }}
    >
      <div className="card-body p-2">
        <h5 className="mb-1">{video.name || "Hockey Skills Training"}</h5>
        <div style={{ marginTop: "0px" }}>
          <iframe
            src={`https://player.vimeo.com/video/${video.id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              width: "100%",
              aspectRatio: `${video.videoWidth} / ${video.videoHeight}`,
            }}
            title="Forward Skating Reference"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                aria-expanded="true"
                onClick={handleToggleDescription}
              >
                Description:
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                descriptionOpen ? "show" : ""
              }`} //here is where the class defines if its open or closed --review here--
            >
              <div
                className="accordion-body"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {video.description ||
                  "Improve your skills with these essential drills."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
