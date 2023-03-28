import { useMemo } from "react";
import React from "react";

const ContainerHeader = ({
  helpSupportCursor,
  contactUsBackgroundColor,
  propTop,
  propHeight,
  propColor,
  propBackgroundColor,
  propColor1,
  onRectangleClick,
  onHomeTextClick,
  onAboutUsTextClick,
  onHelpSupportTextClick,
  onContactUsTextClick,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      cursor: helpSupportCursor,
    };
  }, [helpSupportCursor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: contactUsBackgroundColor,
    };
  }, [contactUsBackgroundColor]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const searchByLocationStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const sERVICEStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const searchByServiceStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="absolute top-[-0.4px] left-[2.6px] bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1280.8px] h-[342.8px] text-center text-mid text-white font-montserrat border-[0.8px] border-solid border-red-100">
      <div className="absolute top-[149px] left-[173px] w-[933px] h-[147px] text-left">
        <div
          className="absolute top-[53px] left-[0px] rounded-3041xl bg-white w-[607px] h-[94px]"
          style={rectangleDivStyle}
          onClick={onRectangleClick}
        />
        <div
          className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-none rounded-b-none bg-white w-[214px] h-[53px]"
          style={rectangleDiv1Style}
        />
        <div className="absolute top-[53px] left-[0px] rounded-3041xl bg-gainsboro-300 box-border w-[607px] h-[94px] border-[15px] border-solid border-red-100" />
        <img
          className="absolute top-[53px] left-[0px] w-[51px] h-3.5"
          alt=""
          src="/rectangle-40.svg"
        />
        <div
          className="absolute top-[53px] left-[0px] rounded-t-none rounded-br-none rounded-bl-sm bg-red-100 w-[13px] h-[50px]"
          style={rectangleDiv2Style}
        />
        <div
          className="absolute top-[20px] left-[26px] font-semibold text-red-100"
          style={searchByLocationStyle}
        >
          Search By Location
        </div>
        <div
          className="absolute top-[0px] left-[225px] rounded-tl-none rounded-tr-11xl rounded-b-none bg-red-100 w-[214px] h-[53px] flex flex-col py-3 px-[19px] box-border items-start justify-end"
          style={sERVICEStyle}
        >
          <div className="relative font-semibold" style={searchByServiceStyle}>
            Search By Service
          </div>
        </div>
        <div className="absolute top-[66px] left-[719px] w-[221px] h-[69px] text-6xl">
          <img
            className="absolute top-[0px] left-[0px] rounded-3041xl w-[221px] h-[69px]"
            alt=""
            src="/rectangle-43.svg"
          />
          <div className="absolute top-[25px] left-[67px] font-medium flex items-center w-[87px] h-[19px]">
            Search
          </div>
        </div>
      </div>
      <div className="absolute top-[27px] left-[90px] w-[167px] h-[54px] text-25xl text-gray-300">
        <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
          h
        </div>
        <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
        </div>
      </div>
      <div className="absolute top-[40px] left-[640px] flex flex-row items-start justify-start gap-[24px] text-5xl text-red-100 font-cabin">
        <div
          className="relative font-semibold flex items-center justify-center w-[84px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onHomeTextClick}
        >
          Home
        </div>
        <div
          className="relative font-semibold flex items-center justify-center w-[114px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About Us
        </div>
        <div
          className="relative font-semibold flex items-center justify-center w-[171px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onHelpSupportTextClick}
        >
          Help Support
        </div>
        <div
          className="relative font-semibold flex items-center justify-center w-[114px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
          onClick={onContactUsTextClick}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default ContainerHeader;
