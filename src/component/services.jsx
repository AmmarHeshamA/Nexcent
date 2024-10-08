import React from "react";


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "assets/Membership Organisations.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "assets/National Associations.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image:"assets/Clubs And Groups.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="assets/Logo.png" alt="" />
          <img src="assets/Logo (1).png" alt="" />
          <img src="assets/Logo (2).png" alt="" />
          <img src="assets/Logo (3).png" alt="" />
          <img src="assets/Logo (4).png" alt="" />
          <img src="assets/Logo (5).png" alt="" />
          <img src="assets/Logo (6).png" alt="" />
        </div>

        <h2
          className="text-4xl text-neutralDGrey font-semibold mb-2 leading-snug
        mt-20 "
        >
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-neutralDGrey mt-9">Who is Nextcent suitable for?</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((seriv) => (
          <div
            key={seriv.id}
            className="px-4 py-8 text-center md:w-[300px]
            mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5
            hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex-col flex items-center justify-center
            h-full"
          >
            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
              <img className="-ml-5" src={seriv.image} alt="" />
            </div>
            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {seriv.title}
            </h4>
            <p className="text-sm text-neutralDGrey">{seriv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
