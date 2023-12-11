export default function Indicator({ slides, currentVideo, currentPic, name }) {
   return (
      <div className="flex justify-center gap-5 my-3">
         {slides.map((slide, index) => (
            <div
               key={"circle-" + index}
               className={`rounded-full w-5 h-5 cursor-pointer ${
                  name === "Videos"
                     ? index === currentVideo
                        ? "bg-white"
                        : "bg-gray-500"
                     : index === currentPic
                     ? "bg-white"
                     : "bg-gray-500"
               }`}
            ></div>
         ))}
      </div>
   );
}
