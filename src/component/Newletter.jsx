import React from "react";

const Newletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl bg-neutralSilver py-16 mx-auto">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className=" lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6  leading-snug">
            Pellentesque suscipit fringilla libero eu.{" "}
          </h2>
          <div className="flex justify-center">
            <button className="btn-primary">
              Get a Demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                className="inline-block ml-2  hover:text-neutral-700"
              >
                <path
                  d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
