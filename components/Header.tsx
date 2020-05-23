/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React, { useState } from "react";
import Link from "next/link";
import Transition from "./Transition";

const Header = ({ subtitle }: { subtitle?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative py-6">
      <nav className="max-w-screen-lg mx-auto flex items-center justify-between px-3">
        <Link href="/">
          <a className="block flex items-center">
            <img className="h-10 w-auto sm:h-12 my-2" src="/logo.svg" alt="" />
            <div className="ml-5 flex flex-col justify-center">
              <div className="font-bold text-gray-900 leading-tight text-2xl sm:text-3xl tracking-tight">
                Deno
              </div>
              {subtitle && (
                <div className="font-normal text-sm sm:text-lg leading-tight tracking-tight">
                  {subtitle}
                </div>
              )}
            </div>
          </a>
        </Link>
        <div className="-mr-2 flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex md:ml-10 items-end">
          <Link href="/" as="/#installation">
            <a className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              O'rnatish
            </a>
          </Link>
          <Link href="/[identifier]" as="/manual">
            <a className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Qo'llanma
            </a>
          </Link>
          <a
            href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts"
            className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Yordamchi API
          </a>
          <Link href="/[identifier]" as="/std">
            <a className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Standart Modullar
            </a>
          </Link>
          <Link href="/x">
            <a className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Uchinchi Darajali Modullar
            </a>
          </Link>
          <a
            href="tg://resolve?domain=denoland_uz"
            className="ml-10 text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            <span className="sr-only">Telegram</span>
            <svg
              className="h-6 w-6 inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Telegram</title>
              <path
                fillRule="evenodd"
                d="M20.572266 3.0117188C20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875C19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312L3.2695312 9.9960938C2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672C2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062L6.9472656 14.757812C7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906C8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594C9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812C10.165656 20.007812 10.484625 19.801641 10.640625 19.681641L12.970703 17.710938L15.800781 20.328125C15.909781 20.439125 16.486719 21 17.261719 21C18.228719 21 18.962234 20.195016 19.115234 19.416016C19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625C22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531C21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875C19.533156 7.061875 17.478016 17.378234 17.166016 18.865234L13.029297 15.039062L10.222656 17.416016L11 14.375C11 14.375 16.362547 8.9468594 16.685547 8.6308594C16.945547 8.3778594 17 8.2891719 17 8.2011719C17 8.0841719 16.939781 8 16.800781 8C16.675781 8 16.506016 8.1197812 16.416016 8.1757812C15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391L4.53125 11.636719L6.21875 10.927734C10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>

      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link href="/">
                  <a className="block flex items-center">
                    <img
                      className="h-10 w-auto sm:h-12 my-2"
                      src="/logo.svg"
                      alt=""
                    />
                    <div className="ml-5 flex flex-col justify-center">
                      <div className="font-bold text-gray-900 leading-tight text-2xl sm:text-3xl tracking-tight">
                        Deno
                      </div>
                      {subtitle && (
                        <div className="font-normal text-sm sm:text-lg leading-tight tracking-tight">
                          {subtitle}
                        </div>
                      )}
                    </div>
                  </a>
                </Link>{" "}
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-4 pb-3">
                <Link href="/" as="/#installation">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    O'rnatish
                  </a>
                </Link>
                <Link href="/[identifier]" as="/manual">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Qo'llanma
                  </a>
                </Link>
                <a
                  href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Yordamchi API
                </a>
                <Link href="/[identifier]" as="/std">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Standart Modullar
                  </a>
                </Link>
                <Link href="/x">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Uchinchi Darajali Modullar
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
