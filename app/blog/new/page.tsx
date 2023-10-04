'use client'

import PostEditor from "@/components/editor/PostEditor";
import { useState } from "react";
import Image from "next/image";
import Editor from "@/components/SlateEditor/Editor";



const NewBlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');
    const [SlugExist, setSlugExist] = useState(false);
    const [postBody, setPostBody] = useState('');


    const handleContentChange =(e:any):void=>{
        setPostBody(e.target.value);
    }

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
    


  return (
    <>
        <div className="w-screen h-screen">
            <div className="w-full p-16">
                <Editor/>
                {/* <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please Write Your Post Title Bellow and Press Enter to Check the slug</label>
                <input type="text" id="title" 
                       onChange={handleOnTitleChange} 
                       onKeyDown={handleKeyPress}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post Title" required/>
                <br/>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                    Slug <p className={SlugExist? `text-red`:`hidden`}>Please change the slug and make it unique</p>
                </label>
                <input type="text" id="slug" value={slug} onChange={(e)=>e} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post slug" required/>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    onChange={handleContentChange}
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 h-40 focus:outline-none focus:ring focus:ring-blue-200"
                    required
                >

                </textarea>
                <div className="h-64 w-96 relative"> 
                    <Image
                        src={"https://images.unsplash.com/photo-1546554303-9b8f4684a1ba?ixid=M3wyOTAzNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTU0NzEzNjh8&ixlib=rb-4.0.3"}
                        alt="Picture of the author"
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        className="" // just an example
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Publish
                </button> */}
            </div>
        </div>
    </>
  )
}


export default NewBlogPage;
