import fb from "../media/fb.png";
import insta from "../media/insta.png";

export default function About({ onTab }) {
   return (
      <div id="about" className="container">
         <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[300px_1fr)] gap-4">
            <div className="md:col-span-2 p-3">
               <h2 className="text-2xl text-center font-bold col-span-2 md:py-3">
                  Hello and welcome!
               </h2>
            </div>
            <div className="md:row-span-2 md:m-5 lg:m-10 xl:m-12">
               <div className="md:text-xl text-center md:font-bold md:py-3">
                  <h3>
                     <p className="md:pb-5">
                        I'm Angelina and I'm so excited you visited my website!
                     </p>
                     <p className="md:pb-5">
                        I have a passion for music, performing with{" "}
                        <span className="italic">Juliet</span> - my cello -
                        for&nbsp;
                        {new Date().getFullYear() - 2015} years, and singing
                        too!
                     </p>
                     <p className="md:pb-5">
                        I enjoy spreading love through music.
                     </p>
                  </h3>
               </div>
               <div className="md:text-xl text-center md:font-bold md:pb-5">
                  <h3>
                     <a
                        href="#contact"
                        onClick={() => onTab(3)}
                        className="hover:underline"
                     >
                        Contact
                     </a>{" "}
                     me if you have any questions. Visit me on my social media.
                     I hope to hear from you soon!
                  </h3>
               </div>
               <div className="flex flex-row justify-center mb-3">
                  <a
                     href="https://www.facebook.com/angelwingsortiz/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={fb} alt="" />
                  </a>
                  <a
                     href="https://www.instagram.com/angelinalacherie/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={insta} alt="" />
                  </a>
               </div>
            </div>
            <div className="relative left-1/2 -translate-x-1/2 md:w-1/2 py-3">
               <img
                  className=""
                  src="https://gigi-website-pics.s3.amazonaws.com/gProHeadshot1.webp"
                  alt="Angelina headshot"
               />
            </div>
         </div>
      </div>
   );
}
