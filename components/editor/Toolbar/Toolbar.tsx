import React, { useEffect, useRef, useState } from "react";
import defaultToolbarGroups from "./toolbarGroups.js";
import "./styles.css";
import UpdateButton from "../Elements/Updatebtn/UpdateButton";


const Toolbar = () => {
  const [el, setEl] = useState([]);
  const dragHandler = (e:Event) => {
    e.preventDefault();
    // setEl([e ,...el]);
    console.log(e.target);
  };

  const dropHandler = (e:Event) => {
    e.preventDefault();
    console.log(e);
    console.log(el);
    // e.target.appendChild(el);
  };

  return (
    <div className="w-full flex flex-wrap">
      {/* <div draggable onDrag={dragHandler} onDrop={dropHandler} className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div> */}
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">section</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
      <div draggable className=" bg-gray-400 rounded-sm w-14 h-full text-center p-1 m-1 cursor-pointer select-none">h1</div>
    </div>
  );
};

export default Toolbar;
