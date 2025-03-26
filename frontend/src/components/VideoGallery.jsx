import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCard from "./VideoCard";

export default function VideoGallery() {
  const [folders, setFolders] = useState(null);
  const [videos, setVideos] = useState(null);
  const [activeFolder, setActiveFolder] = useState(null);

  useEffect(() => {
    let running = true;
    async function fetchFolders() {
      try {
        const response = await fetch("/api/videos/folders");
        const data = await response.json();
        if (!running) return;
        setFolders(data);
        if (data.length > 0) setActiveFolder(data[0].id);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    }
    fetchFolders();
    return () => {
      running = false;
    };
  }, []);

  useEffect(() => {
    if (!activeFolder) return;
    let running = true;
    async function fetchActiveFolder() {
      try {
        const response = await fetch(`/api/videos/folders/${activeFolder}`);
        const data = await response.json();
        if (!running) return;
        setVideos(data);
      } catch (error) {
        console.error("Error Fetching videos", error);
      }
    }
    fetchActiveFolder();
    return () => {
      running = false;
    };
  }, [activeFolder]);

  const handleSelectFolder = (folderId) => {
    setActiveFolder(folderId);
    setVideos(null);
  };
  return (
    <div className="container py-4">
      {/* Section Title */}
      <h1 className="text-center mb-3">Hockey Video Library</h1>

      {/* Folder Tabs */}
      <div className="text-center mb-4">
        {folders === null ? (
          <div>Loading...</div>
        ) : folders.length < 0 ? (
          <div>Unable to retrieve folders</div>
        ) : (
          folders.map((folder) => (
            <button
              key={folder.id}
              className={`btn me-2 ${
                activeFolder === folder.id
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => {
                handleSelectFolder(folder.id);
              }}
            >
              {folder.name}
            </button>
          ))
        )}
      </div>

      {/* Video Cards Section */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {videos === null ? (
          <div>Loading...</div>
        ) : videos.length > 0 ? (
          videos.map((video) => <VideoCard video={video} key={video.id} />)
        ) : (
          <p className="text-center text-muted">
            No videos available in this category.
          </p>
        )}
      </div>
    </div>
  );
}
