import { useRef } from "react";
import AddJobModal from "./AddJobModal";

export default function AddJob() {
const dialog = useRef(); //This ref is attached to the modal element AddJobModal to open the modal progrmatically.

function handleAddJob(){
  dialog.current.showModal();   //showModal() method of the dialog opens up the dialog
}

  return (
    <>
      <button className="text-white bg-black m-8 p-4 md:w-fit hover:bg-gray-400 hover:text-black  cursor-pointer rounded-xl shadow-xl" onClick={handleAddJob}>
        +Add Application
      </button> 
       <AddJobModal ref={dialog}/>
    </>
  );
}
