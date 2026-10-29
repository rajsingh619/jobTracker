import Header from "./components/Header";
import JobList from "./components/JobList";
import SideBar from "./components/SideBar";
import AddJob from "./components/AddJob";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <SideBar />
        <div className="flex flex-col ">
          <AddJob/>
          <JobList />
        </div>
      </div>
    </>
  );
}

export default App;
