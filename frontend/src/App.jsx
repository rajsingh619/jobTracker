import Header from "./components/Header";
import JobList from "./components/JobList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <JobList />
      </div>
    </>
  );
}

export default App;
