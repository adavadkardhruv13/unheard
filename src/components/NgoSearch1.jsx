import React from "react";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NgoSearch1 = () => {
  const navigate = useNavigate();

  const onCtaContainerClick = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[1996px] overflow-hidden text-center text-xl text-gray-200 font-montserrat">
      <div className="absolute top-[390px] left-[103px] w-[1074px] h-[1023px] text-left">
        <div className="absolute top-[0px] left-[0px] w-[1070px] h-[309px]">
          <div className="absolute top-[36.5px] left-[318px] rounded-tl-none rounded-tr-6xl rounded-br-6xl rounded-bl-none bg-lightpink [backdrop-filter:blur(4px)] box-border w-[752.5px] h-[236px] border-t-[1px] border-solid border-red-100 border-r-[1px] border-b-[1px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-6xl rounded-br-6xl rounded-bl-11xl w-[318px] h-[309px] object-cover"
            alt=""
            src="/download-1@2x.png"
          />
          <div
            className="absolute top-[220px] left-[347px] w-[137px] h-[38.07px] cursor-pointer text-white"
            onClick={onCtaContainerClick}
          >
            <img
              className="absolute top-[0px] left-[0px] rounded-3041xl w-[137px] h-[38.07px]"
              alt=""
              src="/rectangle-44.svg"
            />
            <div className="absolute top-[7px] left-[43px] font-semibold">
              View
            </div>
          </div>
          <img
            className="absolute top-[47px] left-[1034px] w-[27px] h-[27px]"
            alt=""
            src="/ellipse-21.svg"
          />
          <div className="absolute top-[74px] left-[347px] text-17xl font-semibold">
            PFA Durg
          </div>
          <div className="absolute top-[128px] left-[347px] text-base font-semibold inline-block w-[629px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="absolute top-[357px] left-[4px] w-[1070px] h-[309px]">
          <div className="absolute top-[36.5px] left-[318px] rounded-tl-none rounded-tr-6xl rounded-br-6xl rounded-bl-none bg-lightpink [backdrop-filter:blur(4px)] box-border w-[752.5px] h-[236px] border-t-[1px] border-solid border-red-100 border-r-[1px] border-b-[1px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-6xl rounded-br-6xl rounded-bl-11xl w-[318px] h-[309px] object-cover"
            alt=""
            src="/download-1@2x.png"
          />
          <div className="absolute top-[220px] left-[347px] w-[137px] h-[38.07px] text-white">
            <img
              className="absolute top-[0px] left-[0px] rounded-3041xl w-[137px] h-[38.07px]"
              alt=""
              src="/rectangle-44.svg"
            />
            <div className="absolute top-[7px] left-[43px] font-semibold">
              View
            </div>
          </div>
          <img
            className="absolute top-[47px] left-[1034px] w-[27px] h-[27px]"
            alt=""
            src="/ellipse-21.svg"
          />
          <div className="absolute top-[74px] left-[347px] text-17xl font-semibold">
            PFA Durg
          </div>
          <div className="absolute top-[128px] left-[347px] text-base font-semibold inline-block w-[629px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="absolute top-[714px] left-[4px] w-[1070px] h-[309px]">
          <div className="absolute top-[36.5px] left-[318px] rounded-tl-none rounded-tr-6xl rounded-br-6xl rounded-bl-none bg-lightpink [backdrop-filter:blur(4px)] box-border w-[752.5px] h-[236px] border-t-[1px] border-solid border-red-100 border-r-[1px] border-b-[1px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-6xl rounded-br-6xl rounded-bl-11xl w-[318px] h-[309px] object-cover"
            alt=""
            src="/download-1@2x.png"
          />
          <div className="absolute top-[220px] left-[347px] w-[137px] h-[38.07px] text-white">
            <img
              className="absolute top-[0px] left-[0px] rounded-3041xl w-[137px] h-[38.07px]"
              alt=""
              src="/rectangle-44.svg"
            />
            <div className="absolute top-[7px] left-[43px] font-semibold">
              View
            </div>
          </div>
          <img
            className="absolute top-[47px] left-[1034px] w-[27px] h-[27px]"
            alt=""
            src="/ellipse-21.svg"
          />
          <div className="absolute top-[74px] left-[347px] text-17xl font-semibold">
            PFA Durg
          </div>
          <div className="absolute top-[128px] left-[347px] text-base font-semibold inline-block w-[629px] h-[67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="absolute top-[1468px] left-[0px] w-[1280px] h-[528px] text-45xl">
        <img
          className="absolute top-[0px] left-[0px] w-[1280px] h-[528px]"
          alt=""
          src="/background1.svg"
        />
        <div className="absolute top-[calc(50%_-_225px)] left-[calc(50%_+_71px)] w-[505px] h-[429.45px]">
          <div className="absolute top-[calc(50%_-_214.73px)] left-[calc(50%_-_252.5px)] w-[505px] h-[335px]">
            <div className="absolute top-[calc(50%_-_167.5px)] left-[calc(50%_-_252.5px)] w-[363px] h-[78px]">
              <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_181.5px)] font-semibold">
                <span>Contact</span>
                <span className="text-red-100"> Us</span>
              </div>
            </div>
            <div className="absolute top-[102px] left-[0px] w-[505px] h-[127px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-lavenderblush-200 w-[505px] h-[127px]" />
              <TextField
                className="absolute top-[25px] left-[15px]"
                sx={{ width: 425 }}
                color="primary"
                variant="outlined"
                multiline
                maxRows={50}
                label="pen down your queries.."
                placeholder="Textarea placeholder"
                margin="none"
              />
            </div>
            <div className="absolute top-[291px] left-[0px] w-[505px] h-11">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-lavenderblush-200 w-[505px] h-11" />
              <TextField
                className="absolute top-[17px] left-[15px]"
                sx={{ width: 425 }}
                color="error"
                variant="outlined"
                multiline
                label="abc@gmail.com"
                placeholder="Textarea placeholder"
                margin="none"
              />
            </div>
            <div className="absolute top-[259px] left-[0px] text-5xl font-semibold text-black text-left flex items-center w-[200px] h-[25px]">{`Email - `}</div>
          </div>
          <img
            className="absolute h-[9.89%] w-[29.31%] top-[90.11%] right-[35.25%] bottom-[0%] left-[35.45%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/socials2.svg"
          />
        </div>
        <div className="absolute top-[39px] left-[71px] w-[265px] h-[85.06px] text-51xl">
          <div className="absolute top-[0px] left-[55.06px] font-semibold">
            h
          </div>
          <div className="absolute top-[calc(50%_-_42.47px)] left-[calc(50%_-_132.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-200">eard</span>
          </div>
        </div>
        <div className="absolute top-[141px] left-[71px] w-[184px] h-[264px] text-9xl text-red-100 font-cabin">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-center gap-[12px]">
            <div className="relative font-semibold [backdrop-filter:blur(4px)]">
              Home
            </div>
            <div className="relative font-semibold [backdrop-filter:blur(4px)]">
              About Us
            </div>
            <div className="relative font-semibold [backdrop-filter:blur(4px)]">
              Help Support
            </div>
            <div className="relative font-semibold [backdrop-filter:blur(4px)]">
              Health Support
            </div>
            <div className="relative font-semibold [backdrop-filter:blur(4px)]">
              Features
            </div>
            <div className="relative font-semibold [backdrop-filter:blur(4px)]">
              Contact Us
            </div>
          </div>
        </div>
        <div className="absolute top-[484px] left-[0px] w-[1280px] h-11 text-xl text-black font-brawler">
          <div className="absolute top-[0px] left-[0px] bg-lavenderblush-200 w-[1280px] h-11" />
          <div className="absolute top-[8.11px] left-[454px] flex items-center justify-center w-[374px] h-[26.63px]">
            @copyright.Inc
          </div>
        </div>
        <div className="absolute top-[41.6px] left-[639.6px] [backdrop-filter:blur(4px)] box-border w-[2.8px] h-[413.8px] border-r-[2.8px] border-solid border-lavenderblush-200" />
      </div>
      <div className="absolute top-[0px] left-[1px] w-[1280px] h-[342px] text-mid text-white">
        <div className="absolute top-[-0.4px] left-[-0.4px] bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1280.8px] h-[342.8px] border-[0.8px] border-solid border-red-100" />
        <div className="absolute top-[143px] left-[91px] w-[933px] h-[147px] text-left">
          <div className="absolute top-[53px] left-[0px] rounded-3041xl bg-white w-[607px] h-[94px]" />
          <div className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-none rounded-b-none bg-red-100 w-[214px] h-[53px]" />
          <div className="absolute top-[0px] left-[225px] rounded-tl-none rounded-tr-11xl rounded-b-none bg-white w-[214px] h-[53px]" />
          <div className="absolute top-[53px] left-[0px] rounded-3041xl bg-gainsboro-300 box-border w-[607px] h-[94px] border-[15px] border-solid border-red-100" />
          <img
            className="absolute top-[53px] left-[0px] w-[51px] h-3.5"
            alt=""
            src="/rectangle-40.svg"
          />
          <div className="absolute top-[49px] left-[0px] rounded-t-none rounded-br-none rounded-bl-sm bg-red-100 w-[13px] h-[54px]" />
          <div className="absolute top-[20px] left-[36px] font-semibold">
            Search By Name
          </div>
          <div className="absolute top-[20px] left-[244px] font-semibold text-red-100">
            Search By Service
          </div>
          <div className="absolute top-[66px] left-[712px] w-[221px] h-[69px] text-6xl">
            <img
              className="absolute top-[0px] left-[0px] rounded-3041xl w-[221px] h-[69px]"
              alt=""
              src="/rectangle-431.svg"
            />
            <div className="absolute top-[25px] left-[67px] font-medium flex items-center w-[87px] h-[19px]">
              Search
            </div>
          </div>
        </div>
        <div className="absolute top-[24px] left-[50px] w-[197px] h-[63px] text-33xl text-gray-200">
          <div className="absolute top-[0px] left-[41px] font-semibold">h</div>
          <div className="absolute top-[calc(50%_-_31.5px)] left-[calc(50%_-_98.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-200">eard</span>
          </div>
        </div>
        <div className="absolute top-[41px] left-[715px] flex flex-row items-start justify-center gap-[24px] text-5xl text-red-100 font-cabin">
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Home
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            About Us
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Health Support
          </div>
          <div className="relative font-semibold [backdrop-filter:blur(4px)]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoSearch1;
