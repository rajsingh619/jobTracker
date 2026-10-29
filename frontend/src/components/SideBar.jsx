import application from "../assets/application.png";
import interview from "../assets/interview.png";
import offer from "../assets/offer.png";

export default function SideBar() {
  return (
    <aside
      className="
      flex w-full
      justify-around
      rounded-2xl
      border-2 border-gray-400
      bg-gray-100
      p-2

      md:w-64
      md:shrink-0
      md:h-screen
      md:flex-col
      md:justify-start
      md:rounded-l-none
      md:rounded-r-2xl
    "
    >
      <div className="flex items-center gap-2 p-3 md:w-full">
        <img
          className="h-6 w-6 shrink-0"
          src={application}
          alt="application logo"
        />
        <p className="whitespace-nowrap text-sm md:text-lg">Applications</p>
      </div>

      <div className="flex items-center gap-2 p-3 md:w-full">
        <img
          className="h-6 w-6 shrink-0"
          src={interview}
          alt="interview logo"
        />
        <p className="whitespace-nowrap text-sm md:text-lg">Interviews</p>
      </div>

      <div className="flex items-center gap-2 p-3 md:w-full">
        <img className="h-6 w-6 shrink-0" src={offer} alt="offer logo" />
        <p className="whitespace-nowrap text-sm md:text-lg">Offers</p>
      </div>
    </aside>
  );
}
