import NavBar from "@/components/structure/NavBar";
import Footer from "@/components/structure/footer";
import Header from "@/components/structure/header";
import React, { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

// 전체적인 layout
// css 수정해서 중앙 정렬하기
// children( 모든 컴포넌트들 )이 표시되는 영역 설정하기 (중앙 정렬, px 추가)
export default function AppLayout({ children }: IProps) {
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

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Header />
      <NavBar />
      {children}
      {screen === "laptop" ? <Footer /> : <></>}
    </div>
  );
}
