import { LATEST_POST } from "@/lib/blogPost/getPost";
import Image from "next/image";
import Link from "next/link";

const OneCategoryPage = async ()=>{

    const data = await LATEST_POST();

    const post = data?.attributes
  
    const imgHash = post?.img?.data?.attributes?.hash
    const ext = post?.img?.data?.attributes?.ext
    const imgURL = post?.img?.data?.attributes?.url.split("upload")[0]+"upload/f_auto/"+imgHash+ext

    return (
        <>
            <div className="min-h-screen pt-9 mt-9 flex flex-grow flex-col items-center justify-center bg-gray-50 gap-0 md:gap-5 md:flex-row">
                <Link href="/">
                    <div className="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow relative">
                        <h1 className="mb-4 text-4xl font-bold">Hello!</h1>
                        <p className="w-full text-gray-600 text-left">We're working on this page.</p>
                        <h2 className="w-full text-gray-600 text-center">GOTO HOME.&#128073;</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default OneCategoryPage;