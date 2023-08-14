import { AtomEffect, atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ASignUpProps } from "../api";

export interface SignUpState {
  username: string;
  password: string;
  profile: {
    nickname: string;
    email: string;
    phonenum: string;
    birth: string;
    sex: string;
    interests: string[];
  };
  emailAgreeYn: string;
  phoneAgreeYn: string;
}

export interface LoginState {
  username: string;
}

export const signUpState = atom<SignUpState>({
  key: "signUpState",
  default: {
    username: "",
    password: "",
    profile: {
      nickname: "",
      email: "",
      phonenum: "",
      birth: "",
      sex: "",
      interests: [],
    },
    emailAgreeYn: "Y",
    phoneAgreeYn: "Y",
  },
});

// // 추가
// export interface filterState {
//   showList: { value: string; label: string }[];
//   categoryList: { value: string; label: string }[];
//   colorList: { value: string; label: string }[];
// }

// export const filterState = atom<filterState>({
//   key: "filterState",
//   default: {
//     showList: [
//       {
//         value: "recommended",
//         label: "추천순",
//       },
//       {
//         value: "popularity",
//         label: "인기순",
//       },
//       {
//         value: "priceLowToHigh",
//         label: "낮은 가격순",
//       },
//       {
//         value: "priceHighToLow",
//         label: "높은 가격순",
//       },
//     ],
//     categoryList: [
//       {
//         value: "all",
//         label: "전체",
//       },
//       {
//         value: "top",
//         label: "상의",
//       },
//       {
//         value: "outer",
//         label: "아우터",
//       },
//       {
//         value: "dress",
//         label: "원피스",
//       },
//       {
//         value: "pants",
//         label: "바지",
//       },
//       {
//         value: "skirt",
//         label: "스커트",
//       },
//       {
//         value: "training",
//         label: "트레이닝",
//       },
//       {
//         value: "inner",
//         label: "이너웨어",
//       },
//       {
//         value: "swimsuit",
//         label: "수영복",
//       },
//       {
//         value: "shoes",
//         label: "슈즈",
//       },
//       {
//         value: "bag",
//         label: "가방",
//       },
//       {
//         value: "etc",
//         label: "기타",
//       },
//     ],
//     colorList: [
//       {
//         value: "black",
//         label: "블랙",
//       },
//       {
//         value: "white",
//         label: "화이트",
//       },
//       {
//         value: "gray",
//         label: "그레이",
//       },
//       {
//         value: "red",
//         label: "레드",
//       },
//       {
//         value: "orange",
//         label: "오렌지",
//       },
//       {
//         value: "yellow",
//         label: "옐로우",
//       },
//       {
//         value: "green",
//         label: "그린",
//       },
//       {
//         value: "blue",
//         label: "블루",
//       },
//       {
//         value: "navy",
//         label: "네이비",
//       },
//       {
//         value: "purple",
//         label: "퍼플",
//       },
//       {
//         value: "pink",
//         label: "핑크",
//       },
//       {
//         value: "brown",
//         label: "브라운",
//       },
//       {
//         value: "beige",
//         label: "베이지",
//       },
//       {
//         value: "khaki",
//         label: "카키",
//       },
//       {
//         value: "silver",
//         label: "실버",
//       },
//       {
//         value: "gold",
//         label: "골드",
//       },
//     ],
//   },
// });
