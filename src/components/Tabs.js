import { useState } from "react";

import About from "../components/About";
import Media from "../components/Media";
import Contact from "../components/Contact";

export default function Tabs() {
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
