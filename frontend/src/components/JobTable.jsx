export default function JobTable({ jobList,isLoading }) {
  return (
    <>
     <table className="w-full border-separate border-spacing-x-0 border-spacing-y-3 table-fixed">
      <thead className="">
        <tr className="bg-gray-200 border-collapse border-spacing-0">
          <th className="text-left p-3">Company</th>
          <th className="text-left p-3">Role</th>
          <th className="text-left p-3">Date Applied</th>
          <th className="text-left p-3">Status</th>
          <th className="text-left p-3">Next Step</th>
        </tr>
      </thead>
       {isLoading && <p>The jobs are loading</p>}

      <tbody>
        {jobList.map((jobs) => (
          <tr key={jobs.jobId}>
            <td className="font-semibold">{jobs.jobCompany}</td>
            <td className="font-semibold">{jobs.jobRole}</td>
            <td className="font-semibold">{jobs.jobApplicationDate}</td>
            <td className="font-semibold">{jobs.jobStatus}</td>
            <td>{jobs.jobNextStep}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
   
    
  );
}
