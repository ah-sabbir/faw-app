'use client'

// import PostEditor from "@/components/Editor/PostEditor";
import { useState } from "react";
import Image from "next/image";
import BlogEditor from "@/components/Editor/Editor";
import parse from 'html-react-parser';
// import Toolbar from "@/components/Editor/Toolbar/Toolbar";



const NewBlogPage = () => {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [SlugExist, setSlugExist] = useState(false);
    const [postBody, setPostBody] = useState('');
    const [coverImg, setCoverImg] = useState('');

    const handleContentChange = (newPost:any) => {
        // console.log(e.target.value)
        setPostBody(newPost);
    };
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Handle form submission with the content
      console.log(postBody);
    };


    const handleOnTitleChange = (e:any):void =>{
        e.onkeydown
        setTitle(e.target.value);
        setSlug(e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
    }

    const handleKeyPress = async (e:any) =>{
        const res = await fetch("/api/posts/slug", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // Add any other headers you need, e.g., authorization headers
            },
            body: JSON.stringify({slug:slug})
          })
          const data = await res.json();
          if(data.ok){ setSlugExist(true)}
          else{setSlugExist(false)}
    }

    const imageHandler = async(e:any) =>{
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const res = await fetch("/api/upload", {
            method: 'POST',
            body: formData
          })
          const data = await res.json();
          setCoverImg(data.imgPath);
          console.log(data);

        // (e)=>console.log(e.target.files)
    }
    


  return (
    <>
        <div className="w-screen h-screen">
            <div className="w-full p-16">
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please Write Your Post Title Bellow and Press Enter to Check the slug</label>
                <input type="text" id="title" 
                       onChange={handleOnTitleChange} 
                       onKeyDown={handleKeyPress}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post Title" required/>
                <br/>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                    Slug <span className={SlugExist? `text-red`:`hidden`}>Please change the slug and make it unique</span>
                </label>
                <input type="text" id="slug" value={slug} onChange={(e)=>e} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post slug" required/>

                <div className="mb-3">
                    <label
                        htmlFor="formFileLg"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >Cover Image</label>
                    <input
                        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        id="formFileLg"
                        onChange={imageHandler}
                        type="file" />
                </div>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                    Content
                </label>
                <form onSubmit={handleSubmit} className="w-full h-auto mx-auto mt-8 p-4 border rounded-lg shadow-lg">
                    <BlogEditor value={postBody} onChange={handleContentChange} />
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Publish
                    </button>
                </form>
            </div>
            {
                // parse(content)
            }
        </div>
    </>
  )
}


export default NewBlogPage;
