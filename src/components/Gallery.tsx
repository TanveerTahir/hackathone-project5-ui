import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="w-full h-[1652px] pt-100">
        <div className="flex justify-center items-center w-[692px] h-[102px]">
          <div className="pb-80 pt-80 text-center">
            <h1 className="text-topnav text-2xl font-bold">EDITORS PICK </h1>
            <p className="text-secnavitemcol">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {/* Gallery section */}
          <div className="flex gap-4">
            {/* 1st image */}
            <p className="absolute bg-white font-bold text-logocol py-1 px-16 text-end place-content-end place-self-end ml-10 mb-10">
              MEN
            </p>
            <Image
              src={"/images/filter.png"}
              alt="filter"
              width={510}
              height={500}
            />

            {/* 2nd image */}

            <div className="relative">
              <p className="absolute bg-white font-bold text-logocol py-1 px-16 text-end mt-96 ml-1">
                WOMEN
              </p>

              <Image
                src={"/images/filter (1).png"}
                alt="filter2"
                width={240}
                height={410}
              />
            </div>

            {/* 3rd image */}

            <div className="relative">
              <p className="absolute bg-white font-bold text-logocol py-1 px-10 place-self-end  ml-1 mt-40">
                ACCESSORIES
              </p>

              <Image
                className="flexbox"
                src={"/images/filter (2).png"}
                alt="filter2"
                width={240}
                height={242}
              />

              {/* 4th image */}

              <div className="relative">
                <p className="absolute bg-white font-bold text-logocol py-1 px-10  ml-3 mt-44">
                  KIDS
                </p>
                <Image
                  className="flex mt-5"
                  src={"/images/media bg-cover.png"}
                  alt=" filter3"
                  width={240}
                  height={242}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
