import PropTypes from "prop-types";

const media = [
   {
      id: 1,
      title: "Media 1",
      description: "Media 1",
      url: "0hOTJJyKVBM",
   },
   {
      id: 2,
      title: "Media 2",
      description: "Media 2",
      url: "0hOTJJyKVBM",
   },
   {
      id: 3,
      title: "Media 3",
      description: "Media 3",
      url: "0hOTJJyKVBM",
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
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-72">
            {media.map((media) => (
               <div key={media.id} className="place-self-center ">
                  <p className="text-sm">{media.title}</p>
                  <p className="text-sm">{media.description}</p>
                  <YoutubeEmbed embedId={media.url} title={media.title} />
               </div>
            ))}
         </div>
      </div>
   );
}