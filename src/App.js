import { useState, useRef } from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";

import logo from "./media/gLogo.png";
// import portrait from "./media/gPortrait.jpeg";
import candid from "./media/gAtMarket.jpeg";
import fb from "./media/fb.png";
import insta from "./media/insta.png";
import footer from "./media/footer.png";

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

function ShowLogo() {
   return (
      <img src={logo} alt="Angelina Ortiz Cellist logo" className="-m-24 " />
   );
}

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

function About({ onTab }) {
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

function Media() {
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

function Contact() {
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [hasCaptchaToken, setHasCaptchaToken] = useState(false);

   const SECRET_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

   const captchaRef = useRef(null);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formDataObj = Object.fromEntries(new FormData(e.target).entries());

      // data validation
      const fullNameRegX =
         /([A-Z]+([']|[\.])?([A-Z,a-z,\.]*))\s(([A-Z]|['])+[A-Z,a-z]*)([-\s](([A-Z]|['])+[A-Z,a-z]*)*)?/g;

      if (fullNameRegX.test(formDataObj.name)) {
         // setError("");
         if (formDataObj.message.length > 3) {
            // setError("");
            if (hasCaptchaToken) {
               const token = captchaRef.current.getValue(); // returns token from ReCaptcha component

               captchaRef.current.reset();

               const raw = JSON.stringify({
                  ...formDataObj,
                  "g-recaptcha-response": token,
               });

               const options = {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: raw,
               };

               try {
                  // Contact test API
                  const response = await fetch(
                     "https://ydvvjbdup4.execute-api.us-east-1.amazonaws.com/Prod",
                     options
                  );

                  if (response.ok) {
                     // show success message
                     setSuccess("Your message was sent!");
                     setError("");

                     // reset form
                     setFullName("");
                     setEmail("");
                     setMessage("");
                     setHasCaptchaToken(false);

                     // const data = await response.json(); // the data is a message Id string, good for nothing
                  } else {
                     // show error message
                     setError(
                        "Sorry, something went wrong trying to send your message. The administrator has been informed. Please try again at a later time."
                     );
                     console.log(response);
                  }
               } catch (error) {
                  setError(
                     "Sorry, something went wrong trying to send your message. The administrator has been informed. Please try again at a later time."
                  );
               }
            } else {
               // the recaptcha was not checked
               setError("Please check the recaptcha box.");
            }
         } else {
            setError("Please enter a valid message.");
         }
      } else {
         setError("Please enter a valid full name.");
      }
   };

   function handleOnChange(value) {
      setHasCaptchaToken(true);
      setError("");
   }

   return (
      <div
         id="contact"
         className="grid grid-cols-1 content-start justify-items-center"
      >
         <div className="">
            {/* <!-- Contact form --> */}
            <form className="px-5" id="contact-us-form" onSubmit={handleSubmit}>
               {success.length > 0 && (
                  <h3 className="text-green-500 text-center font-bold mb-5">
                     {success}
                  </h3>
               )}
               {error.length > 0 && (
                  <h3 className="text-red-500 text-center font-bold mb-5">
                     {error}
                  </h3>
               )}

               <label htmlFor="name" className="block my-3">
                  <span className="block text-sm font-medium">
                     Your Full Name
                  </span>
                  <input
                     type="text"
                     className="text-black pl-3"
                     id="name"
                     name="name"
                     autoComplete="name"
                     value={fullName}
                     onChange={(e) => setFullName(e.target.value)}
                  />
               </label>
               <label className="block my-3">
                  <span className="block text-sm font-medium">Your Email</span>
                  <input
                     type="email"
                     className="peer text-black pl-3 pr-9"
                     name="email"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <p id="emailHelp" className="text-xs italic">
                     We'll never share your email with anyone else.
                  </p>
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                     Please provide a valid email address.
                  </p>
               </label>
               <label htmlFor="message" className="my-3">
                  <span className="block text-sm font-medium">
                     Your message
                  </span>
                  <textarea
                     className="text-black pl-3 pr-12"
                     id="message"
                     name="message"
                     rows="4"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
               </label>
               <div className="my-3">
                  <ReCAPTCHA
                     sitekey={SECRET_KEY}
                     ref={captchaRef}
                     onChange={handleOnChange}
                  />
               </div>
               <div className="mb-24">
                  <button
                     type="submit"
                     id="submitBtn"
                     className="rounded bg-white text-black font-bold py-2 px-4 my-3 hover:text-white hover:bg-gray-700 animate-pulse"
                     hidden={!hasCaptchaToken ? "hidden" : ""}
                  >
                     Send Message!
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

function Tabs() {
   const [openTab, setOpenTab] = useState(1);
   return (
      <>
         <div className="flex flex-wrap">
            <div className="w-full">
               <ul
                  className="flex mb-0 list-none flex-wrap gap-4 flex-row mx-5"
                  role="tablist"
               >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                     <a
                        className={
                           "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" +
                           (openTab === 1
                              ? "text-white bg-[#F53DAE]"
                              : "text-white  bg-black")
                        }
                        onClick={(e) => {
                           e.preventDefault();
                           setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                     >
                        About
                     </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                     <a
                        className={
                           "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal  " +
                           (openTab === 2
                              ? "text-white bg-[#F53DAE]"
                              : "text-white  bg-black")
                        }
                        onClick={(e) => {
                           e.preventDefault();
                           setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                     >
                        Media
                     </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                     <a
                        className={
                           "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                           (openTab === 3
                              ? "text-white bg-[#F53DAE]"
                              : "text-white  bg-black")
                        }
                        onClick={(e) => {
                           e.preventDefault();
                           setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                     >
                        Contact
                     </a>
                  </li>
               </ul>
               <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
                  <div className="px-4 py-5 flex-auto">
                     <div className="tab-content tab-space">
                        <div
                           className={openTab === 1 ? "block" : "hidden"}
                           id="link1"
                        >
                           <About onTab={setOpenTab} />
                        </div>
                        <div
                           className={openTab === 2 ? "block" : "hidden"}
                           id="link2"
                        >
                           <Media />
                        </div>
                        <div
                           className={openTab === 3 ? "block" : "hidden"}
                           id="link3"
                        >
                           <Contact />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

function Footer() {
   return (
      <div className="relative bg-white">
         <div className="absolute inset-0  bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
            <h2 className="px-5 py-2 text-xl md:text-2xl lg:text-4xl">
               Angelina Ortiz
            </h2>
            <h3 className="px-5 text-xl  md:text-2xl lg:text-4xl">Cellist</h3>
         </div>
         <img src={footer} alt="footer" className="relative w-full h-full" />
      </div>
   );
}

export default function App() {
   return (
      <div className=" bg-black text-white font-primary md:px-16 lg:px-32">
         <div className="flex justify-center ">
            <ShowLogo />
         </div>
         <div className="">
            <Tabs />
         </div>
         <div className="flex justify-center ">
            <Footer />
         </div>
      </div>
   );
}
