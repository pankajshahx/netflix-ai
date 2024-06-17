import React from "react";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="px-12 py-4 absolute w-screen aspect-video bg-gradient-to-tr from-black pt-[20%] z-10">
      <h1 className="text-white text-6xl font-bold">{original_title}</h1>
      <p className="w-1/3 py-4 text-white">{overview}</p>
      <button className="px-4 py-2 w-32 border bg-white rounded-sm mr-2 text-black font-bold hover:bg-opacity-40">
        Play
      </button>
      <button className="px-4 py-2 w-32 border bg-gray-500 rounded-sm text-white font-bold">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
