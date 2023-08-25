import candid from "../media/gAtMarket.jpeg";
import fb from "../media/fb.png";
import insta from "../media/insta.png";

export default function About({ onTab }) {
   return (
      <div id="about" className="text-center px-5 py-2 lg:px-32">
         <h2 className="text-2xl font-bold"> Hi! </h2>
         <p className="p-2">
            I'm Angelina and I'm so excited you visited my website! I have a
            passion for music, performing with Juliet - my cello - for&nbsp;
            {new Date().getFullYear() - 2015} years, and singing too! I enjoy
            spreading love through music.&nbsp;
            <a
               href="#contact"
               onClick={() => onTab(3)}
               className="hover:bg-black hover:text-white"
            >
               Contact
            </a>{" "}
            me if you have any questions. Visit me on my social media. I hope to
            hear from you soon!
         </p>
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

         <div className="relative left-1/2 -translate-x-1/2 md:w-1/2">
            <img src={candid} alt="Angelina playing at a farmer's market" />
         </div>
      </div>
   );
}
