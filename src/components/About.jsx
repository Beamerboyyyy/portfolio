import React from "react";

export default function About() {
   const cv=null;
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Worked", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-500">My Introduction</p>
        <div className="flex md:flex-row flex-col md:gap-6 gap-12 px-10 max-w-6xl mx-auto ">
          
          <div className="m-2 order-2 sm:order-1">
            <div className="text-gray-300 my-3 md:mt-20 mt-0">
              <p className="text-justify leading-7 md:w-11/12 w-full">
                Skilled in Data mining, Exploratory Data analysis, Web
                Development (MERN stack) and Machine Learning. Recently selected
                as Machine Learning Engineer in a Canadian organization which
                works on Robotics known as Crosswing Inc. Currently, I am an
                undergraduate of Computer information and system Engineering
                (batch 2019) at NEDUET and final year is in progress. Constantly
                researching on Robot grasping and manipulation.
              </p>
              <div className="flex mt-10 justify-center items-center md:gap-7 md:w-11/12 w-full">
                {info.map((content) => (
                  <div key={content.text} className="">
                    <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-sm">{content.text}</span>
                  </div>
                ))}
              </div>
              <a href={cv} download className="flex justify-center items-center md:w-11/12 w-full">
                <button className="btn-primary mt-5 ">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 order-1 md:mt-0 mt-6 flex justify-center items-center ">
                <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                    <img src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/174175561_898162140964889_8793137637291392677_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEjOzqQ2Hh1ZROU-9TUYBSfep4k7S_kjD96niTtL-SMP4TCkeCvffctamRgFf02b3KcBUfWoqtaCjzCaSDnDsl7&_nc_ohc=a8HuXd7aNmgAX-2YYqv&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBtfSvAEh8HiyWHnA6ktIx4o5ioOdgohDJoJTpdEEAOEQ&oe=63F24926" alt="" className="w-full object-cover rounded-full "/>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
