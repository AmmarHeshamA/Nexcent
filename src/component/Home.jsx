import React from "react";


import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen cursor-auto">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12">
            <div>
              <img src="assets/banner.png" alt="" />
            </div>
            <div>
              <h1
                className="text-5xl font-bold mb-4 text-neutralGrey
               leading-snug"
              >
                Lessons and insights
                <br />
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12">
            <div>
              <img src="assets/banner.png" alt="" />
            </div>
            <div>
              <h1
                className="text-5xl font-bold mb-4 text-neutralGrey
                leading-snug "
              >
                Learn Web Devolpment
                <br />
                <span className="text-brandPrimary leading-snug">
                  in 8 month
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12">
            <div>
              <img src="assets/banner.png" alt="" />
            </div>
            <div>
              <h1
                className="text-5xl font-bold mb-4 text-neutralGrey
               leading-snug"
              >
                Learn Profite Money
                <br />
                <span className="text-brandPrimary leading-snug">
                  in 4 month
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
