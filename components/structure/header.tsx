// import Link from "next/link";
// import BrLine from "./brLine";
// import ProfileBtn from "./profileBtn";
// import SearchBar from "./searchBar";
// import React, { useState, useEffect } from "react";
// import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

// export default function Header() {
//   // 쿠키에서 로그인 상태를 확인하는 함수
//   const [screen, setScreen] = useState("laptop");

//   useEffect(() => {
//     const handleResize = () => {
//       console.log(window.innerWidth);
//       if (window.innerWidth <= 640) {
//         setScreen("mobile");
//       } else {
//         setScreen("laptop");
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize(); // 초기화
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   // return (
//   //   <header className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30  h-[100px] bg-white mx-auto mobile:[390px] mobile:[h-50px]">
//   //     <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30  h-[100px] w-[1040px] bg-white mx-auto mobile:[390px] mobile:[h-50px]">
//   //       {/* 헤더 구분선 */}
//   //       <BrLine />
//   //       {screen === "laptop" ? (
//   //         <>
//   //           {/* 로고 */}
//   //           <div className="w-[181px] h-[132px] bg-[#00ff00]">
//   //             <Link
//   //               href="/"
//   //               legacyBehavior
//   //               className="w-[181px] h-[132px] absolute left-[-0.5px] top-[-1.5px] bg-white"
//   //             >
//   //               <img
//   //                 src="logo.png"
//   //                 className="relative w-[147px] h-[83px] left-[16.5px] top-[38px] object-cover"
//   //               />
//   //             </Link>
//   //           </div>
//   //           {/* 검색창 */}
//   //           <div className="w-[679px] h-[46px] left-[181px] mt-[38px]">
//   //             <SearchBar />
//   //           </div>
//   //           {/* 회원가입/로그인 */}
//   //           <div className="w-[85px] h-[30px]">
//   //             <ProfileBtn />
//   //           </div>
//   //         </>
//   //       ) : (
//   //         <>
//   //           <div className="flex items-center space-x-10 ml-10">
//   //             <MenuOutlined className="text-2xl" />
//   //             <Link href="/" legacyBehavior>
//   //               <img
//   //                 src="logo.png"
//   //                 alt="Logo"
//   //                 className="w-[82px] h-[50px] object-cover"
//   //               />
//   //             </Link>
//   //           </div>
//   //           <div className="flex items-center space-x-10 mr-10">
//   //             <SearchOutlined className="text-2xl" />
//   //             <UserOutlined className="text-2xl" />
//   //           </div>
//   //         </>
//   //       )}
//   //     </div>
//   //   </header>
//   // );

//   // return ( 그냥 mobile:으로 하면 안먹힘
//   //   <header className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30  h-[100px] bg-white mx-auto mobile-[390px] mobile-[h-50px]">
//   //     <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30  h-[100px] w-[1040px] bg-white mx-auto mobile-[390px] mobile-[h-50px]">
//   //       {/* 헤더 구분선 */}
//   //       <BrLine />
//   //       {/* 로고 */}
//   //       <div className="w-[181px] h-[132px] ">
//   //         <Link
//   //           href="/"
//   //           legacyBehavior
//   //           className="w-[181px] h-[132px] absolute left-[-0.5px] top-[-1.5px] bg-white"
//   //         >
//   //           <img
//   //             src="logo.png"
//   //             className="relative w-[147px] h-[83px] left-[16.5px] top-[38px] object-cover"
//   //           />
//   //         </Link>
//   //       </div>
//   //       {/* 검색창 */}
//   //       <div className="w-[679px] h-[46px] left-[181px] mt-[38px]">
//   //         <SearchBar />
//   //       </div>
//   //       {/* 회원가입/로그인 */}
//   //       <div className="w-[85px] h-[30px]">
//   //         <ProfileBtn />
//   //       </div>
//   //     </div>
//   //   </header>
//   // );
// }
import Link from "next/link";
import BrLine from "./brLine";
import ProfileBtn from "./profileBtn";
import SearchBar from "./searchBar";
import React, { useState, useEffect } from "react";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import MobileSearchBar from "./MobileSearchBar";

export default function Header() {
  const [screen, setScreen] = useState("laptop");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false); // 모바일 검색창 열림 상태

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
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30 ${
        screen === "mobile" ? "h-[50px]" : "h-[100px]"
      } bg-white mx-auto mobile:w-full`}
    >
      <div
        className={`flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30 ${
          screen === "mobile" ? "h-[50px]" : "h-[100px]"
        } w-[1040px] bg-white mx-auto mobile:w-full`}
      >
        {screen === "mobile" ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center space-x-4 ml-4 mr-6 ">
              <MenuOutlined className="text-2xl" />
            </div>
            <div>
              <Link href="/" legacyBehavior>
                <img
                  src="logo.png"
                  alt="Logo"
                  className="w-[82px] h-[50px] object-cover"
                />
              </Link>
              <div />
            </div>
            <div className="flex items-center space-x-4 mr-4">
              {/* 모바일 검색 아이콘을 클릭하면 팝업 보이기 */}
              <SearchOutlined
                className="text-2xl cursor-pointer"
                onClick={() => setIsMobileSearchOpen(true)}
              />
              <UserOutlined className="text-2xl" />
            </div>
          </div>
        ) : (
          <>
            <header className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30  h-[100px] bg-white mx-auto mobile-[390px] mobile-[h-50px]">
              <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-30  h-[100px] w-[1040px] bg-white mx-auto mobile-[390px] mobile-[h-50px]">
                {/* 헤더 구분선 */}
                <BrLine />
                {/* 로고 */}
                <div className="w-[181px] h-[132px] ">
                  <Link
                    href="/"
                    legacyBehavior
                    className="w-[181px] h-[132px] absolute left-[-0.5px] top-[-1.5px] bg-white"
                  >
                    <img
                      src="logo.png"
                      className="relative w-[147px] h-[83px] left-[16.5px] top-[38px] object-cover"
                    />
                  </Link>
                </div>
                {/* 검색창 */}
                <div className="w-[679px] h-[46px] left-[181px] mt-[38px]">
                  <SearchBar />
                </div>
                {/* 회원가입/로그인 */}
                <div className="w-[85px] h-[30px]">
                  <ProfileBtn />
                </div>
              </div>
            </header>
          </>
        )}
      </div>
      {isMobileSearchOpen && (
        <MobileSearchBar onClose={() => setIsMobileSearchOpen(false)} />
      )}
    </header>
  );
}
