import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCard from "./VideoCard";

export default function VideoGallery() {
  const [folders, setFolders] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeFolder, setActiveFolder] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos/folders")
      .then((response) => response.json())
      .then((data) => {
        setFolders(data);
        if (data.length > 0) setActiveFolder(data[0].id);
      })
      .catch((error) => console.error("Error fetching folders:", error));
  }, []);

  useEffect(() => {
    if (!activeFolder) return;

    fetch(`http://localhost:5000/api/videos/folders/${activeFolder}`)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error Fetching videos", error));
  }, [activeFolder]);

  return (
    <div className="container py-4">
      {/* Section Title */}
      <h1 className="text-center mb-3">Hockey Video Library</h1>

      {/* Folder Tabs */}
      <div className="text-center mb-4">
        {folders.map((folder) => (
          <button
            key={folder.id}
            className={`btn me-2 ${
              activeFolder === folder.id ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveFolder(folder.id)}
          >
            {folder.name}
          </button>
        ))}
      </div>

      {/* Video Cards Section */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {videos.length > 0 ? (
          videos.map((video) => <VideoCard video={video} />)
        ) : (
          <p className="text-center text-muted">
            No videos available in this category.
          </p>
        )}
      </div>
    </div>
  );
}
