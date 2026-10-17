import application from "../assets/application.png";
import interview from "../assets/interview.png";
import offer from "../assets/offer.png";

export default function SideBar() {
  return (
    <>
      <div className="flex justify-center border-2 border-gray-400 rounded-2xl  bg-gray-100 md:flex-col md:w-52 md:rounded-l-none md:h-screen md:justify-start">
        <div className="flex m-4 flex-col md:flex-row ">
          <img
            className="h-6 w-6 m-2"
            src={application}
            alt="application logo"
          />
          <p className="text-sm md:text-lg p-1">Applications</p>
        </div>
        <div className="flex m-4 flex-col md:flex-row">
          <img className="h-6 w-6 m-2" src={interview} alt="interview logo" />
          <p className="text-sm md:text-lg p-1">Interviews</p>
        </div>
        <div className="flex m-4 flex-col md:flex-row ">
          <img className="h-6 w-6 m-2" src={offer} alt="offer logo" />
          <p className="text-sm md:text-lg p-1">Offers</p>
        </div>
      </div>
    </>
  );
}
