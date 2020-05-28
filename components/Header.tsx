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
            href="https://t.me/denoland_bot"
            className="ml-10 text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            <span className="sr-only">Telegram</span>
            <svg
              className="h-6 w-6 inline"
              fill="currentColor"
              viewBox="0 0 50 50"
            >
              <title>Telegram Assistant</title>
              <path
                fillRule="evenodd"
                d="M25 2C12.317 2 2 12.318 2 25C2 37.682 12.317 48 25 48C33.07553 48 40.186334 43.812904 44.291016 37.5L44.292969 37.5C46.634529 33.898373 48 29.606729 48 25C48 12.318 37.683 2 25 2 z M 28 21C34.061 21 38.210234 24.960516 41.240234 27.853516C41.899234 28.482516 42.491781 29.043531 43.050781 29.519531C42.103026 29.84545 41.222265 30.305755 40.359375 30.789062C40.296338 30.746702 40.244066 30.710888 40.179688 30.667969C38.253484 29.383833 35.738095 28 32 28C28.984934 28 26.416689 29.160021 24.044922 30.613281C23.30148 30.077721 22.557351 29.519925 21.800781 28.945312C20.325781 27.825312 18.831531 26.69275 17.269531 25.71875C20.376531 23.12475 23.577 21 28 21 z M 9 25C10.665 25 12.241813 25.426516 13.757812 26.103516C11.177812 28.353516 8.4927813 30.626328 5.1757812 31.861328C4.5867812 30.166328 4.2101719 28.378531 4.0761719 26.519531C5.0021719 25.996531 7.024 25 9 25 z M 15.666016 27.09375C17.359016 28.08875 18.986844 29.321063 20.589844 30.539062C21.140804 30.957387 21.703206 31.365408 22.261719 31.777344C21.817849 32.07873 21.366805 32.376467 20.931641 32.677734C20.071517 33.273205 19.22411 33.853217 18.376953 34.388672C16.015086 33.041117 13.576332 32 11 32C10.367427 32 9.7942504 32.030996 9.25 32.074219C11.473217 30.727374 13.419045 29.054096 15.3125 27.402344C15.4305 27.299344 15.549016 27.19675 15.666016 27.09375 z M 32 30C34.868609 30 36.734444 30.87503 38.386719 31.910156C36.505867 32.997986 34.519837 34 32 34C29.88499 34 27.881353 33.117704 25.882812 31.861328C27.826888 30.76544 29.808826 30 32 30 z M 45.097656 31.070312C44.903125 31.712892 44.668884 32.337991 44.416016 32.953125C43.69767 32.835638 43.002946 32.484206 42.263672 32.033203C43.181661 31.575928 44.109862 31.210207 45.097656 31.070312 z M 24.003906 33.019531C25.272947 33.871419 26.575347 34.615283 27.925781 35.150391C26.572971 35.878453 25.303045 36.878347 24.083984 37.935547C23.407109 37.520673 22.728098 37.099899 22.041016 36.658203C21.456372 36.282361 20.863352 35.909818 20.271484 35.537109C20.876146 35.134053 21.480706 34.729103 22.068359 34.322266C22.719781 33.871281 23.361887 33.440979 24.003906 33.019531 z M 40.253906 33.142578C41.278114 33.84495 42.325194 34.495192 43.541016 34.804688C43.267798 35.3195 42.973781 35.8202 42.660156 36.308594C42.581472 36.394206 42.403593 36.589831 41.953125 36.990234C41.420079 36.963672 39.889082 36.327743 38.144531 35.580078C37.691472 35.38591 37.217304 35.188669 36.724609 35.001953C37.981013 34.475976 39.113785 33.814655 40.173828 33.189453C40.200831 33.173519 40.226943 33.158481 40.253906 33.142578 z M 11 34C12.683144 34 14.463241 34.639979 16.302734 35.578125C14.617569 36.43281 12.885509 37 11 37C8.5524101 37 6.8987947 35.470196 6.7597656 35.337891C6.6177048 35.08798 6.4835717 34.834247 6.3515625 34.578125C7.2086255 34.319011 8.672039 34 11 34 z M 32 36C33.75 36 35.637163 36.683505 37.355469 37.419922C38.272945 37.813126 39.105482 38.227506 39.912109 38.537109C38.024037 39.759774 35.302502 41 32 41C30.078527 41 28.033111 40.181492 25.914062 39.017578C28.021744 37.305236 30.14436 36 32 36 z M 18.386719 36.732422C19.235156 37.240108 20.093726 37.785559 20.958984 38.341797C21.470881 38.670873 21.990468 38.996403 22.507812 39.324219C21.148803 40.561386 19.867421 41.772958 18.734375 42.644531C17.613021 43.507112 16.645941 43.965066 16.056641 43.990234C13.415908 42.737721 11.077412 40.948822 9.1796875 38.765625C9.7435708 38.900844 10.342459 39 11 39C13.774889 39 16.173027 38.020914 18.386719 36.732422 z M 24.292969 40.419922C26.757437 41.859108 29.303534 43 32 43C33.877818 43 35.587209 42.654621 37.09375 42.136719C33.671682 44.561418 29.504474 46 25 46C22.831788 46 20.742806 45.664695 18.775391 45.050781C19.168199 44.803511 19.559955 44.532907 19.953125 44.230469C21.237354 43.2426 22.558035 41.980088 23.921875 40.740234C24.044169 40.629058 24.170016 40.530033 24.292969 40.419922 z"
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
