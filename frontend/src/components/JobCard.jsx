export default function JobCard({ jobList,isLoading }) {
  return (
    <>
    {isLoading && <p>Jobs are loading....</p>}
      {jobList.map((jobs) => (
        <article
          className="rounded-lg border border-gray-200 bg-white p-3 m-4"
          key={jobs.jobId}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100">
                {jobs.jobCompany?.charAt(0)}
              </div>

              <span className="truncate font-medium">{jobs.jobCompany}</span>
            </div>

            <span className="shrink-0 rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
              {jobs.jobStatus}
            </span>
          </div>
          <div className="mt-2">
        <p className="text-sm font-medium">
          {jobs.jobRole}
        </p>

       
      </div>

      {/* Application details */}
      <div className="mt-3 space-y-1 text-xs">
        <div className="flex gap-3">
          <span className="w-12 shrink-0 text-gray-500">
            Applied :
          </span>
          <span>{jobs.jobApplicationDate}</span>
        </div>

        <div className="flex gap-3">
          <span className="w-16 shrink-0 text-gray-500">
            Next step :
          </span>
          <span>{jobs.jobNextStep}</span>
        </div>
      </div>
        </article>
      ))}
    </>
  );
}
