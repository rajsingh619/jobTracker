import { X } from "lucide-react";

export default function AddJobModal({ ref }) {
  return (
    <dialog
      ref={ref}
      className="fixed inset-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl w-full md:w-1/2"
    >
      <div className="flex flex-col gap-2  p-4 md:p-8">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-2xl font-bold">Add Application</h3>
          <form method="dialog">
            <button className="font-light text-gray-400 hover:text-gray-800 cursor-pointer">
              <X size={22} strokeWidth={1.8} />
            </button>
          </form>
        </div>
        <p className="font-light text-sm">
          Keep Every opportunity in one place
        </p>
        <p className="font-light text-sm">*Required Fields</p>
      </div>
      <div className="grid md:grid-cols-2  gap-4 p-4 md:p-8 pt-0 md:pt-0">
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">
            Company*
          </label>
          <input className="border-1 border-gray-400 rounded-sm" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">
            Role*
          </label>
          <input className="border-1 border-gray-400 rounded-sm" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">
            Date*
          </label>
          <input className="border-1 border-gray-400 rounded-sm" type="date" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">
            Status*
          </label>
          <input className="border-1 border-gray-400 rounded-sm" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">
            Next Step
          </label>
          <input className="border-1 border-gray-400 rounded-sm" type="text" />
        </div>
      </div>
      <div className="flex justify-end p-8 pt-0 gap-4">
        <button className="border-1 p-2 rounded-md font-semibold border-gray-400 cursor-pointer">
          Cancel
        </button>
        <button className="border-1 font-semibold bg-black text-white p-2 rounded-md cursor-pointer">
          Submit
        </button>
      </div>
    </dialog>
  );
}
