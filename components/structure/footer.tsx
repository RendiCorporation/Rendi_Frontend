import { useScreenSize, useScreenWidth } from "@/libs/client/useScreen";
import { Line } from "../icons";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import BrLine from "./brLine";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Footer() {
  const screen = useScreenSize();
  const screenWidth = useScreenWidth();

  return (
    <>
      <Line />
      <footer className=" flex items-center justify-center bottom-0 left-0 right-0 z-10 w-[auto] h-[auto] relative overflow-hidden bg-white">
        {screen === "laptop" ? (
          <div className="w-[1040px] h-[420px] flex items-center justify-center">
            <div className="w-[1040px] h-[420px] absolute left-0 top-0 overflow-hidden bg-white">
              <p className="w-[328px] absolute left-[29px] bottom-[49px] text-base font-semibold text-left text-[#1a202c]">
                ©2023 Rendi. All rights reserved
              </p>
              <p className="w-36 absolute right-[60px] bottom-[23px] text-base font-semibold text-right text-[#1a202c]">
                Terms &amp; Condition
              </p>
              <p className="w-36 absolute right-[210px] bottom-[23px] text-base font-semibold text-right text-[#1a202c]">
                Privacy &amp; Policy
              </p>
              <div className="w-[152px] h-[244px]">
                <p className="w-[152px] h-[188px] absolute left-[635px] top-[93px] text-base font-medium text-left text-[#1a202c]">
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Events
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Blog
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Podcast
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Invite a friend
                  </span>
                </p>
                <p className="w-[152px] h-8 absolute left-[635px] top-[37px] text-xl font-semibold text-left text-[#1a202c]">
                  Community
                </p>
              </div>
              <div className="w-[152px] h-[244px]">
                <p className="w-[152px] h-[188px] absolute left-[232px] top-[93px] text-base font-medium text-left text-[#1a202c]">
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    How it works
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Featured
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Partnership
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Business Relation
                  </span>
                </p>
                <p className="w-[152px] h-8 absolute left-[232px] top-[37px] text-xl font-semibold text-left text-[#1a202c]">
                  Resources
                </p>
              </div>
              <div className="w-[152px] h-[244px]">
                <p className="w-[152px] h-[188px] absolute left-[29px] top-[93px] text-base font-medium text-left text-[#1a202c]">
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    About us
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Careers
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Contact
                  </span>
                </p>
                <p className="w-[152px] h-8 absolute left-[29px] top-[37px] text-xl font-semibold text-left text-[#1a202c]">
                  Company
                </p>
              </div>
              <div className="w-[152px] h-[244px]">
                <p className="w-[152px] h-[188px] absolute right-[435px] top-[93px] text-base font-medium text-left text-[#1a202c]">
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Support
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Help Center
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    FAQ
                  </span>
                  <br />
                  <br />
                  <span className="w-[152px] h-[188px] text-base font-medium text-left text-[#1a202c]">
                    Feedback
                  </span>
                </p>
                <p className="w-[152px] h-8 absolute right-[435px] top-[37px] text-xl font-semibold text-left text-[#1a202c]">
                  Help
                </p>
              </div>

              <Image
                src={logo}
                alt="logo"
                className="w-[164px] absolute right-[60px] top-[60px]"
              />
            </div>
          </div>
        ) : (
          <div className="w-[388px] h-[265px] ">
            <div className="w-[388px] h-[265px]  left-[-0.34px] top-[-0.55px] bg-white" />
            <div className="w-[187.2px] h-[36.98px]">
              <div className="flex justify-start items-start absolute left-[100px] top-[58.78px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[4.032558441162109px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[12.097674369812012px] text-center text-[#666]">
                    Home
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start absolute left-[173.93px] top-[58.78px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[4.032558441162109px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[12.097674369812012px] text-center text-[#666]">
                    About
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start absolute left-[249.2px] top-[58.78px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[4.032558441162109px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[12.097674369812012px] text-center text-[#666]">
                    Pricing
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start absolute left-[138.65px] top-[82.76px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[4.032558441162109px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[12.097674369812012px] text-center text-[#666]">
                    Blog
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start absolute left-[203.17px] top-[82.76px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[4.032558441162109px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[12.097674369812012px] text-center text-[#666]">
                    Contact
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center h-[20.55px] absolute left-[129px] top-[112.9px] gap-[10.753488540649414px]">
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[24.2px] h-[24.2px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  y="0.297852"
                  width="24.1953"
                  height="24.1953"
                  rx="5.37674"
                  fill="#F2F1FA"
                />
                <path
                  d="M13.0816 18.4444V12.926H15.0271L15.3183 10.7754H13.0815V9.40237C13.0815 8.77972 13.2631 8.35542 14.201 8.35542L15.3971 8.35489V6.43141C15.1902 6.40525 14.4801 6.34668 13.6541 6.34668C11.9295 6.34668 10.7488 7.34889 10.7488 9.18945V10.7754H8.79834V12.926H10.7488V18.4443H13.0816V18.4444Z"
                  fill="#666666"
                />
              </svg>
              <svg
                width={26}
                height={25}
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[24.2px] h-[24.2px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x="0.948853"
                  y="0.297852"
                  width="24.1953"
                  height="24.1953"
                  rx="5.37674"
                  fill="#F2F1FA"
                />
                <path
                  d="M15.0809 7.48997V7.48779H15.6481L15.8554 7.52919C15.9935 7.55606 16.119 7.59128 16.2317 7.63486C16.3444 7.67843 16.4535 7.72927 16.559 7.78737C16.6644 7.84546 16.7601 7.90466 16.8459 7.96493C16.931 8.02449 17.0073 8.08767 17.075 8.15448C17.1419 8.22202 17.2462 8.23945 17.388 8.20677C17.5298 8.17409 17.6826 8.12869 17.8462 8.0706C18.0098 8.0125 18.1716 7.94714 18.3316 7.87451C18.4916 7.80189 18.5891 7.75577 18.624 7.73617C18.6582 7.71584 18.6764 7.70495 18.6785 7.70349L18.6807 7.70022L18.6916 7.69477L18.7025 7.68932L18.7134 7.68388L18.7243 7.67843L18.7265 7.67516L18.7298 7.67298L18.7331 7.6708L18.7352 7.66754L18.7462 7.66427L18.7571 7.66209L18.7549 7.67843L18.7516 7.69477L18.7462 7.71111L18.7407 7.72745L18.7352 7.73834L18.7298 7.74924L18.7243 7.76558C18.7207 7.77647 18.7171 7.79099 18.7134 7.80915C18.7098 7.82731 18.6753 7.89993 18.6098 8.02702C18.5443 8.15412 18.4625 8.28302 18.3644 8.41375C18.2662 8.54447 18.1782 8.64323 18.1004 8.71005C18.0218 8.77759 17.9698 8.82479 17.9444 8.85167C17.9189 8.87926 17.888 8.90467 17.8516 8.92792L17.7971 8.96387L17.7862 8.96932L17.7753 8.97476L17.7731 8.97803L17.7698 8.98021L17.7666 8.98239L17.7644 8.98566L17.7535 8.9911L17.7426 8.99655L17.7404 8.99982L17.7371 9.002L17.7338 9.00418L17.7317 9.00744L17.7295 9.01071L17.7262 9.01289L17.7229 9.01507L17.7207 9.01834H17.7753L18.0807 8.95298C18.2844 8.9094 18.4789 8.85675 18.6643 8.79502L18.9589 8.69698L18.9916 8.68608L19.008 8.68064L19.0189 8.67519L19.0298 8.66974L19.0407 8.6643L19.0516 8.65885L19.0734 8.65558L19.0952 8.6534V8.67519L19.0898 8.67737L19.0843 8.68064L19.0822 8.68391L19.0789 8.68608L19.0756 8.68826L19.0734 8.69153L19.0712 8.6948L19.068 8.69698L19.0647 8.69916L19.0625 8.70242L19.0603 8.70569L19.0571 8.70787L19.0516 8.71877L19.0461 8.72966L19.0429 8.73184C19.0414 8.73402 18.9952 8.79574 18.9043 8.91703C18.8134 9.03904 18.7643 9.10076 18.7571 9.10222C18.7498 9.1044 18.7396 9.11529 18.7265 9.1349C18.7142 9.15523 18.6371 9.23621 18.4953 9.37783C18.3534 9.51944 18.2146 9.64544 18.0786 9.75583C17.9418 9.86695 17.8727 10.0035 17.8713 10.1654C17.8691 10.3267 17.8607 10.5089 17.8462 10.7123C17.8317 10.9156 17.8044 11.1353 17.7644 11.3713C17.7244 11.6074 17.6626 11.8743 17.5789 12.172C17.4953 12.4698 17.3935 12.7603 17.2735 13.0435C17.1535 13.3267 17.028 13.5809 16.8971 13.8061C16.7662 14.0312 16.6462 14.2218 16.5372 14.378C16.4281 14.5341 16.3172 14.6812 16.2044 14.8192C16.0917 14.9571 15.9492 15.1126 15.7768 15.2854C15.6038 15.4575 15.5092 15.5519 15.4932 15.5686C15.4765 15.5846 15.4052 15.6442 15.2794 15.7473C15.1543 15.8511 15.0198 15.955 14.8758 16.0588C14.7325 16.162 14.6009 16.248 14.4809 16.317C14.3609 16.386 14.2162 16.4648 14.0467 16.5534C13.878 16.6427 13.6955 16.7255 13.4991 16.8018C13.3027 16.878 13.0955 16.9488 12.8773 17.0142C12.6591 17.0796 12.4482 17.1304 12.2446 17.1667C12.041 17.203 11.8101 17.2339 11.5519 17.2593L11.1647 17.2974V17.3029H10.4556V17.2974L10.3629 17.292C10.3011 17.2884 10.2502 17.2847 10.2102 17.2811C10.1702 17.2775 10.0193 17.2575 9.75744 17.2212C9.49564 17.1849 9.29019 17.1486 9.14111 17.1123C8.99203 17.0759 8.77021 17.0069 8.47568 16.9053C8.18115 16.8036 7.92916 16.7008 7.71971 16.597C7.511 16.4939 7.38009 16.4285 7.327 16.4009C7.27464 16.374 7.21573 16.3406 7.15028 16.3007L7.0521 16.2408L7.04993 16.2375L7.04665 16.2353L7.04337 16.2331L7.04119 16.2299L7.03028 16.2244L7.01938 16.219L7.01721 16.2157L7.01392 16.2135L7.01065 16.2114L7.00847 16.2081L7.0063 16.2048L7.00301 16.2026H6.99756V16.1809L7.00847 16.183L7.01938 16.1863L7.06846 16.1917C7.10119 16.1954 7.19028 16.2008 7.33573 16.2081C7.48118 16.2154 7.63571 16.2154 7.79934 16.2081C7.96297 16.2008 8.13025 16.1845 8.30114 16.1591C8.47205 16.1337 8.67386 16.0901 8.90657 16.0283C9.13929 15.9666 9.3531 15.8933 9.54801 15.8083C9.74218 15.7226 9.88035 15.6587 9.96254 15.6166C10.044 15.5752 10.1683 15.4982 10.3356 15.3856L10.5865 15.2168L10.5887 15.2135L10.592 15.2113L10.5952 15.2091L10.5974 15.2059L10.5996 15.2026L10.6029 15.2004L10.6061 15.1983L10.6083 15.195L10.6192 15.1917L10.6301 15.1895L10.6323 15.1786L10.6356 15.1678L10.6389 15.1656L10.641 15.1623L10.5538 15.1569C10.4956 15.1532 10.4392 15.1496 10.3847 15.146C10.3301 15.1423 10.2447 15.126 10.1283 15.0969C10.012 15.0679 9.88654 15.0243 9.75199 14.9662C9.61745 14.9081 9.48655 14.8391 9.35928 14.7592C9.23202 14.6794 9.14001 14.6129 9.08329 14.5599C9.0273 14.5076 8.95457 14.4335 8.86512 14.3377C8.7764 14.2411 8.69931 14.1419 8.63385 14.0403C8.5684 13.9386 8.50586 13.8213 8.44624 13.6884L8.35568 13.4901L8.35023 13.4738L8.34477 13.4575L8.3415 13.4466L8.33932 13.4357L8.35568 13.4379L8.37205 13.4411L8.49204 13.4575C8.57205 13.4684 8.69749 13.472 8.86839 13.4684C9.03929 13.4647 9.15747 13.4575 9.22292 13.4466C9.28837 13.4357 9.32837 13.4284 9.34291 13.4248L9.36473 13.4193L9.392 13.4139L9.41928 13.4084L9.42146 13.4052L9.42473 13.403L9.42801 13.4008L9.43018 13.3975L9.40837 13.3921L9.38655 13.3867L9.36473 13.3812L9.34291 13.3758L9.3211 13.3703C9.30656 13.3667 9.28111 13.3594 9.24474 13.3485C9.20838 13.3376 9.1102 13.2977 8.9502 13.2287C8.79022 13.1597 8.66295 13.0925 8.5684 13.0272C8.47362 12.9616 8.38325 12.8899 8.29787 12.8126C8.21278 12.7341 8.11934 12.6332 8.01752 12.5097C7.91571 12.3863 7.8248 12.2428 7.7448 12.0794C7.66481 11.916 7.60481 11.7599 7.56481 11.611C7.52497 11.463 7.49868 11.3117 7.48628 11.1589L7.46663 10.9302L7.47754 10.9323L7.48845 10.9356L7.49936 10.9411L7.51026 10.9465L7.52117 10.9519L7.53208 10.9574L7.70117 11.0336C7.8139 11.0845 7.95389 11.1281 8.12115 11.1644C8.28842 11.2007 8.38841 11.2207 8.42114 11.2243L8.47022 11.2297H8.5684L8.56623 11.2265L8.56295 11.2243L8.55967 11.2221L8.55749 11.2188L8.55532 11.2156L8.55204 11.2134L8.54877 11.2112L8.54658 11.2079L8.53568 11.2025L8.52477 11.197L8.5226 11.1938L8.51931 11.1916L8.51604 11.1894L8.51386 11.1862L8.50295 11.1807L8.49204 11.1753L8.48987 11.172C8.48769 11.1705 8.45641 11.1473 8.39605 11.1023C8.33641 11.0565 8.27387 10.9973 8.20842 10.9247C8.14297 10.8521 8.07751 10.7758 8.01206 10.6959C7.94649 10.6159 7.88809 10.5302 7.83752 10.4399C7.78662 10.3492 7.7328 10.2337 7.67608 10.0935C7.62008 9.95409 7.57754 9.81357 7.54844 9.67195C7.51936 9.53034 7.503 9.39054 7.49936 9.25255C7.49572 9.11456 7.49936 8.99655 7.51026 8.89851C7.52117 8.80047 7.54299 8.68971 7.57572 8.56626C7.60844 8.4428 7.65572 8.31208 7.71753 8.17409L7.81025 7.96711L7.81571 7.95077L7.82116 7.93443L7.82444 7.93225L7.82661 7.92898L7.8288 7.92571L7.83207 7.92354L7.83535 7.92571L7.83752 7.92898L7.83971 7.93225L7.84298 7.93443L7.84626 7.93661L7.84843 7.93988L7.85061 7.94314L7.85389 7.94532L7.85934 7.95622L7.86479 7.96711L7.86808 7.96929L7.87025 7.97256L8.01752 8.13596C8.11569 8.2449 8.23206 8.36654 8.36659 8.50089C8.50114 8.63524 8.57568 8.70496 8.59022 8.71005C8.60477 8.71586 8.62294 8.73256 8.64476 8.76016C8.66658 8.78703 8.73931 8.85131 8.86293 8.95298C8.98657 9.05465 9.14838 9.17267 9.34837 9.30702C9.54837 9.44137 9.77017 9.57391 10.0138 9.70463C10.2574 9.83535 10.5192 9.95336 10.7992 10.0587C11.0792 10.164 11.2756 10.233 11.3883 10.2657C11.501 10.2983 11.6937 10.3401 11.9664 10.3909C12.2392 10.4418 12.4446 10.4744 12.5828 10.489C12.721 10.5035 12.8155 10.5118 12.8664 10.514L12.9428 10.5162L12.9406 10.4999L12.9373 10.4835L12.9155 10.3474C12.901 10.2566 12.8937 10.1295 12.8937 9.96608C12.8937 9.80267 12.9064 9.65198 12.9319 9.51399C12.9573 9.37601 12.9955 9.23621 13.0464 9.09459C13.0973 8.95298 13.1471 8.83931 13.1958 8.75362C13.2453 8.66865 13.31 8.5717 13.39 8.46277C13.47 8.35383 13.5737 8.24127 13.7009 8.12507C13.8282 8.00886 13.9736 7.90538 14.1373 7.8146C14.3009 7.72382 14.4518 7.65482 14.59 7.60762C14.7281 7.56042 14.8445 7.52955 14.939 7.51503C15.0336 7.50051 15.0809 7.49215 15.0809 7.48997Z"
                  fill="#666666"
                />
              </svg>
              <svg
                width={26}
                height={25}
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[24.2px] h-[24.2px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x="0.897705"
                  y="0.297852"
                  width="24.1953"
                  height="24.1953"
                  rx="5.37674"
                  fill="#F2F1FA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.94653 12.3955C6.94653 9.97925 6.94653 8.77111 7.52231 7.90093C7.77942 7.51235 8.1122 7.17957 8.50078 6.92246C9.37097 6.34668 10.5791 6.34668 12.9954 6.34668C15.4116 6.34668 16.6198 6.34668 17.49 6.92246C17.8785 7.17957 18.2113 7.51235 18.4684 7.90093C19.0442 8.77111 19.0442 9.97924 19.0442 12.3955V12.3955V12.3955C19.0442 14.8118 19.0442 16.0199 18.4684 16.8901C18.2113 17.2787 17.8785 17.6115 17.49 17.8686C16.6198 18.4444 15.4116 18.4444 12.9954 18.4444H12.9954H12.9954C10.5791 18.4444 9.37097 18.4444 8.50078 17.8686C8.1122 17.6115 7.77942 17.2787 7.52231 16.8901C6.94653 16.0199 6.94653 14.8118 6.94653 12.3955ZM16.127 12.3957C16.127 14.1252 14.725 15.5273 12.9955 15.5273C11.266 15.5273 9.86393 14.1252 9.86393 12.3957C9.86393 10.6662 11.266 9.26414 12.9955 9.26414C14.725 9.26414 16.127 10.6662 16.127 12.3957ZM12.9955 14.4678C14.1399 14.4678 15.0675 13.5401 15.0675 12.3957C15.0675 11.2513 14.1399 10.3236 12.9955 10.3236C11.8511 10.3236 10.9234 11.2513 10.9234 12.3957C10.9234 13.5401 11.8511 14.4678 12.9955 14.4678ZM16.2507 9.84267C16.6571 9.84267 16.9865 9.51323 16.9865 9.10685C16.9865 8.70047 16.6571 8.37103 16.2507 8.37103C15.8443 8.37103 15.5149 8.70047 15.5149 9.10685C15.5149 9.51323 15.8443 9.84267 16.2507 9.84267Z"
                  fill="#666666"
                />
              </svg>
              <svg
                width={26}
                height={25}
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[24.2px] h-[24.2px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x="0.846436"
                  y="0.297852"
                  width="24.1953"
                  height="24.1953"
                  rx="5.37674"
                  fill="#F2F1FA"
                />
                <path
                  d="M6.89526 7.97313C6.89526 7.58519 7.0315 7.26515 7.30397 7.013C7.57644 6.76084 7.93065 6.63477 8.3666 6.63477C8.79477 6.63477 9.14119 6.7589 9.40588 7.00718C9.67835 7.26322 9.81459 7.59683 9.81459 8.00805C9.81459 8.38046 9.68225 8.6908 9.41756 8.93908C9.14509 9.19512 8.78699 9.32314 8.34325 9.32314H8.33157C7.9034 9.32314 7.55698 9.19512 7.29229 8.93908C7.0276 8.68305 6.89526 8.36106 6.89526 7.97313ZM7.04707 18.1564V10.3822H9.63943V18.1564H7.04707ZM11.0757 18.1564H13.6681V13.8154C13.6681 13.5438 13.6992 13.3343 13.7615 13.1869C13.8705 12.9231 14.0359 12.7001 14.2578 12.5178C14.4797 12.3354 14.758 12.2443 15.0927 12.2443C15.9646 12.2443 16.4006 12.83 16.4006 14.0016V18.1564H18.9929V13.699C18.9929 12.5507 18.7205 11.6798 18.1755 11.0863C17.6306 10.4928 16.9105 10.196 16.0152 10.196C15.011 10.196 14.2286 10.6266 13.6681 11.4878V11.5111H13.6564L13.6681 11.4878V10.3822H11.0757C11.0913 10.6305 11.0991 11.4024 11.0991 12.6981C11.0991 13.9938 11.0913 15.8132 11.0757 18.1564Z"
                  fill="#666666"
                />
              </svg>
            </div>
            <svg
              width={257}
              height={2}
              viewBox="0 0 257 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[65.66px] top-[156.45px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M0 1L256.74 1.00004"
                stroke="#D4D2E3"
                stroke-width="0.672093"
              />
            </svg>
            <p className="w-[256.74px] h-[34.82px] absolute left-[66px] top-[166.52px] text-[12.097674369812012px] text-center text-[#666]">
              <span className="w-[256.74px] h-[34.82px] text-[12.097674369812012px] text-center text-[#666]">
                Copyright © 2023 Rendi
              </span>
              <br />
              <span className="w-[256.74px] h-[34.82px] text-[12.097674369812012px] text-center text-[#666]">
                All Rights Reserved{" "}
              </span>
            </p>
          </div>
        )}
      </footer>
    </>
  );
}
