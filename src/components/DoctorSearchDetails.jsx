import React from "react";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Background from './image/background.png'

const DoctorsSearchDetails = () => {
  const navigate = useNavigate();

  const onCtaClick = useCallback(() => {
    navigate("/LandingPage");
  }, [navigate]);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[1808px] overflow-hidden text-left text-21xl text-black font-montserrat">
      <div className="absolute top-[1280px] left-[0px] w-[1280px] h-[528px] text-center text-xl text-gray-200">
        <img
          className="absolute top-[0px] left-[0px] w-[1280px] h-[528px]"
          alt=""
          src={Background}
        />
        <div className="absolute top-[calc(50%_-_225px)] left-[calc(50%_+_71px)] w-[505px] h-[429.45px] text-left">
          <div className="absolute top-[calc(50%_-_214.73px)] left-[calc(50%_-_252.5px)] w-[505px] h-[335px]">
            <div className="absolute top-[calc(50%_-_167.5px)] left-[calc(50%_-_252.5px)] w-[363px] h-[78px] text-center text-45xl">
              <div className="absolute top-[calc(50%_-_39px)] left-[calc(50%_-_181.5px)] font-semibold">
                <span>Contact</span>
                <span className="text-red-100"> Us</span>
              </div>
            </div>
            <div className="absolute top-[102px] left-[0px] w-[505px] h-[127px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-lavenderblush-200 w-[505px] h-[127px]" />
              <div className="absolute top-[25px] left-[15px] font-semibold flex items-center w-[425px] h-[30px]">
                pen down your queries..
              </div>
            </div>
            <div className="absolute top-[291px] left-[0px] w-[505px] h-11">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-lavenderblush-200 w-[505px] h-11" />
              <div className="absolute top-[17px] left-[15px] font-semibold flex items-center w-[425px] h-[10.39px]">
                abc@gmail.com
              </div>
            </div>
            <div className="absolute top-[259px] left-[0px] text-5xl font-semibold text-black flex items-center w-[200px] h-[25px]">{`Email - `}</div>
          </div>
          <img
            className="absolute h-[9.89%] w-[29.31%] top-[90.11%] right-[35.25%] bottom-[0%] left-[35.45%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/socials4.svg"
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
        <div className="absolute top-[484px] left-[0px] w-[1280px] h-11 text-black font-brawler">
          <div className="absolute top-[0px] left-[0px] bg-lavenderblush-200 w-[1280px] h-11" />
          <div className="absolute top-[8.11px] left-[454px] flex items-center justify-center w-[374px] h-[26.63px]">
            @copyright.Inc
          </div>
        </div>
        <div className="absolute top-[41.6px] left-[639.6px] [backdrop-filter:blur(4px)] box-border w-[2.8px] h-[413.8px] border-r-[2.8px] border-solid border-lavenderblush-200" />
      </div>
      <Button
        className="absolute top-[756px] left-[407px] cursor-pointer"
        sx={{ width: 236 }}
        variant="contained"
        color="error"
        href="/doctors-info"
        onClick={onCtaClick}
      >
        View Profile
      </Button>
      <div className="absolute top-[398px] left-[73px] text-[26px] font-medium flex items-center w-[371px] h-[23px]">
        Displaying 2 search result
      </div>
      <div className="absolute top-[486px] left-[99px] w-[886px] h-[233px]">
        <img
          className="absolute top-[0px] left-[0px] w-[233px] h-[233px]"
          alt=""
          src="/doc-img-1.svg"
        />
        <div className="absolute top-[16px] left-[306px] font-medium text-red-100 flex items-center w-[371px] h-[75px]">
          Dhruv Adavadkar
        </div>
        <div className="absolute top-[77px] left-[308px] text-xl font-medium flex items-center w-[371px] h-[23px]">
          PGDA, MBBS
        </div>
        <div className="absolute top-[137px] left-[308px] text-5xl font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
      </div>
      <Button
        className="absolute top-[1165px] left-[417px]"
        sx={{ width: 236 }}
        variant="contained"
        color="error"
        href="/doctors-info"
      >
        View Profile
      </Button>
      <div className="absolute top-[895px] left-[109px] w-[886px] h-[233px]">
        <img
          className="absolute top-[0px] left-[0px] w-[233px] h-[233px]"
          alt=""
          src="/doc-img-1.svg"
        />
        <div className="absolute top-[16px] left-[306px] font-medium text-red-100 flex items-center w-[371px] h-[75px]">
          Dhruv Adavadkar
        </div>
        <div className="absolute top-[137px] left-[308px] text-5xl font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
        <div className="absolute top-[77px] left-[308px] text-xl font-medium flex items-center w-[371px] h-[23px]">
          PGDA, MBBS
        </div>
      </div>
      <img
        className="absolute h-[0.86%] w-[0.78%] top-[65.62%] right-[50.35%] bottom-[33.52%] left-[48.87%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-chevron-down-arrow-icon.svg"
      />
      <div className="absolute top-[4px] left-[-6px] w-[1280px] h-[357px] text-center text-mid text-white">
        <div className="absolute top-[-0.4px] left-[-0.4px] bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1280.8px] h-[357.8px] border-[0.8px] border-solid border-red-100" />
        <div className="absolute top-[149px] left-[104px] w-[933px] h-[147px] text-left">
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
          <div className="absolute top-[12px] left-[36px] font-medium flex items-center w-[172px] h-[37px]">
            Search By Name
          </div>
          <div className="absolute top-[21px] left-[244px] font-medium text-red-100 flex items-center w-[175px] h-[19px]">
            Search By Speciality
          </div>
          <div className="absolute top-[65px] left-[712px] w-[221px] h-[69px] text-6xl">
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
        <div className="absolute top-[26px] left-[56px] w-[197px] h-[63px] text-33xl text-gray-200">
          <div className="absolute top-[0px] left-[41px] font-semibold">h</div>
          <div className="absolute top-[calc(50%_-_31.5px)] left-[calc(50%_-_98.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-200">eard</span>
          </div>
        </div>
        <div className="absolute top-[43px] left-[711px] w-[483px] h-[29px] text-5xl text-red-100 font-cabin">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-center gap-[24px]">
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
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSearchDetails;
