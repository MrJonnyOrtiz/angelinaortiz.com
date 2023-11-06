import PropTypes from "prop-types";

import gAtSCF from "../media/gAtSCF.jpeg";

const media = [
   {
      id: 1,
      title: "Bach Cello Suite #2",
      description: "In D minor Movement 4",
      url: "DWoSLEXn7IU",
   },
];

const YoutubeEmbed = ({ embedId, title }) => (
   <div className="">
      <iframe
         src={`https://www.youtube.com/embed/${embedId}`}
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         title={title}
      />
   </div>
);

YoutubeEmbed.propTypes = {
   embedId: PropTypes.string.isRequired,
};

export default function Media() {
   return (
      <div id="media" className="container mx-auto text-center px-5 lg:px-32">
         <h2 className="text-xl mb-5 font-semibold">
            Juliet and I love to perform.
         </h2>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {media.map((media) => (
               <div key={media.id} className="place-self-center ">
                  <p className="text-sm">{media.title}</p>
                  <p className="text-sm">{media.description}</p>
                  <YoutubeEmbed embedId={media.url} title={media.title} />
               </div>
            ))}
            <img
               src={gAtSCF}
               alt="Juliet and I performing for the SCF Presidential Quartet"
            />
         </div>
      </div>
   );
}
