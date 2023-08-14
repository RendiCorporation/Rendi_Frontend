// import HoriCategory from "@/components/category/horiCategory";
// import Banner from "@/components/structure/banner";
// import Layout from "@/layouts/layout";
// import type { NextPage } from "next";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import Items from "@/components/product/items";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRecoilValue } from "recoil";
// import { getCookie } from "@/libs/client/cookies";

// const Home: NextPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       router.push("/main");
//     }
//   }, []);

//   return (
//     <Layout>
//       <Head>
//         <title>Home</title>
//       </Head>
//       <div className="relative mt-[135px] bg-slate-200 mobile:mt-[85px]">
//         <div className="bg-white">
//           <div className="flex justify-center">
//             <Banner />
//           </div>
//           <div className="flex justify-center mobile: w-full">
//             <HoriCategory />
//           </div>

//           <div className="flex justify-center">
//             <div className="flex-row w-[1040px]">
//               <div className="flex justify-between text-[12pt] font-medium text-black">
//                 <p className="ml-[30px] mt-[10px]">이번주 신제품</p>

//                 <Link href="/menus/new">
//                   <button className="h-[34px] flex items-end">
//                     <p className="">More</p>
//                     <span className="text-[18px] ml-[2px] mr-[30px]"> +</span>
//                   </button>
//                 </Link>
//               </div>
//               <div className="flex justify-center ">
//                 <Items itemsPerPage={12} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
import HoriCategory from "@/components/category/horiCategory";
import Banner from "@/components/structure/banner";
import Layout from "@/layouts/layout";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Items from "@/components/product/items";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { getCookie } from "@/libs/client/cookies";

const Home: NextPage = () => {
  const router = useRouter();
  const [screen, setScreen] = useState("laptop");

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 640) {
        setScreen("mobile");
      } else {
        setScreen("laptop");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // 초기화
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/main");
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="relative mt-[135px] bg-slate-200 mobile:mt-[85px]">
        <div className="bg-white">
          <div className="flex justify-center">
            <Banner />
          </div>
          <div className="flex justify-center mobile: w-full">
            {/* 스크롤 가능한 영역 */}
            <div className="overflow-x-scroll  scrollbar-hide">
              <HoriCategory />
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className={
                screen === "laptop" ? "flex-row w-[1040px] " : "w-full"
              }
            >
              <div className="flex justify-between text-[12pt] font-medium text-black">
                <p className="ml-[30px] mt-[10px]">이번주 신제품</p>

                <Link href="/menus/new">
                  <button className="h-[34px] flex items-end">
                    <p className="">More</p>
                    <span className="text-[18px] ml-[2px] mr-[30px]"> +</span>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center ">
                <Items itemsPerPage={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
