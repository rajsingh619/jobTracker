import headerLogo from "../assets/headerLogo.png";


export default function Header() {
  return (
    <>
      <div className="flex ">
        <img
          src={headerLogo}
          alt="Header logo"
          className="m-4 mr-2 h-8 md:h-10"
        />
        <p className="m-4 ml-0 text-md md:text-xl font-bold font-michroma">JobTracker</p>
      </div>
    </>
  );
}
