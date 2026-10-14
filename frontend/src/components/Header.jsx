import headerLogo from "../assets/headerLogo.png";
import application from "../assets/application.png";
import interview from "../assets/interview.png";
import offer from "../assets/offer.png";

export default function Header() {
  return (
    <>
      <div className="flex ">
        <img
          src={headerLogo}
          alt="Header logo"
          className="m-4 mr-2 h-8 md:h-12"
        />
        <p className="m-4 ml-0 text-xl md:text-3xl font-bold ">JobTracker</p>
      </div>
      <div className="flex justify-center border-2 border-gray-400 rounded-2xl bg-gray-200 md:flex-col md:w-fit md:h-screen md:justify-start">
        <div className="flex m-4 flex-col md:flex-row ">
          <img className="h-6 w-6 m-2" src={application} alt="application logo" />
          <p className="text-sm md:text-lg">Applications</p>
        </div>
        <div className="flex m-4 flex-col md:flex-row">
          <img className="h-6 w-6 m-2" src={interview} alt="interview logo" />
          <p className="text-sm md:text-lg">Interviews</p>
        </div>
        <div className="flex m-4 flex-col md:flex-row ">
          <img className="h-6 w-6 m-2" src={offer} alt="offer logo" />
          <p className="text-sm md:text-lg">Offers</p>
        </div>
      </div>
    </>
  );
}
