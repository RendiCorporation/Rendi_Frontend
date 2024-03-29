import { useState } from "react";
import { cls } from "@/libs/client/utils";
import TItem from "./tItem";
import dummyData from "./tasteDummyData.json";
import { TasteProduct } from "@/components/product/DataTypes";
import { useScreenSize } from "@/libs/client/useScreen";

interface TItemsProps {
  onItemSelect: (itemId: string) => void;
}

export default function TItems({ onItemSelect }: TItemsProps) {
  // 전체 상품 데이터를 가져옵니다.
  const allItems: TasteProduct[] = dummyData;
  const screen = useScreenSize();

  const renderItems = () => {
    const rows = [];
    const numItemsPerRow = screen === "mobile" ? 3 : 5;

    for (let i = 0; i < allItems.length; i += numItemsPerRow) {
      const rowItems = allItems.slice(i, i + numItemsPerRow);
      const row = (
        <div
          key={i}
          className={`flex justify-center items-start flex-grow-0 flex-shrink-0 gap-[35px]${
            screen === "mobile"
              ? "w-full h-[200px]"
              : "w-[1040px] px-[25px] mt-[40px]"
          }`}
        >
          {rowItems.map((item) => (
            <TItem
              key={item.productId}
              item={item}
              onItemSelect={onItemSelect}
            />
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };

  return (
    <>
      <div className="w-[1040px] h-[980px]  overflow-hidden  mobile:w-full mobile:h-[1050px]">
        {renderItems()}
      </div>
    </>
  );
}
