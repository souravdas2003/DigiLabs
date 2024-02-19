const FrameComponent = () => {
  return (
    <div className="w-[400px] rounded-21xl bg-gray-200 flex flex-col items-center justify-start pt-[54px] pb-[30px] pr-[22px] pl-[27px] box-border gap-[25px_0px] min-w-[400px] max-w-full z-[1] text-left text-5xl text-white font-manrope lg:flex-1 mq750:min-w-full mq450:pt-[23px] mq450:box-border mq1050:pt-[35px] mq1050:pb-5 mq1050:box-border">
      <div className="w-[400px] h-[901px] relative rounded-21xl bg-gray-200 hidden max-w-full" />
      <div className="w-[150px] flex flex-col items-end justify-start gap-[13px_0px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="h-[150px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cornflowerblue-100 w-full h-full z-[3]" />
            <div className="absolute top-[20px] left-[20px] w-[110px] h-[110px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightsteelblue w-full h-full z-[4]" />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-contain"
                alt=""
                src="/mask-group-7@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px_0px]">
          <h1 className="m-0 h-[33px] relative text-inherit font-bold font-inherit inline-block z-[2] mq450:text-lgi">
            <span className="uppercase">A</span>
            <span className="lowercase">{`LIAM `}</span>
            <span className="uppercase">C</span>
            <span className="lowercase">OLTER</span>
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-5 text-base text-lightgray">
            <div className="relative capitalize font-medium z-[2]">
              Physician
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-11xl bg-darkslateblue flex flex-row items-center justify-start pt-[21px] pb-[22px] pr-[29px] pl-7 box-border gap-[0px_48px] max-w-full z-[2] text-lg mq750:flex-wrap mq450:gap-[0px_48px]">
        <div className="h-20 w-[350px] relative rounded-11xl bg-darkslateblue hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <h3 className="m-0 h-[25px] relative text-inherit font-semibold font-inherit inline-block z-[3]">
            Active Patients
          </h3>
        </div>
        <div className="w-[114px] flex flex-row items-end justify-start text-sm text-black">
          <img
            className="h-[37px] w-9 relative object-contain min-h-[37px] z-[3]"
            alt=""
            src="/group-11@2x.png"
          />
          <img
            className="h-[37px] w-9 relative object-contain min-h-[37px] z-[4] ml-[-10px]"
            alt=""
            src="/group-12@2x.png"
          />
          <img
            className="h-[37px] w-9 relative object-contain min-h-[37px] z-[5] ml-[-10px]"
            loading="eager"
            alt=""
            src="/group-13@2x.png"
          />
          <div className="h-9 flex-1 relative ml-[-10px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 box-border w-full h-full z-[6] border-[0px] border-solid border-black" />
            <b className="absolute top-[8px] left-[9px] capitalize z-[7]">8+</b>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-21xl bg-darkslateblue flex flex-col items-center justify-start pt-[18px] px-2.5 pb-2.5 box-border gap-[14px_0px] max-w-full z-[2] text-xs">
        <div className="w-[350px] h-[464px] relative rounded-21xl bg-darkslateblue hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-3.5 text-base">
          <div className="flex-1 flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[0px_15px]">
              <div className="h-[46px] w-[46px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-palegoldenrod-100 w-full h-full z-[3]" />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[4]"
                  alt=""
                  src="/mask-group-8@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[3px_0px]">
                <b className="relative capitalize z-[3]">Alexa Max</b>
                <div className="relative text-xs capitalize font-medium text-lightgray z-[3]">
                  Active 5 min ago
                </div>
              </div>
            </div>
            <div className="h-10 w-10 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslategray-100 w-full h-full z-[3]" />
              <img
                className="absolute top-[13px] left-[13px] w-3.5 h-3.5 z-[4]"
                loading="eager"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-[15px] pl-3.5 box-border">
          <div className="h-px flex-1 relative box-border z-[3] border-t-[1px] border-solid border-gray-300" />
        </div>
        <div className="w-[180px] flex flex-row items-start justify-start text-black">
          <div className="rounded-sm bg-whitesmoke-200 flex flex-row items-center justify-start py-[9px] pr-11 pl-[13px] whitespace-nowrap z-[3]">
            <div className="h-[34px] w-[120px] relative rounded-sm bg-whitesmoke-200 hidden" />
            <div className="relative capitalize font-semibold z-[4]">
              Hi, Doctor.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-3.5 text-black">
          <div className="flex-1 flex flex-col items-end justify-start gap-[7px_0px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[227px] flex flex-row items-center justify-start gap-[0px_15px]">
                <div className="h-[46px] w-[46px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-palegoldenrod-100 w-full h-full z-[3]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[4]"
                    alt=""
                    src="/mask-group-8@2x.png"
                  />
                </div>
                <div className="flex-1 rounded-sm bg-whitesmoke-200 flex flex-row items-center justify-end pt-[11px] pb-[13px] pr-3.5 pl-[21px] z-[3]">
                  <div className="h-[60px] w-[166px] relative rounded-sm bg-whitesmoke-200 hidden" />
                  <div className="flex-1 relative leading-[146.6%] z-[4]">
                    <p className="m-0">
                      <span className="capitalize">{`I `}</span>got knee jerk.
                      What
                    </p>
                    <p className="m-0">should i do right now?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[61px] text-lightgray">
              <div className="relative capitalize font-semibold whitespace-nowrap z-[3]">
                tue 02:32pm
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0px_15px]">
              <div className="rounded-sm bg-lightsteelblue flex flex-row items-center justify-start py-[9px] pr-[31px] pl-[17px] whitespace-nowrap z-[3]">
                <div className="h-[34px] w-[104px] relative rounded-sm bg-lightsteelblue hidden" />
                <div className="relative capitalize font-semibold z-[4]">
                  Hi, Alexa.
                </div>
              </div>
              <div className="h-[46px] w-[46px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightsteelblue w-full h-full z-[3]" />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[4]"
                  alt=""
                  src="/mask-group-10@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[61px] pl-[46px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[191px] rounded-sm bg-lightsteelblue flex flex-row items-center justify-center py-3 pr-[17px] pl-[18px] box-border z-[3]">
                <div className="h-[60px] w-[191px] relative rounded-sm bg-lightsteelblue hidden" />
                <div className="flex-1 relative leading-[146.6%] font-medium z-[4]">
                  <span className="capitalize">T</span>
                  <span className="lowercase">
                    his help maintain balance and posture.
                  </span>
                  <span className="uppercase"> d</span>
                  <span className="lowercase">ont worry.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[60px] text-lightgray">
              <div className="relative capitalize font-semibold whitespace-nowrap z-[3]">
                tue 02:32pm
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-10xl bg-darkslategray-100 flex flex-row items-center justify-between py-[5px] pr-[7px] pl-[27px] box-border gap-[20px] max-w-full z-[3] mq450:flex-wrap">
          <div className="h-[70px] w-[330px] relative rounded-10xl bg-darkslategray-100 hidden max-w-full" />
          <div className="flex flex-row items-center justify-start gap-[0px_28px]">
            <img
              className="h-5 w-3.5 relative z-[4]"
              loading="eager"
              alt=""
              src="/icon-14.svg"
            />
            <div className="relative font-semibold z-[4]">
              <span className="capitalize">T</span>
              <span className="lowercase">ype your text......</span>
            </div>
          </div>
          <div className="rounded-xl bg-cornflowerblue-100 flex flex-row items-center justify-center pt-5 pb-[21px] pr-[21px] pl-5 z-[4]">
            <div className="h-[60px] w-[60px] relative rounded-xl bg-cornflowerblue-100 hidden" />
            <img
              className="h-[19.2px] w-[19.2px] relative rounded-12xs-5 z-[5]"
              alt=""
              src="/icon-15.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
