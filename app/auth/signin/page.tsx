"use client";
import Button from "@/components/EmailSigninButton";
// import Button from '@/components/elements/Button';
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const getImg = async () => {
    const res = await fetch("https://api.unsplash.com/photos/random?query=fashion&client_id=n8M49eGl008_oU9oF25eRVYaZDBrH-ajpHX4un8OwYg");
    const data = await res.json();
    return data;
    }


const LoginPage = () => {
  
  const email = useRef("");
  const pass = useRef("");

  const [Source, setSource] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const res = getImg();
    res.then((data) => {
        // console.log("🚀 ~ file: page.tsx:27 ~ res.then ~ data:", data)
        const url:string = data.urls.regular;
        setSource(url || "https://cdn.pixabay.com/photo/2023/04/07/09/19/woman-7905926_1280.jpg");
        setIsLoading(false);
    }).then((error)=>{
        console.log(error);
    })

  }, [])

  const onSubmit = async () => {
    try {
        console.log("login button clicked");
        const result = await signIn("credentials", {
          email: email.current,
          password: pass.current,
          redirect: true,
          callbackUrl: "/admin",
        });
      
        // Handle the result or perform any necessary actions
        console.log("Sign-in successful:", result);
      } catch (error) {
        console.error("Sign-in error:", error);
      }
      
  };
  return (

        <section className=" bg-gray-50 min-h-screen flex items-center justify-center">
        <div className=" bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div className="md:w-1/2 px-8">
            {/* <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
            <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p> */}

            {/* <div className='sm:rounded-5xl sm:mx-0 sm:flex-none sm:p-24 md:flex-auto md:rounded-5xl  md:-mx-4 md:mt-10 bg-white px-4 py-10 shadow-2xl shadow-gray-900/10'> */}
            {/* -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 */}
                <form>
                    <div className='space-y-2'>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="email"
                        name="email"
                        placeholder="hello@me.com" 
                        autoComplete="email"
                        required/>
                    </div>
                    <Button
                    type='submit'
                    variant='outline'
                    color='gray'
                    className='mt-3 w-full'
                    >
                    Continue with email
                    </Button>
                </form>
            {/* </div> */}
            <div className="mt-6 grid grid-cols-3 items-center justify-center text-gray-400">
                <hr className="border-gray-400"/>
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400"/>
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Login with Google
            </button>

            <div className="mt-3 text-xs flex justify-center items-center text-[#002D74]">
                <div className="mt-5 text-xs border-t border-[#002D74] py-4 text-[#002D74]">
                    <a href="#">Forgot your password?</a>
                </div>
            </div>
            </div>

            {/* <!-- image --> */}
            <div className="md:block hidden w-full spinner-container">
            {
                !isLoading? (
                    <Image 
                    className="rounded-2xl" 
                    alt="side image" 
                    width={500}
                    height={500}
                    src={Source || "https://cdn.pixabay.com/photo/2023/04/07/09/19/woman-7905926_1280.jpg"}
                    priority={false}
                    loading="lazy"
                    style={{ visibility: isLoading ? 'hidden' : 'visible' }}
                    />
                ): <div className="spinner w-[500px] h-[500px]"></div>
                
            }
            </div>
        </div>
        </section>
  );
};

export default LoginPage;