import * as React from "react";

function UserProfile() {
  return (
    <div className="flex flex-col items-center bg-slate-50">
      <div className="flex flex-col justify-center self-stretch px-16 py-5 w-full text-base font-medium text-white capitalize bg-blue-600 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-0 px-px mx-8 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-0 py-1.5 my-auto text-3xl font-bold whitespace-nowrap">
            <div className="my-auto bg-white rounded-full h-[19px] w-[19px]" />
            <div className="grow">DIGITRUST</div>
          </div>
          <div className="flex flex-1 justify-center items-center px-16 py-3.5 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="grow">Marketplace</div>
              <div>My Portfolio</div>
              <div>Manage</div>
              <div className="grow whitespace-nowrap">About Us</div>
            </div>
          </div>
          <div className="flex gap-2.5 justify-between px-6 py-4 text-blue-600 whitespace-nowrap bg-white rounded-xl max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/303f8e09e34cfe4d0b44e66e7376abf65639de5323ebb1cc39738fc5b61d0559?apiKey=677d41c069174f9b9b54f73df104e4f5&"
              className="w-5 aspect-square"
            />
            <div className="grow">Connect Wallet</div>
          </div>
        </div>
      </div>
      <div className="py-12 pr-20 pl-9 mt-14 max-w-full bg-white border border-solid border-slate-300 rounded-[30px] shadow-[0px_10px_60px_rgba(225.83437621593475,236.193745136261,248.62500607967377,0.5)] w-[1261px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7df9c979d002aced1d0c01b3119d48f1924c62b964ade2b8990cfc7007c3bb46?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="max-w-full aspect-square w-[140px]"
              />
              <div className="flex flex-col flex-1 self-start mt-2.5">
                <div className="text-xl font-medium text-gray-800">
                  Passandra
                </div>
                <div className="flex gap-1 justify-between mt-6 text-base text-gray-800 whitespace-nowrap">
                  <div className="grow my-auto">0x00....3945</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ad00107de6b63de334ab26efb06f8ab7a349bafa11d3a218f83ab83b676c1c?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb80b5aea22fa98c747aca1c6e71368927dd6a7b76cacd4490c5b51ef002d72c?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-3.5 justify-between pr-8 mt-3 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08eaedaa0af6705e0ce84a129cb6e7667d6b9588eaa9707fd7d09294b4b01604?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee7a663ecd43bf940f9abeab3321ce160c2f9b0ed71e27c7a2b55df5a6322588?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b661ee9928e7b95662c967ef4a96f858ee76c107c47f7c52c9a8d1cf8fb178?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-5 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3955f318c162d3def7807816c9017eebc1d494df41e1a23ee56e8f6f97b3119a?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-5 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between text-gray-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="w-0.5 bg-slate-300 h-[139px]" />
              <div className="flex flex-col flex-1 self-start mt-2">
                <div className="text-xl font-medium">PROFILE DESCRIPTION</div>
                <div className="mt-6 text-base whitespace-nowrap">
                  This address has not written any information yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-9 w-full max-w-[1260px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center whitespace-nowrap max-md:mt-7">
              <div className="flex flex-col items-start py-9 pr-20 pl-6 w-full bg-white rounded-2xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:px-5">
                <div className="flex gap-3 px-0.5 text-base font-medium tracking-tight leading-7 text-slate-400">
                  <div className="grow self-start mt-2.5">HOLDINGS</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2893dea75bfb2d1bf7ec4a2fe0aaf5263f0e949ef5c833301a411ec5fde107a7?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="mt-6 text-4xl font-semibold text-gray-800">
                  $ 2 120
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-7">
              <div className="flex flex-col items-start py-10 pr-20 pl-6 w-full bg-white rounded-2xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:px-5">
                <div className="flex gap-3 text-base font-medium tracking-tight leading-7 whitespace-nowrap text-slate-400">
                  <div className="grow self-start mt-2.5">TOTAL MANAGED</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2893dea75bfb2d1bf7ec4a2fe0aaf5263f0e949ef5c833301a411ec5fde107a7?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="mt-7 text-4xl font-semibold text-gray-800">
                  5 000
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center whitespace-nowrap max-md:mt-7">
              <div className="flex flex-col items-start py-10 pr-20 pl-6 w-full bg-white rounded-2xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:px-5">
                <div className="flex gap-3 text-base font-medium tracking-tight leading-7 text-slate-400">
                  <div className="grow self-start mt-2.5">VOTING POWER</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2893dea75bfb2d1bf7ec4a2fe0aaf5263f0e949ef5c833301a411ec5fde107a7?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="mt-7 text-4xl font-semibold text-gray-800">
                  15 000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-20 mt-16 text-base font-medium tracking-tight leading-6 whitespace-nowrap border-b border-solid bg-white bg-opacity-0 border-b-[color:var(--Grey-30,#E0E9F4)] text-slate-400 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2.5 justify-between pt-1 pb-3 bg-white bg-opacity-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/101a53e4780f96294f8bb3dc6742da4531cadfda5e727cbf3f010522b24a548d?apiKey=677d41c069174f9b9b54f73df104e4f5&"
            className="self-start aspect-square w-[22px]"
          />
          <div>Portfolio</div>
        </div>
        <div className="flex gap-2.5 justify-between pt-1 pb-3 font-semibold text-blue-600 border-b-2 border-solid bg-white bg-opacity-0 border-b-[color:var(--Blue-600,#2563EB)]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a04300e8be3ee30f1128277afed23f453a6be0e638698acecfa61d52bc781eee?apiKey=677d41c069174f9b9b54f73df104e4f5&"
            className="self-start aspect-square w-[22px]"
          />
          <div className="grow">Managed Pools</div>
        </div>
        <div className="flex gap-2.5 justify-between pt-1 pb-3 bg-white bg-opacity-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb219f5e707dfaffc94e12c0f95f160a6f2f841ee27f3a1a38103d3bcc3a4d4a?apiKey=677d41c069174f9b9b54f73df104e4f5&"
            className="self-start aspect-square w-[22px]"
          />
          <div className="grow">Governance Data</div>
        </div>
      </div>
      <div className="px-5 mt-11 w-full max-w-[1261px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3 pt-5 pb-12 mx-auto w-full whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:mt-10">
              <div className="flex gap-5 justify-between px-0.5 text-xl font-semibold leading-7 text-right text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11e1f58ccf8e4be1d5cb2e0918b28194a4b84ca4ece81ae2b9c31e97eac0a9fb?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                  className="self-start aspect-square w-[50px]"
                />
                <div className="pt-4">$30.21</div>
              </div>
              <div className="shrink-0 mt-2 h-px bg-gray-800" />
              <div className="mt-8 text-xs leading-6 text-slate-400">
                By WISEVEST
              </div>
              <div className="flex gap-3.5 justify-between pr-1.5 mt-2 font-medium">
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-gray-800">$2 704</div>
                  <div className="text-xs leading-5 text-slate-400">TVL</div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-emerald-500">24,32%</div>
                  <div className="text-xs leading-5 text-slate-400">
                    MONTHLY
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-red-600">-1,78%</div>
                  <div className="text-xs leading-5 text-slate-400">24H</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/928467d97bc41cca3317eeaaa1b87df88f4ae095224a5caefd15dfb971a8e7eb?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="self-center mt-2.5 aspect-[3.85] w-[258px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3 pt-5 pb-12 mx-auto w-full whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:mt-10">
              <div className="flex gap-5 justify-between px-0.5 text-xl font-semibold leading-7 text-right text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3b0038fa50bd3e4db497e20c7672abb50404b580faf69752435d1f4d322c7c?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                  className="self-start aspect-square w-[50px]"
                />
                <div className="pt-4">$30.21</div>
              </div>
              <div className="shrink-0 mt-2 h-px bg-gray-800" />
              <div className="mt-8 text-xs leading-6 text-slate-400">
                By WISEVEST
              </div>
              <div className="flex gap-3.5 justify-between pr-1.5 mt-2 font-medium">
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-gray-800">$2 704</div>
                  <div className="text-xs leading-5 text-slate-400">TVL</div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-emerald-500">24,32%</div>
                  <div className="text-xs leading-5 text-slate-400">
                    MONTHLY
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-red-600">-1,78%</div>
                  <div className="text-xs leading-5 text-slate-400">24H</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9767695705a5489e41adb05a0950ff8dc26ac5b35f61df113832e2b0fd7df8ef?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="self-center mt-2.5 aspect-[3.85] w-[258px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3 pt-5 pb-12 mx-auto w-full whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:mt-10">
              <div className="flex gap-5 justify-between px-0.5 text-xl font-semibold leading-7 text-right text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b99bcf44ea6f688cc47480693ba4fead556ac788a4b643ee5cb08f574b33ca2?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                  className="self-start aspect-square w-[50px]"
                />
                <div className="pt-4">$36</div>
              </div>
              <div className="shrink-0 mt-2 h-px bg-gray-800" />
              <div className="mt-8 text-xs leading-6 text-slate-400">
                By WISEVEST
              </div>
              <div className="flex gap-3.5 justify-between pr-1.5 mt-2 font-medium">
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-gray-800">$2 704</div>
                  <div className="text-xs leading-5 text-slate-400">TVL</div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-emerald-500">24,32%</div>
                  <div className="text-xs leading-5 text-slate-400">
                    MONTHLY
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-red-600">-1,78%</div>
                  <div className="text-xs leading-5 text-slate-400">24H</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20eb23e3b24d7bbe46018948a7cf66ed036e9982f0d4b244b18791de8e92d6f2?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="self-center mt-2.5 aspect-[3.85] w-[258px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3 pt-5 pb-12 mx-auto w-full whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-[color:var(--Grey-45,#C3D4E9)] max-md:mt-10">
              <div className="flex gap-5 justify-between px-0.5 text-xl font-semibold leading-7 text-right text-gray-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de3944f69175c07665a905a9554e9ec137a2127af4b410393647a5812ea19fce?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                  className="self-start aspect-square w-[50px]"
                />
                <div className="pt-4">$30.21</div>
              </div>
              <div className="shrink-0 mt-2 h-px bg-gray-800" />
              <div className="mt-8 text-xs leading-6 text-slate-400">
                By WISEVEST
              </div>
              <div className="flex gap-3.5 justify-between pr-1.5 mt-2 font-medium">
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-gray-800">$2 704</div>
                  <div className="text-xs leading-5 text-slate-400">TVL</div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-emerald-500">24,32%</div>
                  <div className="text-xs leading-5 text-slate-400">
                    MONTHLY
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <div className="text-xl text-red-600">-1,78%</div>
                  <div className="text-xs leading-5 text-slate-400">24H</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a1dc866ea0e4637a80632d8b894773187309f8b309768d802d820dae1660b5a?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="self-center mt-2.5 aspect-[3.85] w-[258px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-12 mt-56 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-5 mb-4 w-full max-w-6xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-px justify-between text-4xl font-bold text-black capitalize whitespace-nowrap">
              <div className="my-auto bg-blue-600 rounded-full h-[25px] w-[25px]" />
              <div className="grow">dIGITRUST</div>
            </div>
            <div className="flex gap-5 justify-between self-center mt-16 max-w-full w-[178px] max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af65f12520a713cfe5d21ba769c9dfc46f86922ef76e36924b8a1456a526d665?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="flex-1 shrink-0 w-full aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c26693b863916320284a03f3be2f35eed510caaad40a81f9f21c6fe2a1141da?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="flex-1 shrink-0 w-full aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/18bce3d500b5acf431a3b87ff52a5f5f75264fa6f6c94ced2ae55ebd73c7145b?apiKey=677d41c069174f9b9b54f73df104e4f5&"
                className="flex-1 shrink-0 w-full aspect-square"
              />
            </div>
            <div className="justify-center px-11 py-4 mt-16 text-2xl font-medium text-white capitalize whitespace-nowrap bg-blue-600 rounded-xl max-md:px-5 max-md:mt-10">
              Contact Us
            </div>
          </div>
          <div className="my-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base font-medium text-black max-md:mt-10">
                  <div>Work With Us</div>
                  <div className="mt-12 whitespace-nowrap max-md:mt-10">
                    Advertise With Us
                  </div>
                  <div className="mt-12 max-md:mt-10">Support Us</div>
                  <div className="mt-12 whitespace-nowrap max-md:mt-10">
                    Business Advices
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base font-medium text-black max-md:mt-10">
                  <div className="whitespace-nowrap">Private Coaching</div>
                  <div className="mt-12 max-md:mt-10">Our Work</div>
                  <div className="mt-12 whitespace-nowrap max-md:mt-10">
                    Our Commitment
                  </div>
                  <div className="mt-12 max-md:mt-10">Our Team</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base font-medium text-black max-md:mt-10">
                  <div>About Us</div>
                  <div className="mt-12 max-md:mt-10">FAQs</div>
                  <div className="mt-12 whitespace-nowrap max-md:mt-10">
                    Report a Bug
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-stretch px-20 py-12 w-full text-sm font-medium leading-5 text-white bg-blue-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto">© 2023 DIGITRUST - All Rights Reserved</div>
        <div className="flex gap-5 justify-between">
          <div>Terms of use </div>
          <div>Privacy policy </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
