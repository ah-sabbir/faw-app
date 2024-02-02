import { LATEST_POST } from "@/lib/blogPost/getPost";
import Image from "next/image";
import Link from "next/link";

const NotFound = async ()=>{

    const data = await LATEST_POST();

    const post = data?.attributes
  
    const imgHash = post?.img?.data?.attributes?.hash
    const ext = post?.img?.data?.attributes?.ext
    const imgURL = post?.img?.data?.attributes?.url.split("upload")[0]+"upload/f_auto/"+imgHash+ext

    return (
        <>
            <div className="min-h-screen pt-9 mt-9 flex flex-grow flex-col items-center justify-center bg-gray-50 gap-0 md:gap-5 md:flex-row">
                <div className="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative">
                    <h1 className="mb-4 text-4xl font-bold">404</h1>
                    <p className="w-full text-gray-600 text-left">Oops! The page you are looking for could not be found.</p>
                    <h2 className="w-full text-gray-600 text-center">You may read.&#128073;</h2>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <div className="flex flex-row items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative">
                        <Image className="rounded-t-lg w-full object-cover" width={500} height={500} src={imgURL} alt="" />
                        <div className="p-5 absolute">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{post.title}</h5>
                            <p className="mb-3 font-normal text-gray-200">{post.content[0].children[0].text.substring(1,100)+"..."}</p>
                            <Link href={`/blog/${post.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#fcba00] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default NotFound;




{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}