/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import Footer from "../components/Footer";
import { entries } from "../util/registry_utils";
import stdVersions from "../deno_std_versions.json";
import { NextPage, GetStaticProps } from "next";
import InlineCode from "../components/InlineCode";
import Header from "../components/Header";

interface SimpleEntry {
  name: string;
  desc: string;
}
interface HomeProps {
  thirdPartyEntries: SimpleEntry[];
  latestStd: string;
}

export const metaDescription = ({
  title,
  description,
  image,
  url = "https://deno.land/",
}: {
  title: string;
  description: string;
  url?: string;
  image: string;
}) => [
  <meta name="title" key="title" content={title} />,
  <meta name="description" key="description" content={description} />,
  <meta name="twitter:card" key="twitter:card" content="summary_large_image" />,
  <meta property="og:type" key="og:type" content="website" />,
  <meta property="og:url" key="og:url" content={url} />,
  <meta property="og:title" key="og:title" content={title} />,
  <meta property="og:description" key="og:description" content={description} />,
  <meta property="og:image" key="og:image" content={image} />,
];

const NUM_THIRD_PARTY = 12;

const Home: NextPage<HomeProps> = ({ thirdPartyEntries, latestStd }) => {
  const complexExampleProgram = `import { serve } from "https://deno.land/std@${latestStd}/http/server.ts";
  const s = serve({ port: 8000 });
  console.log("http://localhost:8000/");
  for await (const req of s) {
    req.respond({ body: "Hello World\\n" });
  }`;

  const [thirdPartySelection, setThirdPartySelection] = useState<
    SimpleEntry[] | null
  >(null);
  useEffect(() => {
    const thirdPartySelection = [];
    for (let i = 0; i < NUM_THIRD_PARTY; i++) {
      const s = Math.floor(thirdPartyEntries.length * Math.random());
      thirdPartySelection.push(thirdPartyEntries[s]);
      thirdPartyEntries.splice(s, 1);
    }
    setThirdPartySelection(thirdPartySelection);
  }, []);

  return (
    <>
      <Head>
        <title>Deno</title>
        {metaDescription({
          title:
            "Deno — JavaScript va TypeScript ishga tushuruvchi xavfsiz yordamchi dastur.",
          description:
            "Deno bu sodda, zamonaviy va xafvsiz JavaScript va TypeScript ishga tushuruvchi dastur. Deno V8 yordamchi dasturi va Rust dasturlash tillarini ishlatadi.",
          image: "https://deno.land/v1_wide.jpg",
        })}
      </Head>
      <div className="bg-white">
        <div className="bg-black">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span>Deno 1.0 versiyasi e'lon qilindi!</span>
                <span className="block sm:ml-2 sm:inline-block">
                  <Link href="/v1">
                    <a className="text-white font-bold underline">
                      Blog postimizni o'qing &rarr;
                    </a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border-b border-gray-200">
          <Header />
          <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col items-center">
            <h1 className="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
              Deno
            </h1>
            <h2 className="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
              <strong className="font-semibold">JavaScript</strong> va{" "}
              <strong className="font-semibold">TypeScript</strong> ishga
              tushuruvchi <strong className="font-semibold">xavfsiz</strong>{" "}
              yordamchi dastur.
            </h2>
          </div>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <p className="my-4 text-gray-700">
            Deno bu Javascript va TypeScript uchun yaratilgan oddiy, zamonaviy
            va xavfsiz yordamchi dastur. Deno V8 javascript interpritatori va
            Rust dasturlash tillarini ishlatadi.
          </p>
          <ol className="ml-8 list-disc text-gray-700">
            <li>
              Boshidan o'zi xavfsiz. Ruxsat berilmaguncha na fayl, na internet
              yoki muhitga ruxsat yo'q.
            </li>
            <li>TypeScript va EcmaScript qo'llab quvvatlaydi.</li>
            <li>Birgina ishga tushuriladigan fayl.</li>
            <li>
              Ichida tayyor utilitlar mavjud. Masalan, qaramchi inspektor
              "dependency inspector" (deno info) va kodlarni formatlovchi (deno
              fmt).
            </li>
            <li>
              Ichida ko'rib chiqilgan va Deno bilan ishlashi anniq bo'lgan
              standart modullar mavjud:{" "}
              <a href="/std" className="link">
                deno.land/std
              </a>
            </li>
          </ol>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#installation">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="installation">
                O'rnatish jarayonlari
              </h3>
            </a>
          </Link>
          <InstallSection />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#getting-started">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="getting-started">
                Ishni boshlash
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            Keling, oddiy dastur ishga tushurishga harakat qilamiz:
          </p>
          <CodeBlock
            code="deno run https://deno.land/std/examples/welcome.ts"
            language="bash"
          />
          <p className="my-4 text-gray-700">Yoki yanada qiyinroq misol:</p>
        </div>
        <div
          className="mx-auto px-4 sm:px-6 md:px-8"
          style={{ maxWidth: "46rem" }}
        >
          <CodeBlock
            code={complexExampleProgram}
            language="typescript"
            disablePrefixes
          />
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8">
          <p className="my-4 text-gray-700">
            <Link href="/[identifier]" as="/manual">
              <a className="link">Qo'llanmada</a>
            </Link>{" "}
            birinchi darajali ma'lumotlar, misollar va muhitni o'rnatishga doir
            ma'lumotlar topsangiz bo'ladi.
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#runtime-documentation">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="runtime-documentation">
                Yordamchi dastur dokumentatsiyasi
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            Deno yordamchi dasturi haqidagi boshlang'ich ma'lumotlarni{" "}
            <a
              href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts"
              className="link"
            >
              doc.deno.land
            </a>{" "}
            dan topsangiz bo'ladi.
          </p>
          <p className="my-4 text-gray-700">
            Deno ning{" "}
            <Link href="/[identifier]" as="/manual">
              <a className="link">qo'llanmasida</a>
            </Link>{" "}
            yordamchi dastur ichida keladigan murakkab funksiyalar haqida chuqur
            izohlar, Deno da dasturlash haqidagi konseptsiyalar, Deno ning ichki
            tuzilishi haqidagi ma'lumotlar, Deno ga o'zingiz yozgan
            dasturlaringiz moslash va Deno ni Rust plaginlari yordamida
            kengaytirish haqidagi ma'lumotlar mavjud.
          </p>
          <p className="my-4 text-gray-700">
            Qo'llanma ichida Deno taqdim etadigan ichki asboblari haqida ham
            ma'lumotlar mavjud.
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#standard-modules">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="standard-modules">
                Standart Modullar
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            Deno yordamchi dasturidan tashqari, Deno tasdiqlangan standart
            modullar taqdim etadi va bu modullar offitsial Deno guruhi tomonidan
            ko'rib chiqilgan va Denoning ko'rsatilgan versiyasi bilan ishlashi
            kafolatlangan. Bu modullar haqidagi yangilik va o'zgarishlarni{" "}
            <a href="https://github.com/denoland/deno" className="link">
              denoland/deno
            </a>{" "}
            repozitoriya sahifasidan kuzatishingiz mumkin.
          </p>
          <p className="my-4 text-gray-700">
            Shu standart modullar{" "}
            <Link href="/[identifier]" as="/std">
              <a className="link">deno.land/std</a>
            </Link>{" "}
            da joylashtirilgan va bu modullarga EcmaScript modul ko'rsatish
            usuli yordamida Deno dasturlash jarayonida ishlatish mumkin.
          </p>
        </div>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <Link href="#third-party-modules">
            <a className="hover:underline">
              <h3 className="font-bold text-xl" id="third-party-modules">
                Uchinchi Darajali Modullar
              </h3>
            </a>
          </Link>
          <p className="my-4 text-gray-700">
            Deno modullarni istalgan web lokatsiyadan yuklab oladi, misol uchun
            GitHub dan, shaxsiy webserver yoki{" "}
            <a href="https://pika.dev" className="link">
              pika.dev
            </a>{" "}
            va{" "}
            <a href="https://jspm.io" className="link">
              jspm.io
            </a>{" "}
            larga o'xshagan CDN web servislaridan.
          </p>
          <p className="my-4 text-gray-700">
            Uchinchi Darajali Modullar haqida ma'lumotlar olish osonlashtirish
            maqsadida Deno o'zida keladigan <InlineCode>deno info</InlineCode>{" "}
            va <InlineCode>deno doc</InlineCode> komandalarini taqdim etadi.
            Shuningdek, modullar qo'llanmasi ko'zdan kechirish uchun web
            interfeys ham taqdim etadi va u{" "}
            <a href="https://doc.deno.land" className="link">
              doc.deno.land
            </a>{" "}
            sahifasida joylashtirilgan.
          </p>
          <p className="my-4 text-gray-700">
            Hattoki, Deno, EcmaScript modullar uchun sodda hosting servislari
            taqdim etadi va Deno dasturlash jarayonida ishlatiladi. Bu servisni{" "}
            <Link href="/x">
              <a className="link">deno.land/x</a>
            </Link>{" "}
            sahifasidan topishingiz mumkin.
          </p>
          <p className="my-4 text-gray-700">
            Quyida hozirgi vaqtda{" "}
            <Link href="/x">
              <a className="link">deno.land/x</a>
            </Link>{" "}
            sahifasida mavjud bo'lgan tasodifiy modullar ro'yxatini ko'rishingiz
            mumkin:
          </p>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {thirdPartySelection?.map((s, i) => (
            <Link href="/x/[identifier]" as={`/x/${s.name}`}>
              <a
                className="rounded-lg bg-white shadow border border-gray-100 p-4 overflow-hidden hover:shadow-sm transition duration-75 ease-in-out cursor-pointer  "
                key={i}
              >
                <h4 className="text-lg font-bold">{s.name}</h4>
                <p
                  className="whitespace-normal break-words text-gray-700 mt-2"
                  style={{ textOverflow: "ellipsis" }}
                >
                  {s.desc}
                </p>
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-20">
          <Footer simple />
        </div>
      </div>
    </>
  );
};

const InstallSection = () => {
  const shell = (
    <div key="shell" className="my-4 text-gray-700">
      <p className="py-2">Shell (Mac, Linux):</p>
      <CodeBlock
        language="bash"
        code={`curl -fsSL https://deno.land/x/install/install.sh | sh`}
      />
    </div>
  );
  const homebrew = (
    <div key="homebrew" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://formulae.brew.sh/formula/deno" className="link">
          Homebrew
        </a>{" "}
        (Mac):
      </p>
      <CodeBlock language="bash" code={`brew install deno`} />
    </div>
  );
  const powershell = (
    <div key="powershell" className="my-4 text-gray-700">
      <p className="mb-2">PowerShell (Windows):</p>
      <CodeBlock
        language="bash"
        code={`iwr https://deno.land/x/install/install.ps1 -useb | iex`}
      />
    </div>
  );
  const chocolatey = (
    <div key="chocolatey" className="my-4 text-gray-700">
      <p className="mb-2">
        <a href="https://chocolatey.org/packages/deno" className="link">
          Chocolatey
        </a>{" "}
        (Windows):
      </p>
      <CodeBlock language="bash" code={`choco install deno`} />
    </div>
  );
  const scoop = (
    <div key="scoop" className="my-4 text-gray-700">
      <p className="mb-2">Scoop (Windows):</p>
      <CodeBlock language="bash" code={`scoop install deno`} />
    </div>
  );
  const cargo = (
    <div key="cargo" className="my-4 text-gray-700">
      <p className="py-2">
        <a href="https://crates.io/crates/deno" className="link">
          Cargo
        </a>{" "}
        orqali yuklang va qayta yasab oling
      </p>
      <CodeBlock language="bash" code={`cargo install deno`} />
    </div>
  );

  return (
    <>
      <p className="my-4 text-gray-700">
        Deno ishga tushuriladigan va boshqa fayllarga qaram bo'lmagan fayl
        shaklida keladi. Quyidagi o'rnatuvchilar yordamida Deno ni
        o'rnatishingiz mumkin, yoki binarniy{" "}
        <a href="https://github.com/denoland/deno/releases" className="link">
          relizlar sahifasidan
        </a>{" "}
        yuklab oling.
      </p>
      {shell}
      {powershell}
      {homebrew}
      {chocolatey}
      {scoop}
      {cargo}
      <p className="my-4 text-gray-700">
        O'rnatish haqida qo'shimcha ma'lumotlar uchun{" "}
        <a className="link" href="https://github.com/denoland/deno_install">
          deno_install
        </a>{" "}
        sahifasiga o'ting.
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const thirdPartyEntries: SimpleEntry[] = [];

  Object.keys(entries).forEach((name) => {
    const entry = entries[name];
    if (
      entry &&
      entry.desc.length >= 70 &&
      entry.desc.length <= 90 &&
      name !== "std" &&
      name !== "std_old"
    ) {
      thirdPartyEntries.push({
        name,
        desc: entry.desc,
      });
    }
  });

  return {
    props: { thirdPartyEntries, latestStd: stdVersions[0] },
  };
};

export default Home;
