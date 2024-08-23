import React from "react";



const About = () => {
  return (
    <div>
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
        <div>
          <img src="assets/About.png" alt="" />
        </div>
        <div className="md:w-3/5 mx-auto pl-3">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 ">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="md-w-3/4 text-sm text-neutralDGrey mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>

      {/* companey stats */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
        <div className="flex flex-col justify-between items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 w-full">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>{" "}
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="assets/Members.png" alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="assets/Clubs.png" alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    46,328
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="assets/Event Bookings.png" alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="assets/Payments.png" alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
