import { useState,useEffect } from "react";
import { getJobs } from "../http.js";
import JobCard from "./JobCard.jsx";
import JobTable from "./JobTable.jsx";


export default function JobList() {
  const [jobList, setJobList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState();
  
  useEffect(()=>{
    async function fetchJobs(){
      setIsLoading(true);
      try {
        const jobs = await getJobs();
        setJobList(jobs);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchJobs();
  },[])

  if(error){
    return (
      <div className="h-fit w-fit p-3 bg-red-400 m-4">
        <p className="font-bold">Failed to load the jobs</p>
        <p>Error: {error.message}</p>
      </div>
    )
  }



  return (
    <>
    {/* Mobile view  */}
    <div className="md:hidden">
      <JobCard jobList ={jobList} isLoading={isLoading}/>
    </div>

    {/* Desktop view */}
    <div className="flex-1 pl-8 pr-8  md:block hidden">
     <JobTable jobList={jobList} isLoading={isLoading}/>
    </div>
    </>
  );
}
