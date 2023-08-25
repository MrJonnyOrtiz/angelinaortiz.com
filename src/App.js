import ShowLogo from "./components/ShowLogo";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

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
