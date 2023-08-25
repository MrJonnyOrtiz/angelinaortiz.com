import footer from "../media/footer.png";

export default function Footer() {
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
