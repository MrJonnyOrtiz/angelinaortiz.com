import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Indicator from "./Indicator";

const YoutubeEmbed = ({ embedId, title }) => (
   <div className="mb-5">
      <iframe
         src={`https://www.youtube.com/embed/${embedId}`}
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         title={title}
         className="w-full h-auto"
      />
   </div>
);

YoutubeEmbed.propTypes = {
   embedId: PropTypes.string.isRequired,
};

export default function Carousel({ slides, name, openTab }) {
   const [currentVideo, setCurrentVideo] = useState(0);
   const [currentPic, setCurrentPic] = useState(0);

   useEffect(() => {
      const carouselVideos = document.getElementById("carousel-Videos");
      const carouselPics = document.getElementById("carousel-Pics");
      const elementsVideos = carouselVideos.querySelectorAll(".snap-always");
      const elementsPics = carouselPics.querySelectorAll(".snap-always");

      const observerVideos = new IntersectionObserver(
         function (entries, observer) {
            // find the entry with the largest intersection ratio
            const activated = entries.reduce(function (max, entry) {
               return entry.intersectionRatio > max.intersectionRatio
                  ? entry
                  : max;
            });
            if (activated.intersectionRatio > 0) {
               setCurrentVideo(
                  elementVideosIndices[activated.target.getAttribute("id")]
               );
            }
         },
         {
            root: carouselVideos,
            threshold: 0.75,
         }
      );

      const elementVideosIndices = {};
      for (let i = 0; i < elementsVideos.length; i++) {
         elementVideosIndices[elementsVideos[i].getAttribute("id")] = i;
         observerVideos.observe(elementsVideos[i]);
      }

      const observerPics = new IntersectionObserver(
         function (entries, observer) {
            // find the entry with the largest intersection ratio
            const activated = entries.reduce(function (max, entry) {
               return entry.intersectionRatio > max.intersectionRatio
                  ? entry
                  : max;
            });
            if (activated.intersectionRatio > 0) {
               setCurrentPic(
                  elementPicsIndices[activated.target.getAttribute("id")]
               );
            }
         },
         {
            root: carouselPics,
            threshold: 1,
         }
      );

      const elementPicsIndices = {};
      for (let i = 0; i < elementsPics.length; i++) {
         elementPicsIndices[elementsPics[i].getAttribute("id")] = i;
         observerPics.observe(elementsPics[i]);
      }
   }, [openTab]);

   return (
      <>
         <h3 className="text-2xl tracking-widest my-8 border-b-4">{name}</h3>

         <div
            id={"carousel-" + name}
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 p-5"
         >
            {slides.map((slides) =>
               slides.type === "video" ? (
                  <div
                     key={slides.id}
                     id={"media-video-" + slides.id}
                     className="flex-none px-3 snap-always snap-center bg-[#F53DAE] rounded"
                  >
                     <p className="text-xl">
                        {slides.title}
                        <br />
                        {slides.description}
                     </p>
                     <YoutubeEmbed embedId={slides.url} title={slides.title} />
                  </div>
               ) : (
                  <img
                     key={slides.id}
                     id={"media-img-" + slides.id}
                     className="flex-none px-3 snap-always snap-center border sm:w-full md:w-1/2 lg:w-1/3 h-auto"
                     src={slides.url}
                     alt={slides.description}
                  />
               )
            )}
         </div>

         <Indicator
            slides={slides}
            currentVideo={currentVideo}
            currentPic={currentPic}
            name={name}
         />
      </>
   );
}
