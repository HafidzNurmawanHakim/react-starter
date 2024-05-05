import React, { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
   src: string;
   thumbnail: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, thumbnail }) => {
   const [isHovered, setIsHovered] = useState(false);
   const videoRef = useRef<HTMLVideoElement>(null);

   const handleHover = () => {
      setIsHovered(true);
      if (videoRef.current && videoRef.current.readyState === 4)
         videoRef.current.play();
   };

   const handleLeave = () => {
      setIsHovered(false);
      if (videoRef.current) videoRef.current.pause();
   };

   return (
      <div
         onMouseEnter={handleHover}
         className="object-cover"
         onMouseLeave={handleLeave}
      >
         {isHovered ? (
            <video
               ref={videoRef}
               loop={true}
               className="rounded-2xl h-full w-fit"
               autoPlay
               controls={false}
            >
               <source src={src} type="video/mp4" />
            </video>
         ) : (
            <div>
               <img
                  src={thumbnail}
                  className="rounded-2xl h-fit w-fit"
                  alt="Thumbnail"
               />
            </div>
         )}
      </div>
   );
};

export default VideoPlayer;
