import Link from 'next/link';
import React from 'react'

const UpdateButton = (props:any) => {
    const {editor} = props;

    const handleUpdate = () => {
        console.log("updated");
    }
  return (
    <button 
    onClick={handleUpdate}
    className=" bg-green-700 rounded-sm"
    >
      <p className='w-full h-full  text-black font-bold p-2'>Update</p>
    </button>
  );
};
export default UpdateButton;