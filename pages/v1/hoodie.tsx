/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React, { useState } from "react";
import Head from "next/head";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { metaDescription } from "..";

const V1Hoodie = () => {
  const [size, setSize] = useState("M");

  return (
    <>
      <Head>
        <title>Deno 1.0 Hoodie</title>

        {metaDescription({
          title: "Deno 1.0 Hoodie",
          description:
            "Sanoqli, Sifatli Deno 1.0 hoodie buyurtma qiling va bizni qo'llab quvvatlang.",
          url: "https://deno.land/v1/hoodie",
          image: "https://deno.land/v1_wide.jpg",
        })}
      </Head>
      <Header />
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <h1 className="text-3xl tracking-tight font-bold text-5xl leading-10">
          Deno 1.0 Hoodie
        </h1>
        <p className="text-gray-500 mt-3 leading-tight">Sanoqli, Sifatli</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div>
            <img src="/v1_hoodie_mock.png" alt="deno hoodie" />
          </div>
          <div>
            <p className="text-gray-900">
              Deno v1.0 maxsus hoodie uchun cheklangan vaqtni oldindan buyurtma
              qilish orqali Deno loyihasini qo'llab-quvvatlashga yordam bering.
              Ushbu qora zip-up xoodi taniqli Tokiolik xaker va rassom{" "}
              <a className="link" href="https://github.com/hashrock">
                hashrockning
              </a>{" "}
              v1.0 rasmlarini namoyish etadi.
            </p>
            <p className="text-gray-900 mt-4">
              Aniq bo'lish uchun: bu oldindan buyurtma. Bizda bunday mahsulotlar
              hali mavjud emas. Yuqoridagi rasm fotoshoplangan masxara. Biz
              21-mayga qadar buyurtma olamiz, shundan so'ng cheklangan nashr
              qilingan kaput endi sotilmaydi. Biz ularni iyulda etkazib berishni
              kutmoqdamiz.
            </p>
            <p className="text-gray-900 font-bold text-2xl leading-tight mt-4">
              $100
            </p>
            <p className="text-gray-500 mt-1 leading-tight">$15 yuk</p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="FRK9AR6WRLBBJ"
              />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="on0" value="Sizes" />

              <div className="mt-4 w-full">
                <label htmlFor="size" className="text-sm">
                  Hajm
                </label>
                <div className="mt-1">
                  <div className="rounded-md shadow-sm">
                    <select
                      id="size"
                      name="os0"
                      className="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      value={size}
                      onChange={({ target: { value: newSize } }) =>
                        setSize(newSize)
                      }
                    >
                      {["S", "M", "L", "XL", "XXL"].map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
              <div className="mt-2">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    name="submit"
                    type="submit"
                    className="flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    PayPal orqali sotib oling
                  </button>
                </span>
              </div>
              <div className="mt-6">
                <h4 className="text-gray-500">O'lchovlar jadvali (dyuymda)</h4>
                {/* Gildan Heavy Blend Adult Full Zip Hooded Sweatshirt 18600 */}
                <table className="table-auto mt-1 overflow-x-auto w-full rounded">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Hajmi</th>
                      <th className="border px-4 py-2">Kengligi</th>
                      <th className="border px-4 py-2">Uzunligi</th>
                      <th className="border px-4 py-2">Orqa hajm</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">S</td>
                      <td className="border px-4 py-2">19.25</td>
                      <td className="border px-4 py-2">27</td>
                      <td className="border px-4 py-2">33.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">M</td>
                      <td className="border px-4 py-2">21.25</td>
                      <td className="border px-4 py-2">28</td>
                      <td className="border px-4 py-2">34.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">L</td>
                      <td className="border px-4 py-2">23.25</td>
                      <td className="border px-4 py-2">29</td>
                      <td className="border px-4 py-2">35.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">XL</td>
                      <td className="border px-4 py-2">25.25</td>
                      <td className="border px-4 py-2">30</td>
                      <td className="border px-4 py-2">36.5</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">XXL</td>
                      <td className="border px-4 py-2">27.25</td>
                      <td className="border px-4 py-2">31</td>
                      <td className="border px-4 py-2">37.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default V1Hoodie;
