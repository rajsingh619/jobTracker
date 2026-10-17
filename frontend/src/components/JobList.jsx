export default function JobList() {
  return (
    <div className="flex-1 p-6">
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

        <tbody>
          <tr>
            <td className="font-semibold">Amazon</td>
            <td className="font-semibold">Software-Developer</td>
            <td>22.09.2025</td>
            <td>
              <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
                <option>Interview</option>
                <option>Applied</option>
                <option>Offer</option>
                <option>Withdrawn</option>
                <option>Rejected</option>
              </select>
            </td>
            <td className="wrap-normal">Check applications on the career portal and ask to them to t review it and also again select the career portal</td>
          </tr>
           <tr>
            <td className="font-semibold">Amazon</td>
            <td className="font-semibold">Software-Developer</td>
            <td>22.09.2025</td>
            <td>
              <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
                <option>Interview</option>
                <option>Applied</option>
                <option>Offer</option>
                <option>Withdrawn</option>
                <option>Rejected</option>
              </select>
            </td>
            <td className="wrap-normal">Check applications on the career portal and ask to them to t review it and also again select the career portal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
