
'use client'
import { getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import {
  FacebookLoginButton,
  TwitterLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { revalidatePath } from "next/cache";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/EmailSigninButton";


const AccessPage = () => {
    const session = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (session?.status === "authenticated") {
        console.log("Authenticated");
        router.push("/");
      }
    }, [session?.status, router]);
  
    const socialAction = (action: string) => {
      setIsLoading(true);
  
      signIn(action, { redirect: false })
        .then((callback) => {
          if (callback?.error) {
            return;
          }
  
          if (callback?.ok) {
            router.push("/");
          }
        })
        .finally(() => setIsLoading(false));
    };

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="my-24 sm:mx-auto sm:max-w-4xl px-5">
      <div className="bg-white shadow sm:rounded-lg flex gap-5 justify-between h-auto overflow-hidden">
        <div className="mt-6 flex gap-2 flex-col justify-center items-center mx-auto">
          <Link href={"/"} className="mb-5">
            <h1 className="text-3xl font-extrabold text-secondary">
              Explore
              <span className="text-primary">Today!</span>
            </h1>
          </Link>

          <form method="post" onSubmit={submitHandler} className="mt-5">
                <div className="mb-6">
                    <input type="email" name="email" id="email" className="bg-gray-50 border focus:border-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                </div>
                <div className="mb-6">
                    <input type="password" name="password" id="password" className="bg-gray-50 border focus:border-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******" required/>
                </div>
                <Button
                variant='outline'
                color='gray'
                className='mt-3 w-full'
                >
                Continue with email
                </Button>
            </form>


          <span className="text-sm">
            Log with the links below
          </span>
          <GoogleLoginButton
            onClick={() => socialAction("google")}
          />
          <FacebookLoginButton />
          <TwitterLoginButton />
        </div>

        <Image
          src="https://media.istockphoto.com/id/1363627613/photo/multiracial-group-of-young-friends-bonding-outdoors.webp?b=1&s=170667a&w=0&k=20&c=P1HGT160p5KKWMmSlH_q4bs_5zKtRkHwjLCNgLcsRDc="
          height={500}
          width={500}
          alt="Sign up form image"
          className="object-cover lg:block hidden"
        />
      </div>
    </div>
  );
};

export default AccessPage;