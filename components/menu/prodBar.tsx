import React, { useState, useEffect } from "react";

interface Category {
  cate: string;
}

interface ProdBarProps {
  category: "default" | Category[];
  setActiveCate: (cate: string) => void;
  activeCate: string;
}

export default function ProdBar({
  category,
  setActiveCate,
  activeCate,
}: ProdBarProps) {
  const categoriesDefault: Category[] = [
    { cate: "전체" },
    { cate: "상의" },
    { cate: "아우터" },
    { cate: "원피스/세트" },
    { cate: "팬츠" },
    { cate: "스커트" },
    { cate: "트레이닝" },
    { cate: "이너웨어" },
    { cate: "수영복" },
    { cate: "가방" },
    { cate: "패션잡화" },
    { cate: "기타" },
  ];
  const [screen, setScreen] = useState("laptop");

  useEffect(() => {
    const handleResize = () => {
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
  const handleButtonClick = (cate: string) => {
    setActiveCate(cate);
  };

  let categories: Category[];

  if (category === "default") {
    categories = categoriesDefault;
  } else {
    categories = category as Category[];
  }

  return (
    <nav
      className={`relative h-[${screen === "mobile" ? "40px" : "60px"}] text-[${
        screen === "mobile" ? "12px" : "14px"
      }] text-[#666] bg-white py-[6px] text-base flex shadow-md space-x-[${
        screen === "mobile" ? "30px" : "60px"
      }] items-center justify-center mobile:h-[30px] `}
    >
      {categories.map(({ cate }) => (
        <button
          key={cate}
          onClick={() => handleButtonClick(cate)}
          className={`${
            activeCate === cate ? "text-black" : ""
          } hover:text-black`}
        >
          <p className="mobile:text-[8pt] mobile:m-1">{cate}</p>
        </button>
      ))}
    </nav>
  );
}
{
  /* <nav className="relative h-[60px] text-[14px] text-[#666] bg-white py-[11px] text-base flex shadow-md space-x-[60px] items-center justify-center">
{categories.map(({ cate }) => (
  <button
    key={cate}
    onClick={() => handleButtonClick(cate)}
    className={`${
      activeCate === cate ? "text-black" : ""
    } hover:text-black`}
  > */
}
