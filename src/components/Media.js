import Carousel from "./Carousel";

const media = [
   {
      id: 1,
      type: "video",
      title: "Bach Cello Suite #2",
      description: "In D minor Movement 4",
      url: "DWoSLEXn7IU",
   },
   {
      id: 2,
      type: "video",
      title: "Beethoven Eyeglass Duo for Viola and Cello",
      description: "In E-Flat Major Movement 2",
      url: "MFeWeaQkFjQ",
   },
   {
      id: 3,
      type: "video",
      title: "Bach Cello Suite #1",
      description: "In G Major Movement VI. Gigue",
      url: "N6YU3QZqW7M",
   },
   {
      id: 4,
      type: "video",
      title: "Gabriel Faure",
      description: "Elegie",
      url: "vXGwJFF6iIw",
   },
];
const images = [
   {
      id: 5,
      type: "image",
      title: "Angelina Headshot",
      description: "Angelina Headshot",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProHeadshot2.webp",
   },
   {
      id: 6,
      type: "image",
      title: "Angelina in the SCF Presidential Quartet, SCF Foundation Scholarship Luncheon 2022",
      description:
         "Angelina in the SCF Presidential Quartet, SCF Foundation Scholarship Luncheon 2022",
      url: "https://gigi-website-pics.s3.amazonaws.com/g2022SCFfoundationScholarshipLuncheonQuartetPerformance.webp",
   },
   {
      id: 7,
      type: "image",
      title: "Angelina and Juliet 1",
      description: "Angelina and Juliet 1",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ1.webp",
   },
   {
      id: 8,
      type: "image",
      title: "Angelina and Juliet 3",
      description: "Angelina and Juliet 3",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ3.webp",
   },
   {
      id: 9,
      type: "image",
      title: "Angelina and Juliet 4",
      description: "Angelina and Juliet 4",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ4.webp",
   },
   {
      id: 10,
      type: "image",
      title: "Angelina and Juliet 5",
      description: "Angelina and Juliet 5",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ5.webp",
   },
   {
      id: 11,
      type: "image",
      title: "Angelina and Juliet 2",
      description: "Angelina and Juliet 2",
      url: "https://gigi-website-pics.s3.amazonaws.com/gProGAndJ2.webp",
   },
   {
      id: 12,
      type: "image",
      title: "Angelina in the SCF Presidential Quartet",
      description: "Angelina in the SCF Presidential Quartet",
      url: "https://gigi-website-pics.s3.amazonaws.com/gAtSCF.webp",
   },
   {
      id: 13,
      type: "image",
      title: "Angelina at Outdoor Market",
      description: "Angelina at Outdoor Market",
      url: "https://gigi-website-pics.s3.amazonaws.com/gAtMarket.webp",
   },
];

export default function Media({ openTab }) {
   return (
      <div id="media" className="container mx-auto text-center px-5 lg:px-32">
         <h2 className="text-2xl mb-5 font-semibold">
            Juliet and I love to perform.
         </h2>
         <Carousel slides={media} name="Videos" openTab={openTab} />

         <Carousel slides={images} name="Pics" openTab={openTab} />
      </div>
   );
}
