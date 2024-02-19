import FrameComponent from "../components/frame-component";

const DoctorsDashboard = () => {
  return (
    <div className="w-full relative rounded-21xl bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-[25px] pr-[25px] pl-[51px] box-border gap-[0px_54px] tracking-[normal] mq750:gap-[0px_54px] mq750:pl-[25px] mq750:box-border">
      <div className="h-[150px] w-[150px] relative rounded-[50%] bg-gray-100 hidden" />
      <div className="h-[948px] w-[60px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border mq750:hidden mq750:pt-5 mq750:box-border mq1050:pt-[29px] mq1050:box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
          loading="eager"
          alt=""
          src="/group-7@2x.png"
        />
      </div>
      <main className="flex-1 flex flex-row items-start justify-start relative max-w-[calc(100%_-_114px)] mq750:max-w-full">
        <div className="h-20 w-20 absolute my-0 mx-[!important] right-[539px] bottom-[55px] rounded-[50%] bg-whitesmoke-200 z-[2]" />
        <section className="flex-1 rounded-21xl bg-gray-100 flex flex-row items-end justify-start py-[25px] px-[50px] box-border gap-[0px_48px] max-w-full text-left text-[28px] text-white font-manrope lg:flex-wrap lg:pl-[25px] lg:pr-[25px] lg:box-border mq750:gap-[0px_48px] mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
          <div className="h-[974px] w-[1250px] relative rounded-21xl bg-gray-100 hidden max-w-full" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[29px_0px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_41px] top-[0] z-[99] sticky max-w-full mq750:gap-[0px_41px]">
              <div className="flex flex-row items-center justify-start py-0 pr-[35px] pl-0 relative">
                <h1 className="m-0 relative text-inherit capitalize z-[1] font-inherit mq450:text-[22px]">
                  <p className="m-0">hello,</p>
                  <p className="m-0 font-extrabold">{`Dr. Colter! `}</p>
                </h1>
                <img
                  className="h-[22px] w-[22px] absolute my-0 mx-[!important] right-[0px] bottom-[6px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[0px_10px] max-w-full text-base text-lightgray">
                <div className="flex-1 rounded-xl bg-darkslategray-100 flex flex-row items-center justify-start py-[18px] px-[21px] box-border gap-[0px_12px] max-w-full z-[1]">
                  <div className="h-[60px] w-[412px] relative rounded-xl bg-darkslategray-100 hidden max-w-full" />
                  <img
                    className="h-6 w-6 relative min-h-[24px] z-[2]"
                    alt=""
                    src="/iconmagnifyingglass.svg"
                  />
                  <div className="relative capitalize font-medium z-[2]">
                    Search
                  </div>
                </div>
                <div className="rounded-xl bg-cornflowerblue-100 flex flex-row items-center justify-center pt-[19px] pb-5 pr-[19px] pl-[21px] z-[1]">
                  <div className="h-[60px] w-[60px] relative rounded-xl bg-cornflowerblue-100 hidden" />
                  <div className="h-[21px] w-5 relative">
                    <img
                      className="absolute top-[1px] left-[0px] w-[17.5px] h-5 z-[2]"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="absolute top-[0px] left-[10px] rounded-[50%] bg-red w-2.5 h-2.5 z-[3]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_27px] max-w-full text-[32px] mq750:flex-wrap">
              <div className="w-[290px] flex flex-col items-start justify-start gap-[25px_0px] min-w-[290px] mq750:flex-1">
                <div className="self-stretch rounded-11xl bg-darkslategray-300 flex flex-row items-center justify-start py-0 pr-0 pl-[25px] gap-[29px] z-[1] mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border">
                  <div className="self-stretch w-[290px] relative rounded-11xl bg-darkslategray-300 hidden" />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[80px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px]">
                      <b className="relative capitalize z-[1] mq450:text-lgi mq1050:text-[26px]">
                        42
                      </b>
                      <div className="flex flex-col items-start justify-start text-base">
                        <b className="relative capitalize z-[1]">
                          patients visited
                        </b>
                        <div className="relative text-xs capitalize font-medium text-gainsboro-100 z-[1]">
                          this month
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[113px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-darkslategray-200 flex flex-col items-center justify-start pt-[35px] pb-9 pr-[31px] pl-8 box-border min-w-[113px] z-[1] text-sm mq450:flex-1">
                    <div className="w-[113px] h-[150px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-darkslategray-200 hidden" />
                    <div className="self-stretch h-[25px] relative rounded-t-11xl rounded-b-none bg-cornflowerblue-200 z-[2]" />
                    <div className="rounded-t-none rounded-b-11xl bg-cornflowerblue-100 flex flex-col items-center justify-start pt-[9px] pb-3.5 pr-[11px] pl-2 gap-[4px_0px] z-[2]">
                      <div className="w-[50px] h-[54px] relative rounded-t-none rounded-b-11xl bg-cornflowerblue-100 hidden" />
                      <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-[9px]">
                        <img
                          className="h-2 w-4 relative z-[3]"
                          loading="eager"
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                      <b className="relative capitalize z-[3]">70%</b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-11xl bg-darkslategray-300 flex flex-col items-start justify-start pt-[13px] pb-[19px] pr-9 pl-[25px] gap-[13px] z-[1] text-base text-lightgray">
                  <div className="w-[290px] h-[150px] relative rounded-11xl bg-darkslategray-300 hidden" />
                  <div className="flex flex-row items-start justify-start gap-[0px_11px]">
                    <div className="h-[22px] w-[30px] relative rounded-mini bg-cornflowerblue-100 z-[1]">
                      <div className="absolute top-[0px] left-[0px] rounded-mini bg-cornflowerblue-100 w-full h-full hidden" />
                      <img
                        className="absolute top-[7px] left-[9px] w-[11px] h-2 z-[2]"
                        loading="eager"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                    <b className="relative z-[1]">Upcoming Events</b>
                  </div>
                  <div className="w-[57px] h-[57px] relative rounded-[50%] bg-paleturquoise-200 box-border hidden border-[0px] border-solid border-black" />
                  <img
                    className="w-[56.4px] h-[56.4px] relative object-contain hidden"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className="w-[79px] h-[79px] relative rounded-[50%] bg-gainsboro-200 hidden" />
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_25px] text-xl text-white mq450:flex-wrap">
                    <div className="h-[79px] w-[79px] relative rounded-[50%] bg-paleturquoise-200 z-[4]" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[15px_0px] min-w-[81px]">
                      <div className="flex flex-col items-start justify-start">
                        <h2 className="m-0 relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-base">
                          aliza shah
                        </h2>
                        <div className="flex flex-row items-center justify-start gap-[0px_8px] text-xs text-gainsboro-100">
                          <img
                            className="h-[12.6px] w-3.5 relative z-[1]"
                            loading="eager"
                            alt=""
                            src="/icon-3.svg"
                          />
                          <div className="relative capitalize font-medium whitespace-nowrap z-[1]">
                            08:00-09:00 am
                          </div>
                        </div>
                      </div>
                      <div className="rounded-3xs bg-darkslategray-100 flex flex-row items-center justify-center pt-[5px] pb-1 pr-2.5 pl-3 whitespace-nowrap z-[1] text-xs text-gainsboro-100">
                        <div className="h-[25px] w-[125px] relative rounded-3xs bg-darkslategray-100 hidden" />
                        <div className="relative font-medium z-[2]">
                          <span className="capitalize">{`Visited 7 `}</span>
                          <span className="lowercase">days ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-21xl bg-darkslategray-300 flex flex-col items-center justify-start pt-[27px] pb-[54px] pr-8 pl-[31px] box-border gap-[36px] min-w-[250px] max-w-full z-[1] text-5xl mq450:gap-[36px]">
                <div className="w-[385px] h-[325px] relative rounded-21xl bg-darkslategray-300 hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[4px_0px]">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap z-[1] mq450:text-lgi">
                      Statistics
                    </h1>
                    <div className="relative text-xs capitalize font-medium text-gainsboro-100 z-[1]">
                      November 2023
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs text-gainsboro-100">
                    <div className="rounded-mini flex flex-row items-center justify-start pt-2.5 pb-[9px] pr-3 pl-4 gap-[0px_7px] z-[1] border-[1px] border-solid border-cornflowerblue-100">
                      <div className="h-[35px] w-[85px] relative rounded-mini box-border hidden border-[1px] border-solid border-cornflowerblue-100" />
                      <div className="relative capitalize font-semibold z-[2]">
                        Weekly
                      </div>
                      <img
                        className="h-1 w-2 relative z-[2]"
                        alt=""
                        src="/icon-4.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-1.5 text-sm">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="h-[155px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] w-full h-full z-[1] flex items-center justify-center">
                        <img
                          className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.718)]"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <div className="absolute top-[68px] left-[158px] box-border w-[3px] h-[77px] z-[3] border-r-[3px] border-solid border-black" />
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start ml-[-303px]">
                      <div className="h-28 w-[305px] relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div className="absolute top-[42px] left-[144px] rounded-[50%] bg-gainsboro-200 box-border w-[25px] h-[25px] z-[3] border-[0px] border-solid border-black" />
                      </div>
                      <div className="w-[74px] flex flex-col items-start justify-start pt-2 px-[9px] pb-[19px] box-border relative ml-[-183px]">
                        <b className="relative capitalize z-[4]">82%</b>
                        <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                          <img
                            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full z-[3]"
                            alt=""
                            src="/rectangle-29.svg"
                          />
                          <img
                            className="absolute top-[16px] left-[49px] w-3.5 h-[7px] z-[4]"
                            alt=""
                            src="/icon-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px_0px] max-w-full text-5xl">
              <div className="w-[613px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                <h1 className="m-0 h-[33px] relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-lgi">
                  Active Patients
                </h1>
                <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-lgi">
                  Upcoming Events
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0px_25px] max-w-full text-xs text-lightgray mq750:flex-wrap">
                <div className="h-[382px] flex-1 relative rounded-21xl bg-darkslategray-300 min-w-[250px] max-w-full z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-21xl bg-darkslategray-300 w-full h-full hidden" />
                  <div className="absolute top-[33px] left-[32px] flex flex-col items-start justify-start gap-[60px_0px]">
                    <div className="relative font-semibold whitespace-nowrap z-[1]">
                      <span className="capitalize">{`08:00 `}</span>am
                    </div>
                    <div className="relative font-semibold whitespace-nowrap z-[1]">
                      <span className="capitalize">{`09:00 `}</span>am
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[47px_0px]">
                      <div className="relative font-semibold whitespace-nowrap z-[1]">
                        <span className="capitalize">{`10:00 `}</span>am
                      </div>
                      <div className="relative font-semibold whitespace-nowrap z-[1]">
                        <span className="capitalize">{`11:00 `}</span>am
                      </div>
                      <div className="relative font-semibold whitespace-nowrap z-[1]">
                        <span className="capitalize">{`12:00 `}</span>am
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[41px] left-[104px] box-border w-[250px] h-px z-[1] border-t-[1px] border-dashed border-dimgray" />
                  <div className="absolute top-[117px] left-[104px] box-border w-[250px] h-px z-[1] border-t-[1px] border-dashed border-dimgray" />
                  <div className="absolute top-[193px] left-[104px] box-border w-[250px] h-px z-[1] border-t-[1px] border-dashed border-dimgray" />
                  <div className="absolute top-[256px] left-[104px] box-border w-[250px] h-px z-[1] border-t-[1px] border-dashed border-dimgray" />
                  <div className="absolute top-[320px] left-[104px] box-border w-[250px] h-px z-[1] border-t-[1px] border-dashed border-dimgray" />
                  <div className="absolute top-[16px] left-[107px] w-[250px] flex flex-col items-end justify-start gap-[26px_0px] text-base text-black">
                    <div className="flex flex-row items-start justify-start py-0 pr-[47px] pl-[13px]">
                      <div className="rounded-xl bg-mistyrose flex flex-row items-end justify-start pt-[5px] pb-1.5 pr-[35px] pl-2.5 gap-[0px_18px] z-[2]">
                        <div className="h-[50px] w-[190px] relative rounded-xl bg-mistyrose hidden" />
                        <div className="h-9 w-9 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-plum box-border w-full h-full z-[3] border-[0px] border-solid border-darkslategray-300" />
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[4]"
                            loading="eager"
                            alt=""
                            src="/mask-group@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                          <div className="flex flex-col items-start justify-start gap-[2px_0px]">
                            <b className="relative capitalize z-[3]">
                              mark jaxon
                            </b>
                            <div className="flex flex-row items-start justify-start gap-[0px_7px] text-3xs-4">
                              <img
                                className="h-[8.4px] w-[9.4px] relative z-[3]"
                                alt=""
                                src="/icon-6.svg"
                              />
                              <div className="relative capitalize font-medium whitespace-nowrap z-[3]">
                                08:00-09:00 am
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-honeydew flex flex-row items-start justify-start py-[7px] pr-[37px] pl-[11px] gap-[0px_17px] z-[2]">
                      <div className="h-[50px] w-[190px] relative rounded-xl bg-honeydew hidden" />
                      <div className="h-9 w-9 relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-paleturquoise-100 box-border w-full h-full z-[3] border-[0px] border-solid border-darkslategray-300" />
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[4]"
                          loading="eager"
                          alt=""
                          src="/mask-group-1@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <b className="relative capitalize z-[3]">maira khan</b>
                        <div className="flex flex-row items-center justify-start gap-[0px_7px] text-3xs-4">
                          <img
                            className="h-[8.4px] w-[9.4px] relative z-[3]"
                            alt=""
                            src="/icon-7.svg"
                          />
                          <div className="relative capitalize font-medium whitespace-nowrap z-[4]">
                            09:00-10:00 am
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[22px_0px]">
                        <div className="rounded-xl bg-lightcyan flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-[46px] pl-[11px] gap-[0px_17px] z-[2]">
                          <div className="h-[50px] w-[190px] relative rounded-xl bg-lightcyan hidden" />
                          <div className="h-[37px] w-9 relative">
                            <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-palegoldenrod-200 box-border w-9 h-9 z-[3] border-[0px] border-solid border-darkslategray-300" />
                            <img
                              className="absolute top-[0px] left-[0px] w-9 h-9 object-contain z-[4]"
                              loading="eager"
                              alt=""
                              src="/mask-group-2@2x.png"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative capitalize z-[3]">
                              brick zon
                            </b>
                            <div className="flex flex-row items-center justify-start gap-[0px_5px] mt-[-1px] text-3xs-4">
                              <img
                                className="h-[8.4px] w-[9.4px] relative z-[3]"
                                loading="eager"
                                alt=""
                                src="/icon-8.svg"
                              />
                              <div className="relative capitalize whitespace-nowrap z-[4]">
                                10:00-11:00 am
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end text-xs text-lightgray">
                          <div className="flex flex-col items-start justify-start gap-[25px_0px]">
                            <div className="flex flex-row items-start justify-start py-0 px-[21px]">
                              <div className="rounded-11xl bg-gray-200 flex flex-row items-center justify-center pt-[5px] pb-2 pr-[18px] pl-[21px] whitespace-nowrap z-[2]">
                                <div className="h-[29px] w-[105px] relative rounded-11xl bg-gray-200 hidden" />
                                <div className="relative capitalize font-semibold z-[3]">
                                  Break Time
                                </div>
                              </div>
                            </div>
                            <div className="rounded-xl bg-lightblue flex flex-row items-start justify-start pt-1.5 pb-[7px] pr-[42px] pl-2.5 gap-[0px_16px] z-[2] text-base text-black">
                              <div className="h-[50px] w-[190px] relative rounded-xl bg-lightblue hidden" />
                              <div className="h-[37px] w-[37px] relative">
                                <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-palegoldenrod-100 box-border w-9 h-9 z-[3] border-[0px] border-solid border-black" />
                                <img
                                  className="absolute top-[0px] left-[1px] w-9 h-9 object-contain z-[4]"
                                  loading="eager"
                                  alt=""
                                  src="/mask-group-3@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <b className="relative capitalize z-[3]">
                                  Alexa Max
                                </b>
                                <div className="flex flex-row items-center justify-start gap-[0px_8px] text-3xs-4">
                                  <img
                                    className="h-[8.4px] w-[9.4px] relative z-[3]"
                                    loading="eager"
                                    alt=""
                                    src="/icon-7.svg"
                                  />
                                  <div className="relative capitalize font-medium whitespace-nowrap z-[4]">
                                    12:00-13:00 am
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[290px] flex flex-col items-start justify-start gap-[25px_0px] min-w-[290px] text-xl text-white mq750:flex-1">
                  <div className="self-stretch rounded-21xl bg-darkslategray-300 flex flex-col items-center justify-start pt-[27px] pb-6 pr-[27px] pl-[26px] gap-[28px_0px] z-[1]">
                    <div className="w-[290px] h-[179px] relative rounded-21xl bg-darkslategray-300 hidden" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[6px_0px]">
                        <h2 className="m-0 relative text-inherit capitalize font-bold font-inherit z-[2] mq450:text-base">
                          Team Meeting
                        </h2>
                        <div className="flex flex-row items-center justify-start gap-[0px_6px] text-xs text-gainsboro-100">
                          <img
                            className="h-[14.4px] w-4 relative z-[2]"
                            loading="eager"
                            alt=""
                            src="/icon-10.svg"
                          />
                          <div className="relative capitalize font-medium whitespace-nowrap z-[2]">
                            05:00-06:00
                          </div>
                        </div>
                      </div>
                      <div className="w-[60px] rounded-xl bg-darkslategray-100 flex flex-row items-center justify-center p-5 box-border z-[2]">
                        <div className="h-[60px] w-[60px] relative rounded-xl bg-darkslategray-100 hidden" />
                        <img
                          className="h-5 w-[17.5px] relative z-[3]"
                          loading="eager"
                          alt=""
                          src="/icon-11.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-black mq450:flex-wrap">
                      <div className="w-[111px] flex flex-row items-end justify-start">
                        <div className="h-9 w-[42px] relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-plum box-border w-9 h-9 z-[2] border-[0px] border-solid border-darkslategray-300" />
                          <img
                            className="absolute top-[0px] left-[0px] w-9 h-9 object-contain z-[3]"
                            alt=""
                            src="/mask-group@2x.png"
                          />
                        </div>
                        <div className="h-9 w-[42px] relative ml-[-15px]">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-paleturquoise-100 box-border w-9 h-9 z-[4] border-[0px] border-solid border-darkslategray-300" />
                          <img
                            className="absolute top-[0px] left-[0px] w-9 h-9 object-contain z-[5]"
                            alt=""
                            src="/mask-group-1@2x.png"
                          />
                        </div>
                        <div className="h-[37px] w-9 relative ml-[-15px]">
                          <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-palegoldenrod-200 box-border w-9 h-9 z-[6] border-[0px] border-solid border-darkslategray-300" />
                          <img
                            className="absolute top-[0px] left-[0px] w-9 h-9 object-contain z-[7]"
                            loading="eager"
                            alt=""
                            src="/mask-group-2@2x.png"
                          />
                        </div>
                        <div className="h-9 flex-1 relative ml-[-15px]">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 box-border w-full h-full z-[8] border-[0px] border-solid border-black" />
                          <b className="absolute top-[8px] left-[9px] capitalize z-[9]">
                            4+
                          </b>
                        </div>
                      </div>
                      <div className="h-10 w-[54px] relative rounded-mini bg-cornflowerblue-100 z-[2]">
                        <div className="absolute top-[0px] left-[0px] rounded-mini bg-cornflowerblue-100 w-full h-full hidden" />
                        <img
                          className="absolute top-[13px] left-[17px] w-5 h-3.5 z-[3]"
                          alt=""
                          src="/icon-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-21xl bg-darkslategray-300 flex flex-col items-center justify-start pt-[27px] pb-[30px] pr-[27px] pl-[26px] gap-[6px_0px] z-[1] text-sm text-lightgray">
                    <div className="w-[290px] h-[179px] relative rounded-21xl bg-darkslategray-300 hidden" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative capitalize font-medium z-[2]">
                        Consultation
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <div className="w-6 h-1.5 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-1.5 h-1.5 z-[2]" />
                          <div className="absolute top-[0px] left-[9px] rounded-[50%] bg-black w-1.5 h-1.5 z-[2]" />
                          <div className="absolute top-[0px] left-[18px] rounded-[50%] bg-black w-1.5 h-1.5 z-[2]" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-0 text-5xl text-white">
                      <div className="flex-1 flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[30px_0px]">
                          <b className="relative capitalize z-[2] mq450:text-lgi">
                            82/100
                          </b>
                          <div className="rounded-3xs bg-darkslategray-100 flex flex-row items-center justify-start py-1.5 px-4 gap-[0px_15px] z-[2] text-base">
                            <div className="h-[34px] w-[101px] relative rounded-3xs bg-darkslategray-100 hidden" />
                            <b className="relative capitalize z-[3]">82%</b>
                            <img
                              className="h-2.5 w-5 relative z-[3]"
                              alt=""
                              src="/icon-13.svg"
                            />
                          </div>
                        </div>
                        <div className="h-20 w-20 relative rounded-[50%] bg-cornflowerblue-100 z-[3]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default DoctorsDashboard;
