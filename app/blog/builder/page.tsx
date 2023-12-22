'use client'
import React, { ReactEventHandler, use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from 'next/navigation'
import { redirect } from "next/navigation";
import moment from "moment";
import { useSession } from "next-auth/react";
import { EditorModule } from "@/lib/builder/editor";
import slugify from "slugify";
import GetPostBySlug from "@/lib/blogPost/getPostBySlug";

const Editor = dynamic(()=> import("@/components/builder/editor").then(mod=>mod.Editor),{ssr:false})




const Write = () => {
  const session = useSession();
  const router = useRouter();
  const [error, setError] = useState<string>();


  // if (!(session?.status === "authenticated")) {
  //     router.push("/");
  // }

  // Define the state variables
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  // Define the upload function
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file as any);
      console.log(file);
    } catch (err) {
      console.log(err);
    }
  };

  // Define the handleClick function to handle the form submission
  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("clicked save to draft");
    // Upload the image and get the filename
    // const imgUrl = await upload();
    console.log(value)

  };

  useEffect(() => {
    // console.log("blockToHTML", value)
  },[value]);

  useEffect(() => {
    const s = slugify(title, {
      lower: true,
      strict: true
    });
    setSlug(s);
  },[title])

  // const handleSlugGenerator = async () => {
    // const res = await fetch("/api/slug", {
    //   method: "POST",
    //   body: JSON.stringify({slug: slug})
    // });

  return (
    <>

    <div className="flex flex-row-reverse p-2 m-2 gap-5">
    <div className="menu min-w-[200px]">
        <div className="item flex flex-col fixed">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" onChange={(e:any)=> setFile(e.target.files[0])} />
              </label>
          </div> 
          <div className="buttons flex flex-col">
            <button className='bg-[#ce8460] text-white p-2 rounded-md m-2' onClick={()=> console.log('check if slug is exist or not')}>Slug Generator</button>
            <button className='bg-[#ce8460] text-white p-2 rounded-md m-2' onClick={handleClick}>Publish</button>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <input
          id="title"
          className="w-full p-2 mb-2 border border-solid border-[gray] focus:outline-none"
          type="text"
          value={title}
          placeholder = "blog title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editor-container">
          <Editor 
            onChange = {(str)=>{setValue(str)}}
            initialContent = {""}
            
          />
          {/* <ReactQuill
            // ref = {quillRef as any}
            modules={EditorModule}
            className="editor h-full"
            theme="snow"
            value={value}
            onChange={setValue}
          /> */}
        </div>
      </div>
    </div>
    </>
  );
};

// const Write = () => {
//   return (
//     <div>
//       <h1>Write</h1>
//     </div>
//   );
// }

export default Write;