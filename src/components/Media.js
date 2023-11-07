import PropTypes from "prop-types";

const media = [
   {
      id: 1,
      title: "Bach Cello Suite #2",
      description: "In D minor Movement 4",
      url: "DWoSLEXn7IU",
   },
   {
      id: 2,
      title: "Beethoven Eyeglass Duo for Viola and Cello",
      description: "In E-Flat Major Movement 2",
      url: "MFeWeaQkFjQ",
   },
   {
      id: 3,
      title: "Bach Cello Suite #1",
      description: "In G Major Movement VI. Gigue",
      url: "N6YU3QZqW7M",
   },
   {
      id: 4,
      title: "Gabriel Faure",
      description: "Elegie",
      url: "vXGwJFF6iIw",
   },
];
const images = [
   {
      id: 1,
      title: "Angelina Headshot",
      alt: "Angelina Headshot",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProHeadshot2.webp",
   },
   {
      id: 2,
      title: "Angelina in the SCF Presidential Quartet, SCF Foundation Scholarship Luncheon 2022",
      alt: "Angelina in the SCF Presidential Quartet, SCF Foundation Scholarship Luncheon 2022",
      url: "https://gigi-website-pics.s3.amazonaws.com/g2022SCFfoundationScholarshipLuncheonQuartetPerformance.webp",
   },
   {
      id: 3,
      title: "Angelina and Juliet 1",
      alt: "Angelina and Juliet 1",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ1.webp",
   },
   {
      id: 4,
      title: "Angelina and Juliet 3",
      alt: "Angelina and Juliet 3",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ3.webp",
   },
   {
      id: 5,
      title: "Angelina and Juliet 4",
      alt: "Angelina and Juliet 4",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ4.webp",
   },
   {
      id: 6,
      title: "Angelina and Juliet 5",
      alt: "Angelina and Juliet 5",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ5.webp",
   },
   {
      id: 7,
      title: "Angelina and Juliet 2",
      alt: "Angelina and Juliet 2",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ2.webp",
   },
   {
      id: 8,
      title: "Angelina in the SCF Presidential Quartet",
      alt: "Angelina in the SCF Presidential Quartet",
      url: "https://gigi-website-pics.s3.amazonaws.com/gAtSCF.webp",
   },
   {
      id: 9,
      title: "Angelina at Outdoor Market",
      alt: "Angelina at Outdoor Market",
      url: "https://gigi-website-pics.s3.amazonaws.com/gAtMarket.webp",
   },
];

const YoutubeEmbed = ({ embedId, title }) => (
   <div className="mb-5">
      <iframe
         src={`https://www.youtube.com/embed/${embedId}`}
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         title={title}
         width="400"
         height="300"
      />
   </div>
);

YoutubeEmbed.propTypes = {
   embedId: PropTypes.string.isRequired,
};

export default function Media() {
   return (
      <div id="media" className="container mx-auto text-center px-5 lg:px-32">
         <h2 className="text-2xl mb-5 font-semibold">
            Juliet and I love to perform.
         </h2>
         <h3 className="text-xl tracking-widest mb-5 border-b-4">Videos</h3>
         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {media.map((media) => (
               <div key={media.id} className="place-self-center ">
                  <p className="text-xl ">
                     {media.title}
                     <br />
                     {media.description}
                  </p>
                  <YoutubeEmbed embedId={media.url} title={media.title} />
               </div>
            ))}
         </div>

         <h3 className="text-xl tracking-widest mb-5 border-b-4">Pics</h3>
         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
               <img
                  width="300"
                  height="400"
                  key={image.id}
                  src={image.url}
                  alt={image.alt}
               />
            ))}
         </div>
      </div>
   );
}
