import React, { useEffect, useState, useRef } from "react";
import Player from "@vimeo/player";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("skatingReferences");
  // const playerRefs = useRef({});

  const categories = [
    { key: "skatingReferences", label: "Skating References" },
    { key: "shootingReferences", label: "Shooting References" },
    { key: "offIceShooting", label: "Off Ice Shooting Drills" },
    { key: "offIceStickhandling", label: "Off Ice Stickhandling Drills" },
  ];

  useEffect(() => {
    fetch(`http://localhost:5000/api/videos/${activeCategory}/`)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, [activeCategory]);

  // useEffect(() => {
  //   videos.forEach((video) => {
  //     const videoId = video.uri.split("/").pop();
  //     if (!playerRefs.current[videoId]) {
  //       const playerDiv = document.getElementById(`vimeo-player-${videoId}`);
  //       if (playerDiv) {
  //         playerRefs.current[videoId] = new Player(playerDiv, {
  //           id: videoId,
  //           width: "100%",
  //           responsive: true,
  //         });
  //       }
  //     }
  //   });
  // }, [videos]);

  return (
    <div className="container py-4">
      {/* Section Title */}
      <h1 className="text-center mb-3">Hockey Video Library</h1>

      {/* Category Tabs */}
      <div className="text-center mb-4">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`btn me-2 ${
              activeCategory === category.key
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Video Cards Section */}
      <div className="d-flex flex-column align-items-center gap-3">
        {videos.length > 0 ? (
          videos.map((video) => {
            const videoId = video.uri.split("/").pop();
            return (
              <div key={videoId} className="card shadow-sm w-75">
                <div className="card-body p-2">
                  {" "}
                  <h5 className="mb-1">
                    {video.name || "Hockey Skills Training"}
                  </h5>
                  {/* <div
                    id={`vimeo-player-${videoId}`}
                    className="ratio ratio-16x11"
                    style={{ marginTop: "0px" }}
                  ></div> */}
                  <div style={{ marginTop: "0px", height: "10rem" }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      title="Forward Skating Reference"
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                  <p className="mt-2 text-muted">
                    {video.description ||
                      "Improve your skills with these essential drills."}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-muted">
            No videos available in this category.
          </p>
        )}
      </div>
    </div>
  );
}
