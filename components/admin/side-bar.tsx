import { CreditCardIcon, DocumentIcon, DocumentPlusIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Fragment, forwardRef } from "react";

import logo from "@/assets/app_icon.png";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

const SideBar = forwardRef(({ showNav }: any, ref) => {
  // const router = useRouter();
  const router = usePathname();
  const pathname = usePathname();
  // console.log(router.pathname);

  return (
    <Transition
    as={Fragment}
    show={showNav}
    enter="transform transition duration-[400ms]"
    enterFrom="-translate-x-full"
    enterTo="translate-x-0"
    leave="transform duration-[400ms] transition ease-in-out"
    leaveFrom="translate-x-0"
    leaveTo="-translate-x-full"
  >
    <div className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <Image
            className="w-32 h-auto"
            src={logo}
            height={1024}
            width={1024}
            alt="Fashion Anywhere Logo"
          />
        </picture>
      </div>
      <Menu as="div" id="menu" className="flex flex-col">
        <Menu.Item
          as="span"
          disabled
          className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
        >
          Content Management
        </Menu.Item>

      
        <Link href="/posts">
          <Menu.Item as="div"
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <DocumentIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Posts</p>
            </div>
          </Menu.Item>
        </Link>
        <Link href="/posts/create">
          <Menu.Item as="div"
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <DocumentPlusIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Create Post</p>
            </div>
          </Menu.Item>
        </Link>
        <Link href="/categories">
          <Menu.Item as="div"
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/categories"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <DocumentIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Categories</p>
            </div>
          </Menu.Item>
        </Link>

        <Menu.Item
          as="span"
          disabled
          className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
        >
          Account Management
        </Menu.Item>
        <Link href="/users">
          <Menu.Item as="div"
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/users"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Users</p>
            </div>
          </Menu.Item>
        </Link>

        <Link href="/account">
          <Menu.Item as="div"
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/account"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </Menu.Item>
        </Link>
        <Link href="/billing">
          <Menu.Item as="div"
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </Menu.Item>
        </Link>
      </Menu>
    </div>
  </Transition>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;