import React from "react";
import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import About from './image/about.png';
import Hands from './image/hands.png';
import Hands1 from './image/hands1.png';
import Landpic from './image/landpic.png';
import Background from './image/background.png';


const LandingPage = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onLearnMoreContainerClick = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

  const onRectangle11Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onCheckoutNGOsTextClick = useCallback(() => {
    navigate("/ngo-search");
  }, [navigate]);

  const onNgoButtonContainerClick = useCallback(() => {
    navigate("/ngo-search1");
  }, [navigate]);

  const onHealthContainerClick = useCallback(() => {
    navigate("/doctors-search-details");
  }, [navigate]);

  const onDialogBoxContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[4980px] overflow-hidden text-center text-45xl text-gray-200 font-montserrat">
      <img
        className="absolute top-[57.85px] left-[738.66px] w-[526.3px] h-[694.3px]"
        alt="landpic"
        src={Landpic}>
        </img>
      <div className="absolute top-[4451.79px] left-[0px] w-[1280px] h-[528px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1280px] h-[528px]"
          alt=""
          src={Background}
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
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-lavenderblush-200 w-[505px] h-[127px]" />
              <TextField
                className="absolute top-[35px] left-[0px]"
                sx={{ width: 450 }}
                color="error"
                variant="outlined"
                multiline
                label="pen down your queries.."
                placeholder="Textarea placeholder"
                margin="none"
              />
            </div>
            <div className="absolute top-[291px] left-[0px] w-[505px] h-11">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-lavenderblush-200 w-[505px] h-[90px]" />
              <TextField
                className="absolute top-[17px] left-[0px]"
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
            src="/socials.svg"
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
      <div className="absolute top-[3852.79px] left-[71px] w-[1043px] h-[495px] text-65xl text-red-100">
        <div className="absolute top-[146px] left-[0px] w-[1043px] h-[349px]">
          <div className="absolute top-[-0.4px] left-[-0.4px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
          <div className="absolute top-[-0.4px] left-[729.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
          <div className="absolute top-[-0.4px] left-[364.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
        </div>
        <div className="absolute top-[calc(50%_-_247.5px)] left-[calc(50%_-_521.5px)] font-semibold">
          <span>B</span>
          <span className="text-gray-200">logs</span>
        </div>
      </div>
      <div className="absolute top-[2670.79px] left-[61px] w-[1191px] h-[1078px] text-left">
        <div className="absolute top-[615px] left-[10px] w-[1043px] h-[463px]">
          <div className="absolute top-[114px] left-[0px] w-[1043px] h-[349px]">
            <div
              className="absolute top-[-0.4px] left-[-0.4px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] cursor-pointer border-[0.8px] border-solid border-red-100"
              onClick={onRectangle7Click}
            />
            <div className="absolute top-[-0.4px] left-[729.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
            <div className="absolute top-[-0.4px] left-[364.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
          </div>
          <div className="absolute top-[calc(50%_-_231.5px)] left-[calc(50%_-_521.5px)] font-semibold">
            <span>Meet our</span>
            <span className="text-red-100">{` Doctors - `}</span>
          </div>
        </div>
        <div className="absolute top-[146px] left-[0px] w-[1191px] h-[424.97px] text-5xl text-black">
          <div className="absolute top-[63px] left-[613px] w-[578px] h-[299px]">
            <div className="absolute top-[0px] left-[0px] w-[578px] h-[198px]">
              <div className="absolute top-[111px] left-[0px] font-medium flex items-center w-[541.58px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
              <div className="absolute top-[0px] left-[0px] font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
            </div>
            <div
              className="absolute top-[246px] left-[0px] w-64 h-[53px] cursor-pointer text-center text-white"
              onClick={onLearnMoreContainerClick}
            >
              <div className="absolute top-[-2px] left-[-2px] rounded bg-red-100 box-border w-[260px] h-[57px] border-[2px] border-solid border-white" />
              <div className="absolute top-[12px] left-[9px] font-semibold">
                Search your Doctor
              </div>
            </div>
          </div>
          <img
            className="absolute top-[-1.8px] left-[-3.24px] w-[571.48px] h-[432.57px]"
            alt=""
            src={Hands}
          />
        </div>
        <div className="absolute top-[calc(50%_-_539px)] left-[calc(50%_-_595.5px)] text-65xl font-semibold text-center text-red-100">
          <span>Health</span>
          <span className="text-gray-200"> Support</span>
        </div>
      </div>
      <div className="absolute top-[1578.79px] left-[61px] w-[1224px] h-[988px] text-5xl text-red-100">
        <div className="absolute top-[639px] left-[5px] w-[1043px] h-[349px]">
          <div
            className="absolute top-[-0.4px] left-[-0.4px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle11Click}
          />
          <div className="absolute top-[-0.4px] left-[729.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
          <div className="absolute top-[-0.4px] left-[364.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] border-[0.8px] border-solid border-red-100" />
        </div>
        <div className="absolute top-[138px] left-[5px] w-[660px] h-[324px] text-white">
          <div className="absolute top-[271px] left-[0px] w-[236px] h-[53px]">
            <div className="absolute top-[-2px] left-[-2px] rounded bg-red-100 box-border w-60 h-[57px] border-[2px] border-solid border-white" />
            <div
              className="absolute top-[12px] left-[17px] font-semibold cursor-pointer"
              onClick={onCheckoutNGOsTextClick}
            >
              Checkout NGO’s
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[660px] h-[239px] text-left text-black">
            <div className="absolute top-[0px] left-[0px] font-medium flex items-center w-[660px] h-[116px]">
              Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas
              aut dolore repudiandae. Non similique totam voluptatem culpa ut
              iste voluptas aut dolore repudiandae
            </div>
            <div className="absolute top-[123px] left-[0px] font-medium flex items-center w-[660px] h-[116px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_494px)] left-[calc(50%_-_607px)] text-65xl font-semibold">
          <span>Help</span>
          <span className="text-gray-200"> Support</span>
        </div>
        <div className="absolute top-[calc(50%_+_28px)] left-[calc(50%_-_612px)] text-45xl font-semibold text-left">
          <span>F</span>
          <span className="text-gray-200">eatured-</span>
        </div>
        <img
          className="absolute top-[40.2px] left-[603.81px] w-[617px] h-[471.69px]"
          alt=""
          src={Hands1}
        />
      </div>
      <div className="absolute top-[calc(50%_-_1576px)] left-[calc(50%_-_579px)] w-[1150px] h-[560.79px] text-65xl">
        <div className="absolute top-[calc(50%_-_280.4px)] left-[calc(50%_-_575px)] font-semibold">
          <span>{`About `}</span>
          <span className="text-red-100">Un</span>
          <span>heard</span>
        </div>
        <div className="absolute top-[146px] left-[0px] w-[1150px] h-[414.79px] text-left text-5xl text-black">
          <img
            className="absolute top-[-2.75px] left-[-4.07px] w-[492.83px] h-[424.29px]"
            alt=""
            src={About}
          />
          <div className="absolute top-[58px] left-[572px] w-[578px] h-[299px]">
            <div className="absolute top-[0px] left-[0px] w-[578px] h-[198px]">
              <div className="absolute top-[111px] left-[0px] font-medium flex items-center w-[541.58px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
              <div className="absolute top-[0px] left-[0px] font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
            </div>
            <div className="absolute top-[246px] left-[0px] w-[200.33px] h-[53px] text-center text-white">
              <div className="absolute top-[-2px] left-[-2px] rounded bg-red-100 box-border w-[204.33px] h-[57px] border-[2px] border-solid border-white" />
              <div className="absolute top-[12px] left-[30px] font-semibold">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[18px] left-[36px] w-[1432px] h-[792px] text-xl">
        <img
          className="absolute top-[84px] left-[906px] w-[526px] h-[629px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[17px] left-[332px] w-[668px] h-10 text-red-100 font-cabin">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-center gap-[24px]">
            <Button
              className="relative"
              variant="lined"
              color="error"
              href="/landing-page"
            >
              Home
            </Button>
            <Button className="relative font-semibold " variant="lined" color="error"  >
              About Us
            </Button>
            <Button className="relative font-semibold " variant="lined" color="error"  href="/FinfYourDoctor">
              Help Support
            </Button>
            <Button className="relative font-semibold [backdrop-filter:blur(4px)]" variant="lined" color="error">
              Health Support
              </Button>
            <Button className="relative font-semibold [backdrop-filter:blur(4px)]" variant="lined" color="error">
              Features
            </Button>
            <Button className="relative font-semibold [backdrop-filter:blur(4px)]" variant="lined" color="error">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute top-[132px] left-[30px] w-[673px] h-[329px] text-59xl">
          <div className="absolute top-[290px] left-[0px] text-13xl text-black">
            Helping women find their voice!!
          </div>
          <b className="absolute top-[191px] left-[1px]">
            <span>Are</span>
            <span className="text-black">{` `}</span>
            <span className="text-red-100">Never Heard</span>
          </b>
          <b className="absolute top-[0px] left-[0px]">Millions of</b>
          <b className="absolute top-[96px] left-[1px]">Women’s Voices</b>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[197px] h-[63px] text-33xl">
          <div className="absolute top-[0px] left-[41px] font-semibold">h</div>
          <div className="absolute top-[calc(50%_-_31.5px)] left-[calc(50%_-_98.5px)] font-semibold text-red-100">
            <span>Un</span>
            <span className="text-gray-200">eard</span>
          </div>
        </div>
        <div className="absolute top-[739px] left-[30px] w-[420px] h-[53px] text-5xl text-white">
          <div
            className="absolute top-[0px] left-[211px] w-[209px] h-[53px] cursor-pointer"
            onClick={onNgoButtonContainerClick}
          >
            <div
              className="absolute top-[-2px] left-[-2px] rounded-t-none rounded-br rounded-bl-none bg-red-100 box-border w-[213px] h-[57px] border-[2px] border-solid border-white"
              data-scroll-to="rectangle"
            />
            <div className="absolute top-[12px] left-[66px] font-semibold">
              NGO’s
            </div>
          </div>
          <div
            className="absolute top-[2px] left-[0px] w-[211px] h-[49px] cursor-pointer text-gray-200"
            onClick={onHealthContainerClick}
          >
            <div className="absolute top-[2px] left-[18px] font-semibold flex items-center justify-center w-44 h-11">
              Health
            </div>
            <div className="absolute top-[-2px] left-[-2px] rounded-t-none rounded-br-none rounded-bl bg-gainsboro-300 box-border w-[215px] h-[53px] border-[2px] border-solid border-red-100" />
          </div>
        </div>
        <div
          className="absolute top-[507px] left-[30px] w-[775.02px] h-[216px] cursor-pointer text-left text-9xl"
          onClick={onDialogBoxContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[75.02px] h-[216px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-b-none bg-lavenderblush-100 [backdrop-filter:blur(4px)] w-[675.02px] h-[216px]" />
            <div className="absolute top-[64.54px] left-[0px] shadow-[0px_2px_3px_rgba(218,_27,_27,_0.75)] box-border w-[675px] h-0 border-t-[1px] border-solid border-crimson-200" />
          </div>
          <div className="absolute top-[12px] left-[19px] font-medium flex items-center w-[583px] h-[34px]">
            Describe your problem here -
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
