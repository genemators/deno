import React from "react";
import Head from "next/head";
import { metaDescription } from "../pages";

function LoadingPage() {
  return (
    <div>
      <Head>
        <title>Deno</title>
        {metaDescription({
          title: "Deno",
          description: "Deno - bu JavaScript va TypeScript dasturlash tillarida yozilgan dasturlani " +
              "ishga tushuruvchi xavfsiz yordamchi dastur!",
          image: "https://deno.land/v1_wide.jpg",
        })}
      </Head>
      <div className="bg-gray-50 min-h-full"/>
    </div>
  );
}

export default LoadingPage;
